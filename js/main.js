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
