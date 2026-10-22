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

    let musicData = [
        { id: 1, title: "Tìm Em (feat. Bảo Anh)", artist: "Hngle, Bảo Anh", desc: "Hngle, Bảo Anh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
        { id: 2, title: "SSD", artist: "W/N, 267, PAR SG", desc: "W/N, 267, PAR SG", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
        { id: 3, title: "Tội Cho Em", artist: "Cody Nam Võ", desc: "Cody Nam Võ", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300" },
        { id: 4, title: "GIẢI CỨU THẾ GIỚI", artist: "TINH HÀ SAY HI", desc: "TINH HÀ SAY HI", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300" },
        { id: 5, title: "Không Buông", artist: "Hngle, Ari", desc: "Hngle, Ari", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300" },
        { id: 6, title: "Ngày Này Năm Ấy", artist: "Việt Anh", desc: "Việt Anh", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300" },
        { id: 7, title: "Người Đầu Tiên", artist: "Juky San", desc: "Juky San", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=300" },
        { id: 8, title: "Bông Hoa Đẹp Nhất", artist: "Quân A.P", desc: "Quân A.P", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300" }
    ];

    let playlists = [
        { name: "Bài hát đã thích", songs: [1, 2, 3] }
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
                    <button id="add-song-to-pl-btn" style="padding: 8px 16px; background: #7494ec; color: #fff; border: none; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; box-shadow: 0 4px 10px rgba(116,148,236,0.3); transition: 0.2s;"><i class='bx bx-plus'></i> Thêm bài hát</button>
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
                currentSongIndex = index;
                playSong(item);
            });
            card.querySelector(".card-title").addEventListener("click", () => {
                currentSongIndex = index;
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
                    modalSongList.innerHTML = `<p style="color: #777; text-align: center; padding: 20px;">Tất cả bài hát đã có trong playlist này rồi!</p>`;
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
        const homeLink = document.querySelector(".nav-links li a");
        if (homeLink) {
            homeLink.addEventListener("click", (e) => {
                e.preventDefault();
                renderCards(musicData, "Bài hát nổi bật", false);
            });
        }

        document.querySelectorAll(".playlist-links a").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const plName = link.getAttribute("data-playlist");
                activePlaylistName = plName;

                if (plName === "Bài hát đã thích") {
                    renderCards(musicData, "Bài hát đã thích", false);
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

    renderCards(musicData, "Bài hát nổi bật", false);
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
                    songs: [1, 2]
                });
                renderPlaylistsSidebar();
                modal.style.display = "none";
            } else {
                alert("Vui lòng nhập tên playlist!");
            }
        });
    }
});