function Player () {
    //

    document.addEventListener('visibilitychange', function () {
        // 
    });

    function init (url) {
        //
    }

    function play () {
        //
    }

    function stop () {
        //
    }

    function getStatus () {
        //
    }

    return {
        init: init,
        play: play,
        stop: stop,
        getStatus: getStatus
    };
}
webapis.avplay.setDisplayRect(100,200,600,400);

// Case 2: Other application resolution

// Base resolution of avplay
var avplayBaseWidth = 1920;

// Calculate ratio to base resolution
var ratio = avplayBaseWidth / window.document.documentElement.clientWidth;

// Convert rectangle to base resolution
var newLeft = 100 * ratio;
var newTop = 200 * ratio;
var newWidth = 600 * ratio;
var newHeight = 400 * ratio;

webapis.avplay.setDisplayRect(newLeft,newTop,newWidth,newHeight);