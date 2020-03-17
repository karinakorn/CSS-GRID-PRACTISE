// 
$(document).ready(function () {

    $(".expanded").toggle();

    console.log($("a"));

    $("#collapsed-menu, #expanded-menu").click(clickMenu);

    function clickMenu() {
        $(".expanded").fadeToggle("slow", "linear")
    };
});