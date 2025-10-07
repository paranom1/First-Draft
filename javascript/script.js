/*HEADER START*/
document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const menuIcon = document.querySelector('.menu');
    const sideMenu = document.querySelector('#sideMenu');
    const closeBtn = document.querySelector('#closeBtn');
    const loginLink = document.querySelector('#loginLink');
    const signUpLink = document.querySelector('#signUpLink');
    const closeLogin = document.querySelector('#closeLogin');
    const closeSignUp = document.querySelector('#closeSignUp');
    const loginPopup = document.querySelector('#loginPopup');
    const signUpPopup = document.querySelector('#signUpPopup');
    const overlay = document.querySelector('#overlay');

    // Function to close all pop-ups and menus
    const closeAll = () => {
        sideMenu.classList.remove('active');
        loginPopup.classList.remove('active');
        signUpPopup.classList.remove('active');
        overlay.classList.remove('active');
    };

    // Toggle side menu
    menuIcon.addEventListener('click', (e) => {
        e.preventDefault();
        closeAll();
        sideMenu.classList.add('active');
        overlay.classList.add('active');
    });

    // Close side menu
    closeBtn.addEventListener('click', closeAll);

    // Toggle login pop-up
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeAll();
        loginPopup.classList.add('active');
        overlay.classList.add('active');
    });

    // Toggle sign-up pop-up
    signUpLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeAll();
        signUpPopup.classList.add('active');
        overlay.classList.add('active');
    });

    // Close login pop-up
    closeLogin.addEventListener('click', closeAll);

    // Close sign-up pop-up
    closeSignUp.addEventListener('click', closeAll);

    // Close all when overlay is clicked
    overlay.addEventListener('click', closeAll);

    // Optional: Close menu when a menu item is clicked
    document.querySelectorAll('.side-menu ul li a').forEach(link => {
        link.addEventListener('click', closeAll);
    });
});

/*HEADER END*/