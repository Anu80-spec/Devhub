// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Course Search Feature
const searchBar = document.getElementById("search-bar");
const results = document.getElementById("search-results");
const courses = document.querySelectorAll(".course h3");

searchBar.addEventListener("input", function () {
    results.innerHTML = "";
    const query = searchBar.value.toLowerCase();
    courses.forEach(course => {
        if (course.textContent.toLowerCase().includes(query)) {
            results.innerHTML += `<p>${course.textContent}</p>`;
        }
    });
});
