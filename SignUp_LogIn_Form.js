document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem("user_displayName") || "Người dùng";
    const userPhoto = localStorage.getItem("user_photoURL");

    const nameElement = document.getElementById("user-name");
    if (nameElement) {
        nameElement.innerText = userName;
    }

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
            localStorage.clear();
            window.location.href = "SignUp_LogIn_Form.html";
        });
    }

    const musicData = [
        { title: "Top Hits Việt Nam", desc: "Những bản nhạc hot nhất hiện tại trên Bảng xếp hạng.", type: "playlist", artist: "Nhiều nghệ sĩ" },
        { title: "Lofi Chill", desc: "Nhạc lofi nhẹ nhàng tập trung học tập và làm việc.", type: "playlist", artist: "Lofi Viet" },
        { title: "Workout Energy", desc: "Giai điệu sôi động tiếp thêm năng lượng tập luyện.", type: "playlist", artist: "Remix Team" },
        { title: "Sleep & Relax", desc: "Giai điệu êm dịu giúp bạn thư giãn và dễ ngủ.", type: "playlist", artist: "Relaxing Sounds" },
        { title: "Nàng Thơ", desc: "Vũ", type: "song", artist: "Vũ" },
        { title: "Hoa Nở Không Màu", desc: "Hoài Lâm", type: "song", artist: "Hoài Lâm" },
        { title: "Sài Gòn Đau Lòng Quá", desc: "Hứa Kim Tuyền, Tlinh", type: "song", artist: "Hứa Kim Tuyền" },
        { title: "Em Đừng Khóc", desc: "Vũ Thanh Vân", type: "song", artist: "Vũ Thanh Vân" }
    ];

    const cardGrid = document.querySelector(".card-grid");

    function renderCards(data) {
        if (!cardGrid) return;
        cardGrid.innerHTML = "";
        data.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <div class="card-img"><i class='bx ${item.type === 'song' ? 'bx-music' : 'bx-headphone'}'></i></div>
                <div class="card-title">${item.title}</div>
                <div class="card-desc">${item.desc}</div>
            `;
            cardGrid.appendChild(card);
        });
    }

    renderCards(musicData);

    const searchInput = document.querySelector(".search-bar input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            const filteredData = musicData.filter(item => 
                item.title.toLowerCase().includes(keyword) || 
                item.desc.toLowerCase().includes(keyword) || 
                item.artist.toLowerCase().includes(keyword)
            );
            renderCards(filteredData);
        });
    }

    const playlistLinks = document.querySelectorAll(".playlist-links a");
    playlistLinks.forEach(link => {
        if (link.textContent.includes("Tạo playlist")) {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const playlistName = prompt("Nhập tên playlist mới của bạn:");
                if (playlistName && playlistName.trim() !== "") {
                    const newLi = document.createElement("li");
                    newLi.innerHTML = `<a href="#"><i class='bx bxs-music' style="color: #7494ec;"></i> ${playlistName.trim()}</a>`;
                    
                    const playlistUl = document.querySelector(".playlist-links");
                    playlistUl.appendChild(newLi);

                    musicData.unshift({
                        title: playlistName.trim(),
                        desc: "Playlist cá nhân của " + userName,
                        type: "playlist",
                        artist: userName
                    });
                    renderCards(musicData);

                    alert(`Đã tạo thành công playlist: "${playlistName.trim()}"`);
                }
            });
        }
    });

    const playBtn = document.querySelector(".play-btn");
    let isPlaying = false;
    if (playBtn) {
        playBtn.addEventListener("click", () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                playBtn.classList.replace("bx-play-circle", "bx-pause-circle");
            } else {
                playBtn.classList.replace("bx-pause-circle", "bx-play-circle");
            }
        });
    }
});