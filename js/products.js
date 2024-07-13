

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
        var newslider = new KeenSlider("#sliding");
    }


})