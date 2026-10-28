const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));

// Kết nối SQLite và tự động tạo bảng ngay lập tức (tuần tự)
const dbFile = path.join(__dirname, 'music_app.db');
const db = new sqlite3.Database(dbFile, (err) => {
    if (err) {
        console.error("Lỗi kết nối SQLite: ", err.message);
    } else {
        console.log("Đã kết nối SQLite thành công!");
        
        // Tạo bảng Users ngay trong callback kết nối để đảm bảo bảng tồn tại trước khi server nhận request
        db.run(`CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (createErr) => {
            if (createErr) {
                console.error("Lỗi tạo bảng Users: ", createErr.message);
            } else {
                console.log("Đã sẵn sàng bảng Users trong SQLite.");
            }
        });
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

            db.run(`INSERT INTO Users (username, email, password) VALUES (?, ?, ?)`, 
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

            res.json({ success: true, message: "Đăng nhập thành công!", username: user.username });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Lỗi server khi đăng nhập!" });
    }
});

app.listen(3000, () => {
    console.log("Server đang chạy tại http://localhost:3000");
});