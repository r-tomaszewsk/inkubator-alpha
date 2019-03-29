var objElem = document.createElement('object');
var secondPage = document.getElementById('secondPage');
objElem.type = 'application/avplayer';
secondPage.appendChild(objElem);
var listener = {
    onbufferingstart: function () {
        console.log("Buffering start.");
    },

    onbufferingprogress: function (percent) {
        console.log("Buffering progress data : " + percent);
    },

    onbufferingcomplete: function () {
        console.log("Buffering complete.");
    },
    onstreamcompleted: function () {
        console.log("Stream Completed");
        webapis.avplay.stop();
    },

    oncurrentplaytime: function (currentTime) {
        console.log("Current playtime: " + currentTime);
    },

    onerror: function (eventType) {
        console.log("event type error : " + eventType);
    },

    onevent: function (eventType, eventData) {
        console.log("event type: " + eventType + ", data: " + eventData);
    },

    onsubtitlechange: function (duration, text, data3, data4) {
        console.log("subtitleText: " + text);
    },
    ondrmevent: function (drmEvent, drmData) {
        console.log("DRM callback: " + drmEvent + ", data: " + drmData);
    }
};

tizen.filesystem.resolve('wgt-package/images/QE75Q6FNA.mp4', function (file) {
    var videoURL = file.toURI();
    console.log(videoURL);
    webapis.avplay.setListener(listener);
    webapis.avplay.setDisplayRect(400, 500, 1200, 800);
    webapis.avplay.prepare();
    webapis.avplay.open(videoURL);
}, function () { console.log("error") }, 'r');
/*

*/
//webapis.avplay.open(videoURL);

//webapis.avplay.play();

//fizyczna sciezka 
//api file system 
//URI