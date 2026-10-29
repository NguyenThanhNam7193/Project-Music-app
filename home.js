// Khai báo biến playlists toàn cục để các hàm bên ngoài truy cập được
let playlists = [
    { name: "Bài hát đã thích", songs: [1, 3, 11] }
];

let musicData = [
    // 1. Sơn Tùng M-TP (10 bài)
    { id: 1, title: "Em Của Ngày Hôm Qua", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/Sơn Tùng M-TP - Em Của Ngày Hôm Qua.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 2, title: "Chắc Ai Đó Sẽ Về", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/Sơn Tùng M-TP - Chắc Ai Đó Sẽ Về.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 3, title: "Nơi Này Có Anh", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/Sơn Tùng MTP - Nơi Này Có Anh (Việt Nam Lyrics Subtitles).mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 4, title: "Hãy Trao Cho Anh", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/SƠN TÙNG M-TP HÃY TRAO CHO ANH ft. Snoop Dogg-Lyrics.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 5, title: "Muộn Rồi Mà Sao Còn", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/SƠN TÙNG M-TP _ MUỘN RỒI MÀ SAO CÒN _ LYRICS VIDEO [-4jird32CnE].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 6, title: "Có Chắc Yêu Là Đây", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/Có Chắc Yêu Là Đây - Sơn Tùng M-TP [ Lyrics __ Speed Up ] _ Hoshino - Blue Archive Live2D [dp6zsliTuVM].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 7, title: "Chúng Ta Của Hiện Tại", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/[lyric] CHÚNG TA CỦA TƯƠNG LAI - Sơn Tùng M-TP [MlMJVJxugKg].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 8, title: "Đừng Làm Trái Tim Anh Đau", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/SƠN TÙNG M-TP ĐỪNG LÀM TRÁI TIM ANH ĐAU OFFICIAL MUSIC VIDEO.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 9, title: "Lạc Trôi", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/Lạc Trôi Sơn Tùng MTP ‹ Lyric Video ›.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 10, title: "Chúng Ta Của Tương Lai", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "audio/sontung/[lyric] CHÚNG TA CỦA TƯƠNG LAI - Sơn Tùng M-TP [MlMJVJxugKg].mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },

    // 2. Quân A.P (10 bài)
    { id: 11, title: "Ai Là Người Thương Em", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/AI LÀ NGƯỜI THƯƠNG EM - QUÂN A.P LYRICS.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 12, title: "Bông Hoa Đẹp Nhất", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/QUÂN A.P BÔNG HOA ĐẸP NHẤT OFFICIAL MUSIC VIDEO.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 13, title: "Còn Gì Đau Hơn Chữ Đã Từng", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/QUÂN A.P _ Còn Gì Đau Hơn Chữ Đã Từng - Lyrics Audio [0guTY3qkGx0].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 14, title: "Đáp Án Cuối Cùng", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/ĐÁP ÁN CUỐI CÙNG _ QUÂN A.P _ LYRICS VIDEO [5z0u0BfPJ8o].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 15, title: "Có Ai Hẹn Hò Cùng Em Chưa", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/CÓ AI HẸN HÒ CÙNG EM CHƯA QUÂN A.P OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 16, title: "Lời Xin Lỗi Vụng Về", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/LỜI XIN LỖI VỤNG VỀ - QUÂN A.P OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 17, title: "You Are My Crush", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/You Are My Crush - Quân A.P x Nguyên Jenda OFFICIAL MUSIC VIDEO.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 18, title: "Yêu Em Dại Khờ", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/Yêu em dại khờ _ Chàng trai si tình Quân A.P và lời thổ lộ khiến con tim thổn thức [MEM_pt63GlY]-[AudioTrimmer.com].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 19, title: "Phản Bội Chính Mình", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/Phản Bội Chính Mình - Quân A.P ft Vương Anh Tú _ Lyrics Video [SOWG9PjzT08].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 20, title: "Chiếc Khăn Gió Ấm", artist: "Quân A.P", desc: "Quân A.P", src: "audio/Quân ap/Chiếc Khăn Gió Ấm _ Quân A.P hát live cực 'cháy' khiến fan mê mệt _ Biển của hy vọng [4SB71XqtK3w]-[AudioTrimmer.com].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },

    // 3. Bùi Trường Linh (10 bài)
    { id: 21, title: "Dù Cho Mai Về Sau", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Dù Cho Mai Về Sau (Official Music Video) buitruonglinh.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 22, title: "Đường Tôi Chở Em Về", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Đường Tôi Chở Em Về buitruonglinh Lyrics Video.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 23, title: "Từng Ngày Yêu Em", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Từng Ngày Yêu Em buitruonglinh.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 24, title: "Yêu Không Cần Cố", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Yêu Không Cần Cố (Official MV) _ buitruonglinh x Cornetto [mt6SWWMVEjc].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 25, title: "Giờ Thì", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Giờ Thì (Official MV) buitruonglinh.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 26, title: "Nếu Em Còn Đợi Anh", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Nếu Em Còn Đợi Anh _ buitruonglinh [SPCcMxngATY].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 27, title: "Yêu Người Có Ước Mơ", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Yêu Người Có Ước Mơ buitruonglinh.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 28, title: "Lựa Chọn Của Em", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Lựa Chọn Của Em _ buitruonglinh ft. vuphungtien, dautatdat [IJML-4ZYejA].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 29, title: "Việt Nam Thịnh Vượng Sáng Ngời", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Thịnh Vượng Việt Nam Sáng Ngời buitruonglinh.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 30, title: "Lời Tạm Biệt", artist: "Bùi Trường Linh", desc: "Bùi Trường Linh", src: "audio/BuiTruongLinh/Lời Tạm Biệt _ buitruonglinh [Xy9uRLB-1Bs].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },

    // 4. Jack-J97 (10 bài)
    { id: 31, title: "Hồng Nhan", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/JACK - HỒNG NHAN LYRIC VIDEO _ G5R [PyMpi8No_C4].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 32, title: "Bạc Phận", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/BẠC PHẬN VIDEO LYRIC _ JACK x K-ICM [886d9rm_AFE].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 33, title: "Sóng Gió", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/[lyrics] sóng gió_Jack_ J97@J97imjack [Ury91hEXlfE].mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 34, title: "Em Gì Ơi", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/EM GÌ ƠI _ ICM x JACK _ OFFICIAL MUSIC VIDEO [cBClD7jylos].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 35, title: "Sao Em Vô Tình", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/LYRIC SAO EM VÔ TÌNH JACK x K-ICM ft. LIAM.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 36, title: "Hoa Hải Đường", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/Hoa Hải Đường - Jack _ Lyrics Video #HHD [uaIj-XbTyNk].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 37, title: "Đom Đóm", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/Đom Đóm - Jack [Lyrics video] [DCOfrrA36sk].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 38, title: "Là 1 Thằng Con Trai", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/Là 1 Thằng Con Trai - Jack - J97 x KProx「Lo - Fi Ver.」 _ Audio Lyrics Video [EQ0BI7CMUAc].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 39, title: "Về Bên Anh", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/OFFICIAL MV VỀ BÊN ANH - Jack (G5R).mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 40, title: "Việt Nam Tôi", artist: "Jack-J97", desc: "Jack-J97", src: "audio/Jack-J97/VIỆT NAM TÔI ICM x JACK ft. TRUNG LƯƠNG x CHẤN QUỐC OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },

    // 5. Đạt G (10 bài)
    { id: 41, title: "Anh Tự Do Nhưng Cô Đơn", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Đạt G - Anh Tự Do Nhưng Cô Đơn Live at DearOcean DatGMusic _.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 42, title: "Thêm Bao Nhiêu Lâu", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Thêm Bao Nhiêu Lâu - Đạt G __ OFFICIAL MV [sinhZ1l54K8].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 43, title: "Ngày Mai Em Đi Mất", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/NGÀY MAI EM ĐI MẤT - KHẢI ĐĂNG FT ĐẠT G (OFFICIAL MV).mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 44, title: "Buồn Không Em", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Buồn Không Em - Đạt G __ Lyrics videos [DwBgmWUF5Q4].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 45, title: "Cao ốc 20", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Cao Ốc 20 B RAY x DatG (ft MASEW x K-ICM) MV OFFICIAL.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 46, title: "Chỉ Khi Anh Một Mình", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Đạt G - Chỉ Khi Anh Một Mình _ DRUNK ON MUSIC [wK9OuQ9kMa0].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 47, title: "Có Như Không Có", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Có Như Không Có - Hiền Hồ _ Official Lyrics Video [dsri8IJI6rY].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 48, title: "Đừng Quên Tên Anh", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Đừng Quên Tên Anh - Hoa Vinh Official Music Video (4k).mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 49, title: "Bánh Mì Không", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Bánh Mì Không - ĐạtG x DuUyên OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 50, title: "Ác Mộng Đẹp", artist: "Đạt G", desc: "Đạt G", src: "audio/Đạt G/Ác Mộng Đẹp - Đạt G _ Chapter 3_ Đẹp _ Album _Ác Mộng Đẹp_ [9eL4Scy4-Ys].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },

    // 6. Thanh Hưng (10 bài)
    { id: 51, title: "Sai Người Sai Thời Điểm", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Sai Người Sai Thời Điểm - Thanh Hưng _ Lyric Video [ICOcEzXsEOI].mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 52, title: "Đúng Người Đúng Thời Điểm", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Đúng Người Đúng Thời Điểm _ Official MV _ Thanh Hưng x Huy Cung x Mỹ Linh [KFmQUJ2dj3k].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 53, title: "Thay Tôi Yêu Cô Ấy", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Thay Tôi Yêu Cô Ấy (ĐNSTĐ) - Thanh Hưng _ Official Lyrics Video [kSYhR8vnzBg].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 54, title: "Tệ Thật, Anh Nhớ Em", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Tệ Thật, Anh Nhớ Em Thanh Hưng Official Lyric Video.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 55, title: "Phải Giữ Em Thôi", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/PHẢI GIỮ EM THÔI _ THANH HƯNG (Official MV) [z7Px4WbDrlU].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 56, title: "Em Muốn Ta Là Gì", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Em Muốn Ta Là Gì - Thanh Hưng Official M V.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 57, title: "Cần Không Có, Có Không Cần", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Cần Không Có, Có Không Cần - Thanh Hưng (Lyrics Video).mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 58, title: "Khó Gần Dễ Xa", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/Khó Gần Dễ Xa - Thanh Hưng (Official MV) Đây Là Lần Cuối Anh Để Nước Mắt Rơi Thế Này.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 59, title: "Anh thề đấy", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/ANH THỀ ĐẤY _ THANH HƯNG _ OFFICIAL MUSIC VIDEO [hnXZG1WxczU].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 60, title: "Em Cưới Rồi À", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "audio/Thanh Hưng/EM CƯỚI RỒI À - THANH HƯNG “Em cuoi roi a, khong doi anh nua a” Official MV Valentine 2025.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },

    // 7. w/n (10 bài)
    { id: 61, title: "3107", artist: "w/n", desc: "w/n", src: "audio/wn/W n - 3 1 0 7 ( Official Video ) ft. Nâu, Duongg.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 62, title: "3107-2", artist: "w/n", desc: "w/n", src: "audio/wn/3107-2 DuongG x NÂU x W N OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 63, title: "3107-3", artist: "w/n", desc: "w/n", src: "audio/wn/W n - 3107 3 ( Official Video ) ft. 267, Nâu, Duongg,.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 64, title: "3107-4", artist: "w/n", desc: "w/n", src: "audio/wn/W_n - 3107 4 x Erik ft Nâu (Official Music Video) [cbHIMNxT7Zc].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 65, title: "3107-7", artist: "w/n", desc: "w/n", src: "audio/wn/31077 - W_n ( Official Video ) ft. titie, Duongg [mY_xrBrCa2w].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 66, title: "id 072019", artist: "w/n", desc: "w/n", src: "audio/wn/W n - id 072019 3107 ft 267.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 67, title: "id 2022", artist: "w/n", desc: "w/n", src: "audio/wn/W n - id 2022 ft. 267 OFFICIAL MUSIC VIDEO.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 68, title: "Simple Love (Remix)", artist: "w/n", desc: "w/n", src: "audio/wn/Simple Love - Obito x Seachains _ DuckV Remix [IeaRT-Gym6o].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 69, title: "SSD", artist: "w/n", desc: "w/n", src: "audio/wn/W n - SSD ft. (267, Nguyenn, PAR SG).mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 70, title: "Text 07", artist: "w/n", desc: "w/n", src: "audio/wn/W n - Text 07 (ft. 267).mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },

    // 8. Soobin (10 bài)
    { id: 71, title: "Phía Sau Một Cô Gái", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/PHÍA SAU MỘT CÔ GÁI - Soobin Hoàng Sơn ( OFFICIAL Lyric Video ).mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 72, title: "Xin Đừng Lặng Im", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/SOOBIN - Xin Đừng Lặng Im.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 73, title: "The Playah", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/SOOBIN X SLIMV - THE PLAYAH (Special Performance _ Official Music Video) [d44UTUSTYKU].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 74, title: "Trò Chơi", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/SOOBIN - TRÒ CHƠI (Official Music Video) [QFHvfQDgRFA].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 75, title: "Đi Để Trở Về", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/Đi Để Trở Về - Soobin Hoàng Sơn _ Official Music Video [iy53wPnNCYU].mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 76, title: "Yêu Thương Ngày Đó", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/[Lyrics] Yêu Thương Ngày Đó - Soobin Hoàng Sơn _ OST Yêu Em Bất Chấp.mp4", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 77, title: "Anh Đã Quen Với Cô Đơn", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/Anh Đã Quen Với Cô Đơn ( Lyric Video ) - Soobin Anh thường hay vẫn nằm mơ về một ngôi nhà Tik Tok.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 78, title: "Lalala", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/LALALA - Soobin Hoàng Sơn - Official Music Video 4K [Ia_ddlGr1ic].mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 79, title: "Giá Như", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/SOOBIN - giá như _ 'BẬT NÓ LÊN' Album (Official MV) [SeWt7IpZ0CA].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 80, title: "Mục Hạ Vô Nhân", artist: "Soobin", desc: "Soobin", src: "audio/Soobin Hoàng Sơn/Mục Hạ Vô Nhân (Official MV) _ SOOBIN - Binz - NSND Huỳnh Tú [FikdKWos-NQ].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },

    // 9. Noo Phước Thịnh (10 bài)
    { id: 81, title: "Những Kẻ Mộng Mơ", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/NHỮNG KẺ MỘNG MƠ Noo Phước Thịnh OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 82, title: "Em Đã Thương Người Ta Hơn Anh", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Em Đã Thương Người Ta Hơn Anh _ NOO PHƯỚC THỊNH x VƯƠNG ANH TÚ _ OFFICIAL MV [fzfQUUTtEzk].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 83, title: "Như Phút Ban Đầu", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Như Phút Ban Đầu - Noo Phước Thịnh [ Official Lyrics Video ].mp4", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 84, title: "Mãi Mãi Bên Nhau", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Noo Phước Thịnh - Mãi Mãi Bên Nhau (Official Music Video).mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 85, title: "Năm Qua Đã Làm Gì", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Năm Qua Đã Làm Gì - Noo Phước Thịnh _ Gala Nhạc Việt 14 [x4IwuZ7asH4].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 86, title: "Giá Như", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Giá Như - Noo Phước Thịnh _ Live @ Noo's Chill Night EP.01 [QOQI3dJpYIg].mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 87, title: "Chờ Ngày Mưa Tan", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Chờ Ngày Mưa Tan - Noo Phước Thịnh「Official Lyrics Video」Mưa. [Nemca9pbNr0].mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 88, title: "Chạm Khẽ Tim Anh Một Chút Thôi", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Chạm Khẽ Tim Anh Một Chút Thôi Noo Phước Thịnh LYRIC VIDEO.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 89, title: "Gạt Đi Nước Mắt", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/Noo Phước Thịnh - Gạt Đi Nước Mắt ft. Tonny Việt [bD3B1I3Zgog].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 90, title: "Yêu Một Người Sao Buồn Đến Thế", artist: "Noo Phước Thịnh", desc: "Noo Phước Thịnh", src: "audio/Noo Phước Thịnh/YÊU MỘT NGƯỜI SAO BUỒN ĐẾN THẾ NOO PHUOC THINH OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },

    // 10. Nguyễn Hùng (10 bài)
    { id: 91, title: "Phép Màu", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/Phép Màu (Đàn Cá Gỗ OST) - Mounter x MAYDAYs, Minh Tốc Official MV.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 92, title: "Còn Gì Đẹp Hơn", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/CÒN GÌ ĐẸP HƠN (ca khúc lấy cảm hứng từ phim Mưa đỏ) - Nguyễn Hùng Lyric Video.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 93, title: "Kiếm Đâu Bây Giờ", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/KIẾM ĐÂU BÂY GIỜ - Nguyễn Hùng (OST CỤC VÀNG CỦA NGOẠI) OFFICIAL MUSIC VIDEO.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 94, title: "Lỡ Thương Nhau", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/Lỡ Thương Nhau (Bò Sữa Bay OST) - Mounter x Nguyễn Hùng _ Official MV [gEDpsS7p6Co].mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" },
    { id: 95, title: "Gói Con Tim Làm Quà", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/Gói Con Tim Làm Quà (Bò Sữa Bay OST) - Mounter x Nguyễn Hùng _ Official MV [oMGPJ4uE_W8].mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&auto=format&fit=crop&q=60" },
    { id: 96, title: "Ở Trong Khu Rừng", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/Nguyễn Hùng - Ở Trong Khu Rừng Cảm Ơn Người Đã Thức Cùng Tôi OST Official Visualizer.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=60" },
    { id: 97, title: "5 Ngón Bàn Tay", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/5 Ngón Bàn Tay (Đàn Cá Gỗ OST) - Mounter x Nguyễn Hùng _ Official Lyric Video [QMkvS79fxcw].mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300&auto=format&fit=crop&q=60" },
    { id: 98, title: "Hẹn Lần Sau", artist: "Nguyễn Hùng", desc: "Nguyễn Hùng", src: "audio/Nguyễn Hùng/Hẹn Lần Sau - MAYDAYs Official Music Video.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=60" },
    { id: 99, title: "Nàng Thơ", artist: "Hoàng Dũng", desc: "Hoàng Dũng", src: "audio/Nguyễn Hùng/Nàng Thơ Hoàng Dũng Official MV.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&auto=format&fit=crop&q=60" },
    { id: 100, title: "Ước Mơ Của Mẹ", artist: "Quân AP Cover", desc: "Quân AP cover", src: "audio/Nguyễn Hùng/QUÂN A.P - ƯỚC MƠ CỦA MẸ OFFICIAL MV.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=60" }
];

// Hàm chuẩn hóa tiếng Việt dùng chung toàn cục
function removeVietnameseAccents(str) {
    if (!str) return '';
    return str.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem("user_displayName") || "Người dùng";
    const userPhoto = localStorage.getItem("user_photoURL");

    const nameElement = document.getElementById("user-name");
    if (nameElement) nameElement.innerText = userName;

    const avatarBox = document.getElementById("avatar-box");
    if (avatarBox) {
        if (userPhoto) {
            avatarBox.innerHTML = `<img src="${userPhoto}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
        } else {
            avatarBox.innerText = userName.charAt(0).toUpperCase();
        }
    }

    const logoutBtn = document.getElementById("logout-dev") || document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            Swal.fire({
                title: 'Đăng xuất?',
                text: "Bạn có chắc chắn muốn thoát khỏi tài khoản không?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#7494ec',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Đồng ý',
                cancelButtonText: 'Hủy',
                background: '#ffffff',
                color: '#333'
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.clear();
                    window.location.href = "SignUp_LogIn_Form.html";
                }
            });
        });
    }

    let currentPlaylist = musicData;
    let currentIndex = 0;
    let isShuffle = false;
    const audioPlayer = new Audio();

    const cardGrid = document.querySelector(".card-grid");
    const sectionTitle = document.querySelector(".section-title");
    const playBtn = document.querySelector(".play-btn");
    const trackCover = document.querySelector(".track-cover");
    const trackName = document.querySelector(".track-name");
    const artistName = document.querySelector(".artist-name");
    const currentTimeEl = document.querySelector(".current-time");
    const totalDurationEl = document.querySelector(".total-duration");
    const progressFill = document.querySelector(".progress-fill");
    const progressBarContainer = document.querySelector(".progress-bar-container .progress-bar") || document.querySelector(".progress-bar");
    
    const shuffleBtn = document.querySelector(".bx-shuffle");
    const searchInput = document.querySelector(".main-content input, input[type='text']") || document.querySelector("input");

    // === TÍCH HỢP ĐIỀU CHỈNH ÂM LƯỢNG CHO THANH VOLUME CÓ SẴN TRONG HTML ===
    const volumeContainer = document.querySelector(".volume-controls .progress-bar");
    if (volumeContainer) {
        let volFill = volumeContainer.querySelector(".progress-fill");
        audioPlayer.volume = 0.7; // Mặc định 70%
        if (volFill) volFill.style.width = "70%";

        const updateVolumeByClick = (e) => {
            const rect = volumeContainer.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            let width = rect.width;
            if (width <= 0) width = 80;
            let percent = clickX / width;
            if (percent < 0) percent = 0;
            if (percent > 1) percent = 1;

            audioPlayer.volume = percent;
            if (volFill) volFill.style.width = `${percent * 100}%`;
        };

        volumeContainer.style.cursor = "pointer";
        volumeContainer.addEventListener("click", updateVolumeByClick);

        let isDraggingVol = false;
        volumeContainer.addEventListener("mousedown", () => { isDraggingVol = true; });
        document.addEventListener("mousemove", (e) => {
            if (isDraggingVol) updateVolumeByClick(e);
        });
        document.addEventListener("mouseup", () => { isDraggingVol = false; });
    }

    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function getNextIndex() {
        if (isShuffle) {
            return Math.floor(Math.random() * currentPlaylist.length);
        } else {
            return (currentIndex + 1) % currentPlaylist.length;
        }
    }

    window.loadAndPlaySong = function(list, index) {
        if (!list || list.length === 0) return;
        currentPlaylist = list;
        currentIndex = index;
        const song = currentPlaylist[currentIndex];

        audioPlayer.src = song.src;
        audioPlayer.play().then(() => {
            if (playBtn) playBtn.className = 'bx bx-pause-circle play-btn';
        }).catch(err => console.log("Autoplay blocked:", err));

        if (trackName) trackName.innerText = song.title;
        if (artistName) artistName.innerText = song.artist;
        if (trackCover) trackCover.src = song.cover;
    };

    if (shuffleBtn) {
        shuffleBtn.style.cursor = "pointer";
        shuffleBtn.addEventListener("click", () => {
            isShuffle = !isShuffle;
            shuffleBtn.style.color = isShuffle ? "#7494ec" : "";
        });
    }

    // === TÍCH HỢP TÌM KIẾM LIVE DROPDOWN & KHỚP KHÔNG DẤU ===
    if (searchInput) {
        if (searchInput.parentElement) {
            searchInput.parentElement.style.position = 'relative';
        }

        let dropdownBox = document.createElement('div');
        dropdownBox.id = 'search-dropdown-results';
        dropdownBox.style.cssText = `
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            width: 100%;
            background: #282828;
            border-radius: 8px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.5);
            max-height: 400px;
            overflow-y: auto;
            z-index: 9999;
            display: none;
            padding: 8px;
            color: #fff;
        `;
        searchInput.parentElement.appendChild(dropdownBox);

        searchInput.addEventListener("input", (e) => {
            const keyword = removeVietnameseAccents(e.target.value.trim());
            
            if (!keyword) {
                dropdownBox.style.display = 'none';
                renderCards(musicData, "Bài hát nổi bật", false);
                return;
            }

            const matchedSongs = musicData.filter(song => 
                removeVietnameseAccents(song.title).includes(keyword) || 
                removeVietnameseAccents(song.artist).includes(keyword) ||
                removeVietnameseAccents(song.genre || '').includes(keyword)
            );

            renderCards(matchedSongs, `Kết quả tìm kiếm: "${e.target.value.trim()}"`, false);

            if (matchedSongs.length === 0) {
                dropdownBox.innerHTML = `<div style="padding: 12px; text-align: center; color: #aaa; font-size: 14px;">Không tìm thấy bài hát phù hợp</div>`;
                dropdownBox.style.display = 'block';
                return;
            }

            let html = '';
            matchedSongs.slice(0, 6).forEach(song => {
                const originalIndex = musicData.findIndex(s => s.id === song.id);
                html += `
                    <div class="dropdown-search-item" onclick="loadAndPlaySong(musicData, ${originalIndex}); document.getElementById('search-dropdown-results').style.display='none';" style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; cursor: pointer; border-radius: 6px; transition: background 0.2s;" onmouseover="this.style.background='#3e3e3e'" onmouseout="this.style.background='transparent'">
                        <img src="${song.cover || 'default-cover.jpg'}" style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover;">
                        <div style="overflow: hidden;">
                            <div style="font-size: 14px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #fff;">${song.title}</div>
                            <div style="font-size: 12px; color: #aaa; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Bài hát • ${song.artist}</div>
                        </div>
                    </div>
                `;
            });

            dropdownBox.innerHTML = html;
            dropdownBox.style.display = 'block';
        });

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !dropdownBox.contains(e.target)) {
                dropdownBox.style.display = 'none';
            }
        });
    }

    if (playBtn) {
        playBtn.addEventListener("click", () => {
            if (audioPlayer.paused) {
                if (!audioPlayer.src && currentPlaylist.length > 0) {
                    loadAndPlaySong(currentPlaylist, 0);
                } else {
                    audioPlayer.play();
                    playBtn.className = 'bx bx-pause-circle play-btn';
                }
            } else {
                audioPlayer.pause();
                playBtn.className = 'bx bx-play-circle play-btn';
            }
        });
    }

    const prevBtn = document.querySelector(".bx-skip-previous");
    const nextBtn = document.querySelector(".bx-skip-next");

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentIndex = getNextIndex();
            loadAndPlaySong(currentPlaylist, currentIndex);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
            loadAndPlaySong(currentPlaylist, currentIndex);
        });
    }

    audioPlayer.addEventListener("timeupdate", () => {
        if (audioPlayer.duration) {
            const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            if (progressFill) progressFill.style.width = `${progressPercent}%`;
            if (currentTimeEl) currentTimeEl.innerText = formatTime(audioPlayer.currentTime);
            if (totalDurationEl) totalDurationEl.innerText = formatTime(audioPlayer.duration);
        }
    });

    audioPlayer.addEventListener("ended", () => {
        currentIndex = getNextIndex();
        loadAndPlaySong(currentPlaylist, currentIndex);
    });

    if (progressBarContainer) {
        progressBarContainer.addEventListener("click", (e) => {
            const width = progressBarContainer.clientWidth;
            const clickX = e.offsetX;
            if (audioPlayer.duration) {
                audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
            }
        });
    }

    function renderCards(data, titleText = "Bài hát nổi bật", isPlaylistView = false, plName = null) {
        if (!cardGrid) return;

        if (isPlaylistView && plName) {
            sectionTitle.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <span>Playlist: ${plName}</span>
                    <button id="add-song-to-pl-btn" style="padding: 8px 16px; background: #7494ec; color: #fff; border: none; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600;"><i class='bx bx-plus'></i> Thêm bài hát</button>
                </div>
            `;
        } else {
            if (sectionTitle) sectionTitle.innerText = titleText;
        }

        cardGrid.innerHTML = "";
        if (data.length === 0) {
            cardGrid.innerHTML = `<p style="color: #666; grid-column: 1/-1;">Không có bài hát nào.</p>`;
            if (isPlaylistView && plName) attachAddSongEvent(plName);
            return;
        }

        const likedPlaylist = playlists.find(p => p.name === "Bài hát đã thích");

        data.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.position = "relative";

            const isLiked = likedPlaylist && likedPlaylist.songs.includes(item.id);

            let actionButtonsHTML = "";
            if (isPlaylistView && plName) {
                actionButtonsHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; border-top: 1px solid #eee; padding-top: 10px;">
                        <button class="remove-song-btn" data-pl="${plName}" data-songid="${item.id}" title="Xóa khỏi playlist" style="background: #ffebee; color: #d32f2f; border: none; padding: 5px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 4px;">
                            <i class='bx bx-trash' style="font-size: 14px;"></i> Xóa bài
                        </button>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="card-img" style="overflow: hidden; cursor: pointer; position: relative;">
                    <img src="${item.cover}" style="width: 100%; height: 100%; object-fit: cover;" alt="Cover">
                    <button class="like-btn" data-songid="${item.id}" title="Yêu thích" style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.5); border: none; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                        <i class='bx ${isLiked ? 'bxs-heart' : 'bx-heart'}' style="font-size: 18px; color: ${isLiked ? '#ff4757' : '#fff'};"></i>
                    </button>
                </div>
                <div class="card-title" style="cursor: pointer; font-weight: 600; margin-top: 8px;">${item.title}</div>
                <div class="card-desc" style="color: #666; font-size: 13px;">${item.artist}</div>
                <button class="share-btn" onclick="shareSong('${item.id}', '${item.title}')" style="margin-top: 10px; width: 100%; padding: 7px 10px; background-color: #f0f4ff; color: #7494ec; border: 1px solid #7494ec; border-radius: 8px; cursor: pointer; font-size: 12px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 5px;">
                  <i class='bx bx-share-alt'></i> Chia sẻ
                </button>
                ${actionButtonsHTML}
            `;

            card.querySelector(".card-img img").addEventListener("click", () => loadAndPlaySong(data, index));
            card.querySelector(".card-title").addEventListener("click", () => loadAndPlaySong(data, index));

            const likeBtn = card.querySelector(".like-btn");
            likeBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                const songId = item.id;
                let targetLikedPl = playlists.find(p => p.name === "Bài hát đã thích");
                if (!targetLikedPl) {
                    targetLikedPl = { name: "Bài hát đã thích", songs: [] };
                    playlists.push(targetLikedPl);
                }

                const idx = targetLikedPl.songs.indexOf(songId);
                const icon = likeBtn.querySelector("i");
                if (idx > -1) {
                    targetLikedPl.songs.splice(idx, 1);
                    icon.className = 'bx bx-heart';
                    icon.style.color = '#fff';
                } else {
                    targetLikedPl.songs.push(songId);
                    icon.className = 'bx bxs-heart';
                    icon.style.color = '#ff4757';
                }

                if (isPlaylistView && plName === "Bài hát đã thích") {
                    const songsInLiked = musicData.filter(s => targetLikedPl.songs.includes(s.id));
                    renderCards(songsInLiked, "Bài hát đã thích", true, "Bài hát đã thích");
                }
            });

            if (isPlaylistView && plName) {
                const removeBtn = card.querySelector(".remove-song-btn");
                if (removeBtn) {
                    removeBtn.addEventListener("click", () => {
                        const pl = playlists.find(p => p.name === plName);
                        if (pl) {
                            pl.songs = pl.songs.filter(id => id !== item.id);
                            const updatedSongs = musicData.filter(s => pl.songs.includes(s.id));
                            renderCards(updatedSongs, plName, true, plName);
                            renderSidebarPlaylists();
                        }
                    });
                }
            }

            cardGrid.appendChild(card);
        });

        if (isPlaylistView && plName) {
            attachAddSongEvent(plName);
        }
    }

    function renderSidebarPlaylists() {
        const playlistLinks = document.querySelector(".playlist-links");
        if (!playlistLinks) return;

        playlistLinks.innerHTML = `
            <li><a href="#" id="create-playlist-trigger"><i class='bx bxs-plus-square'></i> Tạo playlist</a></li>
            <li><a href="#" id="liked-songs-link"><i class='bx bxs-heart-square'></i> Bài hát đã thích</a></li>
            <hr style="border:0; border-top:1px solid #eee; margin: 8px 0;">
        `;

        playlists.forEach(pl => {
            if (pl.name !== "Bài hát đã thích") {
                const plName = pl.name;
                const li = document.createElement("li");
                li.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 4px 0;">
                        <a href="#" class="custom-pl-link" style="display: flex; align-items: center; gap: 6px; flex-grow: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-decoration: none; color: inherit;">
                            <i class='bx bx-music'></i> <span>${plName}</span>
                        </a>
                        <div style="display: flex; gap: 6px; align-items: center;">
                            <button onclick="downloadPlaylist('${plName}')" title="Tải xuống" style="background: none; border: none; color: #666; cursor: pointer; font-size: 14px; padding: 2px;"><i class='bx bx-download'></i></button>
                            <button onclick="shareSong(null, null, '${plName}')" title="Chia sẻ playlist" style="background: none; border: none; color: #7494ec; cursor: pointer; font-size: 14px; padding: 2px;"><i class='bx bx-share-alt'></i></button>
                            <button onclick="deletePlaylist('${plName}')" title="Xóa playlist" style="background: none; border: none; color: #ff4757; cursor: pointer; font-size: 14px; padding: 2px;"><i class='bx bx-trash'></i></button>
                        </div>
                    </div>
                `;
                li.querySelector("a").addEventListener("click", (e) => {
                    e.preventDefault();
                    document.querySelectorAll(".nav-links a, .playlist-links a").forEach(el => el.classList.remove("active"));
                    li.querySelector("a").classList.add("active");
                    const plSongs = musicData.filter(s => pl.songs.includes(s.id));
                    renderCards(plSongs, pl.name, true, pl.name);
                });
                playlistLinks.appendChild(li);
            }
        });

        const likedLink = document.getElementById("liked-songs-link");
        if (likedLink) {
            likedLink.addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelectorAll(".nav-links a, .playlist-links a").forEach(el => el.classList.remove("active"));
                likedLink.classList.add("active");
                const likedPl = playlists.find(p => p.name === "Bài hát đã thích");
                const songs = likedPl ? musicData.filter(s => likedPl.songs.includes(s.id)) : [];
                renderCards(songs, "Bài hát đã thích", true, "Bài hát đã thích");
            });
        }

        const createTrigger = document.getElementById("create-playlist-trigger");
        const playlistModal = document.getElementById("playlist-modal");
        const modalCancel = document.getElementById("modal-cancel");
        const modalConfirm = document.getElementById("modal-confirm");
        const plNameInput = document.getElementById("playlist-name-input");

        if (createTrigger && playlistModal) {
            createTrigger.addEventListener("click", (e) => {
                e.preventDefault();
                playlistModal.style.display = "flex";
                if (plNameInput) {
                    plNameInput.value = "";
                    plNameInput.focus();
                }
            });
        }

        if (modalCancel && playlistModal) {
            modalCancel.addEventListener("click", () => {
                playlistModal.style.display = "none";
            });
        }

        if (modalConfirm && plNameInput && playlistModal) {
            modalConfirm.onclick = () => {
                const name = plNameInput.value.trim();
                if (!name) {
                    Swal.fire({ icon: 'warning', title: 'Chưa nhập tên!', text: 'Vui lòng nhập tên playlist!', background: '#ffffff', color: '#333' });
                    return;
                }
                if (playlists.some(p => p.name.toLowerCase() === name.toLowerCase())) {
                    Swal.fire({ icon: 'error', title: 'Trùng tên!', text: 'Playlist này đã tồn tại!', background: '#ffffff', color: '#333' });
                    return;
                }
                playlists.push({ name: name, songs: [] });
                playlistModal.style.display = "none";
                renderSidebarPlaylists();
            };
        }

        const plusIconHeader = document.querySelector(".playlist-header .bx-plus");
        if (plusIconHeader && playlistModal) {
            plusIconHeader.onclick = () => {
                playlistModal.style.display = "flex";
                if (plNameInput) {
                    plNameInput.value = "";
                    plNameInput.focus();
                }
            };
        }
    }

    function attachAddSongEvent(plName) {
        const addBtn = document.getElementById("add-song-to-pl-btn");
        const addModal = document.getElementById("add-song-modal");
        const modalSongList = document.getElementById("modal-song-list");
        const closeModalBtn = document.getElementById("add-modal-close");

        if (addBtn && addModal) {
            addBtn.onclick = () => {
                const playlist = playlists.find(p => p.name === plName);
                if (!playlist) return;

                const availableSongs = musicData.filter(s => !playlist.songs.includes(s.id));
                modalSongList.innerHTML = "";

                if (availableSongs.length === 0) {
                    modalSongList.innerHTML = `<p style="color: #777; text-align: center; padding: 20px;">Tất cả bài hát đã có trong playlist!</p>`;
                } else {
                    let containerHTML = `
                        <div style="margin-bottom: 12px;">
                            <input type="text" id="modal-search-input" placeholder="Nhập tên bài hát hoặc ca sĩ để tìm..." style="width: 100%; padding: 8px 12px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; outline: none; box-sizing: border-box;">
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding: 0 4px;">
                            <label style="font-size: 13px; font-weight: 600; cursor: pointer; color: #555; display: flex; align-items: center; gap: 6px;">
                                <input type="checkbox" id="select-all-songs" style="cursor: pointer; width: 16px; height: 16px;"> Chọn tất cả kết quả
                            </label>
                            <button id="confirm-add-selected" style="padding: 6px 14px; background: #7494ec; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 600;">Thêm các bài đã chọn</button>
                        </div>
                        <div id="modal-song-items-container" style="display: flex; flex-direction: column; gap: 8px; max-height: 250px; overflow-y: auto; padding-right: 4px;"></div>
                    `;
                    modalSongList.innerHTML = containerHTML;

                    const itemsContainer = document.getElementById("modal-song-items-container");
                    
                    function renderModalList(songsToRender) {
                        itemsContainer.innerHTML = "";
                        if (songsToRender.length === 0) {
                            itemsContainer.innerHTML = `<p style="color: #777; text-align: center; padding: 15px; font-size: 13px;">Không tìm thấy bài hát phù hợp</p>`;
                            return;
                        }
                        songsToRender.forEach(s => {
                            const songItem = document.createElement("div");
                            songItem.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 10px; background: #f8f9fa; border-radius: 8px; border: 1px solid #e0e0e0;";
                            songItem.innerHTML = `
                                <div style="display: flex; align-items: center; gap: 10px; overflow: hidden;">
                                    <input type="checkbox" class="song-checkbox" value="${s.id}" style="width: 16px; height: 16px; cursor: pointer;">
                                    <img src="${s.cover}" style="width: 38px; height: 38px; border-radius: 6px; object-fit: cover;">
                                    <div style="overflow: hidden;">
                                        <div style="font-weight: 600; font-size: 14px; color: #333; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${s.title}</div>
                                        <div style="font-size: 12px; color: #666; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${s.artist}</div>
                                    </div>
                                </div>
                                <button class="add-this-song-btn" style="padding: 6px 12px; background: #7494ec; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600; white-space: nowrap;">Thêm nhanh</button>
                            `;

                            songItem.querySelector(".add-this-song-btn").addEventListener("click", () => {
                                playlist.songs.push(s.id);
                                const updatedSongs = musicData.filter(item => playlist.songs.includes(item.id));
                                renderCards(updatedSongs, plName, true, plName);
                                addModal.style.display = "none";
                            });

                            itemsContainer.appendChild(songItem);
                        });
                    }

                    renderModalList(availableSongs);

                    const modalSearchInput = document.getElementById("modal-search-input");
                    if (modalSearchInput) {
                        modalSearchInput.addEventListener("input", (e) => {
                            const keyword = removeVietnameseAccents(e.target.value.trim());
                            const filtered = availableSongs.filter(s => 
                                removeVietnameseAccents(s.title).includes(keyword) || 
                                removeVietnameseAccents(s.artist).includes(keyword)
                            );
                            renderModalList(filtered);
                        });
                    }

                    const selectAllCheckbox = document.getElementById("select-all-songs");
                    if (selectAllCheckbox) {
                        selectAllCheckbox.addEventListener("change", (e) => {
                            const checkboxes = itemsContainer.querySelectorAll(".song-checkbox");
                            checkboxes.forEach(cb => cb.checked = e.target.checked);
                        });
                    }

                    const confirmAddBtn = document.getElementById("confirm-add-selected");
                    if (confirmAddBtn) {
                        confirmAddBtn.onclick = () => {
                            const checkedBoxes = itemsContainer.querySelectorAll(".song-checkbox:checked");
                            if (checkedBoxes.length === 0) {
                                Swal.fire({ icon: 'warning', title: 'Chưa chọn bài nào!', text: 'Vui lòng tích chọn ít nhất một bài hát!', background: '#ffffff', color: '#333' });
                                return;
                            }
                            checkedBoxes.forEach(cb => {
                                const songId = parseInt(cb.value);
                                if (!playlist.songs.includes(songId)) {
                                    playlist.songs.push(songId);
                                }
                            });
                            const updatedSongs = musicData.filter(item => playlist.songs.includes(item.id));
                            renderCards(updatedSongs, plName, true, plName);
                            addModal.style.display = "none";
                            Swal.fire({ icon: 'success', title: 'Thành công!', text: 'Đã thêm các bài hát vào playlist!', timer: 1500, showConfirmButton: false, background: '#ffffff', color: '#333' });
                        };
                    }
                }
                addModal.style.display = "flex";
            };
        }

        if (closeModalBtn && addModal) {
            closeModalBtn.onclick = () => {
                addModal.style.display = "none";
            };
        }
    }

    const homeNav = document.querySelector(".nav-links li:first-child a");
    if (homeNav) {
        homeNav.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelectorAll(".nav-links a, .playlist-links a").forEach(el => el.classList.remove("active"));
            homeNav.classList.add("active");
            renderCards(musicData, "Bài hát nổi bật", false);
        });
    }

    renderSidebarPlaylists();
    renderCards(musicData, "Bài hát nổi bật", false);
});

window.shareSong = function(songId, songTitle, playlistName) {
    const baseUrl = window.location.origin + window.location.pathname;
    let shareUrl = baseUrl;
    let messageText = '';

    if (playlistName) {
        shareUrl = `${baseUrl}?playlist=${encodeURIComponent(playlistName)}`;
        messageText = `Đã copy link playlist: "${playlistName}"`;
    } else if (songId) {
        shareUrl = `${baseUrl}?play=${songId}`;
        messageText = `Đã copy link bài: "${songTitle}"`;
    }

    navigator.clipboard.writeText(shareUrl).then(() => {
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                icon: 'success',
                title: 'Đã sao chép liên kết!',
                text: messageText,
                timer: 2000,
                showConfirmButton: false,
                background: '#ffffff',
                color: '#333'
            });
        } else {
            alert(`Đã sao chép liên kết: ${shareUrl}`);
        }
    }).catch(err => {
        console.error('Lỗi khi sao chép liên kết: ', err);
    });
};

