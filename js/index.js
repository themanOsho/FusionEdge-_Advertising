  
  <form id="signupForm" onsubmit="validateForm(event)">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Sign Up</button>
  </form>

    function validateForm(event) {
      event.preventDefault(); // Prevent form submission to perform client-side validation

      // Get form input values
      var nameInput = document.getElementById('name');
      var emailInput = document.getElementById('email');
      var passwordInput = document.getElementById('password');

      // Perform validation
      var isValid = true;

      if (nameInput.value.trim() === '') {
        isValid = false;
        alert('Please enter your name.');
      }

      if (emailInput.value.trim() === '') {
        isValid = false;
        alert('Please enter your email.');
      } else if (!isValidEmail(emailInput.value)) {
        isValid = false;
        alert('Please enter a valid email address.');
      }

      if (passwordInput.value.trim() === '') {
        isValid = false;
        alert('Please enter a password.');
      } else if (!isStrongPassword(passwordInput.value)) {
        isValid = false;
        alert('Password must contain at least 8 characters, including lowercase and uppercase letters, and numbers.');
      }

      // If all validations pass, submit the form
      if (isValid) {
        document.getElementById('signupForm').submit();
      }
    }

    function isValidEmail(email) {
      // Regular expression for email validation
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function isStrongPassword(password) {
      // Password strength criteria: at least 8 characters, including lowercase and uppercase letters, and numbers
      var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      return passwordRegex.test(password);
    }
