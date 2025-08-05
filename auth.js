// Redirect to login.html if not authenticated
(function() {
    // ใช้ sessionStorage เพื่อจำสถานะ login
    if (window.location.pathname.endsWith('login.html')) return;
    if (!sessionStorage.getItem('isAuth')) {
        window.location.replace('login.html');
    }
})();
