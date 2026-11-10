let allUsersData = [];

document.addEventListener("DOMContentLoaded", () => {
    fetchUsersData();

    const refreshBtn = document.getElementById("refresh-btn");
    if (refreshBtn) {
        refreshBtn.addEventListener("click", () => {
            fetchUsersData();
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
});

async function fetchUsersData() {
    try {
        const response = await fetch('/api/admin/users');
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
            const response = await fetch('/api/admin/update-user-status', {
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