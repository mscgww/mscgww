document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMe');
    
    button.addEventListener('click', function() {
        alert('Hello! Thanks for visiting my website!');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});