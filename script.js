function validateInput(text) {
    const hasEightChars = text.length >= 8;
    const hasNumber = /\d/.test(text);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(text);
  
    return hasEightChars && hasNumber && hasSpecialChar;
  }
  
  document.getElementById('validateBtn').addEventListener('click', function() {
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;
  
    if (validateInput(inputValue)) {
      inputField.classList.remove('invalid');
      inputField.classList.add('valid');
    } else {
      inputField.classList.remove('valid');
      inputField.classList.add('invalid');
    }
  });