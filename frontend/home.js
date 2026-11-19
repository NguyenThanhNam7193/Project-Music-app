let musicDataSync = [
    { id: 1, title: "Em Của Ngày Hôm Qua", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/Sơn Tùng M-TP - Em Của Ngày Hôm Qua.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 1500000, date: "2024-01-01" },
    { id: 2, title: "Chắc Ai Đó Sẽ Về", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/Sơn Tùng M-TP - Chắc Ai Đó Sẽ Về.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 1200000, date: "2024-01-05" },
    { id: 3, title: "Nơi Này Có Anh", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/Sơn Tùng MTP - Nơi Này Có Anh (Việt Nam Lyrics Subtitles).mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 2500000, date: "2024-02-10" },
    { id: 4, title: "Hãy Trao Cho Anh", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/SƠN TÙNG M-TP HÃY TRAO CHO ANH ft. Snoop Dogg-Lyrics.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 3200000, date: "2024-03-01" },
    { id: 5, title: "Muộn Rồi Mà Sao Còn", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/SƠN TÙNG M-TP _ MUỘN RỒI MÀ SAO CÒN _ LYRICS VIDEO [-4jird32CnE].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 2800000, date: "2024-03-15" },
    { id: 6, title: "Có Chắc Yêu Là Đây", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/Có Chắc Yêu Là Đây - Sơn Tùng M-TP [ Lyrics __ Speed Up ] _ Hoshino - Blue Archive Live2D [dp6zsliTuVM].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 1900000, date: "2024-04-01" },
    { id: 7, title: "Chúng Ta Của Hiện Tại", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/[lyric] CHÚNG TA CỦA TƯƠNG LAI - Sơn Tùng M-TP [MlMJVJxugKg].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 2100000, date: "2024-04-20" },
    { id: 8, title: "Đừng Làm Trái Tim Anh Đau", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/SƠN TÙNG M-TP ĐỪNG LÀM TRÁI TIM ANH ĐÂU OFFICIAL MUSIC VIDEO.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 3500000, date: "2024-05-01" },
    { id: 9, title: "Lạc Trôi", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/Lạc Trôi Sơn Tùng MTP ‹ Lyric Video ›.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 2300000, date: "2024-01-10" },
    { id: 10, title: "Chúng Ta Của Tương Lai", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/[lyric] CHÚNG TA CỦA TƯƠNG LAI - Sơn Tùng M-TP [MlMJVJxugKg].mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 4000000, date: "2024-05-15" },
    { id: 11, title: "Ai Là Người Thương Em", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/AI LÀ NGƯỜI THƯƠNG EM - QUÂN A.P LYRICS.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 980000, date: "2024-02-01" },
    { id: 12, title: "Bông Hoa Đẹp Nhất", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/QUÂN A.P BÔNG HOA ĐẸP NHẤT OFFICIAL MUSIC VIDEO.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 1400000, date: "2024-02-15" },
    { id: 13, title: "Còn Gì Đau Hơn Chữ Đã Từng", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/QUÂN A.P _ Còn Gì Đau Hơn Chữ Đã Từng - Lyrics Audio [0guTY3qkGx0].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 850000, date: "2024-03-10" },
    { id: 14, title: "Đáp Án Cuối Cùng", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/ĐÁP ÁN CUỐI CÙNG _ QUÂN A.P _ LYRICS VIDEO [5z0u0BfPJ8o].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 1100000, date: "2024-03-25" },
    { id: 15, title: "Có Ai Hẹn Hò Cùng Em Chưa", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/CÓ AI HẸN HÒ CÙNG EM CHƯA QUÂN A.P OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 920000, date: "2024-04-05" },
    { id: 16, title: "Lời Xin Lỗi Vụng Về", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/LỜI XIN LỖI VỤNG VỀ - QUÂN A.P OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 780000, date: "2024-04-15" },
    { id: 17, title: "You Are My Crush", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/You Are My Crush - Quân A.P x Nguyên Jenda OFFICIAL MUSIC VIDEO.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 650000, date: "2024-05-02" },
    { id: 18, title: "Yêu Em Dại Khờ", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/Yêu em dại khờ _ Chàng trai si tình Quân A.P và lời thổ lộ khiến con tim thổn thức [MEM_pt63GlY]-[AudioTrimmer.com].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 1300000, date: "2024-01-20" },
    { id: 19, title: "Phản Bội Chính Mình", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/Phản Bội Chính Mình - Quân A.P ft Vương Anh Tú _ Lyrics Video [SOWG9PjzT08].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 890000, date: "2024-05-10" },
    { id: 20, title: "Chiếc Khăn Gió Ấm", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/Chiếc Khăn Gió Ấm _ Quân A.P hát live cực 'cháy' khiến fan mê mệt _ Biển của hy vọng [4SB71XqtK3w]-[AudioTrimmer.com].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 1150000, date: "2024-05-20" },
    { id: 21, title: "Dù Cho Mai Về Sau", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Dù Cho Mai Về Sau (Official Music Video) buitruonglinh.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 720000, date: "2024-02-05" },
    { id: 22, title: "Đường Tôi Chở Em Về", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Đường Tôi Chở Em Về buitruonglinh Lyrics Video.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 1600000, date: "2024-02-20" },
    { id: 23, title: "Từng Ngày Yêu Em", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Từng Ngày Yêu Em buitruonglinh.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 540000, date: "2024-03-05" },
    { id: 24, title: "Yêu Không Cần Cố", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Yêu Không Cần Cố (Official MV) _ buitruonglinh x Cornetto [mt6SWWMVEjc].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 610000, date: "2024-03-18" },
    { id: 25, title: "Giờ Thì", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Giờ Thì (Official MV) buitruonglinh.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 480000, date: "2024-04-02" },
    { id: 26, title: "Nếu Em Còn Đợi Anh", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Nếu Em Còn Đợi Anh _ buitruonglinh [SPCcMxngATY].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 430000, date: "2024-04-12" },
    { id: 27, title: "Yêu Người Có Ước Mơ", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Yêu Người Có Ước Mơ buitruonglinh.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 1800000, date: "2024-05-05" },
    { id: 28, title: "Lựa Chọn Của Em", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Lựa Chọn Của Em _ buitruonglinh ft. vuphungtien, dautatdat [IJML-4ZYejA].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 390000, date: "2024-05-12" },
    { id: 29, title: "Việt Nam Thịnh Vượng Sáng Ngời", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Thịnh Vượng Việt Nam Sáng Ngời buitruonglinh.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 950000, date: "2024-01-25" },
    { id: 30, title: "Lời Tạm Biệt", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Lời Tạm Biệt _ buitruonglinh [Xy9uRLB-1Bs].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 310000, date: "2024-05-22" },
    { id: 31, title: "Hồng Nhan", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/JACK - HỒNG NHAN LYRIC VIDEO _ G5R [PyMpi8No_C4].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 2900000, date: "2024-01-08" },
    { id: 32, title: "Bạc Phận", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/BẠC PHẬN VIDEO LYRIC _ JACK x K-ICM [886d9rm_AFE].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 3400000, date: "2024-01-18" },
    { id: 33, title: "Sóng Gió", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/[lyrics] sóng gió_Jack_ J97@J97imjack [Ury91hEXlfE].mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 3800000, date: "2024-02-12" },
    { id: 34, title: "Em Gì Ơi", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/EM GÌ ƠI _ ICM x JACK _ OFFICIAL MUSIC VIDEO [cBClD7jylos].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 2700000, date: "2024-02-28" },
    { id: 35, title: "Sao Em Vô Tình", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/LYRIC SAO EM VÔ TÌNH JACK x K-ICM ft. LIAM.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 1450000, date: "2024-03-12" },
    { id: 36, title: "Hoa Hải Đường", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/Hoa Hải Đường - Jack _ Lyrics Video #HHD [uaIj-XbTyNk].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 2200000, date: "2024-03-22" },
    { id: 37, title: "Đom Đóm", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/Đom Đóm - Jack [Lyrics video] [DCOfrrA36sk].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 2100000, date: "2024-04-08" },
    { id: 38, title: "Là 1 Thằng Con Trai", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/Là 1 Thằng Con Trai - Jack - J97 x KProx「Lo - Fi Ver.」 _ Audio Lyrics Video [EQ0BI7CMUAc].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 1650000, date: "2024-04-18" },
    { id: 39, title: "Về Bên Anh", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/OFFICIAL MV VỀ BÊN ANH - Jack (G5R).mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 990000, date: "2024-05-08" },
    { id: 40, title: "Việt Nam Tôi", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/VIỆT NAM TÔI ICM x JACK ft. TRUNG LƯƠNG x CHẤN QUỐC OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 1250000, date: "2024-05-18" },
    { id: 41, title: "Anh Tự Do Nhưng Cô Đơn", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Đạt G - Anh Tự Do Nhưng Cô Đơn Live at DearOcean DatGMusic _.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 1100000, date: "2024-02-03" },
    { id: 42, title: "Thêm Bao Nhiêu Lâu", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Thêm Bao Nhiêu Lâu - Đạt G __ OFFICIAL MV [sinhZ1l54K8].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 870000, date: "2024-02-18" },
    { id: 43, title: "Ngày Mai Em Đi Mất", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/NGÀY MAI EM ĐI MẤT - KHẢI ĐĂNG FT ĐẠT G (OFFICIAL MV).mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 1350000, date: "2024-03-02" },
    { id: 44, title: "Buồn Không Em", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Buồn Không Em - Đạt G __ Lyrics videos [DwBgmWUF5Q4].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 1750000, date: "2024-03-15" },
    { id: 45, title: "Cao ốc 20", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Cao Ốc 20 B RAY x DatG (ft MASEW x K-ICM) MV OFFICIAL.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 940000, date: "2024-03-28" },
    { id: 46, title: "Chỉ Khi Anh Một Mình", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Đạt G - Chỉ Khi Anh Một Mình _ DRUNK ON MUSIC [wK9OuQ9kMa0].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 520000, date: "2024-04-10" },
    { id: 47, title: "Có Như Không Có", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Có Như Không Có - Hiền Hồ _ Official Lyrics Video [dsri8IJI6rY].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 1050000, date: "2024-04-22" },
    { id: 48, title: "Đừng Quên Tên Anh", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Đừng Quên Tên Anh - Hoa Vinh Official Music Video (4k).mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 1950000, date: "2024-05-04" },
    { id: 49, title: "Bánh Mì Không", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Bánh Mì Không - ĐạtG x DuUyên OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 1600000, date: "2024-05-15" },
    { id: 50, title: "Ác Mộng Đẹp", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Ác Mộng Đẹp - Đạt G _ Chapter 3_ Đẹp _ Album _Ác Mộng Đẹp_ [9eL4Scy4-Ys].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 410000, date: "2024-05-24" },
    { id: 51, title: "Sai Người Sai Thời Điểm", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Sai Người Sai Thời Điểm - Thanh Hưng _ Lyric Video [ICOcEzXsEOI].mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 1850000, date: "2024-01-12" },
    { id: 52, title: "Đúng Người Đúng Thời Điểm", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Đúng Người Đúng Thời Điểm _ Official MV _ Thanh Hưng x Huy Cung x Mỹ Linh [KFmQUJ2dj3k].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 960000, date: "2024-01-28" },
    { id: 53, title: "Thay Tôi Yêu Cô Ấy", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Thay Tôi Yêu Cô Ấy (ĐNSTĐ) - Thanh Hưng _ Official Lyrics Video [kSYhR8vnzBg].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 1420000, date: "2024-02-14" },
    { id: 54, title: "Tệ Thật, Anh Nhớ Em", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Tệ Thật, Anh Nhớ Em Thanh Hưng Official Lyric Video.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 790000, date: "2024-03-04" },
    { id: 55, title: "Phải Giữ Em Thôi", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/PHẢI GIỮ EM THÔI _ THANH HƯNG (Official MV) [z7Px4WbDrlU].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 880000, date: "2024-03-20" },
    { id: 56, title: "Em Muốn Ta Là Gì", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Em Muốn Ta Là Gì - Thanh Hưng Official M V.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 1120000, date: "2024-04-04" },
    { id: 57, title: "Cần Không Có, Có Không Cần", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Cần Không Có, Có Không Cần - Thanh Hưng (Lyrics Video).mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 670000, date: "2024-04-16" },
    { id: 58, title: "Khó Gần Dễ Xa", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Khó Gần Dễ Xa - Thanh Hưng (Official MV) Đây Là Lần Cuối Anh Để Nước Mắt Rơi Thế Này.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 730000, date: "2024-05-01" },
    { id: 59, title: "Anh thề đấy", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/ANH THỀ ĐẤY _ THANH HƯNG _ OFFICIAL MUSIC VIDEO [hnXZG1WxczU].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 590000, date: "2024-05-12" },
    { id: 60, title: "Em Cưới Rồi À", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/EM CƯỚI RỒI À - THANH HƯNG “Em cuoi roi a, khong doi anh nua a” Official MV Valentine 2025.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 1550000, date: "2024-05-21" },
    { id: 61, title: "3107", artist: "w/n", desc: "w/n", src: "audio/wn/W n - 3 1 0 7 ( Official Video ) ft. Nâu, Duongg.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 2400000, date: "2024-01-15" },
    { id: 62, title: "3107-2", artist: "w/n", desc: "w/n", src: "audio/wn/3107-2 DuongG x NÂU x W N OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 2600000, date: "2024-02-02" },
    { id: 63, title: "3107-3", artist: "w/n", desc: "w/n", src: "audio/wn/W n - 3107 3 ( Official Video ) ft. 267, Nâu, Duongg,.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 1900000, date: "2024-02-22" },
    { id: 64, title: "3107-4", artist: "w/n", desc: "w/n", src: "audio/wn/W_n - 3107 4 x Erik ft Nâu (Official Music Video) [cbHIMNxT7Zc].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 2150000, date: "2024-03-08" },
    { id: 65, title: "3107-7", artist: "w/n", desc: "w/n", src: "audio/wn/31077 - W_n ( Official Video ) ft. titie, Duongg [mY_xrBrCa2w].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 1750000, date: "2024-03-25" },
    { id: 66, title: "id 072019", artist: "w/n", desc: "w/n", src: "audio/wn/W n - id 072019 3107 ft 267.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 1320000, date: "2024-04-06" },
    { id: 67, title: "id 2022", artist: "w/n", desc: "w/n", src: "audio/wn/W n - id 2022 ft. 267 OFFICIAL MUSIC VIDEO.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 1480000, date: "2024-04-19" },
    { id: 68, title: "Simple Love (Remix)", artist: "w/n", desc: "w/n", src: "audio/wn/Simple Love - Obito x Seachains _ DuckV Remix [IeaRT-Gym6o].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 1620000, date: "2024-05-03" },
    { id: 69, title: "SSD", artist: "w/n", desc: "w/n", src: "audio/wn/W n - SSD ft. (267, Nguyenn, PAR SG).mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 890000, date: "2024-05-14" },
    { id: 70, title: "Text 07", artist: "w/n", desc: "w/n", src: "audio/wn/W n - Text 07 (ft. 267).mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 920000, date: "2024-05-23" },
    { id: 71, title: "Phía Sau Một Cô Gái", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/PHÍA SAU MỘT CÔ GÁI - Soobin Hoàng Sơn ( OFFICIAL Lyric Video ).mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 3100000, date: "2024-01-04" },
    { id: 72, title: "Xin Đừng Lặng Im", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/SOOBIN - Xin Đừng Lặng Im.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 2850000, date: "2024-01-19" },
    { id: 73, title: "The Playah", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/SOOBIN X SLIMV - THE PLAYAH (Special Performance _ Official Music Video) [d44UTUSTYKU].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 2250000, date: "2024-02-08" },
    { id: 74, title: "Trò Chơi", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/SOOBIN - TRÒ CHƠI (Official Music Video) [QFHvfQDgRFA].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 1350000, date: "2024-02-25" },
    { id: 75, title: "Đi Để Trở Về", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/Đi Để Trở Về - Soobin Hoàng Sơn _ Official Music Video [iy53wPnNCYU].mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 1980000, date: "2024-03-11" },
    { id: 76, title: "Yêu Thương Ngày Đó", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/[Lyrics] Yêu Thương Ngày Đó - Soobin Hoàng Sơn _ OST Yêu Em Bất Chấp.mp4", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 1180000, date: "2024-03-26" },
    { id: 77, title: "Anh Đã Quen Với Cô Đơn", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/Anh Đã Quen Với Cô Đơn ( Lyric Video ) - Soobin Anh thường hay vẫn nằm mơ về một ngôi nhà Tik Tok.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 1420000, date: "2024-04-09" },
    { id: 78, title: "Lalala", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/LALALA - Soobin Hoàng Sơn - Official Music Video 4K [Ia_ddlGr1ic].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 920000, date: "2024-04-21" },
    { id: 79, title: "Giá Như", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/SOOBIN - giá như _ 'BẬT NÓ LÊN' Album (Official MV) [SeWt7IpZ0CA].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 1720000, date: "2024-05-06" },
    { id: 80, title: "Mục Hạ Vô Nhân", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/Mục Hạ Vô Nhân (Official MV) _ SOOBIN - Binz - NSND Huỳnh Tú [FikdKWos-NQ].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 1510000, date: "2024-05-19" },
    { id: 81, title: "Những Kẻ Mộng Mơ", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/NHỮNG KẺ MỘNG MƠ Noo Phước Thịnh OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 2350000, date: "2024-01-06" },
    { id: 82, title: "Em Đã Thương Người Ta Hơn Anh", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Em Đã Thương Người Ta Hơn Anh _ NOO PHƯỚC THỊNH x VƯƠNG ANH TÚ _ OFFICIAL MV [fzfQUUTtEzk].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 1890000, date: "2024-01-22" },
    { id: 83, title: "Như Phút Ban Đầu", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Như Phút Ban Đầu - Noo Phước Thịnh [ Official Lyrics Video ].mp4", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 2100000, date: "2024-02-06" },
    { id: 84, title: "Mãi Mãi Bên Nhau", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Noo Phước Thịnh - Mãi Mãi Bên Nhau (Official Music Video).mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 2450000, date: "2024-02-24" },
    { id: 85, title: "Năm Qua Đã Làm Gì", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Năm Qua Đã Làm Gì - Noo Phước Thịnh _ Gala Nhạc Việt 14 [x4IwuZ7asH4].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 1650000, date: "2024-03-10" },
    { id: 86, title: "Giá Như", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Giá Như - Noo Phước Thịnh _ Live @ Noo's Chill Night EP.01 [QOQI3dJpYIg].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 1120000, date: "2024-03-28" },
    { id: 87, title: "Chờ Ngày Mưa Tan", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Chờ Ngày Mưa Tan - Noo Phước Thịnh「Official Lyrics Video」Mưa. [Nemca9pbNr0].mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 1390000, date: "2024-04-11" },
    { id: 88, title: "Chạm Khẽ Tim Anh Một Chút Thôi", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Chạm Khẽ Tim Anh Một Chút Thôi Noo Phước Thịnh LYRIC VIDEO.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 2780000, date: "2024-04-25" },
    { id: 89, title: "Gạt Đi Nước Mắt", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Noo Phước Thịnh - Gạt Đi Nước Mắt ft. Tonny Việt [bD3B1I3Zgog].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 2950000, date: "2024-05-09" },
    { id: 90, title: "Yêu Một Người Sao Buồn Đến Thế", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/YÊU MỘT NGƯỜI SAO BUỒN ĐẾN THẾ NOO PHUOC THINH OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 1840000, date: "2024-05-17" },
    { id: 91, title: "Phép Màu", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/Phép Màu (Đàn Cá Gỗ OST) - Mounter x MAYDAYs, Minh Tốc Official MV.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 640000, date: "2024-01-09" },
    { id: 92, title: "Còn Gì Đẹp Hơn", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/CÒN GÌ ĐẸP HƠN (ca khúc lấy cảm hứng từ phim Mưa đỏ) - Nguyễn Hùng Lyric Video.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 510000, date: "2024-01-24" },
    { id: 93, title: "Kiếm Đâu Bây Giờ", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/KIẾM ĐÂU BÂY GIỜ - Nguyễn Hùng (OST CỤC VÀNG CỦA NGOẠI) OFFICIAL MUSIC VIDEO.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 720000, date: "2024-02-11" },
    { id: 94, title: "Lỡ Thương Nhau", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/Lỡ Thương Nhau (Bò Sữa Bay OST) - Mounter x Nguyễn Hùng _ Official MV [gEDpsS7p6Co].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 480000, date: "2024-02-27" },
    { id: 95, title: "Gói Con Tim Làm Quà", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/Gói Con Tim Làm Quà (Bò Sữa Bay OST) - Mounter x Nguyễn Hùng _ Official MV [oMGPJ4uE_W8].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60", plays: 550000, date: "2024-03-14" },
    { id: 96, title: "Ở Trong Khu Rừng", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/Nguyễn Hùng - Ở Trong Khu Rừng Cảm Ơn Người Đã Thức Cùng Tôi OST Official Visualizer.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60", plays: 610000, date: "2024-03-30" },
    { id: 97, title: "5 Ngón Bàn Tay", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/5 Ngón Bàn Tay (Đàn Cá Gỗ OST) - Mounter x Nguyễn Hùng _ Official Lyric Video [QMkvS79fxcw].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60", plays: 430000, date: "2024-04-14" },
    { id: 98, title: "Hẹn Lần Sau", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/Hẹn Lần Sau - MAYDAYs Official Music Video.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60", plays: 390000, date: "2024-04-28" },
    { id: 99, title: "Nàng Thơ", artist: "Hoàng Dũng", desc: "Hoàng Dũng", src: "audio/Nguyễn Hùng/Nàng Thơ Hoàng Dũng Official MV.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60", plays: 4100000, date: "2024-05-07" },
    { id: 100, title: "Ước Mơ Của Mẹ", artist: "Quân AP Cover", desc: "Quân AP cover", src: "audio/Nguyễn Hùng/QUÂN A.P - ƯỚC MƠ CỦA MẸ OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60", plays: 2500000, date: "2024-05-20" }
];

let musicData = [];
let currentPage = 1;
let currentSearch = "";
let currentMood = "";
let playlists = JSON.parse(localStorage.getItem('music_app_playlists')) || [{ id: 'pl_liked', name: "Bài hát đã thích", songs: [1, 3, 11] }];
const currentUsername = localStorage.getItem('user_displayName') || 'GuestUser';
let recentlyPlayed = JSON.parse(localStorage.getItem('music_app_recently_played')) || [];
let userIsPremium = false;

let activePlaylistId = null;
let selectedMoodValue = "";
let sharedPlaylistPayload = null;

function hasShareQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has("share") || urlParams.has("sharedPlaylist");
}

function isGuestUser() {
    if (hasShareQueryParam()) {
        return true;
    }
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    return !loggedIn;
}

function promptGuestLogin() {
    Swal.fire({
        title: "Bạn cần đăng nhập / đăng ký",
        text: "Vui lòng đăng nhập hoặc đăng ký để sử dụng tính năng này.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Đăng nhập / Đăng ký",
        cancelButtonText: "Đóng",
        confirmButtonColor: "#7494ec"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "SignUp_Login_Form.html";
        }
    });
}

function parseSharedPlaylistFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const raw = urlParams.get("share") || urlParams.get("sharedPlaylist");
    if (!raw) return null;
    try {
        const decoded = decodeURIComponent(raw);
        const parsed = JSON.parse(decoded);
        if (parsed && Array.isArray(parsed.songs)) {
            return parsed;
        }
    } catch (e) {
        console.log("Lỗi đọc link chia sẻ:", e);
    }
    return null;
}

document.addEventListener("DOMContentLoaded", async () => {
    sharedPlaylistPayload = parseSharedPlaylistFromUrl();

    if (!sharedPlaylistPayload && !hasShareQueryParam() && localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "SignUp_Login_Form.html";
        return;
    }

    await syncSongsToDatabase();
    await fetchSongs();
    if (!isGuestUser()) {
        await checkUserPremiumStatus(currentUsername);
    }
    initUI();

    if (sharedPlaylistPayload && isGuestUser()) {
        const sharedSongs = musicDataSync.filter(s => sharedPlaylistPayload.songs.includes(s.id));
        if (sharedSongs.length > 0) {
            const combined = [...sharedSongs, ...musicData.filter(s => !sharedPlaylistPayload.songs.includes(s.id))];
            renderCards(combined);
        }
    }
});

async function syncSongsToDatabase() {
    if (musicDataSync.length === 0) return;
    try {
        await fetch('http://localhost:3000/api/songs/sync', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ songs: musicDataSync })
        });
    } catch (err) { console.log("Lỗi sync:", err); }
}

function removeDiacritics(str = "") {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase();
}

function getOrCreateSearchDropdown() {
    const searchInput = document.getElementById("search-input-main");
    if (!searchInput) return null;
    const searchBar = searchInput.closest(".search-bar");
    if (!searchBar) return null;

    if (!searchBar.style.position) {
        searchBar.style.position = "relative";
    }

    let dropdown = document.getElementById("search-dropdown-list");
    if (!dropdown) {
        dropdown = document.createElement("div");
        dropdown.id = "search-dropdown-list";
        dropdown.style = "display: none; position: absolute; top: calc(100% + 6px); left: 0; width: 100%; max-height: 300px; overflow-y: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15); z-index: 1001; border: 1px solid #eee;";
        searchBar.appendChild(dropdown);

        document.addEventListener("click", (e) => {
            if (!searchBar.contains(e.target)) {
                dropdown.style.display = "none";
            }
        });
    }
    return dropdown;
}

function renderSearchDropdown(keyword) {
    const dropdown = getOrCreateSearchDropdown();
    if (!dropdown) return;

    const trimmed = keyword.trim();
    if (!trimmed) {
        dropdown.style.display = "none";
        dropdown.innerHTML = "";
        return;
    }

    const cleanQuery = removeDiacritics(trimmed);
    const sourceList = musicDataSync;
    const matched = sourceList.filter(s =>
        removeDiacritics(s.title).includes(cleanQuery) ||
        removeDiacritics(s.artist).includes(cleanQuery) ||
        s.title.toLowerCase().includes(trimmed.toLowerCase()) ||
        s.artist.toLowerCase().includes(trimmed.toLowerCase())
    ).slice(0, 8);

    if (matched.length === 0) {
        dropdown.innerHTML = `<div style="padding: 12px 14px; font-size: 13px; color: #777;">Không tìm thấy bài hát nào.</div>`;
        dropdown.style.display = "block";
        return;
    }

    dropdown.innerHTML = matched.map((song, idx) => `
        <div class="search-dropdown-item" data-index="${idx}" style="display: flex; align-items: center; gap: 10px; padding: 8px 14px; cursor: pointer; border-bottom: 1px solid #f4f4f4;">
            <img src="${song.cover}" alt="Cover" style="width: 36px; height: 36px; border-radius: 6px; object-fit: cover; flex-shrink: 0;">
            <div style="min-width: 0; flex: 1;">
                <div style="font-size: 13px; font-weight: 600; color: #222; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${song.title}</div>
                <div style="font-size: 11.5px; color: #777; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${song.artist}</div>
            </div>
        </div>
    `).join("");

    dropdown.querySelectorAll(".search-dropdown-item").forEach((el, idx) => {
        el.addEventListener("mouseenter", () => {
            el.style.background = "#f0f4ff";
        });
        el.addEventListener("mouseleave", () => {
            el.style.background = "#ffffff";
        });
        el.addEventListener("click", () => {
            loadAndPlaySong(matched, idx);
            dropdown.style.display = "none";
        });
    });

    dropdown.style.display = "block";
}

document.getElementById("search-input-main")?.addEventListener("input", (e) => {
    currentSearch = e.target.value.trim();
    renderSearchDropdown(e.target.value);
    fetchSongs(1, currentSearch, currentMood);
});

document.getElementById("search-input-main")?.addEventListener("focus", (e) => {
    if (e.target.value.trim()) {
        renderSearchDropdown(e.target.value);
    }
});

async function fetchSongs(page = 1, search = "", mood = "") {
    try {
        const cleanQuery = removeDiacritics(search);
        const res = await fetch(`http://localhost:3000/api/songs?page=${page}&limit=20&search=${encodeURIComponent(search)}&mood=${encodeURIComponent(mood)}`);
        const data = await res.json();
        if (data.success) {
            let list = data.songs || [];
            if (cleanQuery && list.length === 0) {
                list = musicDataSync.filter(s =>
                    removeDiacritics(s.title).includes(cleanQuery) ||
                    removeDiacritics(s.artist).includes(cleanQuery)
                );
            }
            musicData = list;
            currentPage = data.pagination?.page || 1;
            renderCards(musicData);
            renderPagination(data.pagination?.totalPages || 1, currentPage);
        }
    } catch (err) {
        console.error(err);
        if (search) {
            const cleanQuery = removeDiacritics(search);
            musicData = musicDataSync.filter(s =>
                removeDiacritics(s.title).includes(cleanQuery) ||
                removeDiacritics(s.artist).includes(cleanQuery)
            );
            renderCards(musicData);
        }
    }
}

function renderCards(data) {
    const cardGrid = document.querySelector(".card-grid");
    if (!cardGrid) return;
    cardGrid.innerHTML = "";

    if (data.length === 0) {
        cardGrid.innerHTML = `<p style="color: #666; grid-column: 1/-1;">Không tìm thấy bài hát nào.</p>`;
        return;
    }

    const likedPl = playlists.find(p => p.name === "Bài hát đã thích");
    const isCustomPlaylistView = !!(activePlaylistId && activePlaylistId !== 'pl_liked');

    data.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        const isLiked = likedPl && likedPl.songs.includes(item.id);

        card.innerHTML = `
            <div class="card-img" style="overflow: hidden; cursor: pointer; position: relative;">
                <img src="${item.cover}" style="width: 100%; height: 100%; object-fit: cover;" alt="Cover">
                ${isCustomPlaylistView ? `
                    <button class="remove-from-pl-btn" data-songid="${item.id}" title="Xóa bài hát khỏi playlist" style="position: absolute; top: 8px; right: 8px; background: rgba(255,71,87,0.88); border: none; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #fff;">
                        <i class='bx bx-trash' style="font-size: 15px;"></i>
                    </button>
                ` : ''}
                <button class="like-btn" data-songid="${item.id}" style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.5); border: none; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                    <i class='bx ${isLiked ? 'bxs-heart' : 'bx-heart'}' style="font-size: 18px; color: ${isLiked ? '#ff4757' : '#fff'};"></i>
                </button>
            </div>
            <div class="card-title">${item.title}</div>
            <div class="card-desc">${item.artist}</div>
        `;

        card.querySelector(".card-img img").addEventListener("click", () => loadAndPlaySong(data, index));
        card.querySelector(".card-title").addEventListener("click", () => loadAndPlaySong(data, index));

        card.querySelector(".like-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            if (isGuestUser()) return promptGuestLogin();
            let liked = playlists.find(p => p.name === "Bài hát đã thích");
            if (!liked) { liked = { id: 'pl_liked', name: "Bài hát đã thích", songs: [] }; playlists.push(liked); }
            const idx = liked.songs.indexOf(item.id);
            if (idx > -1) liked.songs.splice(idx, 1); else liked.songs.push(item.id);
            localStorage.setItem('music_app_playlists', JSON.stringify(playlists));
            renderCards(data);
        });

        if (isCustomPlaylistView) {
            card.querySelector(".remove-from-pl-btn")?.addEventListener("click", (e) => {
                e.stopPropagation();
                if (isGuestUser()) return promptGuestLogin();
                const pl = playlists.find(p => p.id === activePlaylistId);
                if (!pl) return;
                pl.songs = pl.songs.filter(id => id !== item.id);
                localStorage.setItem('music_app_playlists', JSON.stringify(playlists));
                const updatedSongs = musicDataSync.filter(s => pl.songs.includes(s.id));
                renderCards(updatedSongs);
            });
        }

        cardGrid.appendChild(card);
    });
}

function renderPagination(totalPages, page) {
    let pagContainer = document.getElementById("pagination-controls");
    if (!pagContainer) {
        pagContainer = document.createElement("div");
        pagContainer.id = "pagination-controls";
        pagContainer.style = "display: flex; justify-content: center; gap: 10px; margin-top: 30px; margin-bottom: 100px;";
        document.querySelector(".main-feed-column").appendChild(pagContainer);
    }
    pagContainer.innerHTML = "";
    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;
        btn.style = `padding: 5px 12px; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; background: ${i === page ? '#7494ec' : '#fff'}; color: ${i === page ? '#fff' : '#333'}; box-shadow: 0 2px 5px rgba(0,0,0,0.1);`;
        btn.onclick = () => fetchSongs(i, currentSearch, currentMood);
        pagContainer.appendChild(btn);
    }
}

let currentPlaylist = [];
let currentIndex = 0;
let isShuffle = false;
let repeatMode = 0;
const audioPlayer = new Audio();

function initUI() {
    const playPauseBtn = document.getElementById("play-pause-btn");
    if (playPauseBtn) playPauseBtn.addEventListener("click", togglePlayPause);
    
    document.getElementById("next-btn")?.addEventListener("click", () => {
        if (isGuestUser()) return promptGuestLogin();
        currentIndex = getNextIndex();
        loadAndPlaySong(currentPlaylist, currentIndex);
    });
    document.getElementById("prev-btn")?.addEventListener("click", () => {
        if (isGuestUser()) return promptGuestLogin();
        currentIndex = (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        loadAndPlaySong(currentPlaylist, currentIndex);
    });
    document.getElementById("shuffle-btn")?.addEventListener("click", (e) => {
        if (isGuestUser()) return promptGuestLogin();
        isShuffle = !isShuffle;
        e.target.style.color = isShuffle ? "#7494ec" : "";
    });
    document.getElementById("repeat-btn")?.addEventListener("click", (e) => {
        if (isGuestUser()) return promptGuestLogin();
        repeatMode = (repeatMode + 1) % 3;
        e.target.style.color = repeatMode ? "#7494ec" : "";
        e.target.className = repeatMode === 2 ? 'bx bx-redo' : 'bx bx-repeat';
    });
    
    audioPlayer.addEventListener("timeupdate", updateProgress);
    audioPlayer.addEventListener("ended", proceedToNextSong);
    document.getElementById("main-progress-bar")?.addEventListener("click", seekAudio);
    
    document.getElementById("search-input-main")?.addEventListener("input", (e) => {
        currentSearch = e.target.value.trim();
        renderSearchDropdown(e.target.value);
        fetchSongs(1, currentSearch, currentMood);
    });

    const toggleLibBtn = document.getElementById("toggle-library-btn");
    if (toggleLibBtn) {
        toggleLibBtn.title = "Thu gọn";
        toggleLibBtn.addEventListener("mouseenter", () => {
            showToast("Thu gọn");
        });
        toggleLibBtn.addEventListener("click", (e) => {
            e.preventDefault();
            document.body.classList.toggle("library-collapsed");
        });
    }

    const openCreatePlaylistModal = () => {
        if (isGuestUser()) return promptGuestLogin();
        const modal = document.getElementById("playlist-modal");
        const input = document.getElementById("playlist-name-input");
        if (modal) {
            if (input) input.value = "";
            modal.style.display = "flex";
            input?.focus();
        }
    };

    document.getElementById("create-playlist-trigger")?.addEventListener("click", (e) => {
        e.preventDefault();
        openCreatePlaylistModal();
    });

    document.getElementById("sidebar-plus-btn")?.addEventListener("click", (e) => {
        e.preventDefault();
        openCreatePlaylistModal();
    });

    document.getElementById("modal-cancel")?.addEventListener("click", () => {
        document.getElementById("playlist-modal").style.display = "none";
    });

    document.getElementById("modal-confirm")?.addEventListener("click", () => {
        if (isGuestUser()) return promptGuestLogin();
        const input = document.getElementById("playlist-name-input");
        const name = input ? input.value.trim() : "";
        if (!name) return;
        const newPl = {
            id: "pl_" + Date.now(),
            name: name,
            songs: []
        };
        playlists.push(newPl);
        localStorage.setItem("music_app_playlists", JSON.stringify(playlists));
        document.getElementById("playlist-modal").style.display = "none";
        renderSidebarPlaylists();
    });

    document.getElementById("mood-playlist-trigger")?.addEventListener("click", (e) => {
        e.preventDefault();
        if (isGuestUser()) return promptGuestLogin();
        document.getElementById("mood-step-1").style.display = "block";
        document.getElementById("mood-step-2").style.display = "none";
        document.getElementById("mood-playlist-modal").style.display = "flex";
    });

    document.getElementById("mood-modal-close")?.addEventListener("click", () => {
        document.getElementById("mood-playlist-modal").style.display = "none";
    });

    document.querySelectorAll(".mood-option-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            selectedMoodValue = btn.getAttribute("data-mood") || "chill";
            const suggested = musicDataSync.slice(0, 8);
            const listEl = document.getElementById("mood-songs-suggestion-list");
            const nameInput = document.getElementById("mood-playlist-name-input");
            if (nameInput) nameInput.value = `Playlist ${selectedMoodValue}`;
            if (listEl) {
                listEl.innerHTML = suggested.map((s) => `
                    <label style="display:flex; align-items:center; justify-content:space-between; padding:8px 10px; border:1px solid #eee; border-radius:8px; cursor:pointer; font-size:13px;">
                        <span style="display:flex; align-items:center; gap:8px;">
                            <input type="checkbox" class="mood-song-checkbox" value="${s.id}" checked>
                            <b>${s.title}</b> - ${s.artist}
                        </span>
                    </label>
                `).join("");
            }
            document.getElementById("mood-step-1").style.display = "none";
            document.getElementById("mood-step-2").style.display = "flex";
        });
    });

    document.getElementById("mood-back-btn")?.addEventListener("click", () => {
        document.getElementById("mood-step-2").style.display = "none";
        document.getElementById("mood-step-1").style.display = "block";
    });

    document.getElementById("mood-save-playlist-btn")?.addEventListener("click", () => {
        if (isGuestUser()) return promptGuestLogin();
        const nameInput = document.getElementById("mood-playlist-name-input");
        const plName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : `Playlist ${selectedMoodValue}`;
        const checkedIds = Array.from(document.querySelectorAll(".mood-song-checkbox:checked")).map(cb => Number(cb.value));
        const newPl = {
            id: "pl_mood_" + Date.now(),
            name: plName,
            songs: checkedIds
        };
        playlists.push(newPl);
        localStorage.setItem("music_app_playlists", JSON.stringify(playlists));
        document.getElementById("mood-playlist-modal").style.display = "none";
        renderSidebarPlaylists();
    });

    document.getElementById("playlist-add-song-btn")?.addEventListener("click", () => {
        if (isGuestUser()) return promptGuestLogin();
        if (!activePlaylistId || activePlaylistId === 'pl_liked') return;
        const searchInput = document.getElementById("quick-search-song-input");
        if (searchInput) searchInput.value = "";
        renderQuickAddSongList("");
        document.getElementById("add-song-modal").style.display = "flex";
    });

    document.getElementById("add-modal-close")?.addEventListener("click", () => {
        document.getElementById("add-song-modal").style.display = "none";
    });

    document.getElementById("quick-search-song-input")?.addEventListener("input", (e) => {
        renderQuickAddSongList(e.target.value.trim());
    });

    renderSidebarPlaylists();
}

function showToast(msg) {
    let toast = document.getElementById("library-hover-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "library-hover-toast";
        toast.style = "position: fixed; bottom: 105px; left: 24px; background: #222; color: #fff; padding: 6px 12px; border-radius: 8px; font-size: 12px; font-weight: 600; z-index: 2000; opacity: 0; transition: opacity 0.2s ease; pointer-events: none; box-shadow: 0 4px 12px rgba(0,0,0,0.2);";
        document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.style.opacity = "1";
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => {
        toast.style.opacity = "0";
    }, 1200);
}

function renderQuickAddSongList(keyword) {
    const listContainer = document.getElementById("modal-song-list");
    if (!listContainer) return;
    const kw = keyword.toLowerCase();
    const filtered = musicDataSync.filter(s =>
        !kw || s.title.toLowerCase().includes(kw) || s.artist.toLowerCase().includes(kw)
    );

    const pl = playlists.find(p => p.id === activePlaylistId);
    listContainer.innerHTML = filtered.map(song => {
        const alreadyIn = pl && pl.songs.includes(song.id);
        return `
            <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 10px; border:1px solid #eee; border-radius:8px;">
                <div style="min-width:0; margin-right:8px;">
                    <div style="font-size:13.5px; font-weight:600; color:#222; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${song.title}</div>
                    <div style="font-size:12px; color:#777;">${song.artist}</div>
                </div>
                <button class="quick-add-item-btn" data-songid="${song.id}" style="padding:5px 10px; border:none; border-radius:6px; cursor:pointer; font-size:12px; font-weight:600; background:${alreadyIn ? '#e0e0e0' : '#7494ec'}; color:${alreadyIn ? '#555' : '#fff'}; flex-shrink:0;">
                    ${alreadyIn ? 'Đã có' : 'Thêm'}
                </button>
            </div>
        `;
    }).join("");

    listContainer.querySelectorAll(".quick-add-item-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            if (isGuestUser()) return promptGuestLogin();
            const songId = Number(btn.getAttribute("data-songid"));
            const targetPl = playlists.find(p => p.id === activePlaylistId);
            if (!targetPl) return;
            if (!targetPl.songs.includes(songId)) {
                targetPl.songs.push(songId);
                localStorage.setItem("music_app_playlists", JSON.stringify(playlists));
                const plSongs = musicDataSync.filter(s => targetPl.songs.includes(s.id));
                renderCards(plSongs);
                renderQuickAddSongList(keyword);
            }
        });
    });
}

function sharePlaylistItem(plObj) {
    if (isGuestUser()) return promptGuestLogin();
    const payload = encodeURIComponent(JSON.stringify({ name: plObj.name, songs: plObj.songs || [] }));
    const baseUrl = `${window.location.origin}${window.location.pathname}`;
    const shareUrl = `${baseUrl}?share=${payload}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).catch(() => {});
    }
    Swal.fire({
        title: "Chia sẻ với bạn bè",
        html: `<p style="font-size:13px; margin-bottom:8px;">Link chia sẻ playlist <b>${plObj.name}</b>:</p><input type="text" readonly value="${shareUrl}" style="width:100%; padding:8px; border:1px solid #ddd; border-radius:6px; font-size:12px;">`,
        icon: "success",
        confirmButtonText: "Đóng",
        confirmButtonColor: "#7494ec"
    });
}

function handleLikedSongsClick(e) {
    e.preventDefault();
    if (isGuestUser()) return promptGuestLogin();
    const likedPl = playlists.find(p => p.name === "Bài hát đã thích");
    const likedIds = likedPl ? likedPl.songs : [];
    const perPage = 20;
    const totalLikedPages = Math.ceil(likedIds.length / perPage);

    if (totalLikedPages === 0) {
        Swal.fire({
            title: "Thông báo",
            text: "Chưa có bài hát yêu thích",
            icon: "info",
            confirmButtonText: "Đóng",
            confirmButtonColor: "#7494ec"
        });
        return;
    }

    activePlaylistId = "pl_liked";
    document.getElementById("playlist-view-toolbar").style.display = "none";
    document.getElementById("main-section-title").innerText = "Bài hát đã thích";
    document.getElementById("hero-banner-section").style.display = "none";

    const likedSongs = musicDataSync.filter(s => likedIds.includes(s.id));
    renderCards(likedSongs.slice(0, perPage));
    renderPagination(totalLikedPages, 1);
}

function formatTime(sec) {
    if (isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60), s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

window.loadAndPlaySong = function(list, index) {
    if (!list || list.length === 0) return;
    currentPlaylist = list;
    currentIndex = index;
    const song = currentPlaylist[currentIndex];

    audioPlayer.src = song.src;
    audioPlayer.play().catch(err => console.log(err));
    document.getElementById("play-pause-btn").className = 'bx bx-pause-circle play-btn';
    
    document.querySelector(".track-name").innerText = song.title;
    document.querySelector(".artist-name").innerText = song.artist;
    document.querySelector(".track-cover").src = song.cover;

    if (!isGuestUser()) {
        fetch('http://localhost:3000/api/history/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: currentUsername, song: song })
        }).catch(e => console.log(e));
    }
};

function togglePlayPause() {
    const btn = document.getElementById("play-pause-btn");
    if (audioPlayer.paused) {
        audioPlayer.play();
        btn.className = 'bx bx-pause-circle play-btn';
    } else {
        audioPlayer.pause();
        btn.className = 'bx bx-play-circle play-btn';
    }
}

function getNextIndex() {
    return isShuffle ? Math.floor(Math.random() * currentPlaylist.length) : (currentIndex + 1) % currentPlaylist.length;
}

function proceedToNextSong() {
    if (repeatMode === 2) { audioPlayer.currentTime = 0; audioPlayer.play(); }
    else if (repeatMode === 1 || isShuffle) { currentIndex = getNextIndex(); loadAndPlaySong(currentPlaylist, currentIndex); }
    else if (currentIndex < currentPlaylist.length - 1) { currentIndex++; loadAndPlaySong(currentPlaylist, currentIndex); }
    else { document.getElementById("play-pause-btn").className = 'bx bx-play-circle play-btn'; }
}

function updateProgress() {
    if (audioPlayer.duration) {
        const p = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        document.querySelector(".progress-fill").style.width = `${p}%`;
        document.querySelector(".current-time").innerText = formatTime(audioPlayer.currentTime);
        document.querySelector(".total-duration").innerText = formatTime(audioPlayer.duration);
    }
}

function seekAudio(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    if (audioPlayer.duration) audioPlayer.currentTime = pct * audioPlayer.duration;
}

async function checkUserPremiumStatus(username) {
    try {
        const response = await fetch(`http://localhost:3000/api/user-status/${username}`);
        const data = await response.json();
        if (data.success) {
            userIsPremium = data.is_premium;
            const badgeEl = document.getElementById("account-badge");
            if (userIsPremium) {
                badgeEl.innerText = "PREMIUM ⭐"; badgeEl.style.color = "#2ed573"; badgeEl.style.background = "#e8f8f0";
            } else {
                badgeEl.innerText = "FREE"; badgeEl.style.color = "#ff4757"; badgeEl.style.background = "#ffebee";
            }
        }
    } catch (err) { console.log(err); }
}

window.renderSidebarPlaylists = function() {
    const playlistLinks = document.querySelector(".playlist-links");
    if (!playlistLinks) return;

    const likedPl = playlists.find(p => p.name === "Bài hát đã thích") || { id: "pl_liked", name: "Bài hát đã thích", songs: [] };
    const customPlaylists = playlists.filter(p => p.name !== "Bài hát đã thích");

    let html = `
        <li><a href="#" id="create-playlist-trigger"><i class='bx bxs-plus-square'></i> <span class="nav-text">Tạo playlist</span></a></li>
        <li class="sidebar-pl-item">
            <a href="#" id="liked-songs-link" class="sidebar-pl-link"><i class='bx bxs-heart-square'></i> <span class="nav-text">Bài hát đã thích</span></a>
            <div class="sidebar-pl-actions">
                <button type="button" class="sidebar-icon-action share-pl-btn" data-plid="${likedPl.id}" title="Chia sẻ với bạn bè"><i class='bx bx-share-alt'></i></button>
            </div>
        </li>
        <hr style="border:0; border-top:1px solid #eee; margin: 8px 0;">
    `;

    customPlaylists.forEach(pl => {
        html += `
            <li class="sidebar-pl-item">
                <a href="#" class="sidebar-pl-link custom-pl-open-link" data-plid="${pl.id}"><i class='bx bxs-playlist'></i> <span class="nav-text">${pl.name}</span></a>
                <div class="sidebar-pl-actions">
                    <button type="button" class="sidebar-icon-action share-pl-btn" data-plid="${pl.id}" title="Chia sẻ với bạn bè"><i class='bx bx-share-alt'></i></button>
                    <button type="button" class="sidebar-icon-action delete-pl-btn" data-plid="${pl.id}" title="Xóa playlist"><i class='bx bx-trash'></i></button>
                </div>
            </li>
        `;
    });

    playlistLinks.innerHTML = html;

    document.getElementById("create-playlist-trigger")?.addEventListener("click", (e) => {
        e.preventDefault();
        if (isGuestUser()) return promptGuestLogin();
        const modal = document.getElementById("playlist-modal");
        const input = document.getElementById("playlist-name-input");
        if (modal) {
            if (input) input.value = "";
            modal.style.display = "flex";
            input?.focus();
        }
    });

    document.getElementById("liked-songs-link")?.addEventListener("click", handleLikedSongsClick);

    playlistLinks.querySelectorAll(".custom-pl-open-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            if (isGuestUser()) return promptGuestLogin();
            const plId = link.getAttribute("data-plid");
            const pl = playlists.find(p => p.id === plId);
            if (!pl) return;
            activePlaylistId = pl.id;
            document.getElementById("main-section-title").innerText = pl.name;
            document.getElementById("hero-banner-section").style.display = "none";
            document.getElementById("playlist-view-toolbar").style.display = "flex";
            const plSongs = musicDataSync.filter(s => pl.songs.includes(s.id));
            renderCards(plSongs);
            renderPagination(1, 1);
        });
    });

    playlistLinks.querySelectorAll(".share-pl-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const plId = btn.getAttribute("data-plid");
            const plObj = plId === likedPl.id ? likedPl : playlists.find(p => p.id === plId);
            if (plObj) sharePlaylistItem(plObj);
        });
    });

    playlistLinks.querySelectorAll(".delete-pl-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (isGuestUser()) return promptGuestLogin();
            const plId = btn.getAttribute("data-plid");
            playlists = playlists.filter(p => p.id !== plId);
            localStorage.setItem("music_app_playlists", JSON.stringify(playlists));
            if (activePlaylistId === plId) {
                activePlaylistId = null;
                document.getElementById("playlist-view-toolbar").style.display = "none";
                document.getElementById("main-section-title").innerText = "Bài hát nổi bật";
                document.getElementById("hero-banner-section").style.display = "flex";
                fetchSongs(currentPage, currentSearch, currentMood);
            }
            renderSidebarPlaylists();
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("user-profile-dropdown-btn")?.addEventListener("click", (e) => {
        e.stopPropagation();
        document.getElementById("account-dropdown-menu").style.display = "block";
    });
    document.addEventListener("click", () => {
        document.getElementById("account-dropdown-menu").style.display = "none";
    });

    document.getElementById("menu-logout-btn")?.addEventListener("click", (e) => {
        e.preventDefault();
        Swal.fire({ title: 'Đăng xuất?', icon: 'warning', showCancelButton: true, confirmButtonText: 'Đăng xuất' })
            .then(res => { if (res.isConfirmed) { localStorage.clear(); window.location.href = "SignUp_Login_Form.html"; } });
    });
});