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

    $('.cardSlider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
    });
});

function showPopup() {
    $('.headerNav').addClass('floating');
    $('.popupWrapper').removeClass('hidden');
}
function hidePopup() {
    $('.headerNav').removeClass('floating');
    $('.popupWrapper').addClass('hidden');
}

$('.langBlock').click(function (event) {

    //* add language swap here
    // if there's another page for each lang, there's no need of all of it

    $('.langBlock .btn').each(function (i, elem) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            return false;
        }
    });

    let btn = event.target.id;
    $('#' + btn).addClass('active');
});