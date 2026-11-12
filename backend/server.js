const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));

// Kết nối SQLite và tự động tạo/cập nhật bảng Users với cột is_premium (PB10)
const dbFile = path.join(__dirname, 'music_app.db');
const db = new sqlite3.Database(dbFile, (err) => {
    if (err) {
        console.error("Lỗi kết nối SQLite: ", err.message);
    } else {
        console.log("Đã kết nối SQLite thành công!");
        
        db.run(`CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            is_premium INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (createErr) => {
            if (createErr) {
                console.error("Lỗi tạo bảng Users: ", createErr.message);
            } else {
                // Tự động kiểm tra và thêm cột is_premium nếu database cũ chưa có
                db.all(`PRAGMA table_info(Users)`, [], (pragmaErr, rows) => {
                    if (!pragmaErr && rows) {
                        const hasPremiumCol = rows.some(col => col.name === 'is_premium');
                        if (!hasPremiumCol) {
                            db.run(`ALTER TABLE Users ADD COLUMN is_premium INTEGER DEFAULT 0`, (alterErr) => {
                                if (!alterErr) console.log("Đã tự động bổ sung cột is_premium vào bảng Users.");
                            });
                        }
                    }
                });
                console.log("Đã sẵn sàng bảng Users trong SQLite.");
            }
        });

        // --- BỔ SUNG CÁC BẢNG DATABASE MỚI (SONGS, PLAYLISTS, PLAYLIST_SONGS, LISTENING_HISTORY) ---
        db.run(`CREATE TABLE IF NOT EXISTS Songs (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            artist TEXT NOT NULL,
            desc TEXT,
            src TEXT NOT NULL,
            cover TEXT,
            plays INTEGER DEFAULT 0,
            date TEXT
        )`, (err) => {
            if (!err) console.log("Đã sẵn sàng bảng Songs trong SQLite.");
        });

        db.run(`CREATE TABLE IF NOT EXISTS Playlists (
            id TEXT PRIMARY KEY,
            username TEXT NOT NULL,
            name TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (!err) console.log("Đã sẵn sàng bảng Playlists trong SQLite.");
        });

        db.run(`CREATE TABLE IF NOT EXISTS Playlist_Songs (
            playlist_id TEXT NOT NULL,
            song_id INTEGER NOT NULL,
            added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (playlist_id, song_id)
        )`, (err) => {
            if (!err) console.log("Đã sẵn sàng bảng Playlist_Songs trong SQLite.");
        });

        db.run(`CREATE TABLE IF NOT EXISTS Listening_History (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            song_id INTEGER NOT NULL,
            song_title TEXT,
            artist TEXT,
            listened_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (!err) console.log("Đã sẵn sàng bảng Listening_History trong SQLite.");
        });
        // --- KẾT THÚC KHỞI TẠO CÁC BẢNG MỚI ---
    }
});

// API Đăng ký tài khoản
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: "Vui lòng nhập đầy đủ thông tin!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        db.get(`SELECT * FROM Users WHERE username = ? OR email = ?`, [username, email], (err, row) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: "Lỗi server database!" });
            }
            if (row) {
                return res.status(400).json({ success: false, message: "Tài khoản hoặc Email đã tồn tại!" });
            }

            db.run(`INSERT INTO Users (username, email, password, is_premium) VALUES (?, ?, ?, 0)`, 
                [username, email, hashedPassword], 
                (insertErr) => {
                    if (insertErr) {
                        console.error(insertErr);
                        return res.status(500).json({ success: false, message: "Không thể đăng ký tài khoản!" });
                    }
                    res.status(201).json({ success: true, message: "Đăng ký thành công!" });
                }
            );
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Lỗi server khi đăng ký!" });
    }
});

// API Đăng nhập tài khoản
app.post('/api/login', (req, res) => {
    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ success: false, message: "Vui lòng nhập tài khoản và mật khẩu!" });
        }

        db.get(`SELECT * FROM Users WHERE username = ?`, [username], async (err, user) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: "Lỗi server database!" });
            }
            if (!user) {
                return res.status(400).json({ success: false, message: "Tài khoản không tồn tại!" });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ success: false, message: "Sai mật khẩu!" });
            }

            res.json({ success: true, message: "Đăng nhập thành công!", username: user.username, is_premium: user.is_premium === 1 });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Lỗi server khi đăng nhập!" });
    }
});

// API Lấy trạng thái tài khoản Premium (PB10)
app.get('/api/user-status/:username', (req, res) => {
    const { username } = req.params;
    db.get(`SELECT username, email, is_premium FROM Users WHERE username = ?`, [username], (err, row) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Lỗi server database!" });
        }
        if (!row) {
            return res.status(404).json({ success: false, message: "Không tìm thấy người dùng!" });
        }
        res.json({ success: true, username: row.username, email: row.email, is_premium: row.is_premium === 1 });
    });
});

// API Nâng cấp tài khoản lên gói Premium thử nghiệm (PB10)
app.post('/api/upgrade-premium', (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ success: false, message: "Thiếu thông tin tài khoản!" });
    }

    db.run(`UPDATE Users SET is_premium = 1 WHERE username = ?`, [username], function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Lỗi server khi nâng cấp Premium!" });
        }
        if (this.changes === 0) {
            return res.status(404).json({ success: false, message: "Không tìm thấy người dùng!" });
        }
        res.json({ success: true, message: "Nâng cấp tài khoản Premium thành công!" });
    });
});

// API Quản trị Admin: Lấy danh sách toàn bộ người dùng
app.get('/api/admin/users', (req, res) => {
    db.all(`SELECT id, username, email, is_premium, created_at FROM Users ORDER BY id DESC`, [], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Lỗi lấy dữ liệu database!" });
        }
        res.json({ success: true, users: rows });
    });
});

// API Quản trị Admin: Cập nhật trạng thái Free/Premium trực tiếp
app.post('/api/admin/update-user-status', (req, res) => {
    const { username, is_premium } = req.body;
    if (!username && username !== 0) {
        return res.status(400).json({ success: false, message: "Thiếu thông tin người dùng!" });
    }

    db.run(`UPDATE Users SET is_premium = ? WHERE username = ?`, [is_premium, username], function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Lỗi server khi cập nhật trạng thái!" });
        }
        if (this.changes === 0) {
            return res.status(404).json({ success: false, message: "Không tìm thấy người dùng!" });
        }
        res.json({ success: true, message: "Cập nhật trạng thái thành công!" });
    });
});

// --- BỔ SUNG CÁC API CHO BẢNG SONGS, PLAYLISTS, PLAYLIST_SONGS, LISTENING_HISTORY ---

// 1. Đồng bộ toàn bộ 100 bài hát từ Frontend vào bảng Songs nếu bảng trống
app.post('/api/songs/sync', (req, res) => {
    const { songs } = req.body;
    if (!songs || !Array.isArray(songs)) {
        return res.status(400).json({ success: false, message: "Dữ liệu bài hát không hợp lệ!" });
    }
    db.get(`SELECT COUNT(*) AS count FROM Songs`, [], (err, row) => {
        if (err) return res.status(500).json({ success: false });
        if (row && row.count === 0) {
            const stmt = db.prepare(`INSERT OR IGNORE INTO Songs (id, title, artist, desc, src, cover, plays, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
            songs.forEach(s => {
                stmt.run(s.id, s.title, s.artist, s.desc || s.artist, s.src, s.cover, s.plays || 0, s.date || '2024-01-01');
            });
            stmt.finalize();
            console.log(`Đã nạp tự động ${songs.length} bài hát vào bảng Songs!`);
        }
        res.json({ success: true });
    });
});

// Lấy danh sách bài hát từ DB (Phục vụ Admin & Frontend)
app.get('/api/songs', (req, res) => {
    db.all(`SELECT * FROM Songs ORDER BY id ASC`, [], (err, rows) => {
        if (err) return res.status(500).json({ success: false, message: "Lỗi truy vấn bảng Songs" });
        res.json({ success: true, songs: rows });
    });
});

// 2. Đồng bộ Playlists và Playlist_Songs
app.post('/api/playlists/sync', (req, res) => {
    const { username, playlists } = req.body;
    if (!username || !Array.isArray(playlists)) {
        return res.status(400).json({ success: false });
    }
    db.serialize(() => {
        playlists.forEach(pl => {
            const plId = pl.id || `${username}_${pl.name}`;
            db.run(`INSERT OR REPLACE INTO Playlists (id, username, name) VALUES (?, ?, ?)`, [plId, username, pl.name]);
            db.run(`DELETE FROM Playlist_Songs WHERE playlist_id = ?`, [plId]);
            if (Array.isArray(pl.songs)) {
                const stmt = db.prepare(`INSERT OR IGNORE INTO Playlist_Songs (playlist_id, song_id) VALUES (?, ?)`);
                pl.songs.forEach(songId => {
                    stmt.run(plId, songId);
                });
                stmt.finalize();
            }
        });
    });
    res.json({ success: true });
});

// Xóa playlist khỏi DB
app.post('/api/playlists/delete', (req, res) => {
    const { username, name } = req.body;
    db.all(`SELECT id FROM Playlists WHERE username = ? AND name = ?`, [username, name], (err, rows) => {
        if (!err && rows) {
            rows.forEach(r => {
                db.run(`DELETE FROM Playlist_Songs WHERE playlist_id = ?`, [r.id]);
            });
            db.run(`DELETE FROM Playlists WHERE username = ? AND name = ?`, [username, name]);
        }
        res.json({ success: true });
    });
});

// 3. Lưu lịch sử nghe nhạc vào bảng Listening_History & tăng lượt nghe Songs
app.post('/api/history/add', (req, res) => {
    const { username, song } = req.body;
    if (!username || !song) return res.status(400).json({ success: false });

    db.run(`INSERT INTO Listening_History (username, song_id, song_title, artist) VALUES (?, ?, ?, ?)`,
        [username, song.id, song.title, song.artist],
        (err) => {
            if (err) console.error("Lỗi lưu Listening_History:", err);
        }
    );
    db.run(`UPDATE Songs SET plays = plays + 1 WHERE id = ?`, [song.id]);
    res.json({ success: true });
});

// Lấy dữ liệu lịch sử nghe cho Admin kiểm tra
app.get('/api/admin/history', (req, res) => {
    db.all(`SELECT * FROM Listening_History ORDER BY id DESC LIMIT 100`, [], (err, rows) => {
        if (err) return res.status(500).json({ success: false });
        res.json({ success: true, history: rows });
    });
});

// Lấy dữ liệu Playlists & số bài hát cho Admin kiểm tra
app.get('/api/admin/playlists', (req, res) => {
    db.all(`SELECT p.id, p.username, p.name, p.created_at, COUNT(ps.song_id) AS song_count 
            FROM Playlists p 
            LEFT JOIN Playlist_Songs ps ON p.id = ps.playlist_id 
            GROUP BY p.id ORDER BY p.created_at DESC`, [], (err, rows) => {
        if (err) return res.status(500).json({ success: false });
        res.json({ success: true, playlists: rows });
    });
});

app.listen(3000, () => {
    console.log("Server đang chạy tại http://localhost:3000");
});