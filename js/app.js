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
