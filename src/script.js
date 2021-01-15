$("#navbarNavAltMarkup").on("show.bs.collapse", function(){
    $("#navbarNavAltMarkup").css("transition", "0.8s");
    $(".carrossel").css("transform", "translate(0, 30%").css("padding-bottom", "28vh").css("transition", "0.8s");
});

$("#navbarNavAltMarkup").on("hide.bs.collapse", function(){
    $(".carrossel").css("transform", "translate(0, 0").css("padding-bottom", "0");
});