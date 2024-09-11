/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const currentURL = window.location.href;

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

// Check if the current page is not the login page
if (!currentURL.includes('login.html')) {
    // Add scroll event listener only on pages with sections
    window.addEventListener('scroll', scrollActive);
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


/*=============== ACTIVE LINK FOR LOGIN PAGE ===============*/
if (currentURL.includes('login.html')) {
    // Remove active-link from all other links
    const navLinks = document.querySelectorAll('.nav__menu a');
    navLinks.forEach(link => link.classList.remove('active-link'));

    // Add active-link to Profile (login) link
    document.querySelector('.nav__menu a[href="login.html"]').classList.add('active-link');
}
