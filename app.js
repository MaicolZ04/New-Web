const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.main-nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Add functionality to show/hide dropdown on mouse enter and leave
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('mouseenter', () => {
    dropdown.querySelector('.dropdown-menu').style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
    dropdown.querySelector('.dropdown-menu').style.display = 'none';
});


dropdown.addEventListener('mouseenter', () => {
    dropdown.querySelector('.dropdown-menu').style.display = 'block';
});
