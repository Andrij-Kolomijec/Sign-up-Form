const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const match = document.getElementById("match");
const button = document.getElementById("submit-button");

// Show or hide on focus or blur
password.onfocus = function() {
    document.getElementById("req").style.display = "flex";
}
password.onblur = function() {
    document.getElementById("req").style.display = "none";
}
confirmPassword.onfocus = function() {
    document.getElementById("match").style.display = "flex";
    // Check if passwords match
    if (confirmPassword.value === password.value) {
      match.classList.remove("invalid");
      match.classList.add("valid");
      confirmPassword.style.border="1px solid #8BC34A";
      confirmPassword.style.backgroundColor="white";
      document.getElementById("psw-label").style.color="#8BC34A";
      button.disabled = false;
  } else {
      match.classList.remove("valid");
      match.classList.add("invalid");
      confirmPassword.style.border="1px solid #b92326";
      confirmPassword.style.backgroundColor="white";
      document.getElementById("psw-label").style.color="#b92326";
      button.disabled = true;
  }
}
confirmPassword.onblur = function() {
    document.getElementById("match").style.display = "none";
    if (confirmPassword.value === "" && password.value) {
        confirmPassword.style.border="1px solid #b92326";
        confirmPassword.style.backgroundColor="rgba(185, 35, 38, 0.25)";
    } else if (confirmPassword.value === "") {
        confirmPassword.style.backgroundColor="white";
        confirmPassword.style.border="1px solid #d8d8d8";
  } else if (confirmPassword.value === password.value) {
      confirmPassword.style.backgroundColor="rgba(139, 195, 74, 0.25)";
  } else {
      confirmPassword.style.border="1px solid #b92326";
      confirmPassword.style.backgroundColor="rgba(185, 35, 38, 0.25)";
  }
}

// When the user starts to type something inside the password field
password.onkeyup = function() {
  // Validate lowercase letters
  const lowerCaseLetters = /[a-z]/g;
  if (password.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  // Validate capital letters
  const upperCaseLetters = /[A-Z]/g;
  if (password.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  // Validate numbers
  const numbers = /[0-9]/g;
  if(password.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  // Validate length
  if(password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  // Check if confirm password is the same
  if (confirmPassword.value === password.value) {
    match.classList.remove("invalid");
    match.classList.add("valid");
    confirmPassword.style.border="1px solid #8BC34A";
    confirmPassword.style.backgroundColor="rgba(139, 195, 74, 0.25)";
    document.getElementById("psw-label").style.color="#8BC34A";
    button.disabled = false;
  } else {
    match.classList.remove("valid");
    match.classList.add("invalid");
    confirmPassword.style.border="1px solid #b92326";
    confirmPassword.style.backgroundColor="rgba(185, 35, 38, 0.25)";
    document.getElementById("psw-label").style.color="#b92326";
    button.disabled = true;
  }
}

// Check if passwords match
confirmPassword.onkeyup = function () {
    if (confirmPassword.value === password.value) {
        match.classList.remove("invalid");
        match.classList.add("valid");
        confirmPassword.style.border="1px solid #8BC34A";
        document.getElementById("psw-label").style.color="#8BC34A";
        button.disabled = false;
    } else {
        match.classList.remove("valid");
        match.classList.add("invalid");
        confirmPassword.style.border="1px solid #b92326";
        document.getElementById("psw-label").style.color="#b92326";
        button.disabled = true;
    }
}
