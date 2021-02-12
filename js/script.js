$(document).ready(function(){
    $('.business__carousel').slick({
        dots: true,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right-arrow.png"></button>'
    });
    $('.decision__carousel').slick({
        dots: true,
        speed: 1500, 
        fade: true,
        cssEase: 'linear',
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/decision/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/decision/arrow_right.png"></button>'
    });    
    document.getElementById("slick-slide-control10").textContent = "Prengi Production";
    document.getElementById("slick-slide-control11").textContent = "Prengi FMC";
    document.getElementById("slick-slide-control12").textContent = "Prengi Mallz Retail";
    document.getElementById("slick-slide-control13").textContent = "Prengi Logistic";
    document.getElementById("slick-slide-control14").textContent = "Prengi IT";
    document.getElementById("slick-slide-control15").textContent = "Prengi HR";
});    
