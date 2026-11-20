-- =============================================
-- QUERY QUẢN LÝ PLAYLIST
-- =============================================

-- 1. Tạo playlist mới
INSERT INTO Playlists (id, username, name)
VALUES ('pl_1710000000', 'hanhpham123', 'Nhạc chill cuối tuần');

-- 2. Thêm bài hát vào playlist
INSERT OR IGNORE INTO Playlist_Songs (playlist_id, song_id, position)
VALUES ('pl_1710000000', 1, 0);

-- 3. Xoá bài hát khỏi playlist
DELETE FROM Playlist_Songs
WHERE playlist_id = 'pl_1710000000' AND song_id = 1;

-- 4. Lấy danh sách playlist của 1 user
SELECT id, name, created_at
FROM Playlists
WHERE username = 'hanhpham123'
ORDER BY created_at DESC;

-- 5. Lấy TOÀN BỘ bài hát trong 1 playlist (JOIN)
SELECT s.id, s.title, s.artist, s.cover, s.mood, ps.position
FROM Playlist_Songs ps
JOIN Songs s ON s.id = ps.song_id
WHERE ps.playlist_id = 'pl_1710000000'
ORDER BY ps.position;

-- 6. Đếm số bài hát trong mỗi playlist của user
SELECT p.id, p.name, COUNT(ps.song_id) AS song_count
FROM Playlists p
LEFT JOIN Playlist_Songs ps ON ps.playlist_id = p.id
WHERE p.username = 'hanhpham123'
GROUP BY p.id, p.name;

-- 7. Xoá playlist (tự động xoá luôn bài hát nhờ ON DELETE CASCADE)
DELETE FROM Playlists WHERE id = 'pl_1710000000';

-- 8. Đổi tên playlist
UPDATE Playlists
SET name = 'Chill tối thứ 7'
WHERE id = 'pl_1710000000' AND username = 'hanhpham123';

-- 9. Kiểm tra bài hát đã có trong playlist chưa
SELECT COUNT(*) AS exists_flag
FROM Playlist_Songs
WHERE playlist_id = 'pl_1710000000' AND song_id = 5;