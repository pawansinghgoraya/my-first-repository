const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Clear old messages
  document.querySelectorAll(".error").forEach(el => el.innerText = "");
  successMsg.innerText = "";

  // Name validation
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    isValid = false;
  }

  // Email validation
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, "Enter a valid email");
    isValid = false;
  }

  // Message validation
  if (messageInput.value.trim().length < 10) {
    showError(messageInput, "Message must be at least 10 characters");
    isValid = false;
  }

  // Success
  if (isValid) {
    successMsg.innerText = "Message sent successfully!";
    form.reset();
  }
});

function showError(input, message) {
  input.nextElementSibling.innerText = message;
}

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
