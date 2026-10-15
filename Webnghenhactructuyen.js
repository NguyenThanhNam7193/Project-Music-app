// server.js - Backend cho Mussic Center
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Thứa mục chứa file giao diện frontend

// Cấu hình kết nối SQL Server của bạn
const dbConfig = {
    user: 'your_username',        // Tên đăng nhập SQL Server
    password: 'your_password',    // Mật khẩu SQL Server
    server: 'localhost',          // Địa chỉ server (ví dụ: localhost hoặc IP)
    database: 'MusicStreamingDB', // Tên database đã tạo
    options: {
        encrypt: false,           // Đặt true nếu dùng Azure
        trustServerCertificate: true
    }
};

// Kết nối SQL Server
sql.connect(dbConfig).then(pool => {
    if (pool.connected) {
        console.log("Kết nối thành công tới SQL Server!");
    }
}).catch(err => console.log("Lỗi kết nối CSDL: ", err));

// --- API 1: ĐĂNG KÝ TÀI KHOẢN ---
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password, fullName } = req.body;
        let pool = await sql.connect(dbConfig);
        
        // Kiểm tra email tồn tại
        let checkUser = await pool.request()
            .input('Email', sql.NVarChar, email)
            .query('SELECT * FROM Users WHERE Email = @Email');
        
        if (checkUser.recordset.length > 0) {
            return res.status(400).json({ success: false, message: 'Email đã được đăng ký!' });
        }

        // Thêm user mới vào SQL Server
        await pool.request()
            .input('Username', sql.NVarChar, username || email.split('@')[0])
            .input('Email', sql.NVarChar, email)
            .input('PasswordHash', sql.NVarChar, password) // Lưu ý: Thực tế nên mã hóa password bằng bcrypt
            .input('FullName', sql.NVarChar, fullName)
            .query('INSERT INTO Users (Username, Email, PasswordHash, FullName) VALUES (@Username, @Email, @PasswordHash, @FullName)');

        res.json({ success: true, message: 'Đăng ký thành công!' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// --- API 2: ĐĂNG NHẬP ---
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        let pool = await sql.connect(dbConfig);
        
        let result = await pool.request()
            .input('Email', sql.NVarChar, email)
            .input('PasswordHash', sql.NVarChar, password)
            .query('SELECT UserID, Username, Email, FullName, IsPremium FROM Users WHERE Email = @Email AND PasswordHash = @PasswordHash');

        if (result.recordset.length === 0) {
            return res.status(401).json({ success: false, message: 'Email hoặc mật khẩu không chính xác!' });
        }

        res.json({ success: true, user: result.recordset[0] });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// --- API 3: LẤY DANH SÁCH BÀI HÁT & TÌM KIẾM (Theo tên bài hoặc nghệ sĩ) ---
app.get('/api/songs', async (req, res) => {
    try {
        const search = req.query.search || '';
        let pool = await sql.connect(dbConfig);
        
        let query = `
            SELECT s.SongID as id, s.Title as title, a.ArtistName as artist, 
                   al.Title as album, s.Duration as durationSec, 
                   s.FileAudioURL as audioUrl, s.PlayCount as playCount,
                   COALESCE(al.CoverImageURL, 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=300&q=80') as cover
            FROM Songs s
            JOIN Artists a ON s.ArtistID = a.ArtistID
            LEFT JOIN Albums al ON s.AlbumID = al.AlbumID
        `;

        if (search) {
            query += ` WHERE s.Title LIKE @Search OR a.ArtistName LIKE @Search`;
        }

        let request = pool.request();
        if (search) {
            request.input('Search', sql.NVarChar, `%${search}%`);
        }

        let result = await request.query(query);
        
        // Định dạng lại thời lượng giây thành phút:giây hiển thị
        let formattedSongs = result.recordset.map(song => {
            let mins = Math.floor(song.durationSec / 60);
            let secs = song.durationSec % 60;
            return {
                ...song,
                duration: `${mins}:${secs < 10 ? '0' : ''}${secs}`
            };
        });

        res.json({ success: true, songs: formattedSongs });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// --- API 4: QUẢN LÝ BÀI HÁT YÊU THÍCH (THẢ TIM) ---
app.post('/api/liked-songs', async (req, res) => {
    try {
        const { userId, songId } = req.body;
        let pool = await sql.connect(dbConfig);

        // Kiểm tra xem đã thích chưa
        let check = await pool.request()
            .input('UserID', sql.Int, userId)
            .input('SongID', sql.Int, songId)
            .query('SELECT * FROM LikedSongs WHERE UserID = @UserID AND SongID = @SongID');

        if (check.recordset.length > 0) {
            // Nếu đã thích rồi thì bỏ thích (Unlike)
            await pool.request()
                .input('UserID', sql.Int, userId)
                .input('SongID', sql.Int, songId)
                .query('DELETE FROM LikedSongs WHERE UserID = @UserID AND SongID = @SongID');
            return res.json({ success: true, action: 'removed' });
        } else {
            // Nếu chưa thì thêm vào yêu thích (Like)
            await pool.request()
                .input('UserID', sql.Int, userId)
                .input('SongID', sql.Int, songId)
                .query('INSERT INTO LikedSongs (UserID, SongID) VALUES (@UserID, @SongID)');
            return res.json({ success: true, action: 'added' });
        }
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// Chạy Server ở cổng 3000
app.listen(3000, () => {
    console.log('Mussic Center Backend đang chạy tại http://localhost:3000');
});
