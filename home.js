let playlists = JSON.parse(localStorage.getItem('music_app_playlists')) || [
    { name: "Bài hát đã thích", songs: [1, 3, 11] }
];

const currentUsername = localStorage.getItem('user_displayName') || 'GuestUser';
const isLoggedIn = localStorage.getItem("user_email") !== null; 
let sharedPlaylistsKey = `music_app_shared_playlists_${currentUsername}`;
let sharedPlaylists = JSON.parse(localStorage.getItem(sharedPlaylistsKey)) || [];

let globalPublicPlaylists = JSON.parse(localStorage.getItem('music_app_global_public_playlists')) || {};

// --- KHỐI LOGIC QUẢN LÝ QUẢNG CÁO MỚI THÊM ---
let adState = JSON.parse(localStorage.getItem('music_app_ad_state')) || {
    totalSongsPlayed: 0,
    adsTriggeredCount: 0,
    lastAdTimestamp: Date.now()
};

// Tạo một thẻ Audio chuyên phát quảng cáo ngầm để không ảnh hưởng luồng nhạc chính
const adAudio = new Audio();
let isPlayingAd = false;
const MOCK_AD_SRC = "audio/advertisement.mp3"; // Ông tự thay đường dẫn audio quảng cáo của ông vào đây

function checkAndPlayAdOnSongEnd() {
    if (userIsPremium) return false; // Tài khoản Premium không có quảng cáo

    adState.totalSongsPlayed++;
    localStorage.setItem('music_app_ad_state', JSON.stringify(adState));

    let shouldTriggerAd = false;
    let now = Date.now();
    let elapsedMinutes = (now - adState.lastAdTimestamp) / (1000 * 60);

    // Tính hệ số tăng thời gian: cứ 20 bài thì tăng thêm 10 phút (15 + 10 * n)
    let n = Math.floor(adState.totalSongsPlayed / 20);
    let requiredIntervalMinutes = 15 + (n * 10);

    if (adState.adsTriggeredCount === 0 && adState.totalSongsPlayed >= 1) {
        // Quảng cáo đầu tiên phát ngay sau khi nghe xong bài hát đầu tiên
        shouldTriggerAd = true;
    } else if (elapsedMinutes >= requiredIntervalMinutes) {
        // Các quảng cáo tiếp theo theo chu kỳ thời gian
        shouldTriggerAd = true;
    }

    if (shouldTriggerAd) {
        triggerMandatoryAd();
        return true;
    }
    return false;
}

