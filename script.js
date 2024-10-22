// COUNTER WITH LOCAL STORAGE
let counterDisplay = document.getElementById("counter");
let count = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0;
counterDisplay.innerText = count;

document.getElementById("increment").addEventListener("click", function() {
  count++;
  localStorage.setItem("counter", count);
  counterDisplay.innerText = count;
});

document.getElementById("decrement").addEventListener("click", function() {
  count--;
  localStorage.setItem("counter", count);
  counterDisplay.innerText = count;
});

// FORM WITH SESSION STORAGE
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const formStatus = document.getElementById("formStatus");

document.getElementById("saveForm").addEventListener("click", function() {
  const email = emailField.value;
  const password = passwordField.value;

  if (email && password) {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    formStatus.innerText = "Data saved in session storage!";
    formStatus.style.color = "#27ae60"; // success color
  } else {
    formStatus.innerText = "Please fill in both fields.";
    formStatus.style.color = "#e74c3c"; // error color
  }
});

// Clear session storage on reload (session storage clears on tab close)
window.onload = function() {
  sessionStorage.clear();
};
