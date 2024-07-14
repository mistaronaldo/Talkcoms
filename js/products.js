

$(document).ready(function () {
    var screenWidth = $(window).width();

    if (screenWidth <= 640) {
        var imageToMove = $('#landing-img');
        var targetDiv = $('#landing-img-cont');
        imageToMove.appendTo(targetDiv);


        var carouselMobile = $('#carousel-item-mobile');
        var carouselItems = $('.carousel-item');
        carouselItems.addClass('hidden duration-200 ease-linear');
        carouselItems.attr('data-carousel-item', '');
        console.log(carouselItems);

        carouselMobile.append(carouselItems);



        var toslide = $('.toslide');
        toslide.attr('id', 'sliding');
        toslide.addClass('keen-slider')
        toslide.children().addClass('keen-slider__slide');
        var newslider1 = new KeenSlider("#sliding");

        var toslide = $('.toslide2');
        toslide.attr('id', 'sliding2');
        toslide.addClass('keen-slider')
        toslide.children().addClass('keen-slider__slide');
        var newslider1 = new KeenSlider("#sliding2");

        var toslide = $('.toslide3');
        toslide.attr('id', 'sliding3');
        toslide.addClass('keen-slider')
        toslide.children().addClass('keen-slider__slide');
        var newslider1 = new KeenSlider("#sliding3");
    }


})