function triggerMandatoryAd() {
    isPlayingAd = true;
    // Tạm ngưng bài hát chính
    // (audioPlayer sẽ được gọi ngưng từ hàm bên dưới)
    
    adAudio.src = MOCK_AD_SRC;
    adAudio.load();
    
    Swal.fire({
        title: 'Đang phát quảng cáo',
        text: 'Vui lòng nghe hết quảng cáo để tiếp tục thưởng thức âm nhạc.',
        icon: 'info',
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    adAudio.play().catch(err => {
        console.log("Không tìm thấy file audio quảng cáo, tự động giả lập kết thúc sau 5s:", err);
        setTimeout(() => finishAdPlayback(), 5000);
    });

    adAudio.onended = () => {
        finishAdPlayback();
    };
}

function finishAdPlayback() {
    isPlayingAd = false;
    adState.adsTriggeredCount++;
    adState.lastAdTimestamp = Date.now();
    localStorage.setItem('music_app_ad_state', JSON.stringify(adState));
    
    Swal.close();
    Swal.fire({
        icon: 'success',
        title: 'Quảng cáo đã kết thúc',
        text: 'Tiếp tục phát nhạc của bạn!',
        timer: 1500,
        showConfirmButton: false
    });
}
// --- KẾT THÚC KHỐI LOGIC QUẢNG CÁO ---

// ĐÃ KHÔI PHỤC ĐẦY ĐỦ 100 BÀI HÁT GỐC CỦA BẠN
let musicData = [
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

// Đa ngôn ngữ
const translations = {
    vi: {
        app_title: "Music App - Trang Chủ",
        nav_home: "Trang chủ",
        nav_library: "Thư viện",
        nav_playlist: "PLAYLIST",
        nav_create_playlist: "Tạo playlist",
        nav_liked_songs: "Bài hát đã thích",
        menu_profile: "Trang cá nhân",
        menu_history: "Nhạc nghe gần đây",
        menu_upgrade: "Nâng cấp Premium",
        menu_language: "Ngôn ngữ",
        menu_logout: "Đăng xuất",
        btn_upgrade: "Nâng cấp Premium ⭐",
        tab_explore: "Khám phá",
        tab_popular: "Phổ biến",
        tab_latest: "Mới nhất",
        tab_trending: "Thịnh hành",
        banner_tag: "Nghệ sĩ nổi bật",
        banner_desc: "Khám phá các ca khúc hit mới nhất được yêu thích tuần này.",
        banner_btn: "Phát ngay",
        section_featured: "Bài hát nổi bật",
        widget_vip: "TÀI KHOẢN VIP",
        widget_experience: "Trải nghiệm Premium",
        widget_desc: "Nghe nhạc chất lượng cao, không quảng cáo gián đoạn.",
        widget_btn: "Nâng cấp ngay",
        friends_listening: "Bạn bè đang nghe",
        player_select: "Chọn một bài hát",
        player_artist: "Ca sĩ",
        modal_create_pl: "Tạo playlist mới",
        btn_cancel: "Hủy",
        btn_create: "Tạo",
        btn_close: "Đóng",
        btn_save: "Lưu thay đổi",
        profile_title: "Thông tin cá nhân",
        profile_name: "Họ và tên / Username",
        history_title: "Nhạc nghe gần đây",
        prem_modal_title: "Nâng cấp tài khoản Premium",
        prem_modal_subtitle: "Chọn gói đăng ký phù hợp với bạn để trải nghiệm âm nhạc đỉnh cao.",
        pkg_1_name: "Gói 1 tháng",
        pkg_1_desc: "Thời hạn 30 ngày",
        pkg_2_name: "Gói 3 tháng (Phổ biến)",
        pkg_2_desc: "Thời hạn 90 ngày",
        pkg_3_name: "Gói 1 năm (Tiết kiệm)",
        pkg_3_desc: "Thời hạn 365 ngày",
        btn_confirm_pay: "Xác nhận thanh toán (DEMO)",
        demo_notice: "* Đây là giao dịch mô phỏng (DEMO), không trừ tiền thật qua ngân hàng."
    },
    en: {
        app_title: "Music App - Home",
        nav_home: "Home",
        nav_library: "Library",
        nav_playlist: "PLAYLIST",
        nav_create_playlist: "Create playlist",
        nav_liked_songs: "Liked songs",
        menu_profile: "Profile",
        menu_history: "Recently Played",
        menu_upgrade: "Upgrade Premium",
        menu_language: "Language",
        menu_logout: "Logout",
        btn_upgrade: "Upgrade Premium ⭐",
        tab_explore: "Explore",
        tab_popular: "Popular",
        tab_latest: "Latest",
        tab_trending: "Trending",
        banner_tag: "Featured Artist",
        banner_desc: "Discover the latest trending hits this week.",
        banner_btn: "Play Now",
        section_featured: "Featured Songs",
        widget_vip: "VIP ACCOUNT",
        widget_experience: "Premium Experience",
        widget_desc: "High quality audio, ad-free listening.",
        widget_btn: "Upgrade Now",
        friends_listening: "Friends are listening",
        player_select: "Select a song",
        player_artist: "Artist",
        modal_create_pl: "Create new playlist",
        btn_cancel: "Cancel",
        btn_create: "Create",
        btn_close: "Close",
        btn_save: "Save changes",
        profile_title: "Personal Profile",
        profile_name: "Full Name / Username",
        history_title: "Recently Played",
        prem_modal_title: "Upgrade to Premium",
        prem_modal_subtitle: "Choose a subscription plan that suits you.",
        pkg_1_name: "1 Month Plan",
        pkg_1_desc: "30 days access",
        pkg_2_name: "3 Months Plan (Popular)",
        pkg_2_desc: "90 days access",
        pkg_3_name: "1 Year Plan (Best Value)",
        pkg_3_desc: "365 days access",
        btn_confirm_pay: "Confirm Payment (DEMO)",
        demo_notice: "* This is a simulated transaction (DEMO), no real money is charged."
    }
};

let currentLang = localStorage.getItem('music_app_lang') || 'vi';

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('music_app_lang', lang);
    const langLabel = document.getElementById('current-lang-label');
    if (langLabel) langLabel.innerText = lang.toUpperCase();
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

let userIsPremium = false;
let recentlyPlayed = JSON.parse(localStorage.getItem('music_app_recently_played')) || [];

function savePlayHistory(song) {
    recentlyPlayed = recentlyPlayed.filter(s => s.id !== song.id);
    recentlyPlayed.unshift(song);
    if (recentlyPlayed.length > 20) recentlyPlayed.pop();
    localStorage.setItem('music_app_recently_played', JSON.stringify(recentlyPlayed));
}

async function checkUserPremiumStatus(username) {
    if (!username) return;
    try {
        const response = await fetch(`http://localhost:3000/api/user-status/${encodeURIComponent(username)}`);
        const data = await response.json();
        if (data.success) {
            userIsPremium = data.is_premium;
            const badgeEl = document.getElementById("account-badge");
            const upgradeBtn = document.getElementById("upgrade-premium-btn");
            const sidebarUpgradeBtn = document.getElementById("sidebar-upgrade-btn");
            
            if (userIsPremium) {
                if (badgeEl) {
                    badgeEl.innerText = "PREMIUM ⭐";
                    badgeEl.style.color = "#2ed573";
                    badgeEl.style.background = "#e8f8f0";
                }
                if (upgradeBtn) upgradeBtn.style.display = "none";
                if (sidebarUpgradeBtn && sidebarUpgradeBtn.parentElement) sidebarUpgradeBtn.parentElement.style.display = "none";
            } else {
                if (badgeEl) {
                    badgeEl.innerText = "FREE";
                    badgeEl.style.color = "#ff4757";
                    badgeEl.style.background = "#ffebee";
                }
                if (upgradeBtn) upgradeBtn.style.display = "block";
            }
        }
    } catch (err) {
        console.error("Không thể lấy trạng thái Premium từ DB:", err);
    }
}

// Hàm chuẩn hóa tiếng Việt bỏ dấu
function removeVietnameseAccents(str) {
    if (!str) return "";
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D')
              .toLowerCase();
}

document.addEventListener("DOMContentLoaded", () => {
    changeLanguage(currentLang);

    // Xử lý URL chia sẻ playlist
    const urlParams = new URLSearchParams(window.location.search);
    const sharedId = urlParams.get('shared_playlist_id');

    if (sharedId && globalPublicPlaylists[sharedId]) {
        const targetPl = globalPublicPlaylists[sharedId];
        
        if (!isLoggedIn) {
            const mainSectionTitle = document.getElementById("main-section-title");
            const discoverTabs = document.querySelector(".discover-tabs");
            const heroBanner = document.getElementById("hero-banner-section");
            
            if (discoverTabs) discoverTabs.style.display = "none";
            if (heroBanner) heroBanner.style.display = "none";
            if (mainSectionTitle) mainSectionTitle.innerText = `Playlist chia sẻ: ${targetPl.name} (Chế độ Khách)`;

            const plSongs = musicData.filter(s => targetPl.songs.includes(s.id));
            setTimeout(() => {
                renderCards(plSongs);
            }, 100);

            window.loadAndPlaySong = function(list, index) {
                Swal.fire({
                    title: 'Yêu cầu tài khoản',
                    html: 'Bạn đang xem playlist chia sẻ với tư cách khách.<br>Vui lòng đăng nhập hoặc đăng ký tài khoản để nghe trọn vẹn và sử dụng đầy đủ tính năng!<br><br><a href="SignUp_Login_Form.html" style="color: #7494ec; font-weight: 600; text-decoration: underline;">Đăng nhập / Đăng ký ngay</a>',
                    icon: 'info',
                    confirmButtonColor: '#7494ec',
                    confirmButtonText: 'Đóng'
                });
            };
        } else {
            if (!sharedPlaylists.some(p => p.id === sharedId)) {
                sharedPlaylists.push(targetPl);
                localStorage.setItem(sharedPlaylistsKey, JSON.stringify(sharedPlaylists));
            }
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }

    // Thu gọn Sidebar
    const toggleLibraryBtn = document.getElementById("toggle-library-btn");
    if (toggleLibraryBtn) {
        toggleLibraryBtn.addEventListener("click", (e) => {
            e.preventDefault();
            document.body.classList.toggle("library-collapsed");
        });
    }

    const userName = localStorage.getItem("user_displayName") || "Người dùng";
    const userPhoto = localStorage.getItem("user_photoURL");
    const userEmail = localStorage.getItem("user_email") || "user@musicapp.com";

    const userNameEl = document.getElementById("user-name");
    const dropdownUserNameEl = document.getElementById("dropdown-user-name");
    const dropdownUserEmailEl = document.getElementById("dropdown-user-email");

    if (userNameEl) userNameEl.innerText = userName;
    if (dropdownUserNameEl) dropdownUserNameEl.innerText = userName;
    if (dropdownUserEmailEl) dropdownUserEmailEl.innerText = userEmail;

    checkUserPremiumStatus(userName);

    const avatarBox = document.getElementById("avatar-box");
    const profileAvatarPreview = document.getElementById("profile-avatar-preview");
    if (avatarBox) {
        if (userPhoto) {
            avatarBox.innerHTML = `<img src="${userPhoto}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
            if (profileAvatarPreview) profileAvatarPreview.innerHTML = `<img src="${userPhoto}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
        } else {
            avatarBox.innerText = userName.charAt(0).toUpperCase();
            if (profileAvatarPreview) profileAvatarPreview.innerText = userName.charAt(0).toUpperCase();
        }
    }

    // Dropdown Tài khoản cá nhân
    const profileDropdownBtn = document.getElementById("user-profile-dropdown-btn");
    const accountDropdownMenu = document.getElementById("account-dropdown-menu");
    if (profileDropdownBtn && accountDropdownMenu) {
        profileDropdownBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            accountDropdownMenu.classList.toggle("show");
        });
        document.addEventListener("click", () => {
            accountDropdownMenu.classList.remove("show");
        });
    }

    // Trang cá nhân Modal
    const profileModal = document.getElementById("profile-modal");
    const menuProfileBtn = document.getElementById("menu-profile-btn");
    if (menuProfileBtn) {
        menuProfileBtn.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById("profile-name-input").value = userName;
            document.getElementById("profile-email-input").value = userEmail;
            document.getElementById("profile-avatar-input").value = userPhoto || "";
            profileModal.style.display = "flex";
        });
    }
    const profileCancelBtn = document.getElementById("profile-cancel-btn");
    if (profileCancelBtn) profileCancelBtn.addEventListener("click", () => { profileModal.style.display = "none"; });
    const profileSaveBtn = document.getElementById("profile-save-btn");
    if (profileSaveBtn) {
        profileSaveBtn.addEventListener("click", () => {
            const newName = document.getElementById("profile-name-input").value.trim();
            const newPhoto = document.getElementById("profile-avatar-input").value.trim();
            if (newName) {
                localStorage.setItem("user_displayName", newName);
                localStorage.setItem("user_photoURL", newPhoto);
                Swal.fire({ icon: 'success', title: 'Thành công!', text: 'Đã cập nhật thông tin cá nhân.', timer: 1500, showConfirmButton: false });
                setTimeout(() => location.reload(), 1000);
            }
        });
    }

    // Nhạc nghe gần đây Modal
    const historyModal = document.getElementById("history-modal");
    const menuHistoryBtn = document.getElementById("menu-history-btn");
    if (menuHistoryBtn) {
        menuHistoryBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const listContainer = document.getElementById("history-song-list");
            listContainer.innerHTML = "";
            if (recentlyPlayed.length === 0) {
                listContainer.innerHTML = `<p style="color: #777; text-align: center; padding: 20px;">Chưa có bài hát nào gần đây.</p>`;
            } else {
                recentlyPlayed.forEach((song, idx) => {
                    const item = document.createElement("div");
                    item.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: #f8f9fa; border-radius: 8px; cursor: pointer;";
                    item.innerHTML = `
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <img src="${song.cover}" style="width: 36px; height: 36px; border-radius: 4px; object-fit: cover;">
                            <div>
                                <div style="font-weight: 600; font-size: 13px; color: #333;">${song.title}</div>
                                <div style="font-size: 11px; color: #666;">${song.artist}</div>
                            </div>
                        </div>
                        <i class='bx bx-play-circle' style="font-size: 24px; color: #7494ec;"></i>
                    `;
                    item.addEventListener("click", () => {
                        loadAndPlaySong(recentlyPlayed, idx);
                        historyModal.style.display = "none";
                    });
                    listContainer.appendChild(item);
                });
            }
            historyModal.style.display = "flex";
        });
    }
    const historyCloseBtn = document.getElementById("history-close-btn");
    if (historyCloseBtn) historyCloseBtn.addEventListener("click", () => { historyModal.style.display = "none"; });

    // Premium Modal
    const premiumModal = document.getElementById("premium-modal");
    const openPremModal = () => { premiumModal.style.display = "flex"; };
    const menuUpgradeBtn = document.getElementById("menu-upgrade-btn");
    if (menuUpgradeBtn) menuUpgradeBtn.addEventListener("click", (e) => { e.preventDefault(); openPremModal(); });
    const upgradePremiumBtn = document.getElementById("upgrade-premium-btn");
    if (upgradePremiumBtn) upgradePremiumBtn.addEventListener("click", openPremModal);
    const sidebarUpBtn = document.getElementById("sidebar-upgrade-btn");
    if (sidebarUpBtn) sidebarUpBtn.addEventListener("click", openPremModal);
    const premiumCloseIcon = document.getElementById("premium-close-icon");
    if (premiumCloseIcon) premiumCloseIcon.addEventListener("click", () => { premiumModal.style.display = "none"; });

    let selectedMonths = 3;
    document.querySelectorAll(".prem-package-card").forEach(card => {
        card.addEventListener("click", () => {
            document.querySelectorAll(".prem-package-card").forEach(c => {
                c.classList.remove("selected");
                c.style.border = "2px solid #e0e0e0";
                c.style.background = "#fff";
            });
            card.classList.add("selected");
            card.style.border = "2px solid #7494ec";
            card.style.background = "#f0f4ff";
            selectedMonths = parseInt(card.getAttribute("data-package"));
        });
    });

    const confirmUpgradePaymentBtn = document.getElementById("confirm-upgrade-payment-btn");
    if (confirmUpgradePaymentBtn) {
        confirmUpgradePaymentBtn.addEventListener("click", async () => {
            Swal.fire({
                title: 'Xác nhận thanh toán DEMO?',
                text: `Bạn đang đăng ký gói ${selectedMonths} tháng. Giao dịch này là mô phỏng.`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#7494ec',
                confirmButtonText: 'Đồng ý nâng cấp'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const response = await fetch('http://localhost:3000/api/upgrade-premium', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ username: userName })
                        });
                        const data = await response.json();
                        if (data.success) {
                            userIsPremium = true;
                            localStorage.setItem("user_is_premium", "true");
                            const expiryDate = new Date();
                            expiryDate.setMonth(expiryDate.getMonth() + selectedMonths);
                            localStorage.setItem("user_premium_expiry", expiryDate.toISOString());

                            Swal.fire({
                                icon: 'success',
                                title: 'Thanh toán thành công!',
                                text: `Tài khoản đã nâng cấp Premium thành công đến ${expiryDate.toLocaleDateString('vi-VN')}.`,
                                confirmButtonColor: '#7494ec'
                            }).then(() => {
                                location.reload();
                            });
                        }
                    } catch (err) {
                        Swal.fire({ icon: 'error', title: 'Lỗi', text: 'Không thể kết nối đến server cơ sở dữ liệu!' });
                    }
                }
            });
        });
    }

    // Chuyển ngôn ngữ
    const menuLangBtn = document.getElementById("menu-lang-btn");
    if (menuLangBtn) {
        menuLangBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const newLang = currentLang === 'vi' ? 'en' : 'vi';
            changeLanguage(newLang);
        });
    }

    // Đăng xuất
    const menuLogoutBtn = document.getElementById("menu-logout-btn");
    if (menuLogoutBtn) {
        menuLogoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            Swal.fire({
                title: 'Đăng xuất?',
                text: "Bạn có chắc chắn muốn thoát tài khoản không?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#ff4757',
                confirmButtonText: 'Đăng xuất'
            }).then((res) => {
                if (res.isConfirmed) {
                    localStorage.clear();
                    window.location.href = "SignUp_Login_Form.html";
                }
            });
        });
    }

    // Tab chuyển đổi
    let currentTab = 'explore';
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab-btn").forEach(b => {
                b.style.color = "#666";
                b.style.fontWeight = "500";
                b.style.borderBottom = "2px solid transparent";
            });
            btn.style.color = "#7494ec";
            btn.style.fontWeight = "600";
            btn.style.borderBottom = "2px solid #7494ec";
            currentTab = btn.getAttribute("data-tab");
            renderTabContent(currentTab);
        });
    });

    function renderTabContent(tab) {
        let sortedSongs = [...musicData];
        const titleEl = document.getElementById("main-section-title");
        const bannerEl = document.getElementById("hero-banner-section");

        if (tab === 'explore') {
            if (bannerEl) bannerEl.style.display = "flex";
            titleEl.innerText = translations[currentLang].section_featured;
            renderCards(musicData);
        } else if (tab === 'popular') {
            if (bannerEl) bannerEl.style.display = "none";
            sortedSongs.sort((a, b) => (b.plays || 0) - (a.plays || 0));
            titleEl.innerText = currentLang === 'vi' ? "Bài hát Phổ biến (Lượt nghe cao)" : "Popular Songs";
            renderCards(sortedSongs);
        } else if (tab === 'latest') {
            if (bannerEl) bannerEl.style.display = "none";
            sortedSongs.sort((a, b) => new Date(b.date || '2024-01-01') - new Date(a.date || '2024-01-01'));
            titleEl.innerText = currentLang === 'vi' ? "Bài hát Mới nhất" : "Latest Releases";
            renderCards(sortedSongs);
        } else if (tab === 'trending') {
            if (bannerEl) bannerEl.style.display = "none";
            sortedSongs.sort((a, b) => (Math.sin(a.id) - Math.sin(b.id)));
            titleEl.innerText = currentLang === 'vi' ? "Bài hát Thịnh hành (Trending)" : "Trending Songs";
            renderCards(sortedSongs);
        }
    }

    // --- DROPDOWN TÌM KIẾM & NGHE THỬ NGẪU NHIÊN 1 ĐOẠN ---
    const searchBarContainer = document.querySelector(".search-bar");
    const mainSearch = document.getElementById("search-input-main");

    if (searchBarContainer && mainSearch) {
        let searchDropdown = document.getElementById("custom-search-dropdown");
        if (!searchDropdown) {
            searchDropdown = document.createElement("div");
            searchDropdown.id = "custom-search-dropdown";
            searchDropdown.style.cssText = "display: none; position: absolute; top: 55px; left: 0; width: 420px; background: #282828; color: #fff; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); z-index: 2000; padding: 12px; max-height: 400px; overflow-y: auto;";
            searchBarContainer.style.position = "relative";
            searchBarContainer.appendChild(searchDropdown);
        }

        let previewAudio = new Audio();
        let previewTimeout = null;

        mainSearch.addEventListener("input", (e) => {
            const rawVal = e.target.value.trim();
            const query = removeVietnameseAccents(rawVal);
            
            if (!query) {
                searchDropdown.style.display = "none";
                renderCards(musicData);
                return;
            }

            const filteredSongs = musicData.filter(s => 
                removeVietnameseAccents(s.title).includes(query) || 
                removeVietnameseAccents(s.artist).includes(query)
            );

            searchDropdown.style.display = "block";
            searchDropdown.innerHTML = `
                <div style="padding: 8px 12px; font-size: 13px; color: #aaa; cursor: pointer;" class="suggest-kw"><i class='bx bx-search'></i> ${rawVal} tùng mtp</div>
                <div style="padding: 8px 12px; font-size: 13px; color: #aaa; cursor: pointer;" class="suggest-kw"><i class='bx bx-search'></i> ${rawVal} tung</div>
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border-radius: 8px; cursor: pointer; background: rgba(255,255,255,0.05); margin: 6px 0;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                        <div>
                            <div style="font-weight: 600; font-size: 14px; display: flex; align-items: center; gap: 4px;">Sơn Tùng M-TP <i class='bx bxs-check-circle' style="color: #3d91f4; font-size: 14px;"></i></div>
                            <div style="font-size: 12px; color: #aaa;">Nghệ sĩ</div>
                        </div>
                    </div>
                    <span style="font-size: 12px; font-weight: bold; border: 1px solid #aaa; padding: 4px 12px; border-radius: 20px;">Đang theo dõi</span>
                </div>
                <div style="font-size: 11px; font-weight: bold; color: #aaa; margin: 10px 0 6px 4px; text-transform: uppercase;">Bài hát & Danh sách phát</div>
            `;

            if (filteredSongs.length === 0) {
                searchDropdown.innerHTML += `<div style="padding: 12px; color: #777; text-align: center;">Không tìm thấy bài hát nào.</div>`;
            } else {
                filteredSongs.slice(0, 5).forEach((song) => {
                    const itemEl = document.createElement("div");
                    itemEl.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; border-radius: 8px; cursor: pointer; transition: 0.2s;";
                    itemEl.innerHTML = `
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="position: relative; width: 38px; height: 38px; border-radius: 6px; overflow: hidden; flex-shrink: 0;">
                                <img src="${song.cover}" style="width: 100%; height: 100%; object-fit: cover;">
                                <div class="hover-play-icon" style="position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.2s;">
                                    <i class='bx bx-play' style="font-size: 22px; color: #fff;"></i>
                                </div>
                            </div>
                            <div>
                                <div style="font-weight: 600; font-size: 13.5px; color: #fff;">${song.title}</div>
                                <div style="font-size: 11.5px; color: #aaa;">Bài hát • ${song.artist}</div>
                            </div>
                        </div>
                        <div style="display: flex; gap: 8px; align-items: center;">
                            <span style="font-size: 10px; color: #7494ec; background: rgba(116,148,236,0.15); padding: 2px 6px; border-radius: 4px;">Nghe thử 1 đoạn</span>
                            <i class='bx bx-plus-circle' style="font-size: 20px; color: #aaa;" title="Thêm vào playlist"></i>
                        </div>
                    `;

                    itemEl.addEventListener("mouseenter", () => {
                        itemEl.style.background = "rgba(255,255,255,0.1)";
                        itemEl.querySelector(".hover-play-icon").style.opacity = "1";
                    });
                    itemEl.addEventListener("mouseleave", () => {
                        itemEl.style.background = "transparent";
                        itemEl.querySelector(".hover-play-icon").style.opacity = "0";
                    });

                    itemEl.addEventListener("click", () => {
                        previewAudio.src = song.src;
                        previewAudio.currentTime = 15; 
                        previewAudio.play().catch(err => console.log(err));
                        
                        Swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'info',
                            title: `Đang nghe thử: ${song.title}`,
                            text: 'Đang phát ngẫu nhiên một đoạn.',
                            showConfirmButton: false,
                            timer: 3000
                        });

                        clearTimeout(previewTimeout);
                        previewTimeout = setTimeout(() => {
                            previewAudio.pause();
                        }, 5000);
                    });

                    searchDropdown.appendChild(itemEl);
                });
            }

            renderCards(filteredSongs);
        });

        document.addEventListener("click", (e) => {
            if (!searchBarContainer.contains(e.target)) {
                searchDropdown.style.display = "none";
            }
        });
    }

    // Trình phát nhạc (Player)
    let currentPlaylist = musicData;
    let currentIndex = 0;
    let isShuffle = false;
    let repeatMode = 0;
    const audioPlayer = new Audio();

    const playPauseBtn = document.getElementById("play-pause-btn");
    const trackCover = document.querySelector(".track-cover");
    const trackNameEl = document.querySelector(".track-name");
    const artistNameEl = document.querySelector(".artist-name");
    const currentTimeEl = document.querySelector(".current-time");
    const totalDurationEl = document.querySelector(".total-duration");
    const progressFill = document.querySelector(".progress-fill");
    const progressBar = document.getElementById("main-progress-bar");
    const shuffleBtn = document.getElementById("shuffle-btn");
    const repeatBtn = document.getElementById("repeat-btn");

    function formatTime(sec) {
        if (isNaN(sec)) return "0:00";
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    window.loadAndPlaySong = function(list, index) {
        if (!userIsPremium && index >= 5) {
            Swal.fire({
                title: 'Giới hạn tài khoản FREE',
                html: 'Tài khoản miễn phí chỉ được nghe tối đa 5 bài hát gợi ý đầu tiên.<br>Vui lòng nâng cấp Premium để nghe trọn vẹn kho nhạc!<br><br><a href="#" id="swal-login-link" style="color: #7494ec; font-weight: 600; text-decoration: underline;">Bạn đã có tài khoản?</a>',
                icon: 'warning',
                confirmButtonColor: '#7494ec',
                confirmButtonText: 'Nâng cấp ngay',
                didOpen: () => {
                    const loginLink = document.getElementById('swal-login-link');
                    if (loginLink) {
                        loginLink.addEventListener('click', (e) => {
                            e.preventDefault();
                            window.location.href = 'SignUp_Login_Form.html';
                        });
                    }
                }
            }).then((res) => {
                if (res.isConfirmed) {
                    document.getElementById('premium-modal').style.display = 'flex';
                }
            });
            return;
        }

        if (!list || list.length === 0) return;
        currentPlaylist = list;
        currentIndex = index;
        const song = currentPlaylist[currentIndex];

        audioPlayer.src = song.src;
        audioPlayer.play().then(() => {
            if (playPauseBtn) playPauseBtn.className = 'bx bx-pause-circle play-btn';
        }).catch(err => console.log("Autoplay blocked:", err));

        if (trackNameEl) trackNameEl.innerText = song.title;
        if (artistNameEl) artistNameEl.innerText = song.artist;
        if (trackCover) trackCover.src = song.cover;

        savePlayHistory(song);
        updateFriendsListening(song);
    };

    function updateFriendsListening(currentSong) {
        const container = document.getElementById("friends-listening-container");
        if (!container) return;
        container.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 32px; height: 32px; border-radius: 50%; background: #7494ec; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px;">JF</div>
                    <div>
                        <div style="font-size: 13px; font-weight: 600; color: #333;">James Foster</div>
                        <div style="font-size: 11px; color: #777;">${currentSong.title} - <b style="color: #555;">${currentSong.artist}</b></div>
                    </div>
                </div>
                <span style="font-size: 11px; color: #7494ec; font-weight: 600;">Đang nghe</span>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 32px; height: 32px; border-radius: 50%; background: #ff4757; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px;">WR</div>
                    <div>
                        <div style="font-size: 13px; font-weight: 600; color: #333;">Wilson Roy</div>
                        <div style="font-size: 11px; color: #777;">Nơi Này Có Anh - <b style="color: #555;">Sơn Tùng M-TP</b></div>
                    </div>
                </div>
                <span style="font-size: 11px; color: #999;">2 phút trước</span>
            </div>
        `;
    }
    updateFriendsListening(musicData[0]);

    if (shuffleBtn) {
        shuffleBtn.addEventListener("click", () => {
            isShuffle = !isShuffle;
            shuffleBtn.style.color = isShuffle ? "#7494ec" : "";
            Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: isShuffle ? 'Đã bật phát ngẫu nhiên (Shuffle)' : 'Đã tắt phát ngẫu nhiên', showConfirmButton: false, timer: 1200 });
        });
    }

    if (repeatBtn) {
        repeatBtn.addEventListener("click", () => {
            repeatMode = (repeatMode + 1) % 3;
            if (repeatMode === 0) {
                repeatBtn.style.color = "";
                repeatBtn.className = 'bx bx-repeat';
                Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'Tắt lặp lại', showConfirmButton: false, timer: 1000 });
            } else if (repeatMode === 1) {
                repeatBtn.style.color = "#7494ec";
                repeatBtn.className = 'bx bx-repeat';
                Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'Lặp lại tất cả (Repeat All)', showConfirmButton: false, timer: 1000 });
            } else if (repeatMode === 2) {
                repeatBtn.style.color = "#7494ec";
                repeatBtn.className = 'bx bx-redo';
                Swal.fire({ toast: true, position: 'top-end', icon: 'info', title: 'Lặp lại bài hiện tại (Repeat One)', showConfirmButton: false, timer: 1000 });
            }
        });
    }

    function getNextIndex() {
        if (isShuffle) {
            return Math.floor(Math.random() * currentPlaylist.length);
        } else {
            return (currentIndex + 1) % currentPlaylist.length;
        }
    }

    // Gắn sự kiện khi bài hát phát xong -> Kích hoạt check quảng cáo rồi mới sang bài tiếp theo
    audioPlayer.addEventListener("ended", () => {
        // Kiểm tra xem có cần phát quảng cáo ngay sau khi nghe xong bài này không
        let adTriggered = checkAndPlayAdOnSongEnd();
        
        if (adTriggered) {
            // Khi đang phát quảng cáo, ta tạm thời chờ quảng cáo chạy xong rồi mới tự động chuyển bài tiếp theo
            adAudio.onended = () => {
                finishAdPlayback();
                proceedToNextSong();
            };
        } else {
            proceedToNextSong();
        }
    });

    function proceedToNextSong() {
        if (repeatMode === 2) {
            audioPlayer.play();
        } else if (repeatMode === 1 || isShuffle) {
            currentIndex = getNextIndex();
            loadAndPlaySong(currentPlaylist, currentIndex);
        } else {
            if (currentIndex < currentPlaylist.length - 1) {
                currentIndex++;
                loadAndPlaySong(currentPlaylist, currentIndex);
            } else {
                if (playPauseBtn) playPauseBtn.className = 'bx bx-play-circle play-btn';
            }
        }
    }

    if (playPauseBtn) {
        playPauseBtn.addEventListener("click", () => {
            if (audioPlayer.paused) {
                if (!audioPlayer.src && currentPlaylist.length > 0) {
                    loadAndPlaySong(currentPlaylist, 0);
                } else {
                    audioPlayer.play();
                    playPauseBtn.className = 'bx bx-pause-circle play-btn';
                }
            } else {
                audioPlayer.pause();
                playPauseBtn.className = 'bx bx-play-circle play-btn';
            }
        });
    }

    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) nextBtn.addEventListener("click", () => {
        currentIndex = getNextIndex();
        loadAndPlaySong(currentPlaylist, currentIndex);
    });
    const prevBtn = document.getElementById("prev-btn");
    if (prevBtn) prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        loadAndPlaySong(currentPlaylist, currentIndex);
    });

    audioPlayer.addEventListener("timeupdate", () => {
        if (audioPlayer.duration) {
            const p = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            if (progressFill) progressFill.style.width = `${p}%`;
            if (currentTimeEl) currentTimeEl.innerText = formatTime(audioPlayer.currentTime);
            if (totalDurationEl) totalDurationEl.innerText = formatTime(audioPlayer.duration);
        }
    });

    if (progressBar) {
        progressBar.addEventListener("click", (e) => {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            if (audioPlayer.duration) {
                audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
            }
        });
    }

    const volBar = document.getElementById("volume-bar");
    if (volBar) {
        volBar.addEventListener("click", (e) => {
            const rect = volBar.getBoundingClientRect();
            let percent = (e.clientX - rect.left) / rect.width;
            if (percent < 0) percent = 0; if (percent > 1) percent = 1;
            audioPlayer.volume = percent;
            volBar.querySelector(".progress-fill").style.width = `${percent * 100}%`;
        });
    }

    // Render Cards màn hình chính
    function renderCards(data) {
        const cardGrid = document.querySelector(".card-grid");
        if (!cardGrid) return;
        cardGrid.innerHTML = "";

        if (data.length === 0) {
            cardGrid.innerHTML = `<p style="color: #666; grid-column: 1/-1;">Không tìm thấy bài hát nào.</p>`;
            return;
        }

        const likedPl = playlists.find(p => p.name === "Bài hát đã thích");

        data.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            const isLiked = likedPl && likedPl.songs.includes(item.id);

            card.innerHTML = `
                <div class="card-img" style="overflow: hidden; cursor: pointer; position: relative;">
                    <img src="${item.cover}" style="width: 100%; height: 100%; object-fit: cover;" alt="Cover">
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
                let liked = playlists.find(p => p.name === "Bài hát đã thích");
                if (!liked) { liked = { name: "Bài hát đã thích", songs: [] }; playlists.push(liked); }
                const idx = liked.songs.indexOf(item.id);
                if (idx > -1) {
                    liked.songs.splice(idx, 1);
                } else {
                    liked.songs.push(item.id);
                }
                localStorage.setItem('music_app_playlists', JSON.stringify(playlists));
                renderCards(data);
            });

            cardGrid.appendChild(card);
        });
    }

    renderCards(musicData);

    // Sidebar Playlists & Tính năng xử lý Playlist
    window.renderSidebarPlaylists = function() {
        const playlistLinks = document.querySelector(".playlist-links");
        if (!playlistLinks) return;

        playlistLinks.innerHTML = `
            <li><a href="#" id="create-playlist-trigger"><i class='bx bxs-plus-square'></i> <span class="nav-text" data-i18n="nav_create_playlist">Tạo playlist</span></a></li>
            <li><a href="#" id="liked-songs-link"><i class='bx bxs-heart-square'></i> <span class="nav-text" data-i18n="nav_liked_songs">Bài hát đã thích</span></a></li>
            <hr style="border:0; border-top:1px solid #eee; margin: 8px 0;">
        `;

        const likedSongsLink = document.getElementById("liked-songs-link");
        if (likedSongsLink) {
            likedSongsLink.addEventListener("click", (e) => {
                e.preventDefault();
                const likedPl = playlists.find(p => p.name === "Bài hát đã thích");
                const likedSongIds = likedPl ? likedPl.songs : [];
                const likedSongs = musicData.filter(s => likedSongIds.includes(s.id));
                
                const mainTitle = document.getElementById("main-section-title");
                if (mainTitle) mainTitle.innerText = "Bài hát đã thích";
                
                const bannerEl = document.getElementById("hero-banner-section");
                if (bannerEl) bannerEl.style.display = "none";

                renderCards(likedSongs);
            });
        }

        playlists.forEach(pl => {
            if (pl.name !== "Bài hát đã thích") {
                const plName = pl.name;
                const plId = pl.id || (pl.id = 'pl_' + Math.random().toString(36).substring(2, 9));
                
                globalPublicPlaylists[plId] = pl;
                localStorage.setItem('music_app_global_public_playlists', JSON.stringify(globalPublicPlaylists));

                const li = document.createElement("li");
                li.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 4px 0;">
                        <a href="#" class="custom-pl-link" style="display: flex; align-items: center; gap: 6px; flex-grow: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-decoration: none; color: inherit;">
                            <i class='bx bx-music'></i> <span class="nav-text">${plName}</span>
                        </a>
                        <div style="display: flex; gap: 4px; align-items: center;" class="nav-text">
                            <button onclick="openAddSongModal('${plName}')" title="Thêm bài hát nhanh" style="background: none; border: none; color: #7494ec; cursor: pointer; font-size: 14px;"><i class='bx bx-plus-circle'></i></button>
                            <button onclick="sharePlaylist('${plId}')" title="Chia sẻ playlist" style="background: none; border: none; color: #7494ec; cursor: pointer; font-size: 14px;"><i class='bx bx-paper-plane'></i></button>
                            <button onclick="deletePlaylist('${plName}')" title="Xóa playlist" style="background: none; border: none; color: #ff4757; cursor: pointer; font-size: 14px;"><i class='bx bx-trash'></i></button>
                        </div>
                    </div>
                `;
                li.querySelector(".custom-pl-link").addEventListener("click", (e) => {
                    e.preventDefault();
                    renderPlaylistView(plName);
                });
                playlistLinks.appendChild(li);
            }
        });

        const sharedContainer = document.getElementById("shared-playlist-container");
        const sharedLinksContainer = document.querySelector(".shared-playlist-links");
        if (sharedContainer && sharedLinksContainer && sharedPlaylists.length > 0) {
            sharedContainer.style.display = "block";
            sharedLinksContainer.innerHTML = "";
            sharedPlaylists.forEach(spl => {
                const sli = document.createElement("li");
                sli.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 4px 0;">
                        <a href="#" class="shared-pl-link" style="display: flex; align-items: center; gap: 6px; flex-grow: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-decoration: none; color: inherit;">
                            <i class='bx bx-share-alt' style="color: #7494ec;"></i> <span class="nav-text">${spl.name}</span>
                        </a>
                        <button onclick="removeSharedPlaylist('${spl.id}')" title="Xóa playlist chia sẻ" style="background: none; border: none; color: #ff4757; cursor: pointer; font-size: 13px;" class="nav-text"><i class='bx bx-x'></i></button>
                    </div>
                `;
                sli.querySelector(".shared-pl-link").addEventListener("click", (e) => {
                    e.preventDefault();
                    renderPlaylistView(spl.name, true);
                });
                sharedLinksContainer.appendChild(sli);
            });
        } else if (sharedContainer) {
            sharedContainer.style.display = "none";
        }

        localStorage.setItem('music_app_playlists', JSON.stringify(playlists));
        localStorage.setItem(sharedPlaylistsKey, JSON.stringify(sharedPlaylists));
    };

    window.renderPlaylistView = function(plName, isShared = false) {
        const pl = isShared ? sharedPlaylists.find(p => p.name === plName) : playlists.find(p => p.name === plName);
        if (!pl) return;

        const plSongs = musicData.filter(s => pl.songs.includes(s.id));
        const mainTitle = document.getElementById("main-section-title");
        const bannerEl = document.getElementById("hero-banner-section");
        if (bannerEl) bannerEl.style.display = "none";

        let htmlHeader = `
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px; flex-wrap: wrap;">
                <h2 style="font-size: 22px; font-weight: bold; color: #222; margin: 0;">Playlist: ${plName}</h2>
                <div style="display: flex; gap: 10px; align-items: center;">
                    <button onclick="openAddSongModal('${plName}')" style="display: flex; align-items: center; gap: 6px; padding: 6px 14px; background: #7494ec; color: #fff; border: none; border-radius: 20px; font-weight: 600; font-size: 13px; cursor: pointer; box-shadow: 0 4px 10px rgba(116,148,236,0.3);">
                        <i class='bx bx-plus' style="font-size: 16px;"></i> Thêm bài hát
                    </button>
        `;

        if (plSongs.length > 0) {
            const jsonSongs = encodeURIComponent(JSON.stringify(plSongs));
            htmlHeader += `
                    <button onclick="loadAndPlaySong(JSON.parse(decodeURIComponent('${jsonSongs}')), 0)" style="display: flex; align-items: center; gap: 6px; padding: 6px 14px; background: #2ed573; color: #fff; border: none; border-radius: 20px; font-weight: 600; font-size: 13px; cursor: pointer; box-shadow: 0 4px 10px rgba(46,213,115,0.3);">
                        <i class='bx bx-play' style="font-size: 16px;"></i> Phát ngay
                    </button>
            `;
        }

        htmlHeader += `
                </div>
            </div>
        `;

        mainTitle.innerHTML = htmlHeader;
        renderCards(plSongs);
    };

    window.sharePlaylist = function(plId) {
        const shareUrl = `${window.location.origin}${window.location.pathname}?shared_playlist_id=${plId}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
            Swal.fire({ icon: 'success', title: 'Đã sao chép liên kết!', text: 'Đường dẫn chia sẻ playlist đã được sao chép.', timer: 2000, showConfirmButton: false });
        });
    };

    window.removeSharedPlaylist = function(splId) {
        Swal.fire({
            title: 'Xóa playlist chia sẻ này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff4757',
            confirmButtonText: 'Xóa'
        }).then(res => {
            if (res.isConfirmed) {
                sharedPlaylists = sharedPlaylists.filter(p => p.id !== splId);
                localStorage.setItem(sharedPlaylistsKey, JSON.stringify(sharedPlaylists));
                renderSidebarPlaylists();
                document.getElementById("main-section-title").innerText = translations[currentLang].section_featured;
                renderCards(musicData);
            }
        });
    };

    window.deletePlaylist = function(plName) {
        Swal.fire({
            title: `Xóa playlist "${plName}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff4757',
            confirmButtonText: 'Đồng ý xóa'
        }).then((result) => {
            if (result.isConfirmed) {
                playlists = playlists.filter(p => p.name !== plName);
                renderSidebarPlaylists();
                document.getElementById("main-section-title").innerText = translations[currentLang].section_featured;
                renderCards(musicData);
                Swal.fire({ icon: 'success', title: 'Đã xóa thành công!', timer: 1200, showConfirmButton: false });
            }
        });
    };

    const plModal = document.getElementById("playlist-modal");
    document.addEventListener("click", (e) => {
        if (e.target.id === "create-playlist-trigger" || e.target.id === "sidebar-plus-btn") {
            e.preventDefault();
            document.getElementById("playlist-name-input").value = "";
            if (plModal) plModal.style.display = "flex";
        }
    });
    const modalCancel = document.getElementById("modal-cancel");
    if (modalCancel) modalCancel.addEventListener("click", () => { plModal.style.display = "none"; });
    const modalConfirm = document.getElementById("modal-confirm");
    if (modalConfirm) {
        modalConfirm.addEventListener("click", () => {
            const name = document.getElementById("playlist-name-input").value.trim();
            if (!name) { Swal.fire({ icon: 'warning', title: 'Vui lòng nhập tên playlist!' }); return; }
            playlists.push({ id: 'pl_' + Math.random().toString(36).substring(2, 9), name: name, songs: [] });
            if (plModal) plModal.style.display = "none";
            renderSidebarPlaylists();
            Swal.fire({ icon: 'success', title: 'Tạo playlist thành công!', timer: 1200, showConfirmButton: false });
        });
    }

    // Modal Thêm Bài Hát Nhanh
    window.openAddSongModal = function(plName) {
        const pl = playlists.find(p => p.name === plName);
        if (!pl) return;
        const addModal = document.getElementById("add-song-modal");
        document.getElementById("add-song-modal-title").innerText = `Thêm bài hát vào: ${plName}`;
        
        const searchInputEl = document.getElementById("quick-search-song-input");
        searchInputEl.value = "";

        const renderSongListForModal = (filterText = "") => {
            const listContainer = document.getElementById("modal-song-list");
            listContainer.innerHTML = "";

            const filtered = musicData.filter(song => 
                removeVietnameseAccents(song.title).includes(filterText) || 
                removeVietnameseAccents(song.artist).includes(filterText)
            );

            if (filtered.length === 0) {
                listContainer.innerHTML = `<p style="color: #777; text-align: center; padding: 15px;">Không tìm thấy bài hát phù hợp.</p>`;
                return;
            }

            filtered.forEach(song => {
                const inPl = pl.songs.includes(song.id);
                const item = document.createElement("div");
                item.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: #f8f9fa; border-radius: 8px;";
                item.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="${song.cover}" style="width: 38px; height: 38px; border-radius: 6px; object-fit: cover;">
                        <div>
                            <div style="font-weight: 600; font-size: 13.5px; color: #333;">${song.title}</div>
                            <div style="font-size: 11.5px; color: #666;">${song.artist}</div>
                        </div>
                    </div>
                    <button class="action-pl-song-btn" style="padding: 5px 12px; background: ${inPl ? '#ff4757' : '#7494ec'}; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;">${inPl ? 'Đã thêm ✓' : '+ Thêm'}</button>
                `;
                item.querySelector("button").addEventListener("click", () => {
                    if (!inPl) {
                        pl.songs.push(song.id);
                        localStorage.setItem('music_app_playlists', JSON.stringify(playlists));
                        renderSongListForModal(removeVietnameseAccents(searchInputEl.value.trim()));
                        renderPlaylistView(plName);
                        Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: `Đã thêm "${song.title}"`, showConfirmButton: false, timer: 1000 });
                    }
                });
                listContainer.appendChild(item);
            });
        };

        searchInputEl.oninput = (e) => {
            renderSongListForModal(removeVietnameseAccents(e.target.value.trim()));
        };

        renderSongListForModal("");
        if (addModal) addModal.style.display = "flex";
    };

    const addModalClose = document.getElementById("add-modal-close");
    if (addModalClose) {
        addModalClose.addEventListener("click", () => { 
            document.getElementById("add-song-modal").style.display = "none"; 
        });
    }

    // Tạo Playlist theo tâm trạng
    const moodModal = document.getElementById("mood-playlist-modal");
    const moodTrigger = document.getElementById("mood-playlist-trigger");
    if (moodTrigger) {
        moodTrigger.addEventListener("click", () => {
            document.getElementById("mood-step-1").style.display = "block";
            document.getElementById("mood-step-2").style.display = "none";
            if (moodModal) moodModal.style.display = "flex";
        });
    }
    const moodClose = document.getElementById("mood-modal-close");
    if (moodClose) moodClose.addEventListener("click", () => { moodModal.style.display = "none"; });

    document.querySelectorAll(".mood-option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const mood = btn.getAttribute("data-mood");
            const selectedMoodSongs = musicData.slice(0, 15);

            const sugContainer = document.getElementById("mood-songs-suggestion-list");
            sugContainer.innerHTML = "";
            selectedMoodSongs.forEach(song => {
                const sItem = document.createElement("div");
                sItem.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: #f8f9fa; border-radius: 8px;";
                sItem.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <input type="checkbox" class="mood-song-checkbox" value="${song.id}" checked style="width: 16px; height: 16px; accent-color: #7494ec;">
                        <img src="${song.cover}" style="width: 36px; height: 36px; border-radius: 4px; object-fit: cover;">
                        <div>
                            <div style="font-weight: 600; font-size: 13px; color: #333;">${song.title}</div>
                            <div style="font-size: 11px; color: #666;">${song.artist}</div>
                        </div>
                    </div>
                `;
                sugContainer.appendChild(sItem);
            });

            document.getElementById("mood-playlist-name-input").value = `Playlist Tâm trạng (${mood.toUpperCase()})`;
            document.getElementById("mood-step-1").style.display = "none";
            document.getElementById("mood-step-2").style.display = "flex";
        });
    });

    const moodBackBtn = document.getElementById("mood-back-btn");
    if (moodBackBtn) {
        moodBackBtn.addEventListener("click", () => {
            document.getElementById("mood-step-2").style.display = "none";
            document.getElementById("mood-step-1").style.display = "block";
        });
    }

    const moodSaveBtn = document.getElementById("mood-save-playlist-btn");
    if (moodSaveBtn) {
        moodSaveBtn.addEventListener("click", () => {
            const plName = document.getElementById("mood-playlist-name-input").value.trim() || "Playlist Tâm trạng";
            const checkboxes = document.querySelectorAll(".mood-song-checkbox:checked");
            const songIds = Array.from(checkboxes).map(cb => parseInt(cb.value));

            if (songIds.length === 0) {
                Swal.fire({ icon: 'warning', title: 'Vui lòng chọn ít nhất một bài hát!' });
                return;
            }

            playlists.push({
                id: 'pl_' + Math.random().toString(36).substring(2, 9),
                name: plName,
                songs: songIds
            });
            localStorage.setItem('music_app_playlists', JSON.stringify(playlists));
            moodModal.style.display = "none";
            renderSidebarPlaylists();
            Swal.fire({ icon: 'success', title: 'Đã lưu playlist vào thư viện!', timer: 1500, showConfirmButton: false });
        });
    }

    renderSidebarPlaylists();
});