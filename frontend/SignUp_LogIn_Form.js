document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const registerBtn = document.querySelector(".register-btn");
    const loginToggleBtn = document.querySelector(".login-btn");
    const loginForm = document.getElementById("traditional-login-form");
    const registerForm = document.getElementById("traditional-register-form");

    // --- TẠO KHUNG TOAST NOTIFICATION ĐẸP MẮT ---
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

    // --- HIỆU ỨNG TRƯỢT QUA LẠI GIỮA LOGIN & REGISTER ---
    if (registerBtn && container) {
        registerBtn.addEventListener("click", () => {
            container.classList.add("active");
        });
    }

    if (loginToggleBtn && container) {
        loginToggleBtn.addEventListener("click", () => {
            container.classList.remove("active");
        });
    }

    // --- ẨN / HIỆN MẬT KHẨU LOGIN ---
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

    // --- XỬ LÝ GỢI Ý MẬT KHẨU THEO THỜI GIAN THỰC (REAL-TIME HINT) ---
    const regPasswordInput = document.getElementById("register-password");
    const hintLength = document.getElementById("hint-length");
    const hintUppercase = document.getElementById("hint-uppercase");
    const hintSpecial = document.getElementById("hint-special");

    if (regPasswordInput) {
        regPasswordInput.addEventListener("input", () => {
            const val = regPasswordInput.value;

            // 1. Kiểm tra độ dài >= 8
            if (val.length >= 8) {
                hintLength.style.color = "#2ed573";
                hintLength.textContent = "✔️ Ít nhất 8 ký tự";
            } else {
                hintLength.style.color = "#ff4757";
                hintLength.textContent = "❌ Ít nhất 8 ký tự";
            }

            // 2. Kiểm tra chữ hoa
            if (/[A-Z]/.test(val)) {
                hintUppercase.style.color = "#2ed573";
                hintUppercase.textContent = "✔️ Có ít nhất 1 chữ cái viết hoa";
            } else {
                hintUppercase.style.color = "#ff4757";
                hintUppercase.textContent = "❌ Có ít nhất 1 chữ cái viết hoa";
            }

            // 3. Kiểm tra ký tự đặc biệt (chỉ cho phép -, _, @ và không có ký tự lạ khác)
            const isValidChars = !/[^a-zA-Z0-9\-_@]/.test(val) && val.length > 0;
            if (isValidChars) {
                hintSpecial.style.color = "#2ed573";
                hintSpecial.textContent = "✔️ Chỉ chứa ký tự đặc biệt: -, _, @";
            } else {
                hintSpecial.style.color = "#ff4757";
                hintSpecial.textContent = "❌ Chỉ chứa ký tự đặc biệt: -, _, @";
            }
        });
    }

    // --- MODAL QUÊN MẬT KHẨU ---
    const forgotBtn = document.getElementById("forgot-link-btn");
    const forgotModal = document.getElementById("forgot-modal");
    const forgotCancelBtn = document.getElementById("forgot-cancel-btn");
    const forgotSubmitBtn = document.getElementById("forgot-submit-btn");
    const forgotEmailInput = document.getElementById("forgot-email-input");

    if (forgotBtn && forgotModal) {
        forgotBtn.addEventListener("click", (e) => {
            e.preventDefault();
            forgotModal.style.display = "flex";
            if (forgotEmailInput) {
                forgotEmailInput.value = "";
                forgotEmailInput.focus();
            }
        });
    }

    if (forgotCancelBtn && forgotModal) {
        forgotCancelBtn.addEventListener("click", () => {
            forgotModal.style.display = "none";
        });
    }

    if (forgotSubmitBtn && forgotEmailInput && forgotModal) {
        forgotSubmitBtn.addEventListener("click", () => {
            const email = forgotEmailInput.value.trim();
            if (email === "") {
                showToast("Vui lòng nhập email!", "error");
                return;
            }
            showToast(`Đã gửi hướng dẫn khôi phục mật khẩu tới email: ${email}`, "success");
            forgotModal.style.display = "none";
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

                localStorage.setItem("user_displayName", data.username);
                localStorage.setItem("isLoggedIn", "true");
                showToast("Đăng nhập thành công!", "success");
                setTimeout(() => {
                    window.location.href = "home.html";
                }, 1000);

            } catch (err) {
                console.error("Lỗi kết nối:", err);
                showToast("Không thể kết nối đến server cơ sở dữ liệu!", "error");
            }
        });
    }

    // --- XỬ LÝ ĐĂNG KÝ (CÓ RÀNG BUỘC CHẶT CHẼ MẬT KHẨU) ---
    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const regUser = document.getElementById("register-username").value.trim();
            const regEmail = document.getElementById("register-email").value.trim();
            const regPass = regPasswordInput.value.trim();

            if (!regUser || !regEmail || !regPass) {
                showToast("Vui lòng điền đầy đủ thông tin đăng ký!", "error");
                return;
            }

            // Kiểm tra lại các điều kiện mật khẩu trước khi gửi
            if (regPass.length < 8 || !/[A-Z]/.test(regPass) || /[^a-zA-Z0-9\-_@]/.test(regPass)) {
                showToast("Mật khẩu chưa thỏa mãn các yêu cầu bảo mật!", "error");
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: regUser, email: regEmail, password: regPass })
                });

                const data = await response.json();
                
                if (!data.success) {
                    showToast(data.message || "Tài khoản hoặc Email đã tồn tại!", "error");
                    return;
                }

                showToast("Đăng ký thành công! Hãy đăng nhập.", "success");
                registerForm.reset();
                // Reset lại màu gợi ý về đỏ sau khi reset form
                hintLength.style.color = "#ff4757"; hintLength.textContent = "❌ Ít nhất 8 ký tự";
                hintUppercase.style.color = "#ff4757"; hintUppercase.textContent = "❌ Có ít nhất 1 chữ cái viết hoa";
                hintSpecial.style.color = "#ff4757"; hintSpecial.textContent = "❌ Chỉ chứa ký tự đặc biệt: -, _, @";
                
                container.classList.remove("active");
            } catch (err) {
                console.error("Lỗi đăng ký:", err);
                showToast("Lỗi kết nối server khi đăng ký!", "error");
            }
        });
    }

    // --- XỬ LÝ ĐĂNG NHẬP MẠNG XÃ HỘI (GOOGLE & FACEBOOK) ---
    const googleBtnLogin = document.getElementById("btn-google-login");
    const facebookBtnLogin = document.getElementById("btn-facebook-login");

    async function handleSocialLogin(providerType) {
        try {
            if (!window.auth || !window.signInWithPopup) {
                showToast("Firebase chưa được khởi tạo đúng cách!", "error");
                return;
            }

            let provider;
            if (providerType === 'google') {
                provider = new window.GoogleAuthProvider();
            } else {
                provider = new window.FacebookAuthProvider();
            }
            
            const result = await window.signInWithPopup(window.auth, provider);
            const user = result.user;
            
            localStorage.setItem("user_displayName", user.displayName || user.email.split('@')[0]);
            localStorage.setItem("user_photoURL", user.photoURL || "");
            localStorage.setItem("isLoggedIn", "true");
            
            showToast("Đăng nhập mạng xã hội thành công!", "success");
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);
        } catch (error) {
            console.error("Lỗi đăng nhập mạng xã hội:", error);
            showToast("Đăng nhập thất bại: " + error.message, "error");
        }
    }

    if (googleBtnLogin) {
        googleBtnLogin.addEventListener("click", (e) => {
            e.preventDefault();
            handleSocialLogin('google');
        });
    }

    if (facebookBtnLogin) {
        facebookBtnLogin.addEventListener("click", (e) => {
            e.preventDefault();
            handleSocialLogin('facebook');
        });
    }
});