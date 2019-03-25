document.getElementById("button").addEventListener("click", function(event){
  var firstPageElements = document.getElementsByClassName("firstPage");
  var secondPageElements = document.getElementsByClassName("secondPage");
  var i;
  for (i = 0; i < firstPageElements.length; i++){
    firstPageElements[i].classList.add("hidden");
  }
  for (i = 0; i < secondPageElements.length; i++){
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
});
document.getElementById("getModelButton").addEventListener("click", function(event){
  var firstPageElements = document.getElementsByClassName("firstPage");
  var secondPageElements = document.getElementsByClassName("secondPage");
  var i;
  for (i = 0; i < firstPageElements.length; i++){
    firstPageElements[i].classList.add("hidden");
  }
  for (i = 0; i < secondPageElements.length; i++){
    secondPageElements[i].classList.remove("hidden");
  }
  event.preventDefault();
});
document.getElementById("backButton").addEventListener("click", function(event){
  var firstPageElements = document.getElementsByClassName("firstPage");
  var secondPageElements = document.getElementsByClassName("secondPage");
  var i;
  for (i = 0; i < firstPageElements.length; i++){
    firstPageElements[i].classList.remove("hidden");
  }
  for (i = 0; i < secondPageElements.length; i++){
    secondPageElements[i].classList.add("hidden");
  }
  event.preventDefault();
});
