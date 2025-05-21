document.addEventListener('DOMContentLoaded', () => {

    const hamburgerIcon = document.getElementById('Hamburger');
    const nav = document.querySelector('nav');

    hamburgerIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            hamburgerIcon.classList.add('active');
        } else {
            hamburgerIcon.classList.remove('active');
        }
    })

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    const imgs = document.querySelectorAll('figure > img');
    const lightbox = document.getElementById('Lightbox');
    const lightboxImg = document.getElementById('LightboxImg');
    const closeBtn = document.querySelector('.close');
    const body = document.querySelector('body');

    imgs.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'block';
            body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        body.style.overflow = 'auto';
    });

    // Optional: close when clicking outside the image
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            body.style.overflow = 'auto';
        }
    });


})