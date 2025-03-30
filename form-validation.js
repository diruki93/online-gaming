document.getElementById("registerForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const address = document.getElementById("address").value;
  
    if (!name || !email || !password || !address) {
      alert("Please fill out all required fields.");
      event.preventDefault(); // Stop form from submitting
    } else {
      alert("Registration successful!");
    }
  });