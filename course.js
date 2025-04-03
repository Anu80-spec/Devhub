// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Save user preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});

// Apply Dark Mode if previously enabled
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Enrollment Button Alert
/*document.querySelectorAll(".enroll-btn").forEach(button => {
    button.addEventListener("click", function() {
        alert("Thank you for enrolling! You will receive an email with further details.");
    });
}); */
// Search Courses Function
function searchCourses() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let courses = document.querySelectorAll('.course');

    courses.forEach(course => {
        let title = course.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
}

// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
