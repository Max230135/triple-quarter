// Save users in localStorage
function signup() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  if (!username || !password) return alert("Please fill both fields.");
  let users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username]) return alert("User already exists!");
  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful! Please login.");
  window.location.href = "login.html";
}

function login() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;
  let users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username] && users[username] === password) {
    localStorage.setItem("loggedInUser", username);
    alert("Login successful!");
    window.location.href = "home.html";
  } else {
    document.getElementById("loginMessage").textContent = "❌ Invalid username or password.";
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

function getLoggedInUser() {
  return localStorage.getItem("loggedInUser");
}