window.deletePlaylist = function(plName) {
    Swal.fire({
        title: `Xóa playlist "${plName}"?`,
        text: "Bạn có chắc chắn muốn xóa playlist này không?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ff4757',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Đồng ý xóa',
        cancelButtonText: 'Hủy',
        background: '#ffffff',
        color: '#333'
    }).then((result) => {
        if (result.isConfirmed) {
            playlists = playlists.filter(p => p.name !== plName);
            
            const playlistLinks = document.querySelector(".playlist-links");
            if (playlistLinks) {
                playlistLinks.innerHTML = `
                    <li><a href="#" id="create-playlist-trigger"><i class='bx bxs-plus-square'></i> Tạo playlist</a></li>
                    <li><a href="#" id="liked-songs-link"><i class='bx bxs-heart-square'></i> Bài hát đã thích</a></li>
                    <hr style="border:0; border-top:1px solid #eee; margin: 8px 0;">
                `;

                playlists.forEach(pl => {
                    if (pl.name !== "Bài hát đã thích") {
                        const nameVal = pl.name;
                        const li = document.createElement("li");
                        li.innerHTML = `
                            <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 4px 0;">
                                <a href="#" class="custom-pl-link" style="display: flex; align-items: center; gap: 6px; flex-grow: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-decoration: none; color: inherit;">
                                    <i class='bx bx-music'></i> <span>${nameVal}</span>
                                </a>
                                <div style="display: flex; gap: 6px; align-items: center;">
                                    <button onclick="downloadPlaylist('${nameVal}')" title="Tải xuống" style="background: none; border: none; color: #666; cursor: pointer; font-size: 14px; padding: 2px;"><i class='bx bx-download'></i></button>
                                    <button onclick="shareSong(null, null, '${nameVal}')" title="Chia sẻ playlist" style="background: none; border: none; color: #7494ec; cursor: pointer; font-size: 14px; padding: 2px;"><i class='bx bx-share-alt'></i></button>
                                    <button onclick="deletePlaylist('${nameVal}')" title="Xóa playlist" style="background: none; border: none; color: #ff4757; cursor: pointer; font-size: 14px; padding: 2px;"><i class='bx bx-trash'></i></button>
                                </div>
                            </div>
                        `;
                        playlistLinks.appendChild(li);
                    }
                });
            }

            const cardGrid = document.querySelector(".card-grid");
            const sectionTitle = document.querySelector(".section-title");
            if (sectionTitle) sectionTitle.innerText = "Bài hát nổi bật";
            if (cardGrid && typeof musicData !== 'undefined') {
                cardGrid.innerHTML = "";
                musicData.forEach((item, index) => {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    card.innerHTML = `
                        <div class="card-img" style="overflow: hidden; cursor: pointer; position: relative;">
                            <img src="${item.cover}" style="width: 100%; height: 100%; object-fit: cover;" alt="Cover">
                        </div>
                        <div class="card-title" style="cursor: pointer; font-weight: 600; margin-top: 8px;">${item.title}</div>
                        <div class="card-desc" style="color: #666; font-size: 13px;">${item.artist}</div>
                    `;
                    cardGrid.appendChild(card);
                });
            }

            Swal.fire({
                icon: 'success',
                title: 'Đã xóa!',
                text: `Đã xóa thành công playlist "${plName}".`,
                timer: 1500,
                showConfirmButton: false,
                background: '#ffffff',
                color: '#333'
            });
        }
    });
};

