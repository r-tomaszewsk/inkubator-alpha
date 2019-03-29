var objElem = document.createElement('object');
var secondPage = document.getElementById('secondPage');
objElem.type = 'application/avplayer';
secondPage.appendChild(objElem);
webapis.avplay.setDisplayRect(100,200,600,400);
webapis.avplay.open('http://192.168.0.104:8080/QE75Q6FNA.mp4');
webapis.avplay.prepare();
//webapis.avplay.play();

//fizyczna sciezka 
//api file system 
//URI