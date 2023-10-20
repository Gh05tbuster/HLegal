$(document).ready(function () {
    $('.burger').click(function (event) {
        showPopupNav();
    });

    $('.consultation').click(function (event) {
        showPopupFrom();
    });

    $('.closeBtn').click(function () {
        hidePopup();
    });

    $('.popupWrapper').click(function () {
        hidePopup();
    });

    $(window).on("scroll", function () {
        hidePopup();
    });

    $(window).on("resize", function () {
        hidePopup();
    });

    $('.cardSlider').owlCarousel({
        loop: false,
        margin: 20,
        items: 1,
    })
});

//* for nav inside header (issues with z-index)

// function showPopup() {
//     $('.headerNav').addClass('floating');
//     $('.popupWrapper').removeClass('hidden');
// }
// function hidePopup() {
//     $('.headerNav').removeClass('floating');
//     $('.popupWrapper').addClass('hidden');
// }

//* for nav inside popup

function showPopupNav() {
    $('.burgerNav').removeClass('hidden');
    $('.popupWrapper').removeClass('hidden');
}

function showPopupForm() {
    $('.burgerNav').removeClass('hidden');
    $('.contactForm.popup').removeClass('hidden');
}

function hidePopup() {
    $('.burgerNav').addClass('hidden');
    $('.popupWrapper').addClass('hidden');
    $('.contactFrom.popup').addClass('hidden');
}

function scrollDown(elem) {
    event.preventDefault();
    const target = document.querySelector(elem.hash);
    window.scrollTo({
        top: target.offsetTop - 30,
        behavior: "smooth"
    });
}

$('.langBlock .btn').click(function (event) {

    //* add language swap here
    // if there's another page for each lang, there's no need of all of it

    $('.langBlock .btn').each(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            return false;
        }
    });

    let btn = event.target.id;
    $('#' + btn).addClass('active');
});

$('.pills .pillsTab .title').click(function (event) {
    let pi;
    $('.pills .pillsTab .title').each(function (i, el) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            pi = el.id;
            $('.pills .tabContent .' + pi).removeClass('active');
            $('.pills .tabContent .' + pi).addClass('hidden');
            return false;
        }
    });

    pi = event.target.id;
    $('.pills .pillsTab #' + pi).addClass('active');
    $('.pills .tabContent .' + pi).addClass('active');
    $('.pills .tabContent .' + pi).removeClass('hidden');
});