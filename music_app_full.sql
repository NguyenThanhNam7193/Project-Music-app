PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            is_premium INTEGER DEFAULT 0,
            is_verified INTEGER DEFAULT 0,
            otp_code TEXT,
            role TEXT DEFAULT 'user',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
INSERT INTO Users VALUES(1,'admin','admin@musicapp.com','$2b$10$KkxeDh0WA6/odbeD02XhW..WF/vQC5NGvlC0FLjao/bSoNuZJrxGq',0,1,NULL,'admin','2026-11-17 04:18:01'),
  (2,'Hoaianh123','hoaia1356@gmail.com','$2b$10$p59hFnJsVhcEku3iEwuA0OmX3WqjDft1bwYszJl2m9DFLJi/0F7Q.',0,0,'635983','user','2026-11-17 04:19:39'),
  (3,'khiemdaichim','hoangdoankhiem2@gmail.com','$2b$10$f4qOdB2ztjqZz026wQGjM.nhVncRNzvbjunXxlxb/3.43lVx2gVeW',0,0,'106647','user','2026-11-17 04:22:02'),
  (4,'hanhpham123','phanhoanghanhpham@gmail.com','$2b$10$MGwdtyVul8db5sOpeQGiQ.kBnYlcy9Tu6xhq2zdy7NkceF.qJ8f..',0,1,NULL,'user','2026-11-17 04:29:00');
CREATE TABLE Songs (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            artist TEXT NOT NULL,
            desc TEXT,
            src TEXT NOT NULL,
            cover TEXT,
            plays INTEGER DEFAULT 0,
            date TEXT,
            mood TEXT DEFAULT 'chill'
        );
