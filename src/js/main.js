/*
 Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/tether/dist/js/tether.min.js
//= ../../bower_components/bootstrap/dist/js/bootstrap.min.js
//= ../../bower_components/3d-rotating-navigation/js/main.js

/*
    Custom
 */
//= partials/helper.js


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-48014931-1', 'codyhouse.co');
ga('send', 'pageview');

jQuery(document).ready(function($){
    $('.close-carbon-adv').on('click', function(event){
        event.preventDefault();
        $('#carbonads-container').hide();
    });
    
});

// Typed.js 
// https://github.com/mattboldt/typed.js
document.addEventListener("DOMContentLoaded", function(){
    Typed.new(".my-name", {
        strings: ["Бельченков Алексей"],
        typeSpeed: 40,
        showCursor: false,
        shuffle: true,
    });

     Typed.new(".what-here", {
         strings: ["Личный сайт web-разработчика"],
         typeSpeed: 40,
         showCursor: false,
         shuffle: true,
         fadeOut: true,
         startDelay: 2000,
    });

    
});