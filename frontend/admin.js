const token = localStorage.getItem("auth_token");
if (!token || localStorage.getItem("user_role") !== 'admin') {
    alert("Không có quyền truy cập!");
    window.location.href = "SignUp_Login_Form.html";
}

async function fetchUsers() {
    try {
        const res = await fetch('http://localhost:3000/api/admin/users', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        if (data.success) {
            const tbody = document.getElementById("user-table-body");
            tbody.innerHTML = data.users.map(u => `
                <tr>
                    <td>${u.id}</td>
                    <td><b>${u.username}</b> ${u.role === 'admin' ? '(Admin)' : ''}</td>
                    <td>${u.email}</td>
                    <td>${u.is_verified ? '✅' : '❌'}</td>
                    <td style="color: ${u.is_premium ? '#2ed573' : '#ff4757'}; font-weight: bold;">${u.is_premium ? 'PREMIUM' : 'FREE'}</td>
                    <td>
                        <button class="btn btn-toggle" onclick="togglePremium('${u.username}', ${u.is_premium ? 0 : 1})">
                            Đổi trạng thái
                        </button>
                    </td>
                </tr>
            `).join('');
        }
    } catch (err) {
        console.error(err);
    }
}

async function togglePremium(username, newStatus) {
    const res = await fetch('http://localhost:3000/api/admin/update-user-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ username, is_premium: newStatus })
    });
    if (res.ok) fetchUsers();
}

function logout() {
    localStorage.clear();
    window.location.href = "SignUp_Login_Form.html";
}
document.addEventListener("DOMContentLoaded", fetchUsers);