document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const registerToggleBtn = document.querySelector(".toggle-panel .register-btn");
    const loginToggleBtn = document.querySelector(".toggle-panel .login-btn");

    // Hiệu ứng trượt qua lại giữa Login và Register
    if (registerToggleBtn && container) {
        registerToggleBtn.addEventListener("click", () => {
            container.classList.add("active");
        });
    }

    if (loginToggleBtn && container) {
        loginToggleBtn.addEventListener("click", () => {
            container.classList.remove("active");
        });
    }

    // Xử lý sự kiện đăng nhập
    const loginForm = document.getElementById("traditional-login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById("login-username");
            const username = usernameInput ? usernameInput.value.trim() : "Người dùng";

            if (username === "") {
                alert("Vui lòng nhập tên đăng nhập!");
                usernameInput.focus();
                return;
            }

            // Lưu thông tin vào localStorage để trang chủ home.html nhận diện
            localStorage.setItem("user_displayName", username);
            localStorage.setItem("isLoggedIn", "true");

            // Chuyển hướng sang trang chủ nghe nhạc
            window.location.href = "home.html";
        });
    }

    // Xử lý sự kiện đăng ký (chuyển hướng sang trang chủ hoặc báo thành công)
    const registerForm = document.getElementById("traditional-register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const regUsernameInput = document.getElementById("register-username");
            const username = regUsernameInput ? regUsernameInput.value.trim() : "Người dùng";

            localStorage.setItem("user_displayName", username);
            localStorage.setItem("isLoggedIn", "true");
            
            alert("Đăng ký tài khoản thành công!");
            window.location.href = "home.html";
        });
    }
});