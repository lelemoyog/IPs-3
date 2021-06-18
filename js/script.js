$(document).ready(function(){
    $("div#ww1").hide();
    $("div#ww2").hide();
    $("div#ww3").hide();
    
    $("img#w1 , div#ww1").click(function () {
        $("div#ww1, img#w1").toggle();
    
    })
    $("img#w2 ,div#ww2").click(function () {
        $("div#ww2 , img#w2").toggle();
    })
    $("img#w3 ,div#ww3").click(function () {
        $("div#ww3 , img#w3").toggle();
    })

});