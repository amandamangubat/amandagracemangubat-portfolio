document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;


    if (!email.endsWith('@ciit.edu.ph')) {
      alert('Please use a valid CIIT email address (e.g., example@ciit.edu.ph).');
      return;
    }

    if (password.trim() === '') {
      alert('Password cannot be blank.');
      return;
    }

    alert('Login successful! Redirecting to dashboard...');

    localStorage.setItem('userEmail', email);

    window.location.href = 'index.html';
  });
});