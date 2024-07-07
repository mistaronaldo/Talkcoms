$(document).ready(function () {
    var navbar = $('#nav'); // Replace with your navbar class
    var threshold = 50; // Adjust this value to control the scroll position for the change

    $(window).scroll(function () {
        if ($(window).scrollTop() > threshold) {
            navbar.css("background-color", "#d9ebf4"); // Replace with your desired color
        } else {
            navbar.css("background-color", "transparent"); // Replace with your navbar's original color
        }
    });
});
