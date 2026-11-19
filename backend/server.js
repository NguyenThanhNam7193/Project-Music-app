const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

// --- CẤU HÌNH ĐƯỜNG DẪN STATIC ---
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/audio', express.static(path.join(__dirname, '../audio')));

// BẢO MẬT: Chặn truy cập file database từ trình duyệt
app.use((req, res, next) => {
    const ext = path.extname(req.path).toLowerCase();
    if (['.db', '.env', '.sqlite', '.sqlite3'].includes(ext)) {
        return res.status(403).send('Forbidden');
    }
    next();
});

// ==================== CẤU HÌNH GỬI EMAIL ====================
const EMAIL_USER = "hoaia1356@gmail.com";
const EMAIL_PASS = "kxvo vepl piua pvgf";
const JWT_SECRET = "music_app_secret_key_super_safe";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: EMAIL_USER, pass: EMAIL_PASS }
});

// ==================== KẾT NỐI SQLITE ====================
const dbFile = path.join(__dirname, '../database/music_app.db'); 
const db = new sqlite3.Database(dbFile, (err) => {
    if (err) return console.error("Lỗi kết nối SQLite: ", err.message);
    console.log("Đã kết nối SQLite thành công!");

    db.serialize(() => {
        // Bảng Users (Thêm is_verified, otp_code, role)
        db.run(`CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            is_premium INTEGER DEFAULT 0,
            is_verified INTEGER DEFAULT 0,
            otp_code TEXT,
            role TEXT DEFAULT 'user',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) return console.error(err);
            // Tạo sẵn tài khoản Admin
            db.get(`SELECT * FROM Users WHERE role = 'admin'`, [], (e, admin) => {
                if (!admin) {
                    const adminPass = bcrypt.hashSync("Admin@123", 10);
                    db.run(`INSERT INTO Users (username, email, password, is_verified, role) VALUES ('admin', 'admin@musicapp.com', ?, 1, 'admin')`, [adminPass]);
                    console.log("Đã tạo tài khoản Admin: admin / Admin@123");
                }
            });
        });

        // Bảng Songs (Thêm cột mood)
        db.run(`CREATE TABLE IF NOT EXISTS Songs (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            artist TEXT NOT NULL,
            desc TEXT,
            src TEXT NOT NULL,
            cover TEXT,
            plays INTEGER DEFAULT 0,
            date TEXT,
            mood TEXT DEFAULT 'chill'
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS Playlists (id TEXT PRIMARY KEY, username TEXT NOT NULL, name TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
        db.run(`CREATE TABLE IF NOT EXISTS Listening_History (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, song_id INTEGER NOT NULL, song_title TEXT, artist TEXT, listened_at DATETIME DEFAULT CURRENT_TIMESTAMP)`);
    });
});

// ==================== MIDDLEWARE XÁC THỰC ====================
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ success: false, message: "Chưa đăng nhập!" });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ success: false, message: "Token không hợp lệ!" });
        req.user = decoded;
        next();
    });
}

function verifyAdmin(req, res, next) {
    verifyToken(req, res, () => {
        if (req.user.role !== 'admin') return res.status(403).json({ success: false, message: "Không có quyền Admin!" });
        next();
    });
}

// ==================== API ĐĂNG KÝ & GỬI OTP ====================
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) return res.status(400).json({ success: false, message: "Vui lòng nhập đủ thông tin!" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        db.get(`SELECT * FROM Users WHERE username = ? OR email = ?`, [username, email], async (err, row) => {
            if (err) return res.status(500).json({ success: false, message: "Lỗi DB!" });
            if (row) return res.status(400).json({ success: false, message: "Tài khoản hoặc Email đã tồn tại!" });

            db.run(`INSERT INTO Users (username, email, password, otp_code) VALUES (?, ?, ?, ?)`, [username, email, hashedPassword, otp], async (insertErr) => {
                if (insertErr) return res.status(500).json({ success: false, message: "Không thể đăng ký!" });

                try {
                    await transporter.sendMail({
                        from: `"Music App" <${EMAIL_USER}>`,
                        to: email,
                        subject: "Mã xác thực tài khoản Music App",
                        html: `<h3>Xin chào ${username},</h3><p>Mã OTP của bạn là: <b style="font-size:24px; color:blue;">${otp}</b></p>`
                    });
                    res.status(201).json({ success: true, message: "Đã gửi mã OTP qua email!" });
                } catch (mailErr) {
                    console.log(`[TESTING] OTP của ${username} là: ${otp}`);
                    res.status(201).json({ success: true, message: "Đã tạo OTP (Xem console server)!" });
                }
            });
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Lỗi server!" });
    }
});

// ==================== API XÁC THỰC OTP ====================
app.post('/api/verify-email', (req, res) => {
    const { email, otp } = req.body;
    db.get(`SELECT * FROM Users WHERE email = ? AND otp_code = ?`, [email, otp], (err, user) => {
        if (err) return res.status(500).json({ success: false, message: "Lỗi DB!" });
        if (!user) return res.status(400).json({ success: false, message: "Mã OTP không đúng!" });

        db.run(`UPDATE Users SET is_verified = 1, otp_code = NULL WHERE email = ?`, [email], (updateErr) => {
            if (updateErr) return res.status(500).json({ success: false, message: "Lỗi xác thực!" });
            res.json({ success: true, message: "Xác thực email thành công!" });
        });
    });
});

// ==================== API ĐĂNG NHẬP ====================
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ success: false, message: "Nhập đủ thông tin!" });

    db.get(`SELECT * FROM Users WHERE username = ?`, [username], async (err, user) => {
        if (err) return res.status(500).json({ success: false, message: "Lỗi DB!" });
        if (!user) return res.status(400).json({ success: false, message: "Tài khoản không tồn tại!" });
        
        if (user.is_verified === 0 && user.role !== 'admin') {
            return res.status(403).json({ success: false, message: "Tài khoản chưa xác thực email!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ success: false, message: "Sai mật khẩu!" });

        const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '1d' });

        res.json({
            success: true,
            username: user.username,
            email: user.email,
            is_premium: user.is_premium === 1,
            role: user.role,
            token: token
        });
    });
});

