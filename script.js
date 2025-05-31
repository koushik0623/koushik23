document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("login-message");

  // Validate only that it is a 10-digit number
  if (!/^\d{10}$/.test(mobile)) {
    message.style.color = "red";
    message.textContent = "Please enter a valid 10-digit mobile number.";
    return;
  }

  // Allow any valid number
  message.style.color = "green";
  message.textContent = "Login successful!";
  document.getElementById("login-container").style.display = "none";
  document.getElementById("main-content").style.display = "block";
});
