const loginForm = document.getElementById('loginForm');
const messageParagraph = document.getElementById('message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (email === 'mahescame@gmail.com' && senha === 'hmm') {
    alert('Login correto.');
    location.href = "../welcome.html"
  } else {
    alert('Email ou senha INCORRETO.');
  }
});