document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const mobile = document.getElementById("mobile").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!/^\d{10}$/.test(mobile)) {
    errorMsg.textContent = "Please enter a valid 10-digit number.";
    return;
  }

  // Redirect to your website
  window.location.href = "https://koushik0623.github.io/swamy/";
});
