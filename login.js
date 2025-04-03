// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Login Form Validation
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const errorMessages = document.querySelectorAll(".error-message");

    // Clear previous error messages
    errorMessages.forEach(error => error.textContent = "");

    if (!email.value.includes("@")) {
        email.nextElementSibling.textContent = "Enter a valid email address.";
        return;
    }

    if (password.value.length < 6) {
        password.nextElementSibling.textContent = "Password must be at least 6 characters.";
        return;
    }

    alert("Login Successful!");
    window.location.href = "dashboard.html"; // Redirect after login

    if (email!== "" && password !== "") {
        window.location.href = "course.html"; // Redirect to the course page
    } else {
        alert("Please fill in both Name and Email fields.");
    }
});
