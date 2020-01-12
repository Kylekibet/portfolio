const navSlide = () => {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav li")

    menu.addEventListener('click', () => {
        //toggle menu bar
        nav.classList.toggle('nav-active');


        //Animate links
        navLinks.forEach((link, index) => {
            console.log(index);
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });
        
        menu.classList.toggle('toggle');


    });
}

navSlide();