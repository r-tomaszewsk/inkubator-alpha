document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("firstPage").classList.remove("hidden");
  document.getElementById("secondPage").classList.add("hidden");
  console.log(document.getElementById("firstPage"));
  console.log(document.getElementById("secondPage"));
  document.getElementById("backButton").addEventListener("click", function (event) {
    document.getElementById("firstPage").classList.remove("hidden");
    document.getElementById("secondPage").classList.add("hidden");
    event.preventDefault();
  });
});
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
        document.getElementById("firstPage").classList.add("hidden");
        document.getElementById("secondPage").classList.remove("hidden");

        var modelCodeFromInput = document.getElementById("modelCodeTextBox").value;
        var yourModelCode = app.modelCode.parse(modelCodeFromInput);
        var screenSizeHTML = document.getElementById("screenSize");
        var yearHTML = document.getElementById("year");
        var regionHTML = document.getElementById("region");
        var matrixTypeHTML = document.getElementById("matrixType");
        var seriesHTML = document.getElementById("series");
        screenSizeHTML.innerText = yourModelCode.screenSize.name;
        yearHTML.innerText = yourModelCode.year.name;
        regionHTML.innerText = yourModelCode.region.name;
        matrixTypeHTML.innerText = yourModelCode.matrixType.name;
        seriesHTML.innerText = yourModelCode.series.name;
        //ue65mus9000t
        event.preventDefault();
        break;
      case "getModelButton":
        document.getElementById("firstPage").classList.add("hidden");;
        document.getElementById("secondPage").classList.remove("hidden");
        event.preventDefault();
        break;
    }
  }
  return {
    onEnter: onEnter
  }
}();