// ==================== API BÀI HÁT (Phân trang, Tìm kiếm, Tâm trạng) ====================
app.get('/api/songs', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    const search = req.query.search || '';
    const mood = req.query.mood || '';

    let query = `SELECT * FROM Songs WHERE 1=1`;
    let params = [];

    if (search) {
        query += ` AND (title LIKE ? OR artist LIKE ?)`;
        params.push(`%${search}%`, `%${search}%`);
    }
    if (mood) {
        query += ` AND mood = ?`;
        params.push(mood);
    }

    const countQuery = query.replace('SELECT *', 'SELECT COUNT(*) as total');
    
    db.get(countQuery, params, (err, row) => {
        if (err) return res.status(500).json({ success: false });
        const total = row.total;
        const totalPages = Math.ceil(total / limit);

        query += ` LIMIT ? OFFSET ?`;
        params.push(limit, offset);

        db.all(query, params, (err, songs) => {
            if (err) return res.status(500).json({ success: false });
            res.json({ success: true, songs, pagination: { total, page, limit, totalPages } });
        });
    });
});

app.post('/api/songs/sync', (req, res) => {
    const { songs } = req.body;
    if (!songs || !Array.isArray(songs)) return res.status(400).json({ success: false });

    db.get(`SELECT COUNT(*) AS count FROM Songs`, [], (err, row) => {
        if (err) return res.status(500).json({ success: false });
        if (row && row.count === 0) {
            const stmt = db.prepare(`INSERT OR IGNORE INTO Songs (id, title, artist, desc, src, cover, plays, date, mood) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);
            songs.forEach((s, index) => {
                let mood = "chill";
                if (s.title.toLowerCase().includes("buồn") || s.title.toLowerCase().includes("đau")) mood = "buon";
                else if (index % 3 === 0) mood = "vui";
                else if (index % 3 === 1) mood = "buon";
                
                stmt.run(s.id, s.title, s.artist, s.desc || s.artist, s.src, s.cover, s.plays || 0, s.date || '2024-01-01', mood);
            });
            stmt.finalize();
        }
        res.json({ success: true });
    });
});

// ==================== API GIẢ LẬP THANH TOÁN SEEPAY ====================
app.post('/api/payment/seepay', (req, res) => {
    const { username, packageMonths } = req.body;
    // Giả lập tạo link thanh toán Seepay
    const mockPaymentUrl = `https://seepay.vn/checkout?user=${username}&months=${packageMonths}&token=demo123`;
    
    // Trong thực tế, Frontend sẽ redirect user sang mockPaymentUrl
    // Sau khi user thanh toán, Seepay sẽ gọi Webhook về server của bạn để update DB.
    // Ở đây mình giả lập trả về URL để frontend hiển thị.
    res.json({ success: true, paymentUrl: mockPaymentUrl, message: "Chuyển hướng đến Seepay..." });
});

// API Webhook nhận kết quả từ Seepay (Giả lập)
app.post('/api/payment/seepay-callback', (req, res) => {
    const { username } = req.body;
    db.run(`UPDATE Users SET is_premium = 1 WHERE username = ?`, [username], function(err) {
        if (!err) res.json({ success: true });
    });
});

// ==================== API KHÁC & ADMIN ====================
app.get('/api/user-status/:username', (req, res) => {
    db.get(`SELECT is_premium FROM Users WHERE username = ?`, [req.params.username], (err, row) => {
        if (err || !row) return res.status(404).json({ success: false });
        res.json({ success: true, is_premium: row.is_premium === 1 });
    });
});

app.post('/api/upgrade-premium', (req, res) => {
    db.run(`UPDATE Users SET is_premium = 1 WHERE username = ?`, [req.body.username], function(err) {
        if (err) return res.status(500).json({ success: false });
        res.json({ success: true });
    });
});

app.post('/api/history/add', (req, res) => {
    const { username, song } = req.body;
    if (!username || !song) return res.status(400).json({ success: false });
    db.run(`INSERT INTO Listening_History (username, song_id, song_title, artist) VALUES (?, ?, ?, ?)`, [username, song.id, song.title, song.artist]);
    db.run(`UPDATE Songs SET plays = plays + 1 WHERE id = ?`, [song.id]);
    res.json({ success: true });
});

app.get('/api/admin/users', verifyAdmin, (req, res) => {
    db.all(`SELECT id, username, email, is_premium, is_verified, role, created_at FROM Users ORDER BY id DESC`, [], (err, rows) => {
        if (err) return res.status(500).json({ success: false });
        res.json({ success: true, users: rows });
    });
});

app.post('/api/admin/update-user-status', verifyAdmin, (req, res) => {
    const { username, is_premium } = req.body;
    db.run(`UPDATE Users SET is_premium = ? WHERE username = ?`, [is_premium, username], function (err) {
        if (err) return res.status(500).json({ success: false });
        res.json({ success: true, message: "Cập nhật thành công!" });
    });
});

app.listen(3000, () => {
    console.log("Server đang chạy tại http://localhost:3000");
});