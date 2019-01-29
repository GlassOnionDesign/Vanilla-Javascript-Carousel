describe("Testing Basic Carousel functionality,", () => {
    let carousel, body;
    beforeAll(function () {
       
        // Create arrows, for the event listeners
        body = document.getElementsByTagName("body")[0];
        body.append(UiFramework.createSlider());
        body.append(UiFramework.createArrows()); 
        
        // Initialise carousel...
		Carousel.Init('.l-slides', '.slideLeft', '.slideRight');
    })

    it("On first slide hide left arrow", () => {

        var slideLeft = body.getElementsByClassName("slideLeft")[0];
        
        expect(getComputedStyle(slideLeft).display).toEqual("none");
    })

    it("On last slide hide right arrow", () => {
       
        Carousel.moveRight();
        Carousel.moveRight();
        Carousel.moveRight();
        var slideRight = body.getElementsByClassName("slideRight")[0];
        var example = slideRight.getAttribute("style");
       
        expect(slideRight.getAttribute("style")).toEqual("display: none;");
    })

})

