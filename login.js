
    document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const errorDiv = document.getElementById('loginError');
    const correctPassword = '67219010002'; // เปลี่ยนรหัสผ่านที่นี่

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (passwordInput.value === correctPassword) {
            errorDiv.style.display = 'none';
            sessionStorage.setItem('isAuth', '1');
            window.location.href = 'index.html'; // ไปหน้าหลัก
        } else {
            errorDiv.textContent = 'รหัสผ่านไม่ถูกต้อง!';
            errorDiv.style.display = 'block';
            passwordInput.value = '';
            passwordInput.focus();
        }
    });
});



