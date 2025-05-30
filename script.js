function loginWithNumber() {
  const number = document.getElementById('login-number').value.trim();
  const errorMsg = document.getElementById('error-msg');

  if (!/^\d{10}$/.test(number)) {
    errorMsg.style.display = 'block';
    return;
  }

  errorMsg.style.display = 'none';

  // Admin number logic
  if (number === '9999999999') {
    alert("Welcome Admin");
    window.location.href = 'https://koushik0623.github.io/swamy/';
  } else {
    alert("Login successful");
    window.location.href = 'https://koushik0623.github.io/swamy/';
  }
}
