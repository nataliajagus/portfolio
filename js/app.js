const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        })

        burger.classList.toggle('toggle');
    })

    
}
navSlide();

  
let offerCards = document.querySelectorAll('.offer--box');
let offerCardHeaders = document.querySelectorAll('.offer--header');

offerCardHeaders.forEach(header => header.addEventListener("click", (e) => {
    let offerCard = header.closest(".offer--box");

    if(offerCard.offsetHeight < 450) {
        offerCard.style.maxHeight = "450px";
        offerCard.style.overflowY = "scroll";
    } else if(window.innerWidth >= 427 && window.innerWidth <= 768) {
        offerCard.style.maxHeight = "170px";
        offerCard.style.overflow = "hidden";
    } else if(window.innerWidth > 768) {
        offerCard.style.maxHeight = "86px";
        offerCard.style.overflow = "hidden";
    } else {
        offerCard.style.maxHeight = "140px";
        offerCard.style.overflow = "hidden";
    }

}))

const deleteLineBreak = () => {
    if(window.innerWidth <= 768) {
        document.querySelector('.offer--box__green h1').innerHTML = 'Projektowanie graficzne';
        document.querySelector('.offer--box__white h1').innerHTML = 'Strony internetowe';
    }
}

deleteLineBreak();

window.addEventListener('resize', () => {
    deleteLineBreak();
})