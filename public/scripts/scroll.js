$(document).ready(function () {

    var controller = new ScrollMagic.Controller();
    var elem = document.querySelector('.glasses');

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.zoom_section'
    })


        .setClassToggle(elem, 'animated')
        .addTo(controller);


    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.zoom_section'
    })

        .setClassToggle('.zoom_section', 'animated')

        .addTo(controller);

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#view360_section'
    })

        .setClassToggle('.tryOn_button', 'block')

        .addTo(controller);

        

});


