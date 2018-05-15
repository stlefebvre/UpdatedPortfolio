$(document).ready(function () {
    //Scrolling from jumbotron links
    $(".nav-link").on('click', function (event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth scroll
            // (800) dictates the number of milliseconds it takes to scroll to specified section
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

    // Wrap every letter in a span
    $('.ml9 .letters').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({
            loop: true
        })
        .add({
            targets: '.ml9 .letter',
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            delay: function (el, i) {
                return 45 * (i + 1)
            }
        }).add({
            targets: '.ml9',
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
})