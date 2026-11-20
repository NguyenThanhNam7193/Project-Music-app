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
INSERT INTO Users VALUES(1,'admin','admin@musicapp.com','$2b$10$KkxeDh0WA6/odbeD02XhW..WF/vQC5NGvlC0FLjao/bSoNuZJrxGq',0,1,NULL,'admin','2026-11-17 04:18:01');
INSERT INTO Users VALUES(2,'Hoaianh123','hoaia1356@gmail.com','$2b$10$p59hFnJsVhcEku3iEwuA0OmX3WqjDft1bwYszJl2m9DFLJi/0F7Q.',0,0,'635983','user','2026-11-17 04:19:39');
INSERT INTO Users VALUES(3,'khiemdaichim','hoangdoankhiem2@gmail.com','$2b$10$f4qOdB2ztjqZz026wQGjM.nhVncRNzvbjunXxlxb/3.43lVx2gVeW',0,0,'106647','user','2026-11-17 04:22:02');
INSERT INTO Users VALUES(4,'hanhpham123','phanhoanghanhpham@gmail.com','$2b$10$MGwdtyVul8db5sOpeQGiQ.kBnYlcy9Tu6xhq2zdy7NkceF.qJ8f..',0,1,NULL,'user','2026-11-17 04:29:00');
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
INSERT INTO Songs VALUES(1,'Em Cß╗ºa Ng├áy H├┤m Qua','S╞ín T├╣ng M-TP','S╞ín T├╣ng M-TP','audio/sontung/S╞ín T├╣ng M-TP - Em Cß╗ºa Ng├áy H├┤m Qua.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1500001,'2024-01-01','vui');
INSERT INTO Songs VALUES(2,'Chß║»c Ai ─É├│ Sß║╜ Vß╗ü','S╞ín T├╣ng M-TP','S╞ín T├╣ng M-TP','audio/sontung/S╞ín T├╣ng M-TP - Chß║»c Ai ─É├│ Sß║╜ Vß╗ü.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',1200002,'2024-01-05','buon');
INSERT INTO Songs VALUES(3,'N╞íi N├áy C├│ Anh','S╞ín T├╣ng M-TP','S╞ín T├╣ng M-TP','audio/sontung/S╞ín T├╣ng MTP - N╞íi N├áy C├│ Anh (Viß╗çt Nam Lyrics Subtitles).mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',2500001,'2024-02-10','chill');
INSERT INTO Songs VALUES(4,'H├úy Trao Cho Anh','S╞ín T├╣ng M-TP','S╞ín T├╣ng M-TP','audio/sontung/S╞áN T├ÖNG M-TP H├âY TRAO CHO ANH ft. Snoop Dogg-Lyrics.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',3200000,'2024-03-01','vui');
INSERT INTO Songs VALUES(5,'Muß╗Ön Rß╗ôi M├á Sao C├▓n','S╞ín T├╣ng M-TP','S╞ín T├╣ng M-TP','audio/sontung/S╞áN T├ÖNG M-TP _ MUß╗ÿN Rß╗ÆI M├Ç SAO C├ÆN _ LYRICS VIDEO [-4jird32CnE].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',2800000,'2024-03-15','buon');
INSERT INTO Songs VALUES(6,'C├│ Chß║»c Y├¬u L├á ─É├óy','S╞ín T├╣ng M-TP','S╞ín T├╣ng M-TP','audio/sontung/C├│ Chß║»c Y├¬u L├á ─É├óy - S╞ín T├╣ng M-TP [ Lyrics __ Speed Up ] _ Hoshino - Blue Archive Live2D [dp6zsliTuVM].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1900000,'2024-04-01','chill');
INSERT INTO Songs VALUES(7,'Ch├║ng Ta Cß╗ºa Hiß╗çn Tß║íi','S╞ín T├╣ng M-TP','S╞ín T├╣ng M-TP','audio/sontung/[lyric] CH├ÜNG TA Cß╗ªA T╞»╞áNG LAI - S╞ín T├╣ng M-TP [MlMJVJxugKg].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',2100000,'2024-04-20','vui');
INSERT INTO Songs VALUES(8,'─Éß╗½ng L├ám Tr├íi Tim Anh ─Éau','S╞ín T├╣ng M-TP','S╞ín T├╣ng M-TP','audio/sontung/S╞áN T├ÖNG M-TP ─Éß╗¬NG L├ÇM TR├üI TIM ANH ─É├éU OFFICIAL MUSIC VIDEO.mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',3500000,'2024-05-01','buon');
INSERT INTO Songs VALUES(9,'Lß║íc Tr├┤i','S╞ín T├╣ng M-TP','S╞ín T├╣ng M-TP','audio/sontung/Lß║íc Tr├┤i S╞ín T├╣ng MTP ΓÇ╣ Lyric Video ΓÇ║.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',2300000,'2024-01-10','chill');
INSERT INTO Songs VALUES(10,'Ch├║ng Ta Cß╗ºa T╞░╞íng Lai','S╞ín T├╣ng M-TP','S╞ín T├╣ng M-TP','audio/sontung/[lyric] CH├ÜNG TA Cß╗ªA T╞»╞áNG LAI - S╞ín T├╣ng M-TP [MlMJVJxugKg].mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',4000000,'2024-05-15','vui');
INSERT INTO Songs VALUES(11,'Ai L├á Ng╞░ß╗¥i Th╞░╞íng Em','Qu├ón A.P','Qu├ón A.P','audio/Qu├ón ap/AI L├Ç NG╞»ß╗£I TH╞»╞áNG EM - QU├éN A.P LYRICS.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',980000,'2024-02-01','buon');
INSERT INTO Songs VALUES(12,'B├┤ng Hoa ─Éß║╣p Nhß║Ñt','Qu├ón A.P','Qu├ón A.P','audio/Qu├ón ap/QU├éN A.P B├öNG HOA ─Éß║╕P NHß║ñT OFFICIAL MUSIC VIDEO.mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1400000,'2024-02-15','chill');
INSERT INTO Songs VALUES(13,'C├▓n G├¼ ─Éau H╞ín Chß╗» ─É├ú Tß╗½ng','Qu├ón A.P','Qu├ón A.P','audio/Qu├ón ap/QU├éN A.P _ C├▓n G├¼ ─Éau H╞ín Chß╗» ─É├ú Tß╗½ng - Lyrics Audio [0guTY3qkGx0].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',850000,'2024-03-10','buon');
INSERT INTO Songs VALUES(14,'─É├íp ├ün Cuß╗æi C├╣ng','Qu├ón A.P','Qu├ón A.P','audio/Qu├ón ap/─É├üP ├üN CUß╗ÉI C├ÖNG _ QU├éN A.P _ LYRICS VIDEO [5z0u0BfPJ8o].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1100000,'2024-03-25','buon');
INSERT INTO Songs VALUES(15,'C├│ Ai Hß║╣n H├▓ C├╣ng Em Ch╞░a','Qu├ón A.P','Qu├ón A.P','audio/Qu├ón ap/C├ô AI Hß║╕N H├Æ C├ÖNG EM CH╞»A QU├éN A.P OFFICIAL MV.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',920000,'2024-04-05','chill');
INSERT INTO Songs VALUES(16,'Lß╗¥i Xin Lß╗ùi Vß╗Ñng Vß╗ü','Qu├ón A.P','Qu├ón A.P','audio/Qu├ón ap/Lß╗£I XIN Lß╗ûI Vß╗ñNG Vß╗Ç - QU├éN A.P OFFICIAL MV.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',780000,'2024-04-15','vui');
INSERT INTO Songs VALUES(17,'You Are My Crush','Qu├ón A.P','Qu├ón A.P','audio/Qu├ón ap/You Are My Crush - Qu├ón A.P x Nguy├¬n Jenda OFFICIAL MUSIC VIDEO.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',650000,'2024-05-02','buon');
INSERT INTO Songs VALUES(18,'Y├¬u Em Dß║íi Khß╗¥','Qu├ón A.P','Qu├ón A.P','audio/Qu├ón ap/Y├¬u em dß║íi khß╗¥ _ Ch├áng trai si t├¼nh Qu├ón A.P v├á lß╗¥i thß╗ò lß╗Ö khiß║┐n con tim thß╗òn thß╗⌐c [MEM_pt63GlY]-[AudioTrimmer.com].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1300000,'2024-01-20','chill');
INSERT INTO Songs VALUES(19,'Phß║ún Bß╗Öi Ch├¡nh M├¼nh','Qu├ón A.P','Qu├ón A.P','audio/Qu├ón ap/Phß║ún Bß╗Öi Ch├¡nh M├¼nh - Qu├ón A.P ft V╞░╞íng Anh T├║ _ Lyrics Video [SOWG9PjzT08].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',890000,'2024-05-10','vui');
INSERT INTO Songs VALUES(20,'Chiß║┐c Kh─ân Gi├│ ß║ñm','Qu├ón A.P','Qu├ón A.P','audio/Qu├ón ap/Chiß║┐c Kh─ân Gi├│ ß║ñm _ Qu├ón A.P h├ít live cß╗▒c ''ch├íy'' khiß║┐n fan m├¬ mß╗çt _ Biß╗ân cß╗ºa hy vß╗ìng [4SB71XqtK3w]-[AudioTrimmer.com].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1150000,'2024-05-20','buon');
INSERT INTO Songs VALUES(21,'D├╣ Cho Mai Vß╗ü Sau','B├╣i Tr╞░ß╗¥ng Linh','B├╣i Tr╞░ß╗¥ng Linh','audio/BuiTruongLinh/D├╣ Cho Mai Vß╗ü Sau (Official Music Video) buitruonglinh.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',720000,'2024-02-05','chill');
INSERT INTO Songs VALUES(22,'─É╞░ß╗¥ng T├┤i Chß╗ƒ Em Vß╗ü','B├╣i Tr╞░ß╗¥ng Linh','B├╣i Tr╞░ß╗¥ng Linh','audio/BuiTruongLinh/─É╞░ß╗¥ng T├┤i Chß╗ƒ Em Vß╗ü buitruonglinh Lyrics Video.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',1600000,'2024-02-20','vui');
INSERT INTO Songs VALUES(23,'Tß╗½ng Ng├áy Y├¬u Em','B├╣i Tr╞░ß╗¥ng Linh','B├╣i Tr╞░ß╗¥ng Linh','audio/BuiTruongLinh/Tß╗½ng Ng├áy Y├¬u Em buitruonglinh.mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',540000,'2024-03-05','buon');
INSERT INTO Songs VALUES(24,'Y├¬u Kh├┤ng Cß║ºn Cß╗æ','B├╣i Tr╞░ß╗¥ng Linh','B├╣i Tr╞░ß╗¥ng Linh','audio/BuiTruongLinh/Y├¬u Kh├┤ng Cß║ºn Cß╗æ (Official MV) _ buitruonglinh x Cornetto [mt6SWWMVEjc].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',610000,'2024-03-18','chill');
INSERT INTO Songs VALUES(25,'Giß╗¥ Th├¼','B├╣i Tr╞░ß╗¥ng Linh','B├╣i Tr╞░ß╗¥ng Linh','audio/BuiTruongLinh/Giß╗¥ Th├¼ (Official MV) buitruonglinh.mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',480001,'2024-04-02','vui');
INSERT INTO Songs VALUES(26,'Nß║┐u Em C├▓n ─Éß╗úi Anh','B├╣i Tr╞░ß╗¥ng Linh','B├╣i Tr╞░ß╗¥ng Linh','audio/BuiTruongLinh/Nß║┐u Em C├▓n ─Éß╗úi Anh _ buitruonglinh [SPCcMxngATY].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',430000,'2024-04-12','buon');
INSERT INTO Songs VALUES(27,'Y├¬u Ng╞░ß╗¥i C├│ ╞»ß╗¢c M╞í','B├╣i Tr╞░ß╗¥ng Linh','B├╣i Tr╞░ß╗¥ng Linh','audio/BuiTruongLinh/Y├¬u Ng╞░ß╗¥i C├│ ╞»ß╗¢c M╞í buitruonglinh.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',1800000,'2024-05-05','chill');
INSERT INTO Songs VALUES(28,'Lß╗▒a Chß╗ìn Cß╗ºa Em','B├╣i Tr╞░ß╗¥ng Linh','B├╣i Tr╞░ß╗¥ng Linh','audio/BuiTruongLinh/Lß╗▒a Chß╗ìn Cß╗ºa Em _ buitruonglinh ft. vuphungtien, dautatdat [IJML-4ZYejA].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',390000,'2024-05-12','vui');
INSERT INTO Songs VALUES(29,'Viß╗çt Nam Thß╗ïnh V╞░ß╗úng S├íng Ngß╗¥i','B├╣i Tr╞░ß╗¥ng Linh','B├╣i Tr╞░ß╗¥ng Linh','audio/BuiTruongLinh/Thß╗ïnh V╞░ß╗úng Viß╗çt Nam S├íng Ngß╗¥i buitruonglinh.mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',950000,'2024-01-25','buon');
INSERT INTO Songs VALUES(30,'Lß╗¥i Tß║ím Biß╗çt','B├╣i Tr╞░ß╗¥ng Linh','B├╣i Tr╞░ß╗¥ng Linh','audio/BuiTruongLinh/Lß╗¥i Tß║ím Biß╗çt _ buitruonglinh [Xy9uRLB-1Bs].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',310000,'2024-05-22','chill');
INSERT INTO Songs VALUES(31,'Hß╗ông Nhan','Jack-J97','Jack-J97','audio/Jack-J97/JACK - Hß╗ÆNG NHAN LYRIC VIDEO _ G5R [PyMpi8No_C4].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',2900000,'2024-01-08','vui');
INSERT INTO Songs VALUES(32,'Bß║íc Phß║¡n','Jack-J97','Jack-J97','audio/Jack-J97/Bß║áC PHß║¼N VIDEO LYRIC _ JACK x K-ICM [886d9rm_AFE].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',3400000,'2024-01-18','buon');
INSERT INTO Songs VALUES(33,'S├│ng Gi├│','Jack-J97','Jack-J97','audio/Jack-J97/[lyrics] s├│ng gi├│_Jack_ J97@J97imjack [Ury91hEXlfE].mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',3800000,'2024-02-12','chill');
INSERT INTO Songs VALUES(34,'Em G├¼ ╞ái','Jack-J97','Jack-J97','audio/Jack-J97/EM G├î ╞áI _ ICM x JACK _ OFFICIAL MUSIC VIDEO [cBClD7jylos].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',2700000,'2024-02-28','vui');
INSERT INTO Songs VALUES(35,'Sao Em V├┤ T├¼nh','Jack-J97','Jack-J97','audio/Jack-J97/LYRIC SAO EM V├ö T├îNH JACK x K-ICM ft. LIAM.mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1450000,'2024-03-12','buon');
INSERT INTO Songs VALUES(36,'Hoa Hß║úi ─É╞░ß╗¥ng','Jack-J97','Jack-J97','audio/Jack-J97/Hoa Hß║úi ─É╞░ß╗¥ng - Jack _ Lyrics Video #HHD [uaIj-XbTyNk].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',2200000,'2024-03-22','chill');
INSERT INTO Songs VALUES(37,'─Éom ─É├│m','Jack-J97','Jack-J97','audio/Jack-J97/─Éom ─É├│m - Jack [Lyrics video] [DCOfrrA36sk].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',2100000,'2024-04-08','vui');
INSERT INTO Songs VALUES(38,'L├á 1 Thß║▒ng Con Trai','Jack-J97','Jack-J97','audio/Jack-J97/L├á 1 Thß║▒ng Con Trai - Jack - J97 x KProxπÇîLo - Fi Ver.πÇì _ Audio Lyrics Video [EQ0BI7CMUAc].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1650000,'2024-04-18','buon');
INSERT INTO Songs VALUES(39,'Vß╗ü B├¬n Anh','Jack-J97','Jack-J97','audio/Jack-J97/OFFICIAL MV Vß╗Ç B├èN ANH - Jack (G5R).mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',990000,'2024-05-08','chill');
INSERT INTO Songs VALUES(40,'Viß╗çt Nam T├┤i','Jack-J97','Jack-J97','audio/Jack-J97/VIß╗åT NAM T├öI ICM x JACK ft. TRUNG L╞»╞áNG x CHß║ñN QUß╗ÉC OFFICIAL MV.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',1250000,'2024-05-18','vui');
INSERT INTO Songs VALUES(41,'Anh Tß╗▒ Do Nh╞░ng C├┤ ─É╞ín','─Éß║ít G','─Éß║ít G','audio/─Éß║ít G/─Éß║ít G - Anh Tß╗▒ Do Nh╞░ng C├┤ ─É╞ín Live at DearOcean DatGMusic _.mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1100000,'2024-02-03','buon');
INSERT INTO Songs VALUES(42,'Th├¬m Bao Nhi├¬u L├óu','─Éß║ít G','─Éß║ít G','audio/─Éß║ít G/Th├¬m Bao Nhi├¬u L├óu - ─Éß║ít G __ OFFICIAL MV [sinhZ1l54K8].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',870000,'2024-02-18','chill');
INSERT INTO Songs VALUES(43,'Ng├áy Mai Em ─Éi Mß║Ñt','─Éß║ít G','─Éß║ít G','audio/─Éß║ít G/NG├ÇY MAI EM ─ÉI Mß║ñT - KHß║óI ─É─éNG FT ─Éß║áT G (OFFICIAL MV).mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1350000,'2024-03-02','vui');
INSERT INTO Songs VALUES(44,'Buß╗ôn Kh├┤ng Em','─Éß║ít G','─Éß║ít G','audio/─Éß║ít G/Buß╗ôn Kh├┤ng Em - ─Éß║ít G __ Lyrics videos [DwBgmWUF5Q4].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1750000,'2024-03-15','buon');
INSERT INTO Songs VALUES(45,'Cao ß╗æc 20','─Éß║ít G','─Éß║ít G','audio/─Éß║ít G/Cao ß╗Éc 20 B RAY x DatG (ft MASEW x K-ICM) MV OFFICIAL.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',940000,'2024-03-28','chill');
INSERT INTO Songs VALUES(46,'Chß╗ë Khi Anh Mß╗Öt M├¼nh','─Éß║ít G','─Éß║ít G','audio/─Éß║ít G/─Éß║ít G - Chß╗ë Khi Anh Mß╗Öt M├¼nh _ DRUNK ON MUSIC [wK9OuQ9kMa0].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',520000,'2024-04-10','vui');
INSERT INTO Songs VALUES(47,'C├│ Nh╞░ Kh├┤ng C├│','─Éß║ít G','─Éß║ít G','audio/─Éß║ít G/C├│ Nh╞░ Kh├┤ng C├│ - Hiß╗ün Hß╗ô _ Official Lyrics Video [dsri8IJI6rY].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1050000,'2024-04-22','buon');
INSERT INTO Songs VALUES(48,'─Éß╗½ng Qu├¬n T├¬n Anh','─Éß║ít G','─Éß║ít G','audio/─Éß║ít G/─Éß╗½ng Qu├¬n T├¬n Anh - Hoa Vinh Official Music Video (4k).mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',1950000,'2024-05-04','chill');
INSERT INTO Songs VALUES(49,'B├ính M├¼ Kh├┤ng','─Éß║ít G','─Éß║ít G','audio/─Éß║ít G/B├ính M├¼ Kh├┤ng - ─Éß║ítG x DuUy├¬n OFFICIAL MV.mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1600000,'2024-05-15','vui');
INSERT INTO Songs VALUES(50,'├üc Mß╗Öng ─Éß║╣p','─Éß║ít G','─Éß║ít G','audio/─Éß║ít G/├üc Mß╗Öng ─Éß║╣p - ─Éß║ít G _ Chapter 3_ ─Éß║╣p _ Album _├üc Mß╗Öng ─Éß║╣p_ [9eL4Scy4-Ys].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',410000,'2024-05-24','buon');
INSERT INTO Songs VALUES(51,'Sai Ng╞░ß╗¥i Sai Thß╗¥i ─Éiß╗âm','Thanh H╞░ng','Thanh H╞░ng','audio/Thanh H╞░ng/Sai Ng╞░ß╗¥i Sai Thß╗¥i ─Éiß╗âm - Thanh H╞░ng _ Lyric Video [ICOcEzXsEOI].mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',1850000,'2024-01-12','chill');
INSERT INTO Songs VALUES(52,'─É├║ng Ng╞░ß╗¥i ─É├║ng Thß╗¥i ─Éiß╗âm','Thanh H╞░ng','Thanh H╞░ng','audio/Thanh H╞░ng/─É├║ng Ng╞░ß╗¥i ─É├║ng Thß╗¥i ─Éiß╗âm _ Official MV _ Thanh H╞░ng x Huy Cung x Mß╗╣ Linh [KFmQUJ2dj3k].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',960000,'2024-01-28','vui');
INSERT INTO Songs VALUES(53,'Thay T├┤i Y├¬u C├┤ ß║ñy','Thanh H╞░ng','Thanh H╞░ng','audio/Thanh H╞░ng/Thay T├┤i Y├¬u C├┤ ß║ñy (─ÉNST─É) - Thanh H╞░ng _ Official Lyrics Video [kSYhR8vnzBg].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1420000,'2024-02-14','buon');
INSERT INTO Songs VALUES(54,'Tß╗ç Thß║¡t, Anh Nhß╗¢ Em','Thanh H╞░ng','Thanh H╞░ng','audio/Thanh H╞░ng/Tß╗ç Thß║¡t, Anh Nhß╗¢ Em Thanh H╞░ng Official Lyric Video.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',790000,'2024-03-04','chill');
INSERT INTO Songs VALUES(55,'Phß║úi Giß╗» Em Th├┤i','Thanh H╞░ng','Thanh H╞░ng','audio/Thanh H╞░ng/PHß║óI GIß╗« EM TH├öI _ THANH H╞»NG (Official MV) [z7Px4WbDrlU].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',880000,'2024-03-20','vui');
INSERT INTO Songs VALUES(56,'Em Muß╗æn Ta L├á G├¼','Thanh H╞░ng','Thanh H╞░ng','audio/Thanh H╞░ng/Em Muß╗æn Ta L├á G├¼ - Thanh H╞░ng Official M V.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1120000,'2024-04-04','buon');
INSERT INTO Songs VALUES(57,'Cß║ºn Kh├┤ng C├│, C├│ Kh├┤ng Cß║ºn','Thanh H╞░ng','Thanh H╞░ng','audio/Thanh H╞░ng/Cß║ºn Kh├┤ng C├│, C├│ Kh├┤ng Cß║ºn - Thanh H╞░ng (Lyrics Video).mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',670000,'2024-04-16','chill');
INSERT INTO Songs VALUES(58,'Kh├│ Gß║ºn Dß╗à Xa','Thanh H╞░ng','Thanh H╞░ng','audio/Thanh H╞░ng/Kh├│ Gß║ºn Dß╗à Xa - Thanh H╞░ng (Official MV) ─É├óy L├á Lß║ºn Cuß╗æi Anh ─Éß╗â N╞░ß╗¢c Mß║»t R╞íi Thß║┐ N├áy.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',730000,'2024-05-01','vui');
INSERT INTO Songs VALUES(59,'Anh thß╗ü ─æß║Ñy','Thanh H╞░ng','Thanh H╞░ng','audio/Thanh H╞░ng/ANH THß╗Ç ─Éß║ñY _ THANH H╞»NG _ OFFICIAL MUSIC VIDEO [hnXZG1WxczU].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',590000,'2024-05-12','buon');
INSERT INTO Songs VALUES(60,'Em C╞░ß╗¢i Rß╗ôi ├Ç','Thanh H╞░ng','Thanh H╞░ng','audio/Thanh H╞░ng/EM C╞»ß╗ÜI Rß╗ÆI ├Ç - THANH H╞»NG ΓÇ£Em cuoi roi a, khong doi anh nua aΓÇ¥ Official MV Valentine 2025.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',1550000,'2024-05-21','chill');
INSERT INTO Songs VALUES(61,'3107','w/n','w/n','audio/wn/W n - 3 1 0 7 ( Official Video ) ft. N├óu, Duongg.mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',2400000,'2024-01-15','vui');
INSERT INTO Songs VALUES(62,'3107-2','w/n','w/n','audio/wn/3107-2 DuongG x N├éU x W N OFFICIAL MV.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',2600000,'2024-02-02','buon');
INSERT INTO Songs VALUES(63,'3107-3','w/n','w/n','audio/wn/W n - 3107 3 ( Official Video ) ft. 267, N├óu, Duongg,.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',1900000,'2024-02-22','chill');
INSERT INTO Songs VALUES(64,'3107-4','w/n','w/n','audio/wn/W_n - 3107 4 x Erik ft N├óu (Official Music Video) [cbHIMNxT7Zc].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',2150000,'2024-03-08','vui');
INSERT INTO Songs VALUES(65,'3107-7','w/n','w/n','audio/wn/31077 - W_n ( Official Video ) ft. titie, Duongg [mY_xrBrCa2w].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1750000,'2024-03-25','buon');
INSERT INTO Songs VALUES(66,'id 072019','w/n','w/n','audio/wn/W n - id 072019 3107 ft 267.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',1320000,'2024-04-06','chill');
INSERT INTO Songs VALUES(67,'id 2022','w/n','w/n','audio/wn/W n - id 2022 ft. 267 OFFICIAL MUSIC VIDEO.mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1480000,'2024-04-19','vui');
INSERT INTO Songs VALUES(68,'Simple Love (Remix)','w/n','w/n','audio/wn/Simple Love - Obito x Seachains _ DuckV Remix [IeaRT-Gym6o].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1620000,'2024-05-03','buon');
INSERT INTO Songs VALUES(69,'SSD','w/n','w/n','audio/wn/W n - SSD ft. (267, Nguyenn, PAR SG).mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',890000,'2024-05-14','chill');
INSERT INTO Songs VALUES(70,'Text 07','w/n','w/n','audio/wn/W n - Text 07 (ft. 267).mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',920000,'2024-05-23','vui');
INSERT INTO Songs VALUES(71,'Ph├¡a Sau Mß╗Öt C├┤ G├íi','Soobin','Soobin','audio/Soobin Ho├áng S╞ín/PH├ìA SAU Mß╗ÿT C├ö G├üI - Soobin Ho├áng S╞ín ( OFFICIAL Lyric Video ).mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',3100000,'2024-01-04','buon');
INSERT INTO Songs VALUES(72,'Xin ─Éß╗½ng Lß║╖ng Im','Soobin','Soobin','audio/Soobin Ho├áng S╞ín/SOOBIN - Xin ─Éß╗½ng Lß║╖ng Im.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',2850000,'2024-01-19','chill');
INSERT INTO Songs VALUES(73,'The Playah','Soobin','Soobin','audio/Soobin Ho├áng S╞ín/SOOBIN X SLIMV - THE PLAYAH (Special Performance _ Official Music Video) [d44UTUSTYKU].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',2250000,'2024-02-08','vui');
INSERT INTO Songs VALUES(74,'Tr├▓ Ch╞íi','Soobin','Soobin','audio/Soobin Ho├áng S╞ín/SOOBIN - TR├Æ CH╞áI (Official Music Video) [QFHvfQDgRFA].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1350000,'2024-02-25','buon');
INSERT INTO Songs VALUES(75,'─Éi ─Éß╗â Trß╗ƒ Vß╗ü','Soobin','Soobin','audio/Soobin Ho├áng S╞ín/─Éi ─Éß╗â Trß╗ƒ Vß╗ü - Soobin Ho├áng S╞ín _ Official Music Video [iy53wPnNCYU].mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',1980000,'2024-03-11','chill');
INSERT INTO Songs VALUES(76,'Y├¬u Th╞░╞íng Ng├áy ─É├│','Soobin','Soobin','audio/Soobin Ho├áng S╞ín/[Lyrics] Y├¬u Th╞░╞íng Ng├áy ─É├│ - Soobin Ho├áng S╞ín _ OST Y├¬u Em Bß║Ñt Chß║Ñp.mp4','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',1180000,'2024-03-26','vui');
INSERT INTO Songs VALUES(77,'Anh ─É├ú Quen Vß╗¢i C├┤ ─É╞ín','Soobin','Soobin','audio/Soobin Ho├áng S╞ín/Anh ─É├ú Quen Vß╗¢i C├┤ ─É╞ín ( Lyric Video ) - Soobin Anh th╞░ß╗¥ng hay vß║½n nß║▒m m╞í vß╗ü mß╗Öt ng├┤i nh├á Tik Tok.mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',1420000,'2024-04-09','buon');
INSERT INTO Songs VALUES(78,'Lalala','Soobin','Soobin','audio/Soobin Ho├áng S╞ín/LALALA - Soobin Ho├áng S╞ín - Official Music Video 4K [Ia_ddlGr1ic].mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',920000,'2024-04-21','chill');
INSERT INTO Songs VALUES(79,'Gi├í Nh╞░','Soobin','Soobin','audio/Soobin Ho├áng S╞ín/SOOBIN - gi├í nh╞░ _ ''Bß║¼T N├ô L├èN'' Album (Official MV) [SeWt7IpZ0CA].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1720000,'2024-05-06','vui');
INSERT INTO Songs VALUES(80,'Mß╗Ñc Hß║í V├┤ Nh├ón','Soobin','Soobin','audio/Soobin Ho├áng S╞ín/Mß╗Ñc Hß║í V├┤ Nh├ón (Official MV) _ SOOBIN - Binz - NSND Huß╗│nh T├║ [FikdKWos-NQ].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1510000,'2024-05-19','buon');
INSERT INTO Songs VALUES(81,'Nhß╗»ng Kß║╗ Mß╗Öng M╞í','Noo Ph╞░ß╗¢c Thß╗ïnh','Noo Ph╞░ß╗¢c Thß╗ïnh','audio/Noo Ph╞░ß╗¢c Thß╗ïnh/NHß╗«NG Kß║║ Mß╗ÿNG M╞á Noo Ph╞░ß╗¢c Thß╗ïnh OFFICIAL MV.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',2350000,'2024-01-06','chill');
INSERT INTO Songs VALUES(82,'Em ─É├ú Th╞░╞íng Ng╞░ß╗¥i Ta H╞ín Anh','Noo Ph╞░ß╗¢c Thß╗ïnh','Noo Ph╞░ß╗¢c Thß╗ïnh','audio/Noo Ph╞░ß╗¢c Thß╗ïnh/Em ─É├ú Th╞░╞íng Ng╞░ß╗¥i Ta H╞ín Anh _ NOO PHU╠¢O╠¢╠üC THI╠úNH x VU╠¢O╠¢NG ANH TU╠ü _ OFFICIAL MV [fzfQUUTtEzk].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',1890000,'2024-01-22','vui');
INSERT INTO Songs VALUES(83,'Nh╞░ Ph├║t Ban ─Éß║ºu','Noo Ph╞░ß╗¢c Thß╗ïnh','Noo Ph╞░ß╗¢c Thß╗ïnh','audio/Noo Ph╞░ß╗¢c Thß╗ïnh/Nh╞░ Ph├║t Ban ─Éß║ºu - Noo Ph╞░ß╗¢c Thß╗ïnh [ Official Lyrics Video ].mp4','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',2100000,'2024-02-06','buon');
INSERT INTO Songs VALUES(84,'M├úi M├úi B├¬n Nhau','Noo Ph╞░ß╗¢c Thß╗ïnh','Noo Ph╞░ß╗¢c Thß╗ïnh','audio/Noo Ph╞░ß╗¢c Thß╗ïnh/Noo Ph╞░ß╗¢c Thß╗ïnh - M├úi M├úi B├¬n Nhau (Official Music Video).mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',2450000,'2024-02-24','chill');
INSERT INTO Songs VALUES(85,'N─âm Qua ─É├ú L├ám G├¼','Noo Ph╞░ß╗¢c Thß╗ïnh','Noo Ph╞░ß╗¢c Thß╗ïnh','audio/Noo Ph╞░ß╗¢c Thß╗ïnh/N─âm Qua ─É├ú L├ám G├¼ - Noo Ph╞░ß╗¢c Thß╗ïnh _ Gala Nhß║íc Viß╗çt 14 [x4IwuZ7asH4].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',1650000,'2024-03-10','vui');
INSERT INTO Songs VALUES(86,'Gi├í Nh╞░','Noo Ph╞░ß╗¢c Thß╗ïnh','Noo Ph╞░ß╗¢c Thß╗ïnh','audio/Noo Ph╞░ß╗¢c Thß╗ïnh/Gi├í Nh╞░ - Noo Ph╞░ß╗¢c Thß╗ïnh _ Live @ Noo''s Chill Night EP.01 [QOQI3dJpYIg].mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',1120000,'2024-03-28','buon');
INSERT INTO Songs VALUES(87,'Chß╗¥ Ng├áy M╞░a Tan','Noo Ph╞░ß╗¢c Thß╗ïnh','Noo Ph╞░ß╗¢c Thß╗ïnh','audio/Noo Ph╞░ß╗¢c Thß╗ïnh/Chß╗¥ Ng├áy M╞░a Tan - Noo Ph╞░ß╗¢c Thß╗ïnhπÇîOfficial Lyrics VideoπÇìM╞░a. [Nemca9pbNr0].mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',1390000,'2024-04-11','chill');
INSERT INTO Songs VALUES(88,'Chß║ím Khß║╜ Tim Anh Mß╗Öt Ch├║t Th├┤i','Noo Ph╞░ß╗¢c Thß╗ïnh','Noo Ph╞░ß╗¢c Thß╗ïnh','audio/Noo Ph╞░ß╗¢c Thß╗ïnh/Chß║ím Khß║╜ Tim Anh Mß╗Öt Ch├║t Th├┤i Noo Ph╞░ß╗¢c Thß╗ïnh LYRIC VIDEO.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',2780000,'2024-04-25','vui');
INSERT INTO Songs VALUES(89,'Gß║ít ─Éi N╞░ß╗¢c Mß║»t','Noo Ph╞░ß╗¢c Thß╗ïnh','Noo Ph╞░ß╗¢c Thß╗ïnh','audio/Noo Ph╞░ß╗¢c Thß╗ïnh/Noo Ph╞░ß╗¢c Thß╗ïnh - Gß║ít ─Éi N╞░ß╗¢c Mß║»t ft. Tonny Viß╗çt [bD3B1I3Zgog].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',2950000,'2024-05-09','buon');
INSERT INTO Songs VALUES(90,'Y├¬u Mß╗Öt Ng╞░ß╗¥i Sao Buß╗ôn ─Éß║┐n Thß║┐','Noo Ph╞░ß╗¢c Thß╗ïnh','Noo Ph╞░ß╗¢c Thß╗ïnh','audio/Noo Ph╞░ß╗¢c Thß╗ïnh/Y├èU Mß╗ÿT NG╞»ß╗£I SAO BUß╗ÆN ─Éß║╛N THß║╛ NOO PHUOC THINH OFFICIAL MV.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',1840000,'2024-05-17','buon');
INSERT INTO Songs VALUES(91,'Ph├⌐p M├áu','Nguyß╗àn H├╣ng','Nguyß╗àn H├╣ng','audio/Nguyß╗àn H├╣ng/Ph├⌐p M├áu (─É├án C├í Gß╗ù OST) - Mounter x MAYDAYs, Minh Tß╗æc Official MV.mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',640000,'2024-01-09','vui');
INSERT INTO Songs VALUES(92,'C├▓n G├¼ ─Éß║╣p H╞ín','Nguyß╗àn H├╣ng','Nguyß╗àn H├╣ng','audio/Nguyß╗àn H├╣ng/C├ÆN G├î ─Éß║╕P H╞áN (ca kh├║c lß║Ñy cß║úm hß╗⌐ng tß╗½ phim M╞░a ─æß╗Å) - Nguyß╗àn H├╣ng Lyric Video.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',510000,'2024-01-24','buon');
INSERT INTO Songs VALUES(93,'Kiß║┐m ─É├óu B├óy Giß╗¥','Nguyß╗àn H├╣ng','Nguyß╗àn H├╣ng','audio/Nguyß╗àn H├╣ng/KIß║╛M ─É├éU B├éY GIß╗£ - Nguyß╗àn H├╣ng (OST Cß╗ñC V├ÇNG Cß╗ªA NGOß║áI) OFFICIAL MUSIC VIDEO.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',720000,'2024-02-11','chill');
INSERT INTO Songs VALUES(94,'Lß╗í Th╞░╞íng Nhau','Nguyß╗àn H├╣ng','Nguyß╗àn H├╣ng','audio/Nguyß╗àn H├╣ng/Lß╗í Th╞░╞íng Nhau (B├▓ Sß╗»a Bay OST) - Mounter x Nguyß╗àn H├╣ng _ Official MV [gEDpsS7p6Co].mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',480000,'2024-02-27','vui');
INSERT INTO Songs VALUES(95,'G├│i Con Tim L├ám Qu├á','Nguyß╗àn H├╣ng','Nguyß╗àn H├╣ng','audio/Nguyß╗àn H├╣ng/G├│i Con Tim L├ám Qu├á (B├▓ Sß╗»a Bay OST) - Mounter x Nguyß╗àn H├╣ng _ Official MV [oMGPJ4uE_W8].mp3','https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60',550000,'2024-03-14','buon');
INSERT INTO Songs VALUES(96,'ß╗₧ Trong Khu Rß╗½ng','Nguyß╗àn H├╣ng','Nguyß╗àn H├╣ng','audio/Nguyß╗àn H├╣ng/Nguyß╗àn H├╣ng - ß╗₧ Trong Khu Rß╗½ng Cß║úm ╞án Ng╞░ß╗¥i ─É├ú Thß╗⌐c C├╣ng T├┤i OST Official Visualizer.mp3','https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60',610000,'2024-03-30','chill');
INSERT INTO Songs VALUES(97,'5 Ng├│n B├án Tay','Nguyß╗àn H├╣ng','Nguyß╗àn H├╣ng','audio/Nguyß╗àn H├╣ng/5 Ng├│n B├án Tay (─É├án C├í Gß╗ù OST) - Mounter x Nguyß╗àn H├╣ng _ Official Lyric Video [QMkvS79fxcw].mp3','https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60',430000,'2024-04-14','vui');
INSERT INTO Songs VALUES(98,'Hß║╣n Lß║ºn Sau','Nguyß╗àn H├╣ng','Nguyß╗àn H├╣ng','audio/Nguyß╗àn H├╣ng/Hß║╣n Lß║ºn Sau - MAYDAYs Official Music Video.mp3','https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60',390000,'2024-04-28','buon');
INSERT INTO Songs VALUES(99,'N├áng Th╞í','Ho├áng D┼⌐ng','Ho├áng D┼⌐ng','audio/Nguyß╗àn H├╣ng/N├áng Th╞í Ho├áng D┼⌐ng Official MV.mp3','https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60',4100000,'2024-05-07','chill');
INSERT INTO Songs VALUES(100,'╞»ß╗¢c M╞í Cß╗ºa Mß║╣','Qu├ón AP Cover','Qu├ón AP cover','audio/Nguyß╗àn H├╣ng/QU├éN A.P - ╞»ß╗ÜC M╞á Cß╗ªA Mß║╕ OFFICIAL MV.mp3','https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60',2500000,'2024-05-20','vui');
CREATE TABLE Playlists (id TEXT PRIMARY KEY, username TEXT NOT NULL, name TEXT NOT NULL, created_at DATETIME DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE Listening_History (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, song_id INTEGER NOT NULL, song_title TEXT, artist TEXT, listened_at DATETIME DEFAULT CURRENT_TIMESTAMP);
INSERT INTO Listening_History VALUES(1,'hanhpham123',2,'Chß║»c Ai ─É├│ Sß║╜ Vß╗ü','S╞ín T├╣ng M-TP','2026-11-19 02:45:35');
INSERT INTO Listening_History VALUES(2,'hanhpham123',1,'Em Cß╗ºa Ng├áy H├┤m Qua','S╞ín T├╣ng M-TP','2026-11-19 02:45:53');
INSERT INTO Listening_History VALUES(3,'hanhpham123',2,'Chß║»c Ai ─É├│ Sß║╜ Vß╗ü','S╞ín T├╣ng M-TP','2026-11-19 02:47:53');
INSERT INTO Listening_History VALUES(4,'hanhpham123',3,'N╞íi N├áy C├│ Anh','S╞ín T├╣ng M-TP','2026-11-19 02:47:57');
INSERT INTO Listening_History VALUES(5,'hanhpham123',25,'Giß╗¥ Th├¼','B├╣i Tr╞░ß╗¥ng Linh','2026-11-19 02:48:07');
CREATE TABLE Artists (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            bio TEXT,
            avatar_url TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
INSERT INTO Artists VALUES(1,'S╞ín T├╣ng M-TP',NULL,NULL,'2026-11-20 04:19:56');
INSERT INTO Artists VALUES(2,'Qu├ón A.P',NULL,NULL,'2026-11-20 04:19:56');
INSERT INTO Artists VALUES(3,'B├╣i Tr╞░ß╗¥ng Linh',NULL,NULL,'2026-11-20 04:19:56');
INSERT INTO Artists VALUES(4,'Jack-J97',NULL,NULL,'2026-11-20 04:19:56');
INSERT INTO Artists VALUES(5,'─Éß║ít G',NULL,NULL,'2026-11-20 04:19:56');
INSERT INTO Artists VALUES(6,'Thanh H╞░ng',NULL,NULL,'2026-11-20 04:19:56');
INSERT INTO Artists VALUES(7,'w/n',NULL,NULL,'2026-11-20 04:19:56');
INSERT INTO Artists VALUES(8,'Soobin',NULL,NULL,'2026-11-20 04:19:56');
INSERT INTO Artists VALUES(9,'Noo Ph╞░ß╗¢c Thß╗ïnh',NULL,NULL,'2026-11-20 04:19:56');
INSERT INTO Artists VALUES(10,'Nguyß╗àn H├╣ng',NULL,NULL,'2026-11-20 04:19:56');
INSERT INTO Artists VALUES(11,'Ho├áng D┼⌐ng',NULL,NULL,'2026-11-20 04:19:56');
INSERT INTO Artists VALUES(12,'Qu├ón AP Cover',NULL,NULL,'2026-11-20 04:19:56');
CREATE TABLE Albums (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            artist_id INTEGER,
            cover_url TEXT,
            release_date TEXT,
            FOREIGN KEY (artist_id) REFERENCES Artists(id) ON DELETE SET NULL
        );
PRAGMA writable_schema=ON;
CREATE TABLE IF NOT EXISTS sqlite_sequence(name,seq);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('Users',4);
INSERT INTO sqlite_sequence VALUES('Listening_History',5);
INSERT INTO sqlite_sequence VALUES('Artists',12);
PRAGMA writable_schema=OFF;
COMMIT;
