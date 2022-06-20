$(function () {
    $(window).on("load", function () {
        $(".fill-screen").css("height", window.innerHeight);
        var cardInnerHeight = parseInt($('.card > .front').innerHeight()) / 2 - 50;
        $(".ic-image").css("height", cardInnerHeight);
    });
});

$("body").scrollspy({
    target: '.navbar',
    offset: 150
});

$(document).ready(function () {
    $(".progress-bar").each(function (i, v) {
        // var bar_value = v.getAttribute('aria-valuenow');
        var bar_value = $(this).attr('aria-valuenow');
        $(v).animate({ width: bar_value + "%" }, 4000, 'swing', function (bar_value) {
            v = $(this).parent().children('.percent').html($(this).attr('aria-valuenow') + '%');
        })
    })

    // Project section custom css
    var bgg = "background: linear-gradient(rgba(0, 0, 0, 0.8) 100%, rgba(0, 0, 0, 0.8)100%), url('./images/projects/jkp_portal.png') center top no-repeat; background-size: cover;"
    $(".container.p8 .item .tile .skills-list").mouseenter(function () {
        $(this).css("cursor", "pointer");
        height = parseInt(parseInt($(this).height())) + 10;
        $(this).children("ul").fadeOut(600);
        
        $(this).css("height", height + "px");
        $(this).css("background", "none, url('./images/projects/jkp_portal.png') center center no-repeat");
        $(this).css("background-size", "cover");

        // $(".leftRs").css("left", "-45px");
        // $(".rightRs").css("right", "-45px");
    });

    $(".container.p8 .item .tile .skills-list").mouseleave(function () {
        $(this).css("height", "auto");
        $(this).attr("style", bgg);
        $(this).children("ul").fadeIn(600);

        // $(".leftRs").css("left", "0");
        // $(".rightRs").css("right", "0");
    });

})




//ResCarouselCustom();
var pageRefresh = true;

function ResCarouselCustom() {
    var items = $("#dItems").val(),
        slide = $("#dSlide").val(),
        speed = $("#dSpeed").val(),
        interval = $("#dInterval").val()

    var itemsD = "data-items=\"" + items + "\"",
        slideD = "data-slide=\"" + slide + "\"",
        speedD = "data-speed=\"" + speed + "\"",
        intervalD = "data-interval=\"" + interval + "\"";


    var atts = "";
    atts += items != "" ? itemsD + " " : "";
    atts += slide != "" ? slideD + " " : "";
    atts += speed != "" ? speedD + " " : "";
    atts += interval != "" ? intervalD + " " : ""

    //console.log(atts);

    var dat = "";
    dat += '<h4 >' + atts + '</h4>'
    dat += '<div class=\"resCarousel\" ' + atts + '>'
    dat += '<div class="resCarousel-inner">'
    for (var i = 1; i <= 14; i++) {
        dat += '<div class=\"item\"><div><h1>' + i + '</h1></div></div>'
    }
    dat += '</div>'
    dat += '<button class=\'btn btn-default leftRs\'><i class=\"fa fa-fw fa-angle-left\"></i></button>'
    dat += '<button class=\'btn btn-default rightRs\'><i class=\"fa fa-fw fa-angle-right\"></i></button>    </div>'
    console.log(dat);
    $("#customRes").html(null).append(dat);

    if (!pageRefresh) {
        ResCarouselSize();
    } else {
        pageRefresh = false;
    }
    //ResCarouselSlide();
}

$("#eventLoad").on('ResCarouselLoad', function () {
    //console.log("triggered");
    var dat = "";
    var lenghtI = $(this).find(".item").length;
    if (lenghtI <= 30) {
        for (var i = lenghtI; i <= lenghtI + 10; i++) {
            dat += '<div class="item"><div class="tile"><div><h1>' + (i + 1) + '</h1></div><h3>Title</h3><p>content</p></div></div>'
        }
        $(this).append(dat);
    }
});