let allUsersData = [];
let allSongsData = [];
const API_BASE_URL = window.location.origin.includes('3000') ? '' : 'http://localhost:3000';

document.addEventListener("DOMContentLoaded", () => {
    fetchUsersData();
    fetchSongsData();
    fetchPlaylistsData();
    fetchHistoryData();

    // Chuyển tab Admin
    document.querySelectorAll(".admin-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".admin-tab-content").forEach(c => c.style.display = "none");
            btn.classList.add("active");
            const targetId = btn.getAttribute("data-target");
            const targetEl = document.getElementById(targetId);
            if (targetEl) targetEl.style.display = "block";
        });
    });

    const refreshBtn = document.getElementById("refresh-btn");
    if (refreshBtn) {
        refreshBtn.addEventListener("click", () => {
            fetchUsersData();
            fetchSongsData();
            fetchPlaylistsData();
            fetchHistoryData();
        });
    }

    const searchInput = document.getElementById("admin-search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            const filteredUsers = allUsersData.filter(user => 
                user.username.toLowerCase().includes(keyword) || 
                user.email.toLowerCase().includes(keyword)
            );
            renderTable(filteredUsers);
        });
    }

    const searchSongInput = document.getElementById("admin-search-song");
    if (searchSongInput) {
        searchSongInput.addEventListener("input", (e) => {
            const kw = e.target.value.toLowerCase().trim();
            const filtered = allSongsData.filter(s => 
                s.title.toLowerCase().includes(kw) || 
                s.artist.toLowerCase().includes(kw)
            );
            renderSongsTable(filtered);
        });
    }
});

async function fetchUsersData() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/admin/users`);
        const data = await response.json();

        if (data.success) {
            allUsersData = data.users;
            updateStats(allUsersData);
            renderTable(allUsersData);
        } else {
            Swal.fire({ icon: 'error', title: 'Lỗi', text: data.message || 'Không thể lấy dữ liệu!' });
        }
    } catch (err) {
        console.error("Không thể kết nối API Admin:", err);
        Swal.fire({ icon: 'error', title: 'Lỗi kết nối', text: 'Không thể truy cập server backend!' });
    }
}

function updateStats(users) {
    const totalUsersEl = document.getElementById("stat-total-users");
    const freeUsersEl = document.getElementById("stat-free-users");
    const premiumUsersEl = document.getElementById("stat-premium-users");

    const total = users.length;
    const premiumCount = users.filter(u => u.is_premium === 1).length;
    const freeCount = total - premiumCount;

    if (totalUsersEl) totalUsersEl.innerText = total;
    if (freeUsersEl) freeUsersEl.innerText = freeCount;
    if (premiumUsersEl) premiumUsersEl.innerText = premiumCount;
}

function renderTable(users) {
    const tbody = document.getElementById("user-table-body");
    if (!tbody) return;

    tbody.innerHTML = "";

    if (users.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #888; padding: 20px;">Không tìm thấy người dùng nào.</td></tr>`;
        return;
    }

    users.forEach(user => {
        const tr = document.createElement("tr");
        const isPrem = user.is_premium === 1;

        tr.innerHTML = `
            <td>${user.id}</td>
            <td><b>${user.username}</b></td>
            <td>${user.email}</td>
            <td>
                ${isPrem 
                    ? '<span class="badge badge-premium">PREMIUM ⭐</span>' 
                    : '<span class="badge badge-free">FREE</span>'}
            </td>
            <td>${user.created_at ? new Date(user.created_at).toLocaleString('vi-VN') : 'N/A'}</td>
            <td>
                <button class="action-btn btn-toggle-premium" onclick="toggleUserPremium('${user.username}', ${isPrem})">
                    ${isPrem ? 'Hạ về Free' : 'Nâng Premium'}
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

async function toggleUserPremium(username, currentIsPremium) {
    const targetStatus = currentIsPremium ? 0 : 1;
    const actionName = targetStatus === 1 ? 'Nâng cấp Premium' : 'Chuyển về Free';

    const confirmResult = await Swal.fire({
        title: `Xác nhận ${actionName}?`,
        text: `Bạn có muốn đổi trạng thái của tài khoản "${username}" không?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#7494ec',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Hủy'
    });

    if (confirmResult.isConfirmed) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/admin/update-user-status`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, is_premium: targetStatus })
            });
            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công!',
                    text: `Đã ${actionName.toLowerCase()} thành công cho "${username}".`,
                    timer: 1500,
                    showConfirmButton: false
                });
                fetchUsersData();
            } else {
                Swal.fire({ icon: 'error', title: 'Thất bại', text: data.message });
            }
        } catch (err) {
            console.error("Lỗi khi chuyển trạng thái Premium:", err);
            Swal.fire({ icon: 'error', title: 'Lỗi', text: 'Không thể cập nhật database!' });
        }
    }
}

// --- HÀM LOAD DỮ LIỆU 3 BẢNG MỚI (SONGS, PLAYLISTS, LISTENING_HISTORY) ---
async function fetchSongsData() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/songs`);
        const data = await res.json();
        if (data.success) {
            allSongsData = data.songs;
            const badge = document.getElementById("songs-count-badge");
            if (badge) badge.innerText = allSongsData.length;
            renderSongsTable(allSongsData);
        }
    } catch (e) { console.error(e); }
}

function renderSongsTable(songs) {
    const tbody = document.getElementById("song-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";
    if (songs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #888; padding: 20px;">Chưa có dữ liệu bài hát. Hãy mở trang chủ (home.html) 1 lần để tự động đồng bộ 100 bài hát vào DB.</td></tr>`;
        return;
    }
    songs.forEach(s => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${s.id}</td>
            <td><b>${s.title}</b></td>
            <td>${s.artist}</td>
            <td style="font-size: 12px; color: #555;">${s.src}</td>
            <td>${(s.plays || 0).toLocaleString('vi-VN')}</td>
        `;
        tbody.appendChild(tr);
    });
}

async function fetchPlaylistsData() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/admin/playlists`);
        const data = await res.json();
        const tbody = document.getElementById("playlist-table-body");
        if (!tbody || !data.success) return;
        tbody.innerHTML = "";
        if (data.playlists.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: #888; padding: 20px;">Chưa có playlist nào được đồng bộ.</td></tr>`;
            return;
        }
        data.playlists.forEach(p => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${p.id}</td>
                <td><b>${p.username}</b></td>
                <td>${p.name}</td>
                <td><span class="badge badge-premium">${p.song_count} bài hát</span></td>
                <td>${p.created_at ? new Date(p.created_at).toLocaleString('vi-VN') : 'N/A'}</td>
            `;
            tbody.appendChild(tr);
        });
    } catch (e) { console.error(e); }
}

async function fetchHistoryData() {
    try {
        const res = await fetch(`${API_BASE_URL}/api/admin/history`);
        const data = await res.json();
        const tbody = document.getElementById("history-table-body");
        if (!tbody || !data.success) return;
        tbody.innerHTML = "";
        if (data.history.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #888; padding: 20px;">Chưa có lịch sử nghe nhạc nào.</td></tr>`;
            return;
        }
        data.history.forEach(h => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${h.id}</td>
                <td><b>${h.username}</b></td>
                <td>${h.song_id}</td>
                <td>${h.song_title}</td>
                <td>${h.artist}</td>
                <td>${h.listened_at ? new Date(h.listened_at).toLocaleString('vi-VN') : 'N/A'}</td>
            `;
            tbody.appendChild(tr);
        });
    } catch (e) { console.error(e); }
}