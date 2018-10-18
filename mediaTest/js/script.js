
$(document).ready(function () {
    function fixHeight() {
        var navHeight=$("#switcher").height();
        $("#iframe").attr("height", $(window).height() - navHeight + "px");
    }
    $(window).resize(function () {
        fixHeight();
    }).resize();

    $(".icon-monitor").click(function () {
        $("#by").css("overflow-y", "hidden");
        $('#iframe-wrap').removeClass().addClass('full-width');
        $('#Device div').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $(".icon-tablet").click(function () {
        $("#by").css("overflow-y", "auto");
        $('#iframe-wrap').removeClass().addClass('tablet-width');
        $('#Device div').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $(".icon-mobile-1").click(function () {
        $("#by").css("overflow-y", "auto");
        $('#iframe-wrap').removeClass().addClass('mobile-width');
        $('#Device div').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $(".icon-mobile-2").click(function () {
        $("#by").css("overflow-y", "auto");
        $('#iframe-wrap').removeClass().addClass('mobile-width-2');
        $('#Device div').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $(".icon-mobile-3").click(function () {
        $("#by").css("overflow-y", "auto");
        $('#iframe-wrap').removeClass().addClass('mobile-width-3');
        $('#Device div').removeClass('active');
        $(this).addClass('active');
        return false;
    });
});