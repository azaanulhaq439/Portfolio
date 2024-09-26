let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let logo1=document.querySelector('.logo');
// Corrected event listener assignment
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    logo1.classList.toggle('logo_sm');
    navbar.classList.toggle('active');
    console.log('Navbar active:', navbar.classList.contains('active')); // Debugging line
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(link => {
                link.classList.remove('active'); // Remove active class from all links first
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active'); // Add active class to the current link
                }
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// ScrollReveal setup
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// Updated selectors
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });
