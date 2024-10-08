$(document).ready(function () {

    $('.faqs').fadeOut();
    const hidefaqs = () => {
        $('#faq01').fadeOut(0);
        $('#faq02').fadeOut(0);
        $('#faq03').fadeOut(0);
        $('#faq04').fadeOut(0);
        $('#faq05').fadeOut(0);
        $('#faq06').fadeOut(0);
        $('#faq07').fadeOut(0);

        $('#faq-1').removeClass('select-faq');
        $('#faq-2').removeClass('select-faq');
        $('#faq-3').removeClass('select-faq');
        $('#faq-4').removeClass('select-faq');
        $('#faq-5').removeClass('select-faq');
        $('#faq-6').removeClass('select-faq');
        $('#faq-7').removeClass('select-faq');

    }

    hidefaqs();


    $('#faq01').fadeIn(500);
    $('#faq-1').addClass('select-faq');

    $('#faq-1').on('click', function () {
        hidefaqs();
        $('#faq01').fadeIn(500);
        $('#faq-1').addClass('select-faq');
    })
    $('#faq-2').on('click', function () {
        hidefaqs();
        $('#faq02').fadeIn(500);
        $('#faq-2').addClass('select-faq');
    })
    $('#faq-3').on('click', function () {
        hidefaqs();
        $('#faq03').fadeIn(500);
        $('#faq-3').addClass('select-faq');
    })
    $('#faq-4').on('click', function () {
        hidefaqs();
        $('#faq04').fadeIn(500);
        $('#faq-4').addClass('select-faq');
    })
    $('#faq-5').on('click', function () {
        hidefaqs();
        $('#faq05').fadeIn(500);
        $('#faq-5').addClass('select-faq');
    })
    $('#faq-6').on('click', function () {
        hidefaqs();
        $('#faq06').fadeIn(500);
        $('#faq-6').addClass('select-faq');
    })
    $('#faq-7').on('click', function () {
        hidefaqs();
        $('#faq07').fadeIn(500);
        $('#faq-7').addClass('select-faq');
    })
});



const hideAll = (except) => {
    $('#outsourced').fadeOut(0);
    $('#contactcenter').fadeOut(0);
    $('#erp').fadeOut(0);
    $('#calling').fadeOut(0);
    $('#itaas').fadeOut(0);
    $('#web').fadeOut(0);
    $('#pbx').fadeOut(0);
    $('#crm').fadeOut(0);
    $('#zoho').fadeOut(0);

    $('#select-outsourced').removeClass('sect-selected');
    $('#select-contactcenter').removeClass('sect-selected');
    $('#select-erp').removeClass('sect-selected');
    $('#select-calling').removeClass('sect-selected');
    $('#select-itaas').removeClass('sect-selected');
    $('#select-web').removeClass('sect-selected');
    $('#select-pbx').removeClass('sect-selected');
    $('#select-crm').removeClass('sect-selected');
    $('#select-zoho').removeClass('sect-selected');

    $('.dots').removeClass('dot-selected');

    if (except === 0) {
        $('#outsourced').fadeIn(100);
    } else if (except === 1) {
        $('#contactcenter').fadeIn(100);

    } else if (except === 2) {
        $('#erp').fadeIn(100);
    } else if (except === 3) {
        $('#calling').fadeIn(100);
    } else if (except === 4) {
        $('#itaas').fadeIn(100);
    } else if (except === 5) {
        $('#web').fadeIn(100);
    } else if (except === 6) {
        $('#pbx').fadeIn(100);
    } else if (except === 7) {
        $('#crm').fadeIn(100);
    } else if (except === 8) {
        $('#zoho').fadeIn(100);
    } else {
        $('#outsourced').fadeIn(100);
        $('#select-outsourced').addClass('sect-selected');
    }
}


$(document).ready(function () {
    var screenWidth = $(window).width();
    if (screenWidth >= 640) {
        hideAll();
        $('#dot-outsourced').addClass('dot-selected');
        $('#select-outsourced').on('mouseenter', function () {
            hideAll(0);
            $('#select-outsourced').addClass('sect-selected');
        })

        $('#select-contactcenter').on('mouseenter', function () {
            hideAll(1);
            $('#select-contactcenter').addClass('sect-selected');
        })
        $('#select-erp').on('mouseenter', function () {
            hideAll(2);
            $('#select-erp').addClass('sect-selected');
        })
        $('#select-calling').on('mouseenter', function () {
            hideAll(3);
            $('#select-calling').addClass('sect-selected');
        })
        $('#select-itaas').on('mouseenter', function () {
            hideAll(4);
            $('#select-itaas').addClass('sect-selected');
        })

        $('#select-web').on('mouseenter', function () {
            hideAll(5);
            $('#select-web').addClass('sect-selected');
        })
        $('#select-pbx').on('mouseenter', function () {
            hideAll(6);
            $(this).addClass('sect-selected');
        })
        $('#select-crm').on('mouseenter', function () {
            hideAll(7);
            $('#select-crm').addClass('sect-selected');
        })
        $('#select-zoho').on('mouseenter', function () {
            hideAll(8);
            $('#select-zoho').addClass('sect-selected');
        })
    }

});


$(document).ready(function () {
    $('.book-demo').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#get-started').offset().top
        }, 1000); // Adjust animation time (optional)

    });
});
