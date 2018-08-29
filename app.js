$(document).ready(function(){
    $(".proName").hide();
});


$(".projImg").hover(function(){
    console.log($(this).attr("data-val"));
    var val = $(this).attr("data-val");

    $(".pro" + val).fadeTo("slow", .1)
    $(".name" + val).fadeTo("slow", 1)


},function(){
    $(".proImg").fadeTo("slow", 1)
    $(".proName").fadeTo("slow", 0)
});