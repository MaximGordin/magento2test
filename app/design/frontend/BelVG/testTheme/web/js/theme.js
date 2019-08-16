require([
        "jquery",
        "slick"
    ],
    function($) {
        "use strict";

        $(document).ready(function($ ){
            console.log("DID IT! jQuery log complete.");
            $(".my-list").slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1
            });
            console.log("Yes");
        });
        return;
    });