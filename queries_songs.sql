-- =============================================
-- QUERY TÌM KIẾM & LỌC BÀI HÁT
-- =============================================

-- 1. Tìm bài hát theo tên hoặc ca sĩ
SELECT * FROM Songs
WHERE title LIKE '%Sơn Tùng%' OR artist LIKE '%Sơn Tùng%';

-- 2. Lọc theo tâm trạng (mood)
SELECT * FROM Songs
WHERE mood = 'vui'
ORDER BY plays DESC;

-- 3. Kết hợp tìm kiếm + lọc mood
SELECT * FROM Songs
WHERE (title LIKE '%yêu%' OR artist LIKE '%yêu%')
  AND mood = 'buon'
ORDER BY plays DESC;

-- 4. Phân trang
SELECT * FROM Songs
ORDER BY id
LIMIT 20 OFFSET 0;

-- 5. Top bài hát nhiều lượt nghe nhất
SELECT id, title, artist, plays
FROM Songs
ORDER BY plays DESC
LIMIT 10;

-- 6. Đếm tổng số bài theo mood
SELECT mood, COUNT(*) AS total
FROM Songs
GROUP BY mood;