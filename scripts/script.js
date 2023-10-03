$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.headerNav').addClass('floating');
        $('.popupWrapper').removeClass('hidden');
    });

    $('.closeBtn').click(function () {
        $('.headerNav').removeClass('floating');
        $('.popupWrapper').addClass('hidden');
    });

    $('.popupWrapper').click(function () {
        $('.headerNav').removeClass('floating');
        $('.popupWrapper').addClass('hidden');
    });

    $(window).on("resize", function () {
        $('.headerNav').removeClass('floating');
        $('.popupWrapper').addClass('hidden');
    });
});
