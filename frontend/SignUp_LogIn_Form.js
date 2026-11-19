document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const registerBtn = document.querySelector(".register-btn");
    const loginToggleBtn = document.querySelector(".login-btn");
    const loginForm = document.getElementById("traditional-login-form");
    const registerForm = document.getElementById("traditional-register-form");

    // --- TOAST NOTIFICATION ---
    if (!document.getElementById('custom-toast')) {
        const toastHTML = `
            <div id="custom-toast" style="position: fixed; top: 20px; right: 20px; padding: 14px 24px; border-radius: 12px; color: #fff; font-size: 14.5px; font-weight: 500; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); z-index: 9999; opacity: 0; visibility: hidden; transform: translateY(-20px); transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.35); font-family: 'Poppins', sans-serif;">
                <span id="toast-message"></span>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', toastHTML);
    }

    function showToast(message, type = 'success') {
        const toast = document.getElementById('custom-toast');
        const toastMessage = document.getElementById('toast-message');
        toastMessage.textContent = message;
        toast.style.backgroundColor = (type === 'success') ? '#2ed573' : '#ff4757';
        toast.style.opacity = '1';
        toast.style.visibility = 'visible';
        toast.style.transform = 'translateY(0)';
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.visibility = 'hidden';
            toast.style.transform = 'translateY(-20px)';
        }, 3500);
    }

    // --- HIỆU ỨNG TRƯỢT ---
    if (registerBtn && container) registerBtn.addEventListener("click", () => container.classList.add("active"));
    if (loginToggleBtn && container) loginToggleBtn.addEventListener("click", () => container.classList.remove("active"));

    // --- ẨN/HIỆN MẬT KHẨU ---
    const passwordInput = document.getElementById("login-password");
    const togglePasswordIcon = document.getElementById("toggle-password");
    const passwordError = document.getElementById("password-error");

    if (togglePasswordIcon && passwordInput) {
        togglePasswordIcon.addEventListener("click", () => {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePasswordIcon.className = "bx bx-show";
            } else {
                passwordInput.type = "password";
                togglePasswordIcon.className = "bx bxs-lock-alt";
            }
        });
    }

    // --- GỢI Ý MẬT KHẨU ---
    const regPasswordInput = document.getElementById("register-password");
    const hintLength = document.getElementById("hint-length");
    const hintUppercase = document.getElementById("hint-uppercase");
    const hintSpecial = document.getElementById("hint-special");

    function resetPasswordHints() {
        if (hintLength) { hintLength.style.color = "#ff4757"; hintLength.textContent = "❌ Ít nhất 8 ký tự"; }
        if (hintUppercase) { hintUppercase.style.color = "#ff4757"; hintUppercase.textContent = "❌ Có ít nhất 1 chữ cái viết hoa"; }
        if (hintSpecial) { hintSpecial.style.color = "#ff4757"; hintSpecial.textContent = "❌ Chỉ chứa ký tự đặc biệt: -, _, @"; }
    }

    if (regPasswordInput) {
        regPasswordInput.addEventListener("input", () => {
            const val = regPasswordInput.value;
            if (hintLength) {
                hintLength.style.color = (val.length >= 8) ? "#2ed573" : "#ff4757";
                hintLength.textContent = (val.length >= 8) ? "✔️ Ít nhất 8 ký tự" : "❌ Ít nhất 8 ký tự";
            }
            if (hintUppercase) {
                hintUppercase.style.color = (/[A-Z]/.test(val)) ? "#2ed573" : "#ff4757";
                hintUppercase.textContent = (/[A-Z]/.test(val)) ? "✔️ Có ít nhất 1 chữ cái viết hoa" : "❌ Có ít nhất 1 chữ cái viết hoa";
            }
            if (hintSpecial) {
                const isValidChars = !/[^a-zA-Z0-9\-_@]/.test(val) && val.length > 0;
                hintSpecial.style.color = (isValidChars) ? "#2ed573" : "#ff4757";
                hintSpecial.textContent = (isValidChars) ? "✔️ Chỉ chứa ký tự đặc biệt: -, _, @" : "❌ Chỉ chứa ký tự đặc biệt: -, _, @";
            }
        });
    }

    // --- XỬ LÝ ĐĂNG KÝ (MỚI) ---
    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const regUser = document.getElementById("register-username").value.trim();
            const regEmail = document.getElementById("register-email").value.trim();
            const regPass = regPasswordInput.value.trim();

            if (!regUser || !regEmail || !regPass) return showToast("Vui lòng điền đầy đủ thông tin!", "error");
            if (regPass.length < 8 || !/[A-Z]/.test(regPass) || /[^a-zA-Z0-9\-_@]/.test(regPass)) {
                return showToast("Mật khẩu chưa thỏa mãn yêu cầu!", "error");
            }

            try {
                const response = await fetch('http://localhost:3000/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: regUser, email: regEmail, password: regPass })
                });
                const data = await response.json();
                
                if (!data.success) return showToast(data.message || "Đăng ký thất bại!", "error");

                showToast("Đã gửi mã OTP, vui lòng kiểm tra email hoặc Terminal!", "success");
                registerForm.reset();
                resetPasswordHints();
                
                // Chuyển sang form OTP
                document.querySelector(".form-box.login").style.display = "none";
                document.querySelector(".form-box.register").style.display = "none";
                document.querySelector(".toggle-box").style.display = "none";
                document.getElementById("otp-form-box").style.display = "flex";
                window.currentRegisterEmail = regEmail;

            } catch (err) {
                showToast("Lỗi kết nối server!", "error");
            }
        });
    }

    // --- XỬ LÝ XÁC THỰC OTP (MỚI) ---
    const otpForm = document.getElementById("otp-verify-form");
    if (otpForm) {
        otpForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const otpInput = document.getElementById("otp-input").value.trim();
            if (!otpInput) return;

            try {
                const response = await fetch('http://localhost:3000/api/verify-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: window.currentRegisterEmail, otp: otpInput })
                });
                const data = await response.json();

                if (data.success) {
                    showToast("Xác thực thành công! Hãy đăng nhập.", "success");
                    document.getElementById("otp-form-box").style.display = "none";
                    document.querySelector(".form-box.login").style.display = "flex";
                    document.querySelector(".toggle-box").style.display = "block";
                } else {
                    showToast(data.message, "error");
                }
            } catch (err) {
                showToast("Lỗi kết nối server!", "error");
            }
        });
    }

    // --- XỬ LÝ ĐĂNG NHẬP ---
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById("login-username");
            const username = usernameInput ? usernameInput.value.trim() : "";
            const passwordValue = passwordInput ? passwordInput.value.trim() : "";

            if (!username || !passwordValue) {
                if (passwordError) {
                    passwordError.innerText = "Vui lòng nhập tài khoản và mật khẩu!";
                    passwordError.style.display = "block";
                }
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password: passwordValue })
                });
                const data = await response.json();

                if (!data.success) {
                    if (passwordInput) passwordInput.classList.add("error-input");
                    if (passwordError) {
                        passwordError.innerText = data.message || "Sai tài khoản hoặc mật khẩu!";
                        passwordError.style.display = "block";
                    }
                    return;
                }

                // LƯU THÔNG TIN & TOKEN
                localStorage.setItem("user_displayName", data.username);
                localStorage.setItem("user_email", data.email);
                localStorage.setItem("user_role", data.role);
                localStorage.setItem("auth_token", data.token);
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("user_is_premium", data.is_premium ? "true" : "false");

                showToast("Đăng nhập thành công!", "success");
                setTimeout(() => {
                    if (data.role === 'admin') {
                        window.location.href = "admin.html";
                    } else {
                        window.location.href = "home.html";
                    }
                }, 1000);

            } catch (err) {
                showToast("Không thể kết nối đến server!", "error");
            }
        });
    }
    
    // Firebase login (Giữ nguyên như cũ)
    // ... (Phần code Firebase giữ nguyên như file cũ của bạn) ...
});