document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("animated-text");
    const roles = [
        "Web Developer.",
        "UI / UX Designer.",
        "Front - End Developer.",
        "Data Analyst.",
        "Embedded Engineer.",
    ];

    let roleIndex = 0;

    function changeRole() {
        roleIndex = (roleIndex + 1) % roles.length;
        textElement.textContent = roles[roleIndex];

        // Reset animation by triggering reflow
        textElement.style.animation = 'none';
        textElement.offsetHeight; // Trigger reflow
        textElement.style.animation = 'typing 2s steps(40, end), blink-caret 0.75s step-end infinite';
    }

    setInterval(changeRole, 4000); // Change text every 4 seconds
});

window.addEventListener('scroll', () => {
    const scrollIndicator = document.getElementById('scrollIndicator');
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / maxScrollHeight) * 100;
    scrollIndicator.style.width = `${scrollPercentage}%`;
});

// Function to show progress bars
document.querySelectorAll('.skill-name').forEach(item => {
    item.addEventListener('click', event => {
        const progressBar = item.nextElementSibling.nextElementSibling;
        if (progressBar.style.display === 'none' || progressBar.style.display === '') {
            progressBar.style.display = 'block';
        } else {
            progressBar.style.display = 'none';
        }
    });
});

// Function to scroll to top
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Show "Back to Top" button when scrolling down
window.addEventListener('scroll', () => {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});


document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
});

// Add event listeners to each navbar link
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
        const navbar = document.getElementById('navbar');
        
    });
});

//appealing left right
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class
                entry.target.classList.add('animate');
            } else {
                // Remove animation class to allow re-triggering
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.1 // Adjust as needed
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up');
            }
        });
    });

    const img = document.querySelector('.home-img img');
    observer.observe(img);
});

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('zoom-in');
            }
        });
    });

    const via = document.querySelector('.via');
    observer.observe(via);
});






