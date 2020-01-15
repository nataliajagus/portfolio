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

let greenBox = document.querySelector('.offer--box__green');
let whiteBox = document.querySelector('.offer--box__white');


greenBox.addEventListener("click", function() {
    this.classList.toggle('box-open');  
})

whiteBox.addEventListener("click", function() {
    this.classList.toggle('box-open');
})