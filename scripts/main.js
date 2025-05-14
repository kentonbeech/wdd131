document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.getElementById('HamburgerIcon');
    const mobileHeader = document.getElementById('Nav');

    hamburger.addEventListener('click', () => {
        mobileHeader.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
})