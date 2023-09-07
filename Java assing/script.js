// Add your JavaScript code here
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values of username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can implement your authentication logic here
    // For this example, we'll just check if the username and password are not empty
    if (username.trim() === "" || password.trim() === "") {
        document.getElementById("error-message").textContent = "Username and password are required.";
    } else {
        document.getElementById("error-message").textContent = ""; // Clear any previous error messages
        alert("Login successful!"); // You can replace this with your login logic
    }
});