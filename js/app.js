window.app = window.app || {};
window.app.app = function () {
  'use strict'
  function onEnter() {

    var currentFocusElement = app.nav.getActiveElement();
    var currentFocusElementID = currentFocusElement.id;
    switch (currentFocusElementID) {
      case "modelCodeTextBox":
        currentFocusElement.focus();
        break;
      case "button":
        var firstPageElements = document.getElementsByClassName("firstPage");
        var secondPageElements = document.getElementsByClassName("secondPage");
        var i;
        for (i = 0; i < firstPageElements.length; i++) {
          firstPageElements[i].classList.add("hidden");
        }
        for (i = 0; i < secondPageElements.length; i++) {
          secondPageElements[i].classList.remove("hidden");
        }
        var modelCodeFromInput = document.getElementById("modelCodeTextBox").value;
        var yourModelCode = app.modelCode.parse(modelCodeFromInput);
        var screenSizeHTML = document.getElementById("screenSize");
        var yearHTML = document.getElementById("year");
        var regionHTML = document.getElementById("region");
        var matrixTypeHTML = document.getElementById("matrixType");
        var seriesHTML = document.getElementById("series");
        console.log(yourModelCode);
        screenSizeHTML.innerText = yourModelCode.screenSize.name;
        yearHTML.innerText = yourModelCode.year.name;
        regionHTML.innerText = yourModelCode.region.name;
        matrixTypeHTML.innerText = yourModelCode.matrixType.name;
        seriesHTML.innerText = yourModelCode.series.name;
        //ue65mus9000t
        event.preventDefault();
        break;
      case "getModelButton":
        var firstPageElements = document.getElementsByClassName("firstPage");
        var secondPageElements = document.getElementsByClassName("secondPage");
        var i;
        for (i = 0; i < firstPageElements.length; i++) {
          firstPageElements[i].classList.add("hidden");
        }
        for (i = 0; i < secondPageElements.length; i++) {
          secondPageElements[i].classList.remove("hidden");
        }
        event.preventDefault();
        break;
    }
  }

  document.addEventListener("DOMcontentloaded", function () {

    document.getElementById("backButton").addEventListener("click", function (event) {
      var firstPageElements = document.getElementsByClassName("firstPage");
      var secondPageElements = document.getElementsByClassName("secondPage");
      var i;
      for (i = 0; i < firstPageElements.length; i++) {
        firstPageElements[i].classList.remove("hidden");
      }
      for (i = 0; i < secondPageElements.length; i++) {
        secondPageElements[i].classList.add("hidden");
      }
      event.preventDefault();
    });

    //focus 
    /*
    var defaultFocus = document.getElementById("getModelButton");
    defaultFocus.classList.add("focus");
    //powiniene po tab index 
    
    //var value = tizen.tvinputdevice.getSupportedKeys();
    
    document.body.addEventListener('keydown', handleKeyDown);
    function handleKeyDown(event) {
      switch (event.keyCode) {
        case tizen.tvinputdevice.getKey('ArrowLeft').code: //37
          //var currentFocusIndex = document.classList("getModelButton").getAttribute("tabindex");
          //document.getElementById("getModelButton").classList.remove("focus");
          var focusedElements = document.getElementsByClassName("remove");
          var i;
          for (i = 0; i < focusedElements.length; i++){
            focusedElements[i].classList.remove
          }
        break;
        case tizen.tvinputdevice.getKey('ColorF0Red').code: //403
          // Something you want to do
        break;
    }    
    };
    */

  });
  return {
    onEnter: onEnter
  }
}();