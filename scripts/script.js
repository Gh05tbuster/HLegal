$(document).ready(function () {
    $('.burger').click(function (event) {
        showPopup();
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

function showPopup() {
    $('.headerNav').addClass('floating');
    $('.popupWrapper').removeClass('hidden');
}
function hidePopup() {
    $('.headerNav').removeClass('floating');
    $('.popupWrapper').addClass('hidden');
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
            // $('.pills .tabContent .' + pi).fadeOut(1000);
            $('.pills .tabContent .' + pi).removeClass('active');
            $('.pills .tabContent .' + pi).addClass('hidden');
            return false;
        }
    });

    pi = event.target.id;
    $('.pills .pillsTab #' + pi).addClass('active');
    // $('.pills .tabContent .' + pi).fadeIn(1000);
    $('.pills .tabContent .' + pi).addClass('active');
    $('.pills .tabContent .' + pi).removeClass('hidden');
});