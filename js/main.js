$(document).ready(function () {

    $('.faqs').fadeOut();
    const hidefaqs = () => {
        $('#faq01').fadeOut(500);
        $('#faq02').fadeOut(500);
        $('#faq03').fadeOut(500);
        $('#faq04').fadeOut(500);
        $('#faq05').fadeOut(500);
        $('#faq06').fadeOut(500);
    }

    hidefaqs();
    $('#faq01').fadeIn(500);
    $('.faq').on('click', function () {
        var id = $('this').attr('id');
        $(id).addClass('bg-blue-50 border-blue-700');
        hidefaqs();
        switch (id) {
            case 'faq-1':
                $('#faq01').fadeIn(500);
                break;
            case 'faq-2':
                $('#faq02').fadeIn(500);
                break;
            case 'faq-3':
                $('#faq03').fadeIn(500);
                break;
            case 'faq-4':
                $('#faq04').fadeIn(500);
                break;
            case 'faq-5':
                $('#faq05').fadeIn(500);
                break;
            default:
                $('#faq01').fadeIn(500);
                break;
        }



    });
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
    $('select-contactcenter').removeClass('sect-selected');
    $('#select-erp').removeClass('sect-selected'); 
    $('#select-calling').removeClass('sect-selected');
    $('#select-itaas').removeClass('sect-selected'); 
    $('#select-web').removeClass('sect-selected');
    $('#select-pbx').removeClass('sect-selected');
    $('#select-crm').removeClass('sect-selected');
    $('#select-zoho').removeClass('sect-selected');









    if (except === 0) {
        $('#outsourced').fadeIn(500);
    } else if (except === 1) {
        $('#contactcenter').fadeIn(500);

    } else if (except === 2) {
        $('#erp').fadeIn(500);
    } else if (except === 3) {
        $('#calling').fadeIn(500);
    } else if (except === 4) {
        $('#itaas').fadeIn(500);
    } else if (except === 5) {
        $('#web').fadeIn(500);
    } else if (except === 6) {
        $('#pbx').fadeIn(500);
    } else if (except === 7) {
        $('#crm').fadeIn(500);
    } else if (except === 8) {
        $('#zoho').fadeIn(500);
    } else {
        $('#outsourced').fadeIn(500);
    }
}



$(document).ready(function () {
    // jumps to the 3rd position (position starts from 0)
    hideAll();

    $('#select-outsourced').on('click', function () {
        hideAll(0);
        $('#select-outsourced').addClass('sect-selected');
    })

    $('#select-contactcenter').on('click', function () {
        hideAll(1);
        $('#select-contactcenter').addClass('sect-selected');
    })
    $('#select-erp').on('click', function () {
        hideAll(2);
        $('#select-erp').addClass('sect-selected');
    })
    $('#select-calling').on('click', function () {
        hideAll(3);
        $('#select-calling').addClass('sect-selected');
    })
    $('#select-itaas').on('click', function () {
        hideAll(4);
        $('#select-itaas').addClass('sect-selected');
    })

    $('#select-web').on('click', function () {
        hideAll(5);
        $('#select-web').addClass('sect-selected');
    })
    $('#select-pbx').on('click', function () {
        hideAll(6);
        $(this).addClass('sect-selected');
    })
    $('#select-crm').on('click', function () {
        hideAll(7);
        $('#select-pbx').addClass('sect-selected');
    })
    $('#select-zoho').on('click', function () {
        hideAll(8);
        $('#select-zoho').addClass('sect-selected');
    })


});