document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = "You entered two different passwords. Please try again";
        message.className = "message error";
    } else {
        message.textContent = "Registration was successful!";
        message.className = "message success";
        this.reset();
    }

    message.classList.remove('hidden');
});