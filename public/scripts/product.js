window.addEventListener('load', function () {
    let productImgs = document.querySelectorAll('.other_images div');


    productImgs.forEach(function (elem) {

        elem.addEventListener('click', function () {
            let newSrc = elem.querySelector('img').getAttribute("src");
            document.querySelector('.ppal_img img').setAttribute("src", newSrc);

            elem.setAttribute("class", "active");
        });
    });



    var elemTry = document.querySelector('.tryOn_button');

    var elemAnimado = document.querySelector('.glasses');

    var elemAnimado2 = document.querySelector('.zoom_section');

    var elemAnimado3 = document.querySelector('.baslider_section');

    elemTry.addEventListener('click', function () {
        console.log('hola');
        if (elemAnimado != null)
            TweenLite.to(elemAnimado, .1, { width: "2000px" });
        elemTry.style.display = "none";

        
        let tl = new TimelineLite();

        tl.add(TweenLite.to(elemAnimado2, 1, { height : "900PX" }) );

        window.scrollBy(100,100);

        tl.add(TweenLite.to(elemAnimado, .5, { opacity: 0 }) );
        tl.add(TweenLite.to(elemAnimado, .5, { display: "none" }) );

        tl.add(TweenLite.to(elemAnimado3, .5, { opacity: 1 }) );

        //elemAnimado2.style.height = "1000px";
        //elemAnimado.style.opacity = "0";
        
        
    });

    



});