window.downloadPlaylist = function(plName) {
    const pl = playlists.find(p => p.name === plName);
    if (!pl) return;
    const plSongs = musicData.filter(s => pl.songs.includes(s.id));
    if (plSongs.length === 0) {
        Swal.fire({ icon: 'info', title: 'Playlist trống', text: 'Playlist này đang trống, không thể tải xuống!', background: '#ffffff', color: '#333' });
        return;
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(plSongs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${plName}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
};

// === TÍNH NĂNG PB07: GỢI Ý NHẠC CÁ NHÂN HÓA ===
function renderPersonalizedRecommendations() {
    let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
    
    if (likedSongs.length === 0 && typeof musicData !== 'undefined' && musicData.length > 0) {
        likedSongs = [musicData[0].id, musicData[1].id]; 
    }

    let preferredGenres = {};
    let preferredArtists = {};

    if (typeof musicData !== 'undefined') {
        musicData.forEach(song => {
            if (likedSongs.map(String).includes(String(song.id))) {
                const cleanGenre = removeVietnameseAccents(song.genre);
                const cleanArtist = removeVietnameseAccents(song.artist);
                preferredGenres[cleanGenre] = (preferredGenres[cleanGenre] || 0) + 2;
                preferredArtists[cleanArtist] = (preferredArtists[cleanArtist] || 0) + 2;
            }
        });

        let scoredSongs = musicData.map(song => {
            let score = 0;
            const cleanGenre = removeVietnameseAccents(song.genre);
            const cleanArtist = removeVietnameseAccents(song.artist);

            if (preferredGenres[cleanGenre]) score += preferredGenres[cleanGenre] * 3;
            if (preferredArtists[cleanArtist]) score += preferredArtists[cleanArtist] * 2;
            score += Math.random() * 2; 
            return { song, score };
        });

        scoredSongs.sort((a, b) => b.score - a.score);
        const recommendedSongs = scoredSongs.slice(0, 8).map(item => item.song);

        let html = `
            <div class="recommended-container" style="margin: 30px 0; padding: 0 20px;">
                <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 15px; color: #333; display: flex; align-items: center; gap: 8px;">
                    <i class='bx bx-sparkles' style="color: #ff4757;"></i> Gợi ý dành riêng cho bạn (PB07)
                </h2>
                <div class="card-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 20px;">
        `;

        recommendedSongs.forEach(song => {
            const originalIndex = musicData.findIndex(s => s.id === song.id);
            html += `
                <div class="music-card" onclick="loadAndPlaySong(musicData, ${originalIndex})" style="cursor: pointer; background: #f9f9f9; padding: 12px; border-radius: 8px; transition: transform 0.2s;">
                    <img src="${song.cover || 'default-cover.jpg'}" alt="${song.title}" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 6px; margin-bottom: 8px;">
                    <h4 style="font-size: 14px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0 0 4px 0;">${song.title}</h4>
                    <p style="font-size: 12px; color: #666; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${song.artist}</p>
                </div>
            `;
        });

        html += `</div></div>`;

        let recSection = document.querySelector("#recommended-section");
        if (!recSection) {
            recSection = document.createElement("div");
            recSection.id = "recommended-section";
            const mainContent = document.querySelector(".main-content") || document.body;
            mainContent.appendChild(recSection);
        }
        recSection.innerHTML = html;
    }
}
renderPersonalizedRecommendations();