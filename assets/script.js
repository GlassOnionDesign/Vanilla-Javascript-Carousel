 var Carousel = {};

 Carousel.Settings = {
     slides: "",
     btnLeft: "",
     btnRight:"",
     currentSlide: 0,
     slideSize: 300,
     slideLimit: -11
 }
 
 Carousel.Init = function (frameSelector,  btnLeft, btnRight) {

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    Carousel.Settings.slides = document.querySelector(frameSelector);
    Carousel.Settings.btnLeft = document.querySelector(btnLeft);
    Carousel.Settings.btnRight = document.querySelector(btnRight);
    var currentSlide = 0;

    // Viewport Limits
    if (viewportWidth > 1200) {
        Carousel.Settings.slideSize = 900;
        Carousel.Settings.slideLimit = -3;
    } else if (viewportWidth > 992) {
        Carousel.Settings.slideSize = 600;
        Carousel.Settings.slideLimit = -5;
    }

    Carousel.Settings.btnLeft.addEventListener("click", function(e) {
        Carousel.moveLeft();
    });
    
    Carousel.Settings.btnRight.addEventListener("click", function(e) {
        Carousel.moveRight();
    });

};

Carousel.moveLeft = function() {
    Carousel.Settings.currentSlide++;
    Carousel.Settings.slides.style.left = Carousel.Settings.currentSlide * Carousel.Settings.slideSize + 'px';

    if (Carousel.Settings.currentSlide > Carousel.Settings.slideLimit) {
        Carousel.Settings.btnRight.style.display = 'block';
    }
    if (Carousel.Settings.currentSlide >= 0) {
        Carousel.Settings.btnLeft.style.display = 'none';
    }
}

Carousel.moveRight = function() {
    Carousel.Settings.currentSlide--;
    Carousel.Settings.slides.style.left = Carousel.Settings.currentSlide * Carousel.Settings.slideSize + 'px';
    if (Carousel.Settings.currentSlide < 0) {
        Carousel.Settings.btnLeft.style.display = 'block';
    }
    if (Carousel.Settings.currentSlide <= Carousel.Settings.slideLimit) {
        Carousel.Settings.btnRight.style.display = 'none';
    }
}





