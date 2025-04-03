// Dark mode toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Enroll button functionality
document.getElementById('enroll-btn').addEventListener('click', function() {
    alert("Thank you for your interest! Enrollment details will be sent to your email.");
});
//typing
const words = ["welcome to our Devhub...! ", "welcome to our Devhub...!", "welcome to our Devhub...!"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    currentWord = words[i];
    
    if (isDeleting) {
        j--;
    } else {
        j++;
    }
    
    document.getElementById("typing").textContent = currentWord.substring(0, j);
    
    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }
}

typeEffect();
