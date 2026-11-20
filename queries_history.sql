-- 1. Lấy 20 bài nghe gần đây nhất của user
SELECT song_title, artist, listened_at
FROM Listening_History
WHERE username = 'hanhpham123'
ORDER BY listened_at DESC
LIMIT 20;

-- 2. Top 5 bài hát user nghe nhiều nhất
SELECT song_title, artist, COUNT(*) AS times_played
FROM Listening_History
WHERE username = 'hanhpham123'
GROUP BY song_title, artist
ORDER BY times_played DESC
LIMIT 5;

-- 3. Đếm số lần nghe của từng bài hát (toàn hệ thống)
SELECT s.title, s.artist, COUNT(h.id) AS listen_count
FROM Songs s
LEFT JOIN Listening_History h ON h.song_id = s.id
GROUP BY s.id
ORDER BY listen_count DESC
LIMIT 10;