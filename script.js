document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("login-message");

  if (!/^\d{10}$/.test(mobile)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid 10-digit number.";
    return;
  }

  if (mobile === "9999999999") {
    message.style.color = "green";
    message.textContent = "Login successful!";
    document.getElementById("login-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    message.style.color = "red";
    message.textContent = "Access denied. Use demo number: 9999999999";
  }
});
