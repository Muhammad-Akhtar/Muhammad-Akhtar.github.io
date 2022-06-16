$(function () {
    $(window).on("load", function () {
        $(".fill-screen").css("height", window.innerHeight);
        var cardInnerHeight = parseInt($('.card > .front').innerHeight()) / 2 - 50;
        $(".ic-image").css("height", cardInnerHeight);
    });
});

$(document).ready(function () {
    $(".progress-bar").each(function (i, v) {
        // var bar_value = v.getAttribute('aria-valuenow');
        var bar_value = $(this).attr('aria-valuenow');
        $(v).animate({ width: bar_value + "%" }, 4000, 'swing', function (bar_value) {
            debugger
            v = $(this).parent().children('.percent').html($(this).attr('aria-valuenow') + '%');
            // $(v).html(45);
            // alert($().html('45'));
        })
    })
})