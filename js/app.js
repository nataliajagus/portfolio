const navSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__links li');
    const pageTop = document.querySelector('.top');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav--active');
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
            document.querySelector('.offer__box--green h1').innerHTML = 'Projektowanie graficzne';
            document.querySelector('.offer__box--white h1').innerHTML = 'Strony internetowe';
        }
    }

    deleteLineBreak();

    window.addEventListener('resize', () => {
        deleteLineBreak();
    })

    let greenBox = document.querySelector('.offer__box--green');
    let whiteBox = document.querySelector('.offer__box--white');


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

const cookiesChecked = window.localStorage.getItem('cookiesOK');
const cookies = document.querySelector('.cookies');
const cookiesBtn = document.querySelector('.cookies button');


if (cookiesChecked) {
    cookies.style.display = "none";
}

cookiesBtn.addEventListener('click', () => {
    cookies.classList.add('cookies-close');
    window.localStorage.setItem('cookiesOK', 'true');
})