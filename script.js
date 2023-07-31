document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Replace this with your actual login validation logic

    if (username  && password ) {
      // Successful login
      window.location.href = "home.html"; // Redirect to the home page
    } else {
      // Show error message
      document.getElementById("error-message").textContent = "Invalid username or password.";
    }
  });
  
  