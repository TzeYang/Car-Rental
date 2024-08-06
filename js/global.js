document.getElementById("header-logo").addEventListener("click", function () {
  window.location.href = "./index.html";
});

document.getElementById("btn-login").addEventListener("click", function () {
  window.location.href = "./login.html";
});

document.getElementById("btn-register").addEventListener("click", function () {
  window.location.href = "./register.html";
});

document
  .getElementById("btn-my-account")
  .addEventListener("click", function () {
    window.location.href = "./my-account.html";
  });

document.getElementById("btn-logout").addEventListener("click", function () {
  localStorage.removeItem("email");
  window.location.href = "./login.html";
});

// check local storage
const email = localStorage.getItem("email");

if (email) {
  document.getElementById("btn-login").style.display = "none";
  document.getElementById("btn-register").style.display = "none";
  document.getElementById("btn-logout").style.display = "block";
  document.getElementById("btn-my-account").style.display = "block";
} else {
  document.getElementById("btn-login").style.display = "block";
  document.getElementById("btn-register").style.display = "block";
  document.getElementById("btn-logout").style.display = "none";
  document.getElementById("btn-my-account").style.display = "none";
}