INSERT INTO Songs VALUES(1,'Em Của Ngày Hôm Qua','Sơn Tùng M-TP','Sơn Tùng M-TP','audio/sontung/Sơn Tùng M-TP - Em Của Ngày Hôm Qua.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1500001,'2024-01-01','vui'),
  (2,'Chắc Ai Đó Sẽ Về','Sơn Tùng M-TP','Sơn Tùng M-TP','audio/sontung/Sơn Tùng M-TP - Chắc Ai Đó Sẽ Về.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',1200002,'2024-01-05','buon'),
  (3,'Nơi Này Có Anh','Sơn Tùng M-TP','Sơn Tùng M-TP','audio/sontung/Sơn Tùng MTP - Nơi Này Có Anh (Việt Nam Lyrics Subtitles).mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',2500001,'2024-02-10','chill'),
  (4,'Hãy Trao Cho Anh','Sơn Tùng M-TP','Sơn Tùng M-TP','audio/sontung/SƠN TÙNG M-TP HÃY TRAO CHO ANH ft. Snoop Dogg-Lyrics.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',3200000,'2024-03-01','vui'),
  (5,'Muộn Rồi Mà Sao Còn','Sơn Tùng M-TP','Sơn Tùng M-TP','audio/sontung/SƠN TÙNG M-TP _ MUỘN RỒI MÀ SAO CÒN _ LYRICS VIDEO [-4jird32CnE].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',2800000,'2024-03-15','buon'),
  (6,'Có Chắc Yêu Là Đây','Sơn Tùng M-TP','Sơn Tùng M-TP','audio/sontung/Có Chắc Yêu Là Đây - Sơn Tùng M-TP [ Lyrics __ Speed Up ] _ Hoshino - Blue Archive Live2D [dp6zsliTuVM].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1900000,'2024-04-01','chill'),
  (7,'Chúng Ta Của Hiện Tại','Sơn Tùng M-TP','Sơn Tùng M-TP','audio/sontung/[lyric] CHÚNG TA CỦA TƯƠNG LAI - Sơn Tùng M-TP [MlMJVJxugKg].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',2100000,'2024-04-20','vui'),
  (8,'Đừng Làm Trái Tim Anh Đau','Sơn Tùng M-TP','Sơn Tùng M-TP','audio/sontung/SƠN TÙNG M-TP ĐỪNG LÀM TRÁI TIM ANH ĐÂU OFFICIAL MUSIC VIDEO.mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',3500000,'2024-05-01','buon'),
  (9,'Lạc Trôi','Sơn Tùng M-TP','Sơn Tùng M-TP','audio/sontung/Lạc Trôi Sơn Tùng MTP ‹ Lyric Video ›.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',2300000,'2024-01-10','chill'),
  (10,'Chúng Ta Của Tương Lai','Sơn Tùng M-TP','Sơn Tùng M-TP','audio/sontung/[lyric] CHÚNG TA CỦA TƯƠNG LAI - Sơn Tùng M-TP [MlMJVJxugKg].mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',4000000,'2024-05-15','vui'),
  (11,'Ai Là Người Thương Em','Quân A.P','Quân A.P','audio/Quân ap/AI LÀ NGƯỜI THƯƠNG EM - QUÂN A.P LYRICS.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',980000,'2024-02-01','buon');
INSERT INTO Songs VALUES(12,'Bông Hoa Đẹp Nhất','Quân A.P','Quân A.P','audio/Quân ap/QUÂN A.P BÔNG HOA ĐẸP NHẤT OFFICIAL MUSIC VIDEO.mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1400000,'2024-02-15','chill'),
  (13,'Còn Gì Đau Hơn Chữ Đã Từng','Quân A.P','Quân A.P','audio/Quân ap/QUÂN A.P _ Còn Gì Đau Hơn Chữ Đã Từng - Lyrics Audio [0guTY3qkGx0].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',850000,'2024-03-10','buon'),
  (14,'Đáp Án Cuối Cùng','Quân A.P','Quân A.P','audio/Quân ap/ĐÁP ÁN CUỐI CÙNG _ QUÂN A.P _ LYRICS VIDEO [5z0u0BfPJ8o].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1100000,'2024-03-25','buon'),
  (15,'Có Ai Hẹn Hò Cùng Em Chưa','Quân A.P','Quân A.P','audio/Quân ap/CÓ AI HẸN HÒ CÙNG EM CHƯA QUÂN A.P OFFICIAL MV.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',920000,'2024-04-05','chill'),
  (16,'Lời Xin Lỗi Vụng Về','Quân A.P','Quân A.P','audio/Quân ap/LỜI XIN LỖI VỤNG VỀ - QUÂN A.P OFFICIAL MV.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',780000,'2024-04-15','vui'),
  (17,'You Are My Crush','Quân A.P','Quân A.P','audio/Quân ap/You Are My Crush - Quân A.P x Nguyên Jenda OFFICIAL MUSIC VIDEO.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',650000,'2024-05-02','buon'),
  (18,'Yêu Em Dại Khờ','Quân A.P','Quân A.P','audio/Quân ap/Yêu em dại khờ _ Chàng trai si tình Quân A.P và lời thổ lộ khiến con tim thổn thức [MEM_pt63GlY]-[AudioTrimmer.com].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1300000,'2024-01-20','chill'),
  (19,'Phản Bội Chính Mình','Quân A.P','Quân A.P','audio/Quân ap/Phản Bội Chính Mình - Quân A.P ft Vương Anh Tú _ Lyrics Video [SOWG9PjzT08].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',890000,'2024-05-10','vui'),
  (20,'Chiếc Khăn Gió Ấm','Quân A.P','Quân A.P','audio/Quân ap/Chiếc Khăn Gió Ấm _ Quân A.P hát live cực ''cháy'' khiến fan mê mệt _ Biển của hy vọng [4SB71XqtK3w]-[AudioTrimmer.com].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1150000,'2024-05-20','buon'),
  (21,'Dù Cho Mai Về Sau','Bùi Trường Linh','Bùi Trường Linh','audio/BuiTruongLinh/Dù Cho Mai Về Sau (Official Music Video) buitruonglinh.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',720000,'2024-02-05','chill'),
  (22,'Đường Tôi Chở Em Về','Bùi Trường Linh','Bùi Trường Linh','audio/BuiTruongLinh/Đường Tôi Chở Em Về buitruonglinh Lyrics Video.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',1600000,'2024-02-20','vui');
INSERT INTO Songs VALUES(23,'Từng Ngày Yêu Em','Bùi Trường Linh','Bùi Trường Linh','audio/BuiTruongLinh/Từng Ngày Yêu Em buitruonglinh.mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',540000,'2024-03-05','buon'),
  (24,'Yêu Không Cần Cố','Bùi Trường Linh','Bùi Trường Linh','audio/BuiTruongLinh/Yêu Không Cần Cố (Official MV) _ buitruonglinh x Cornetto [mt6SWWMVEjc].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',610000,'2024-03-18','chill'),
  (25,'Giờ Thì','Bùi Trường Linh','Bùi Trường Linh','audio/BuiTruongLinh/Giờ Thì (Official MV) buitruonglinh.mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',480001,'2024-04-02','vui'),
  (26,'Nếu Em Còn Đợi Anh','Bùi Trường Linh','Bùi Trường Linh','audio/BuiTruongLinh/Nếu Em Còn Đợi Anh _ buitruonglinh [SPCcMxngATY].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',430000,'2024-04-12','buon'),
  (27,'Yêu Người Có Ước Mơ','Bùi Trường Linh','Bùi Trường Linh','audio/BuiTruongLinh/Yêu Người Có Ước Mơ buitruonglinh.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',1800000,'2024-05-05','chill'),
  (28,'Lựa Chọn Của Em','Bùi Trường Linh','Bùi Trường Linh','audio/BuiTruongLinh/Lựa Chọn Của Em _ buitruonglinh ft. vuphungtien, dautatdat [IJML-4ZYejA].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',390000,'2024-05-12','vui'),
  (29,'Việt Nam Thịnh Vượng Sáng Ngời','Bùi Trường Linh','Bùi Trường Linh','audio/BuiTruongLinh/Thịnh Vượng Việt Nam Sáng Ngời buitruonglinh.mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',950000,'2024-01-25','buon'),
  (30,'Lời Tạm Biệt','Bùi Trường Linh','Bùi Trường Linh','audio/BuiTruongLinh/Lời Tạm Biệt _ buitruonglinh [Xy9uRLB-1Bs].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',310000,'2024-05-22','chill'),
  (31,'Hồng Nhan','Jack-J97','Jack-J97','audio/Jack-J97/JACK - HỒNG NHAN LYRIC VIDEO _ G5R [PyMpi8No_C4].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',2900000,'2024-01-08','vui'),
  (32,'Bạc Phận','Jack-J97','Jack-J97','audio/Jack-J97/BẠC PHẬN VIDEO LYRIC _ JACK x K-ICM [886d9rm_AFE].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',3400000,'2024-01-18','buon'),
  (33,'Sóng Gió','Jack-J97','Jack-J97','audio/Jack-J97/[lyrics] sóng gió_Jack_ J97@J97imjack [Ury91hEXlfE].mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',3800000,'2024-02-12','chill'),
  (34,'Em Gì Ơi','Jack-J97','Jack-J97','audio/Jack-J97/EM GÌ ƠI _ ICM x JACK _ OFFICIAL MUSIC VIDEO [cBClD7jylos].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',2700000,'2024-02-28','vui');
INSERT INTO Songs VALUES(35,'Sao Em Vô Tình','Jack-J97','Jack-J97','audio/Jack-J97/LYRIC SAO EM VÔ TÌNH JACK x K-ICM ft. LIAM.mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1450000,'2024-03-12','buon'),
  (36,'Hoa Hải Đường','Jack-J97','Jack-J97','audio/Jack-J97/Hoa Hải Đường - Jack _ Lyrics Video #HHD [uaIj-XbTyNk].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',2200000,'2024-03-22','chill'),
  (37,'Đom Đóm','Jack-J97','Jack-J97','audio/Jack-J97/Đom Đóm - Jack [Lyrics video] [DCOfrrA36sk].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',2100000,'2024-04-08','vui'),
  (38,'Là 1 Thằng Con Trai','Jack-J97','Jack-J97','audio/Jack-J97/Là 1 Thằng Con Trai - Jack - J97 x KProx「Lo - Fi Ver.」 _ Audio Lyrics Video [EQ0BI7CMUAc].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1650000,'2024-04-18','buon'),
  (39,'Về Bên Anh','Jack-J97','Jack-J97','audio/Jack-J97/OFFICIAL MV VỀ BÊN ANH - Jack (G5R).mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',990000,'2024-05-08','chill'),
  (40,'Việt Nam Tôi','Jack-J97','Jack-J97','audio/Jack-J97/VIỆT NAM TÔI ICM x JACK ft. TRUNG LƯƠNG x CHẤN QUỐC OFFICIAL MV.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',1250000,'2024-05-18','vui'),
  (41,'Anh Tự Do Nhưng Cô Đơn','Đạt G','Đạt G','audio/Đạt G/Đạt G - Anh Tự Do Nhưng Cô Đơn Live at DearOcean DatGMusic _.mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1100000,'2024-02-03','buon'),
  (42,'Thêm Bao Nhiêu Lâu','Đạt G','Đạt G','audio/Đạt G/Thêm Bao Nhiêu Lâu - Đạt G __ OFFICIAL MV [sinhZ1l54K8].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',870000,'2024-02-18','chill'),
  (43,'Ngày Mai Em Đi Mất','Đạt G','Đạt G','audio/Đạt G/NGÀY MAI EM ĐI MẤT - KHẢI ĐĂNG FT ĐẠT G (OFFICIAL MV).mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1350000,'2024-03-02','vui'),
  (44,'Buồn Không Em','Đạt G','Đạt G','audio/Đạt G/Buồn Không Em - Đạt G __ Lyrics videos [DwBgmWUF5Q4].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1750000,'2024-03-15','buon'),
  (45,'Cao ốc 20','Đạt G','Đạt G','audio/Đạt G/Cao Ốc 20 B RAY x DatG (ft MASEW x K-ICM) MV OFFICIAL.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',940000,'2024-03-28','chill'),
  (46,'Chỉ Khi Anh Một Mình','Đạt G','Đạt G','audio/Đạt G/Đạt G - Chỉ Khi Anh Một Mình _ DRUNK ON MUSIC [wK9OuQ9kMa0].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',520000,'2024-04-10','vui');
INSERT INTO Songs VALUES(47,'Có Như Không Có','Đạt G','Đạt G','audio/Đạt G/Có Như Không Có - Hiền Hồ _ Official Lyrics Video [dsri8IJI6rY].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1050000,'2024-04-22','buon'),
  (48,'Đừng Quên Tên Anh','Đạt G','Đạt G','audio/Đạt G/Đừng Quên Tên Anh - Hoa Vinh Official Music Video (4k).mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',1950000,'2024-05-04','chill'),
  (49,'Bánh Mì Không','Đạt G','Đạt G','audio/Đạt G/Bánh Mì Không - ĐạtG x DuUyên OFFICIAL MV.mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1600000,'2024-05-15','vui'),
  (50,'Ác Mộng Đẹp','Đạt G','Đạt G','audio/Đạt G/Ác Mộng Đẹp - Đạt G _ Chapter 3_ Đẹp _ Album _Ác Mộng Đẹp_ [9eL4Scy4-Ys].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',410000,'2024-05-24','buon'),
  (51,'Sai Người Sai Thời Điểm','Thanh Hưng','Thanh Hưng','audio/Thanh Hưng/Sai Người Sai Thời Điểm - Thanh Hưng _ Lyric Video [ICOcEzXsEOI].mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',1850000,'2024-01-12','chill'),
  (52,'Đúng Người Đúng Thời Điểm','Thanh Hưng','Thanh Hưng','audio/Thanh Hưng/Đúng Người Đúng Thời Điểm _ Official MV _ Thanh Hưng x Huy Cung x Mỹ Linh [KFmQUJ2dj3k].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',960000,'2024-01-28','vui'),
  (53,'Thay Tôi Yêu Cô Ấy','Thanh Hưng','Thanh Hưng','audio/Thanh Hưng/Thay Tôi Yêu Cô Ấy (ĐNSTĐ) - Thanh Hưng _ Official Lyrics Video [kSYhR8vnzBg].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1420000,'2024-02-14','buon'),
  (54,'Tệ Thật, Anh Nhớ Em','Thanh Hưng','Thanh Hưng','audio/Thanh Hưng/Tệ Thật, Anh Nhớ Em Thanh Hưng Official Lyric Video.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',790000,'2024-03-04','chill'),
  (55,'Phải Giữ Em Thôi','Thanh Hưng','Thanh Hưng','audio/Thanh Hưng/PHẢI GIỮ EM THÔI _ THANH HƯNG (Official MV) [z7Px4WbDrlU].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',880000,'2024-03-20','vui'),
  (56,'Em Muốn Ta Là Gì','Thanh Hưng','Thanh Hưng','audio/Thanh Hưng/Em Muốn Ta Là Gì - Thanh Hưng Official M V.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1120000,'2024-04-04','buon'),
  (57,'Cần Không Có, Có Không Cần','Thanh Hưng','Thanh Hưng','audio/Thanh Hưng/Cần Không Có, Có Không Cần - Thanh Hưng (Lyrics Video).mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',670000,'2024-04-16','chill');
INSERT INTO Songs VALUES(58,'Khó Gần Dễ Xa','Thanh Hưng','Thanh Hưng','audio/Thanh Hưng/Khó Gần Dễ Xa - Thanh Hưng (Official MV) Đây Là Lần Cuối Anh Để Nước Mắt Rơi Thế Này.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',730000,'2024-05-01','vui'),
  (59,'Anh thề đấy','Thanh Hưng','Thanh Hưng','audio/Thanh Hưng/ANH THỀ ĐẤY _ THANH HƯNG _ OFFICIAL MUSIC VIDEO [hnXZG1WxczU].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',590000,'2024-05-12','buon'),
  (60,'Em Cưới Rồi À','Thanh Hưng','Thanh Hưng','audio/Thanh Hưng/EM CƯỚI RỒI À - THANH HƯNG “Em cuoi roi a, khong doi anh nua a” Official MV Valentine 2025.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',1550000,'2024-05-21','chill'),
  (61,'3107','w/n','w/n','audio/wn/W n - 3 1 0 7 ( Official Video ) ft. Nâu, Duongg.mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',2400000,'2024-01-15','vui'),
  (62,'3107-2','w/n','w/n','audio/wn/3107-2 DuongG x NÂU x W N OFFICIAL MV.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',2600000,'2024-02-02','buon'),
  (63,'3107-3','w/n','w/n','audio/wn/W n - 3107 3 ( Official Video ) ft. 267, Nâu, Duongg,.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',1900000,'2024-02-22','chill'),
  (64,'3107-4','w/n','w/n','audio/wn/W_n - 3107 4 x Erik ft Nâu (Official Music Video) [cbHIMNxT7Zc].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',2150000,'2024-03-08','vui'),
  (65,'3107-7','w/n','w/n','audio/wn/31077 - W_n ( Official Video ) ft. titie, Duongg [mY_xrBrCa2w].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1750000,'2024-03-25','buon'),
  (66,'id 072019','w/n','w/n','audio/wn/W n - id 072019 3107 ft 267.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',1320000,'2024-04-06','chill'),
  (67,'id 2022','w/n','w/n','audio/wn/W n - id 2022 ft. 267 OFFICIAL MUSIC VIDEO.mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1480000,'2024-04-19','vui'),
  (68,'Simple Love (Remix)','w/n','w/n','audio/wn/Simple Love - Obito x Seachains _ DuckV Remix [IeaRT-Gym6o].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1620000,'2024-05-03','buon'),
  (69,'SSD','w/n','w/n','audio/wn/W n - SSD ft. (267, Nguyenn, PAR SG).mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',890000,'2024-05-14','chill'),
  (70,'Text 07','w/n','w/n','audio/wn/W n - Text 07 (ft. 267).mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',920000,'2024-05-23','vui');
INSERT INTO Songs VALUES(71,'Phía Sau Một Cô Gái','Soobin','Soobin','audio/Soobin Hoàng Sơn/PHÍA SAU MỘT CÔ GÁI - Soobin Hoàng Sơn ( OFFICIAL Lyric Video ).mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',3100000,'2024-01-04','buon'),
  (72,'Xin Đừng Lặng Im','Soobin','Soobin','audio/Soobin Hoàng Sơn/SOOBIN - Xin Đừng Lặng Im.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',2850000,'2024-01-19','chill'),
  (73,'The Playah','Soobin','Soobin','audio/Soobin Hoàng Sơn/SOOBIN X SLIMV - THE PLAYAH (Special Performance _ Official Music Video) [d44UTUSTYKU].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',2250000,'2024-02-08','vui'),
  (74,'Trò Chơi','Soobin','Soobin','audio/Soobin Hoàng Sơn/SOOBIN - TRÒ CHƠI (Official Music Video) [QFHvfQDgRFA].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1350000,'2024-02-25','buon'),
  (75,'Đi Để Trở Về','Soobin','Soobin','audio/Soobin Hoàng Sơn/Đi Để Trở Về - Soobin Hoàng Sơn _ Official Music Video [iy53wPnNCYU].mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',1980000,'2024-03-11','chill'),
  (76,'Yêu Thương Ngày Đó','Soobin','Soobin','audio/Soobin Hoàng Sơn/[Lyrics] Yêu Thương Ngày Đó - Soobin Hoàng Sơn _ OST Yêu Em Bất Chấp.mp4','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',1180000,'2024-03-26','vui'),
  (77,'Anh Đã Quen Với Cô Đơn','Soobin','Soobin','audio/Soobin Hoàng Sơn/Anh Đã Quen Với Cô Đơn ( Lyric Video ) - Soobin Anh thường hay vẫn nằm mơ về một ngôi nhà Tik Tok.mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1420000,'2024-04-09','buon'),
  (78,'Lalala','Soobin','Soobin','audio/Soobin Hoàng Sơn/LALALA - Soobin Hoàng Sơn - Official Music Video 4K [Ia_ddlGr1ic].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',920000,'2024-04-21','chill'),
  (79,'Giá Như','Soobin','Soobin','audio/Soobin Hoàng Sơn/SOOBIN - giá như _ ''BẬT NÓ LÊN'' Album (Official MV) [SeWt7IpZ0CA].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1720000,'2024-05-06','vui'),
  (80,'Mục Hạ Vô Nhân','Soobin','Soobin','audio/Soobin Hoàng Sơn/Mục Hạ Vô Nhân (Official MV) _ SOOBIN - Binz - NSND Huỳnh Tú [FikdKWos-NQ].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1510000,'2024-05-19','buon'),
  (81,'Những Kẻ Mộng Mơ','Noo Phước Thịnh','Noo Phước Thịnh','audio/Noo Phước Thịnh/NHỮNG KẺ MỘNG MƠ Noo Phước Thịnh OFFICIAL MV.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',2350000,'2024-01-06','chill');
INSERT INTO Songs VALUES(82,'Em Đã Thương Người Ta Hơn Anh','Noo Phước Thịnh','Noo Phước Thịnh','audio/Noo Phước Thịnh/Em Đã Thương Người Ta Hơn Anh _ NOO PHƯỚC THỊNH x VƯƠNG ANH TÚ _ OFFICIAL MV [fzfQUUTtEzk].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',1890000,'2024-01-22','vui'),
  (83,'Như Phút Ban Đầu','Noo Phước Thịnh','Noo Phước Thịnh','audio/Noo Phước Thịnh/Như Phút Ban Đầu - Noo Phước Thịnh [ Official Lyrics Video ].mp4','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',2100000,'2024-02-06','buon'),
  (84,'Mãi Mãi Bên Nhau','Noo Phước Thịnh','Noo Phước Thịnh','audio/Noo Phước Thịnh/Noo Phước Thịnh - Mãi Mãi Bên Nhau (Official Music Video).mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',2450000,'2024-02-24','chill'),
  (85,'Năm Qua Đã Làm Gì','Noo Phước Thịnh','Noo Phước Thịnh','audio/Noo Phước Thịnh/Năm Qua Đã Làm Gì - Noo Phước Thịnh _ Gala Nhạc Việt 14 [x4IwuZ7asH4].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1650000,'2024-03-10','vui'),
  (86,'Giá Như','Noo Phước Thịnh','Noo Phước Thịnh','audio/Noo Phước Thịnh/Giá Như - Noo Phước Thịnh _ Live @ Noo''s Chill Night EP.01 [QOQI3dJpYIg].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1120000,'2024-03-28','buon'),
  (87,'Chờ Ngày Mưa Tan','Noo Phước Thịnh','Noo Phước Thịnh','audio/Noo Phước Thịnh/Chờ Ngày Mưa Tan - Noo Phước Thịnh「Official Lyrics Video」Mưa. [Nemca9pbNr0].mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',1390000,'2024-04-11','chill'),
  (88,'Chạm Khẽ Tim Anh Một Chút Thôi','Noo Phước Thịnh','Noo Phước Thịnh','audio/Noo Phước Thịnh/Chạm Khẽ Tim Anh Một Chút Thôi Noo Phước Thịnh LYRIC VIDEO.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',2780000,'2024-04-25','vui'),
  (89,'Gạt Đi Nước Mắt','Noo Phước Thịnh','Noo Phước Thịnh','audio/Noo Phước Thịnh/Noo Phước Thịnh - Gạt Đi Nước Mắt ft. Tonny Việt [bD3B1I3Zgog].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',2950000,'2024-05-09','buon'),
  (90,'Yêu Một Người Sao Buồn Đến Thế','Noo Phước Thịnh','Noo Phước Thịnh','audio/Noo Phước Thịnh/YÊU MỘT NGƯỜI SAO BUỒN ĐẾN THẾ NOO PHUOC THINH OFFICIAL MV.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',1840000,'2024-05-17','buon'),
  (91,'Phép Màu','Nguyễn Hùng','Nguyễn Hùng','audio/Nguyễn Hùng/Phép Màu (Đàn Cá Gỗ OST) - Mounter x MAYDAYs, Minh Tốc Official MV.mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',640000,'2024-01-09','vui');
INSERT INTO Songs VALUES(92,'Còn Gì Đẹp Hơn','Nguyễn Hùng','Nguyễn Hùng','audio/Nguyễn Hùng/CÒN GÌ ĐẸP HƠN (ca khúc lấy cảm hứng từ phim Mưa đỏ) - Nguyễn Hùng Lyric Video.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',510000,'2024-01-24','buon'),
  (93,'Kiếm Đâu Bây Giờ','Nguyễn Hùng','Nguyễn Hùng','audio/Nguyễn Hùng/KIẾM ĐÂU BÂY GIỜ - Nguyễn Hùng (OST CỤC VÀNG CỦA NGOẠI) OFFICIAL MUSIC VIDEO.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',720000,'2024-02-11','chill'),
  (94,'Lỡ Thương Nhau','Nguyễn Hùng','Nguyễn Hùng','audio/Nguyễn Hùng/Lỡ Thương Nhau (Bò Sữa Bay OST) - Mounter x Nguyễn Hùng _ Official MV [gEDpsS7p6Co].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',480000,'2024-02-27','vui'),
  (95,'Gói Con Tim Làm Quà','Nguyễn Hùng','Nguyễn Hùng','audio/Nguyễn Hùng/Gói Con Tim Làm Quà (Bò Sữa Bay OST) - Mounter x Nguyễn Hùng _ Official MV [oMGPJ4uE_W8].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',550000,'2024-03-14','buon'),
  (96,'Ở Trong Khu Rừng','Nguyễn Hùng','Nguyễn Hùng','audio/Nguyễn Hùng/Nguyễn Hùng - Ở Trong Khu Rừng Cảm Ơn Người Đã Thức Cùng Tôi OST Official Visualizer.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',610000,'2024-03-30','chill'),
  (97,'5 Ngón Bàn Tay','Nguyễn Hùng','Nguyễn Hùng','audio/Nguyễn Hùng/5 Ngón Bàn Tay (Đàn Cá Gỗ OST) - Mounter x Nguyễn Hùng _ Official Lyric Video [QMkvS79fxcw].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',430000,'2024-04-14','vui'),
  (98,'Hẹn Lần Sau','Nguyễn Hùng','Nguyễn Hùng','audio/Nguyễn Hùng/Hẹn Lần Sau - MAYDAYs Official Music Video.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',390000,'2024-04-28','buon'),
  (99,'Nàng Thơ','Hoàng Dũng','Hoàng Dũng','audio/Nguyễn Hùng/Nàng Thơ Hoàng Dũng Official MV.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',4100000,'2024-05-07','chill'),
  (100,'Ước Mơ Của Mẹ','Quân AP Cover','Quân AP cover','audio/Nguyễn Hùng/QUÂN A.P - ƯỚC MƠ CỦA MẸ OFFICIAL MV.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',2500000,'2024-05-20','vui');
CREATE TABLE Playlists (id TEXT PRIMARY KEY, username TEXT NOT NULL, name TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP);
INSERT INTO Playlists VALUES('pl_test02','admin','Nhạc Test 2','2026-11-20 10:46:06');
CREATE TABLE Listening_History (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, song_id INTEGER NOT NULL, song_title TEXT, artist TEXT, listened_at DATETIME DEFAULT CURRENT_TIMESTAMP);
INSERT INTO Listening_History VALUES(1,'hanhpham123',2,'Chắc Ai Đó Sẽ Về','Sơn Tùng M-TP','2026-11-19 02:45:35'),
  (2,'hanhpham123',1,'Em Của Ngày Hôm Qua','Sơn Tùng M-TP','2026-11-19 02:45:53'),
  (3,'hanhpham123',2,'Chắc Ai Đó Sẽ Về','Sơn Tùng M-TP','2026-11-19 02:47:53'),
  (4,'hanhpham123',3,'Nơi Này Có Anh','Sơn Tùng M-TP','2026-11-19 02:47:57'),
  (5,'hanhpham123',25,'Giờ Thì','Bùi Trường Linh','2026-11-19 02:48:07'),
  (6,'hanhpham123',10,'Chúng Ta Của Tương Lai',NULL,'2026-11-20 10:55:46');
CREATE TABLE Artists (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            bio TEXT,
            avatar_url TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
INSERT INTO Artists VALUES(1,'Sơn Tùng M-TP',NULL,NULL,'2026-11-20 04:19:56'),
  (2,'Quân A.P',NULL,NULL,'2026-11-20 04:19:56'),
  (3,'Bùi Trường Linh',NULL,NULL,'2026-11-20 04:19:56'),
  (4,'Jack-J97',NULL,NULL,'2026-11-20 04:19:56'),
  (5,'Đạt G',NULL,NULL,'2026-11-20 04:19:56'),
  (6,'Thanh Hưng',NULL,NULL,'2026-11-20 04:19:56'),
  (7,'w/n',NULL,NULL,'2026-11-20 04:19:56'),
  (8,'Soobin',NULL,NULL,'2026-11-20 04:19:56'),
  (9,'Noo Phước Thịnh',NULL,NULL,'2026-11-20 04:19:56'),
  (10,'Nguyễn Hùng',NULL,NULL,'2026-11-20 04:19:56'),
  (11,'Hoàng Dũng',NULL,NULL,'2026-11-20 04:19:56'),
  (12,'Quân AP Cover',NULL,NULL,'2026-11-20 04:19:56');
CREATE TABLE Albums (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            artist_id INTEGER,
            cover_url TEXT,
            release_date TEXT,
            FOREIGN KEY (artist_id) REFERENCES Artists(id) ON DELETE SET NULL
        );
CREATE TABLE Playlist_Songs (
            playlist_id TEXT NOT NULL,
            song_id INTEGER NOT NULL,
            position INTEGER DEFAULT 0,
            added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (playlist_id, song_id),
            FOREIGN KEY (playlist_id) REFERENCES Playlists(id) ON DELETE CASCADE,
            FOREIGN KEY (song_id) REFERENCES Songs(id) ON DELETE CASCADE
        );
INSERT INTO Playlist_Songs VALUES('pl_test02',1,1,'2026-11-20 10:48:12'),
  ('pl_test02',5,2,'2026-11-20 10:48:13'),
  ('pl_test01',2,2,'2026-11-20 10:52:35');
PRAGMA writable_schema=ON;
CREATE TABLE IF NOT EXISTS sqlite_sequence(name,seq);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('Users',4),
  ('Listening_History',6),
  ('Artists',24);
PRAGMA writable_schema=OFF;
COMMIT;
