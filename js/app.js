const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const pageTop = document.querySelector('.page--top');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        pageTop.classList.toggle('expand');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        })

        burger.classList.toggle('toggle');
    })


}
navSlide();

if (document.querySelector('body').classList.contains("index")) {
    const deleteLineBreak = () => {
        if (window.innerWidth <= 768) {
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


    greenBox.addEventListener("click", function () {
        this.classList.toggle('box-open');
    })

    whiteBox.addEventListener("click", function () {
        this.classList.toggle('box-open');
    })
}

if (document.querySelector('body').classList.contains("website--single")) {
    $(document).ready(function () {
        $('.carousel').slick({
            arrows: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next')
        });
    });
}

