document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    toggleBtn.addEventListener('click', function () {
        const icon = toggleBtn.querySelector('i');
        const isPassword = passwordInput.type === 'password';

        passwordInput.type = isPassword ? 'text' : 'password';

        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });
});