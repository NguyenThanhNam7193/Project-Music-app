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

    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            if (confirm("Bạn có muốn đăng xuất không?")) {
                localStorage.clear();
                window.location.href = "SignUp_LogIn_Form.html";
            }
        });
    }

    // Mảng dữ liệu 100 bài hát (10 ca sĩ x 10 bài mỗi ca sĩ)
    let musicData = [
        // 1. Sơn Tùng M-TP (ID 1 - 10)
        { id: 1, title: "Chúng Ta Của Hiện Tại", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 2, title: "Lạc Trôi", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
        { id: 3, title: "Nơi Này Có Anh", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 4, title: "Hãy Trao Cho Anh", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },
        { id: 5, title: "Muộn Rồi Mà Sao Còn", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300" },
        { id: 6, title: "Chạy Ngay Đi", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
        { id: 7, title: "Âm Thầm Bên Em", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300" },
        { id: 8, title: "Em Của Ngày Hôm Qua", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },
        { id: 9, title: "Buông Đôi Tay Nhau Ra", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 10, title: "Chúng Ta Không Thuộc Về Nhau", artist: "Sơn Tùng M-TP", desc: "Sơn Tùng M-TP", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },

        // 2. Bùi Trường Linh (ID 11 - 20)
        { id: 11, title: "Yêu Người Có Ước Mơ", artist: "buitruonglinh", desc: "buitruonglinh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 12, title: "Đường Tôi Chở Em Về", artist: "buitruonglinh", desc: "buitruonglinh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },
        { id: 13, title: "Sớm Như Vậy", artist: "buitruonglinh", desc: "buitruonglinh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300" },
        { id: 14, title: "Từng Ngày Như Mãi Mãi", artist: "buitruonglinh", desc: "buitruonglinh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
        { id: 15, title: "Từng Ngày Yêu Em", artist: "buitruonglinh", desc: "buitruonglinh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300" },
        { id: 16, title: "Dù Cho Mai Về Sau", artist: "buitruonglinh", desc: "buitruonglinh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },
        { id: 17, title: "Giờ Thì", artist: "buitruonglinh", desc: "buitruonglinh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 18, title: "Vấn Vương", artist: "buitruonglinh", desc: "buitruonglinh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
        { id: 19, title: "Dù Em Từng Yêu", artist: "buitruonglinh", desc: "buitruonglinh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 20, title: "Thịnh Vượng Việt Nam Sáng Ngời", artist: "buitruonglinh", desc: "buitruonglinh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },

        // 3. Quân A.P (ID 21 - 30)
        { id: 21, title: "Bông Hoa Đẹp Nhất", artist: "Quân A.P", desc: "Quân A.P", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300" },
        { id: 22, title: "Ai Là Người Thương Em", artist: "Quân A.P", desc: "Quân A.P", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
        { id: 23, title: "Có Ai Hẹn Hò Cùng Em Chưa", artist: "Quân A.P", desc: "Quân A.P", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300" },
        { id: 24, title: "Đáp Án Cuối Cùng", artist: "Quân A.P", desc: "Quân A.P", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },
        { id: 25, title: "Còn Gì Đau Hơn Chữ Đã Từng", artist: "Quân A.P", desc: "Quân A.P", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 26, title: "Phản Bội Chính Mình", artist: "Quân A.P", desc: "Quân A.P", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
        { id: 27, title: "Lời Xin Lỗi Vụng Về", artist: "Quân A.P", desc: "Quân A.P", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 28, title: "Đầu Anh Toàn Là Em", artist: "Quân A.P", desc: "Quân A.P", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },
        { id: 29, title: "Lửa Gần Rơm", artist: "Quân A.P", desc: "Quân A.P", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300" },
        { id: 30, title: "Mùi Tổ Ấm", artist: "Quân A.P", desc: "Quân A.P", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },

        // 4. Hngle (ID 31 - 40)
        { id: 31, title: "Tìm Em (feat. Bảo Anh)", artist: "Hngle", desc: "Hngle, Bảo Anh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300" },
        { id: 32, title: "Không Buông", artist: "Hngle", desc: "Hngle, Ari", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },
        { id: 33, title: "Lạc Lối Giữa Đời", artist: "Hngle", desc: "Hngle", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 34, title: "Phía Sau Một Niệm Ký", artist: "Hngle", desc: "Hngle", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
        { id: 35, title: "Tình Nhạt Phai", artist: "Hngle", desc: "Hngle", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 36, title: "Đêm Mưa Vắng Em", artist: "Hngle", desc: "Hngle", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },
        { id: 37, title: "Gió Vẫn Hát", artist: "Hngle", desc: "Hngle", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300" },
        { id: 38, title: "Chờ Mong", artist: "Hngle", desc: "Hngle", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
        { id: 39, title: "Nắng Sân Trường", artist: "Hngle", desc: "Hngle", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300" },
        { id: 40, title: "Về Bên Anh", artist: "Hngle", desc: "Hngle", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },

        // 5. W/N (ID 41 - 50)
        { id: 41, title: "SSD", artist: "W/N", desc: "W/N, 267, PAR SG", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 42, title: "3út", artist: "W/N", desc: "W/N", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
        { id: 43, title: "Simple Love", artist: "W/N", desc: "W/N", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 44, title: "Cất Em Vào Tâm Trí", artist: "W/N", desc: "W/N", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },
        { id: 45, title: "Mây", artist: "W/N", desc: "W/N", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300" },
        { id: 46, title: "Kẻ Mộng Mơ", artist: "W/N", desc: "W/N", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
        { id: 47, title: "3107", artist: "W/N", desc: "W/N, 267", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300" },
        { id: 48, title: "3107-2", artist: "W/N", desc: "W/N, 267, Nâu", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },
        { id: 49, title: "3107-3", artist: "W/N", desc: "W/N, Nâu, Duong", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 50, title: "3107-4", artist: "W/N", desc: "W/N, Nâu, Erik", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },

        // 6. Thanh Hưng (ID 51 - 60)
        { id: 51, title: "Tệ Thật, Anh Nhớ Em", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 52, title: "Sai Người Sai Thời Điểm", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },
        { id: 53, title: "Đúng Người Sai Thời Điểm", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300" },
        { id: 54, title: "Em Đã Xa Anh", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
        { id: 55, title: "Thay Lòng", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300" },
        { id: 56, title: "Nỗi Đau Lại Bắt Đầu", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },
        { id: 57, title: "Chỉ Còn Lại Nỗi Đau", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 58, title: "Yêu Em Dài Lâu", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
        { id: 59, title: "Hạnh Phúc Đó Không Phải Anh", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 60, title: "Tìm Về Khúc Ca Xưa", artist: "Thanh Hưng", desc: "Thanh Hưng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },

        // 7. Hoàng Dũng (ID 61 - 70)
        { id: 61, title: "Nàng Thơ", artist: "Hoàng Dũng", desc: "Hoàng Dũng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300" },
        { id: 62, title: "Phonecert", artist: "Hoàng Dũng", desc: "Hoàng Dũng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
        { id: 63, title: "Đoạn Kết Mới", artist: "Hoàng Dũng", desc: "Hoàng Dũng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300" },
        { id: 64, title: "Yếu Đuối", artist: "Hoàng Dũng", desc: "Hoàng Dũng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },
        { id: 65, title: "Ném Câu Yêu Vào Không Trung", artist: "Hoàng Dũng", desc: "Hoàng Dũng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 66, title: "Đôi Mươi", artist: "Hoàng Dũng", desc: "Hoàng Dũng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
        { id: 67, title: "Chẳng Nói Nên Lời", artist: "Hoàng Dũng", desc: "Hoàng Dũng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 68, title: "Mùa Yêu Đầu", artist: "Hoàng Dũng", desc: "Hoàng Dũng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },
        { id: 69, title: "Về Nhà", artist: "Hoàng Dũng", desc: "Hoàng Dũng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300" },
        { id: 70, title: "Lý Giải", artist: "Hoàng Dũng", desc: "Hoàng Dũng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },

        // 8. Vũ (ID 71 - 80)
        { id: 71, title: "Lạ Lùng", artist: "Vũ", desc: "Vũ", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300" },
        { id: 72, title: "Đông Kiếm Em", artist: "Vũ", desc: "Vũ", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },
        { id: 73, title: "Bước Qua Nhau", artist: "Vũ", desc: "Vũ", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 74, title: "Phút Mộc", artist: "Vũ", desc: "Vũ", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
        { id: 75, title: "Cành Hoa Trên Ghế Đá", artist: "Vũ", desc: "Vũ", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 76, title: "Những Lời Hứa Bỏ Quên", artist: "Vũ", desc: "Vũ, Dear Jane", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },
        { id: 77, title: "Chuyện Những Người Bạn", artist: "Vũ", desc: "Vũ", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300" },
        { id: 78, title: "Hành Trúc Xanh", artist: "Vũ", desc: "Vũ", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
        { id: 79, title: "Chờ Người", artist: "Vũ", desc: "Vũ", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300" },
        { id: 80, title: "Bình Minh", artist: "Vũ", desc: "Vũ", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },

        // 9. Đen Vâu (ID 81 - 90)
        { id: 81, title: "Mang Tiền Về Cho Mẹ", artist: "Đen Vâu", desc: "Đen Vâu, Nguyên Thảo", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 82, title: "Nấu Ăn Cho Em", artist: "Đen Vâu", desc: "Đen Vâu, PiaLinh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
        { id: 83, title: "Trốn Tìm", artist: "Đen Vâu", desc: "Đen Vâu, MTV band", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 84, title: "Bài Này Chill Phết", artist: "Đen Vâu", desc: "Đen Vâu, Min", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },
        { id: 85, title: "Luôn Yêu Đời", artist: "Đen Vâu", desc: "Đen Vâu, Cheng", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300" },
        { id: 86, title: "Hai Triệu Năm", artist: "Đen Vâu", desc: "Đen Vâu, Biên", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
        { id: 87, title: "Lối Nhỏ", artist: "Đen Vâu", desc: "Đen Vâu, Phương Anh Đào", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300" },
        { id: 88, title: "Mười Năm", artist: "Đen Vâu", desc: "Đen Vâu, Ngọc Atra", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },
        { id: 89, title: "Điểm Giao Khác", artist: "Đen Vâu", desc: "Đen Vâu", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 90, title: "Ghé Qua", artist: "Đen Vâu", desc: "Đen Vâu, Táo", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },

        // 10. Jack97 (ID 91 - 100)
        { id: 91, title: "Sóng Gió", artist: "Jack97", desc: "K-ICM, Jack", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 92, title: "Hồng顏", artist: "Jack97", desc: "Jack", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },
        { id: 93, title: "Bạc Phận", artist: "Jack97", desc: "K-ICM, Jack", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300" },
        { id: 94, title: "Là 1 Thằng Con Trai", artist: "Jack97", desc: "Jack", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
        { id: 95, title: "Hoa Hải Đường", artist: "Jack97", desc: "Jack", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300" },
        { id: 96, title: "Đom Đóm", artist: "Jack97", desc: "Jack", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" },
        { id: 97, title: "LayLaLay", artist: "Jack97", desc: "Jack", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 98, title: "Em Gì Ơi", artist: "Jack97", desc: "K-ICM, Jack", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
        { id: 99, title: "Việt Nam Tôi", artist: "Jack97", desc: "Jack", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 100, title: "Từ Nơi Tôi Sinh Ra", artist: "Jack97", desc: "Jack", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" }
    ];

    let playlists = [
        { name: "Bài hát đã thích", songs: [1, 11, 21, 31, 41] }
    ];

    let currentSongIndex = 0;
    let activePlaylistName = null;

    const audioPlayer = new Audio();
    const playBtn = document.querySelector(".play-btn");
    const cardGrid = document.querySelector(".card-grid");
    const sectionTitle = document.querySelector(".section-title");
    const currentTimeEl = document.querySelector(".current-time");
    const totalDurationEl = document.querySelector(".total-duration");
    const progressBar = document.querySelector(".player-controls .progress-bar");
    const progressFill = document.querySelector(".player-controls .progress-fill");
    
    const volumeIcon = document.querySelector(".volume-controls i");
    const volumeBar = document.querySelector(".volume-controls .progress-bar");
    const volumeFill = document.querySelector(".volume-controls .progress-fill");

    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function renderCards(data, titleText = "Bài hát nổi bật", isPlaylistView = false, plName = null) {
        if (!cardGrid) return;
        
        if (isPlaylistView && plName) {
            sectionTitle.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <span>Playlist: ${plName}</span>
                    <button id="add-song-to-pl-btn" style="padding: 8px 16px; background: #7494ec; color: #fff; border: none; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; box-shadow: 0 4px 10px rgba(116,148,236,0.3);"><i class='bx bx-plus'></i> Thêm bài hát</button>
                </div>
            `;
        } else {
            if (sectionTitle) sectionTitle.innerText = titleText;
        }

        cardGrid.innerHTML = "";
        
        if (data.length === 0) {
            cardGrid.innerHTML = `<p style="color: #666; grid-column: 1/-1;">Playlist này chưa có bài hát nào.</p>`;
            if (isPlaylistView) attachAddSongEvent(plName);
            return;
        }

        data.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.position = "relative";
            
            let actionButtonsHTML = "";
            if (isPlaylistView && plName) {
                actionButtonsHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; border-top: 1px solid #f0f0f0; padding-top: 10px;">
                        <div style="display: flex; gap: 6px;">
                            ${index > 0 ? `<button class="move-left-btn" data-pl="${plName}" data-index="${index}" title="Chuyển lên trước" style="background:#f0f0f0; border:none; padding:4px 8px; border-radius:6px; cursor:pointer; font-weight:bold; color:#555;">▲</button>` : ""}
                            ${index < data.length - 1 ? `<button class="move-right-btn" data-pl="${plName}" data-index="${index}" title="Chuyển xuống sau" style="background:#f0f0f0; border:none; padding:4px 8px; border-radius:6px; cursor:pointer; font-weight:bold; color:#555;">▼</button>` : ""}
                        </div>
                        <button class="remove-song-btn" data-pl="${plName}" data-songid="${item.id}" title="Xóa khỏi playlist" style="background: #ffebee; color: #d32f2f; border: none; padding: 5px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">Xóa</button>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="card-img" style="overflow: hidden; cursor: pointer;">
                    <img src="${item.cover}" style="width: 100%; height: 100%; object-fit: cover;" alt="Cover">
                </div>
                <div class="card-title" style="cursor: pointer;">${item.title}</div>
                <div class="card-desc">${item.artist}</div>
                ${actionButtonsHTML}
            `;

            card.querySelector(".card-img").addEventListener("click", () => {
                currentSongIndex = musicData.findIndex(s => s.id === item.id);
                playSong(item);
            });
            card.querySelector(".card-title").addEventListener("click", () => {
                currentSongIndex = musicData.findIndex(s => s.id === item.id);
                playSong(item);
            });

            cardGrid.appendChild(card);
        });

        if (isPlaylistView && plName) {
            attachAddSongEvent(plName);
            attachPlaylistActionEvents(plName);
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
                    modalSongList.innerHTML = `<p style="color: #777; text-align: center; padding: 20px;">Tất cả 100 bài hát đã có trong playlist này rồi!</p>`;
                } else {
                    availableSongs.forEach(s => {
                        const songItem = document.createElement("div");
                        songItem.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 10px; background: #f8f9fa; border-radius: 8px; border: 1px solid #e0e0e0;";
                        songItem.innerHTML = `
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <img src="${s.cover}" style="width: 38px; height: 38px; border-radius: 6px; object-fit: cover;">
                                <div>
                                    <div style="font-size: 14px; font-weight: 600; color: #222;">${s.title}</div>
                                    <div style="font-size: 12px; color: #666;">${s.artist}</div>
                                </div>
                            </div>
                            <button class="add-btn-action" data-songid="${s.id}" style="padding: 6px 14px; background: #7494ec; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 600;">Thêm</button>
                        `;
                        modalSongList.appendChild(songItem);
                    });

                    modalSongList.querySelectorAll(".add-btn-action").forEach(btn => {
                        btn.addEventListener("click", () => {
                            const songId = parseInt(btn.getAttribute("data-songid"));
                            if (!playlist.songs.includes(songId)) {
                                playlist.songs.push(songId);
                                const songsInPl = musicData.filter(song => playlist.songs.includes(song.id));
                                renderCards(songsInPl, `Playlist: ${plName}`, true, plName);
                                addModal.style.display = "none";
                            }
                        });
                    });
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

    function attachPlaylistActionEvents(plName) {
        const playlist = playlists.find(p => p.name === plName);
        if (!playlist) return;

        document.querySelectorAll(".remove-song-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const songId = parseInt(btn.getAttribute("data-songid"));
                playlist.songs = playlist.songs.filter(id => id !== songId);
                const songsInPl = musicData.filter(s => playlist.songs.includes(s.id));
                renderCards(songsInPl, `Playlist: ${plName}`, true, plName);
            });
        });

        document.querySelectorAll(".move-left-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const idx = parseInt(btn.getAttribute("data-index"));
                if (idx > 0) {
                    const temp = playlist.songs[idx];
                    playlist.songs[idx] = playlist.songs[idx - 1];
                    playlist.songs[idx - 1] = temp;

                    const songsInPl = musicData.filter(s => playlist.songs.includes(s.id));
                    renderCards(songsInPl, `Playlist: ${plName}`, true, plName);
                }
            });
        });

        document.querySelectorAll(".move-right-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const idx = parseInt(btn.getAttribute("data-index"));
                if (idx < playlist.songs.length - 1) {
                    const temp = playlist.songs[idx];
                    playlist.songs[idx] = playlist.songs[idx + 1];
                    playlist.songs[idx + 1] = temp;

                    const songsInPl = musicData.filter(s => playlist.songs.includes(s.id));
                    renderCards(songsInPl, `Playlist: ${plName}`, true, plName);
                }
            });
        });
    }

    function renderPlaylistsSidebar() {
        const playlistUl = document.querySelector(".playlist-links");
        if (!playlistUl) return;

        playlistUl.innerHTML = `
            <li><a href="#"><i class='bx bxs-plus-square'></i> Tạo playlist</a></li>
            <li><a href="#" data-playlist="Bài hát đã thích"><i class='bx bxs-heart-square'></i> Bài hát đã thích</a></li>
        `;

        playlists.forEach((pl, plIndex) => {
            if (pl.name === "Bài hát đã thích") return;
            const li = document.createElement("li");
            li.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding-right: 10px;";
            li.innerHTML = `
                <a href="#" data-playlist="${pl.name}" style="flex: 1;"><i class='bx bxs-music' style="color: #7494ec;"></i> ${pl.name}</a>
                <div style="display: flex; gap: 8px;">
                    <i class='bx bx-edit edit-pl' data-index="${plIndex}" title="Đổi tên" style="cursor: pointer; color: #777; font-size: 16px;"></i>
                    <i class='bx bx-trash delete-pl' data-index="${plIndex}" title="Xóa" style="cursor: pointer; color: #ff5252; font-size: 16px;"></i>
                </div>
            `;
            playlistUl.appendChild(li);
        });

        attachSidebarEvents();
    }

    function attachSidebarEvents() {
        const menuLinks = document.querySelectorAll(".nav-links li a");
        menuLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                menuLinks.forEach(l => l.classList.remove("active"));
                link.classList.add("active");

                const linkText = link.textContent.trim();
                if (linkText.includes("Trang chủ")) {
                    renderCards(musicData, "Bài hát nổi bật", false);
                } else if (linkText.includes("Tìm kiếm")) {
                    const searchInput = document.querySelector(".search-bar input");
                    if (searchInput) searchInput.focus();
                    renderCards(musicData, "Tìm kiếm bài hát", false);
                } else if (linkText.includes("Thư viện")) {
                    renderCards(musicData, "Thư viện của bạn (100 Bài Hát)", false);
                }
            });
        });

        document.querySelectorAll(".playlist-links a").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const plName = link.getAttribute("data-playlist");
                if (!plName) return;
                activePlaylistName = plName;

                if (plName === "Bài hát đã thích") {
                    const found = playlists.find(p => p.name === "Bài hát đã thích");
                    const songsInPl = musicData.filter(s => found.songs.includes(s.id));
                    renderCards(songsInPl, "Bài hát đã thích", true, "Bài hát đã thích");
                } else {
                    const found = playlists.find(p => p.name === plName);
                    if (found) {
                        const songsInPl = musicData.filter(s => found.songs.includes(s.id));
                        renderCards(songsInPl, `Playlist: ${found.name}`, true, found.name);
                    }
                }
            });
        });

        document.querySelectorAll(".edit-pl").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const idx = btn.getAttribute("data-index");
                const newName = prompt("Nhập tên mới cho playlist:", playlists[idx].name);
                if (newName && newName.trim() !== "") {
                    playlists[idx].name = newName.trim();
                    renderPlaylistsSidebar();
                }
            });
        });

        document.querySelectorAll(".delete-pl").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const idx = btn.getAttribute("data-index");
                if (confirm(`Bạn có chắc muốn xóa playlist "${playlists[idx].name}" không?`)) {
                    playlists.splice(idx, 1);
                    renderPlaylistsSidebar();
                    renderCards(musicData, "Bài hát nổi bật", false);
                }
            });
        });
    }

    function playSong(song) {
        audioPlayer.src = song.src;
        audioPlayer.play();

        const trackName = document.querySelector(".player-bar .track-name");
        const artistName = document.querySelector(".player-bar .artist-name");
        const trackCover = document.querySelector(".player-bar .track-cover");

        if (trackName) trackName.innerText = song.title;
        if (artistName) artistName.innerText = song.artist;
        if (trackCover && song.cover) trackCover.src = song.cover;

        if (playBtn) playBtn.classList.replace("bx-play-circle", "bx-pause-circle");
    }

    audioPlayer.addEventListener("timeupdate", () => {
        if (audioPlayer.duration) {
            const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            if (progressFill) progressFill.style.width = `${progressPercent}%`;
            if (currentTimeEl) currentTimeEl.innerText = formatTime(audioPlayer.currentTime);
        }
    });

    audioPlayer.addEventListener("loadedmetadata", () => {
        if (totalDurationEl) totalDurationEl.innerText = formatTime(audioPlayer.duration);
    });

    if (progressBar) {
        progressBar.addEventListener("click", (e) => {
            if (!audioPlayer.duration) return;
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            audioPlayer.currentTime = (clickX / rect.width) * audioPlayer.duration;
        });
    }

    audioPlayer.volume = 0.7;
    if (volumeBar) {
        volumeBar.addEventListener("click", (e) => {
            const rect = volumeBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const volumePercent = Math.max(0, Math.min(1, clickX / rect.width));
            audioPlayer.volume = volumePercent;
            if (volumeFill) volumeFill.style.width = `${volumePercent * 100}%`;
            volumeIcon.className = volumePercent === 0 ? 'bx bx-volume-mute' : 'bx bx-volume-full';
        });
    }

    if (volumeIcon) {
        volumeIcon.addEventListener("click", () => {
            if (audioPlayer.muted) {
                audioPlayer.muted = false;
                volumeIcon.className = 'bx bx-volume-full';
                if (volumeFill) volumeFill.style.width = `${audioPlayer.volume * 100}%`;
            } else {
                audioPlayer.muted = true;
                volumeIcon.className = 'bx bx-volume-mute';
                if (volumeFill) volumeFill.style.width = '0%';
            }
        });
    }

    if (playBtn) {
        playBtn.addEventListener("click", () => {
            if (!audioPlayer.src && musicData.length > 0) {
                playSong(musicData[0]);
                return;
            }
            if (audioPlayer.paused) {
                audioPlayer.play();
                playBtn.classList.replace("bx-play-circle", "bx-pause-circle");
            } else {
                audioPlayer.pause();
                playBtn.classList.replace("bx-pause-circle", "bx-play-circle");
            }
        });
    }

    const nextBtn = document.querySelector(".bx-skip-next");
    const prevBtn = document.querySelector(".bx-skip-previous");

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentSongIndex = (currentSongIndex + 1) % musicData.length;
            playSong(musicData[currentSongIndex]);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentSongIndex = (currentSongIndex - 1 + musicData.length) % musicData.length;
            playSong(musicData[currentSongIndex]);
        });
    }

    audioPlayer.addEventListener("ended", () => {
        currentSongIndex = (currentSongIndex + 1) % musicData.length;
        playSong(musicData[currentSongIndex]);
    });

    renderCards(musicData, "Bài hát nổi bật (100 Bài)", false);
    renderPlaylistsSidebar();

    const searchInput = document.querySelector(".search-bar input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            const filteredData = musicData.filter(item => 
                item.title.toLowerCase().includes(keyword) || 
                item.desc.toLowerCase().includes(keyword) || 
                item.artist.toLowerCase().includes(keyword)
            );
            renderCards(filteredData, "Kết quả tìm kiếm", false);
        });
    }

    const playlistHeaderBtn = document.querySelector(".playlist-header i");
    const modal = document.getElementById("playlist-modal");
    const modalInput = document.getElementById("playlist-name-input");
    const modalCancel = document.getElementById("modal-cancel");
    const modalConfirm = document.getElementById("modal-confirm");

    function openModal() {
        if (modal) {
            modal.style.display = "flex";
            modalInput.value = "";
            modalInput.focus();
        }
    }

    if (playlistHeaderBtn) playlistHeaderBtn.addEventListener("click", openModal);
    
    document.querySelectorAll(".playlist-links a").forEach(a => {
        if (a.textContent.includes("Tạo playlist")) {
            a.addEventListener("click", (e) => {
                e.preventDefault();
                openModal();
            });
        }
    });

    if (modalCancel) {
        modalCancel.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    if (modalConfirm) {
        modalConfirm.addEventListener("click", () => {
            const playlistName = modalInput.value.trim();
            if (playlistName !== "") {
                playlists.push({
                    name: playlistName,
                    songs: [1, 2, 3]
                });
                renderPlaylistsSidebar();
                modal.style.display = "none";
            } else {
                alert("Vui lòng nhập tên playlist!");
            }
        });
    }
});