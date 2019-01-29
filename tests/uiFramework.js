var UiFramework = (function () {

    function createSlider() {
        var sliderContainer = document.createElement("div");
        sliderContainer.classList.add("carousel");
        var sliderList = document.createElement("ul");
        sliderList.classList.add("l-slides");
        sliderContainer.appendChild(sliderList);
        return sliderContainer;
    }

    function createArrows() {
        var arrowContainer = document.createElement("div");
        arrowContainer.classList.add("slider-arrows");
        var arrowLeft = document.createElement("div");
        arrowLeft.classList.add("slideLeft");
        var arrowRight = document.createElement("div");
        arrowRight.classList.add("slideRight");
        arrowContainer.appendChild(arrowLeft);
        arrowContainer.appendChild(arrowRight);
     
        return arrowContainer;
    }

    return {
        createSlider: createSlider,
        createArrows: createArrows
      }
})();


