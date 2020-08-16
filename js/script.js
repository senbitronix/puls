`user strict`

//animating reviews

new WOW().init();


//slider

let slider = tns({
    container: '.carousel__inner',
    items: 1,
    controls: false,
    nav: false
});

document.querySelector(`.carousel__prev`).addEventListener("click", function () {
    slider.goTo('prev')
});

document.querySelector('.carousel__next').addEventListener("click", function () {
    slider.goTo('next')
});

//modal

let overlay = document.querySelector('.overlay');

let modal1 = document.querySelector('#consulting');
let modal2 = document.querySelector('#order');

let modalButtonsCons = document.querySelectorAll('[data-modal=consultation]');
let modalButtonsBuy = document.querySelectorAll('.button_price');

let closes = document.querySelectorAll(`.modal__close`);


modalButtonsCons.forEach(function (item) {
    item.addEventListener(`click`, function () {
        overlay.classList.add(`appear`);
        modal1.classList.add(`appear`);
    })
});

modalButtonsBuy.forEach(function (item) {
    item.addEventListener(`click`, function () {
        overlay.classList.add(`appear`);
        modal2.classList.add(`appear`);
        modal2.querySelector('.modal__descr').innerHTML = this.parentElement.parentElement.querySelector('.catalog__subtitle').innerHTML;
    })
});

closes[0].addEventListener(`click`, function () {
    overlay.classList.remove(`appear`);
    modal1.classList.remove(`appear`);
    modal2.classList.remove(`appear`);
})

closes[1].addEventListener(`click`, function () {
    overlay.classList.remove(`appear`);
    modal1.classList.remove(`appear`);
    modal2.classList.remove(`appear`);
})

//forms validation

$(document).ready(function () {

    function validateForms(form) {
        $(form).validate({
            rules: {
                email: {
                    email: true,
                }
            },
            messages: {
                name: "Please, enter your name",
                tel: "Please, enter your telephone number",
                email: {
                    required: "Please, enter your email",
                    email: "Invalid email"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consulting form');
    validateForms('#order form');

    //mask form

    $('input[name=tel]').mask("+7 (999) 999-99-99");

    

});