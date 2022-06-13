$(function () {
    $(window).on("load", function () {
        $(".fill-screen").css("height", window.innerHeight);
        var cardInnerHeight = parseInt($('.card > .front').innerHeight()) / 2 - 25;
        $(".ic-image").css("height", cardInnerHeight);

    });
});