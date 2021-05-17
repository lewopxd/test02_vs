console.log("hello world im mplyr");
var iframe;
var player;

var playing = false;

var songToPlay = 1;

var songSelected = false;

//window.onload = runThis;

function runThis() {
    var btn = document.getElementById("My_btn");
    btn.style.display="block";
    var videoContainer = document.getElementById("video-container");
    videoContainer.style.opacity = "0.9";
    videoContainer.style.filter = "blur(10px)";
    
}

var btn = document.getElementById("My_btn");
console.log(btn);
btn.addEventListener("click", function () {
    play();

});

var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

player.on('play', function () {
    console.log('played the video!');
    playing = true;

});
player.on('pause', function () {
    console.log('paused the video!');
    playing = false;
});

player.on('bufferend', function () {
    console.log('buffferend the video!');
    playing = false;
    runThis();
});
player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});


function play() {

    try {

        if (!playing) {
            player.play();
            var btn = document.getElementById("My_btn");
            btn.style.display="none";
            var videoContainer = document.getElementById("video-container");
            videoContainer.style.opacity = "1";
            videoContainer.style.filter = "blur(0px)";

        } else {
            player.pause();
        }

    } catch (error) {
        console.error(error);
        //console.log("still loading the page");
    }
}



player.on('timeupdate', function (getAll) {
    currentPos = getAll.seconds; //get currentime
    vdoEndTym = getAll.duration; //get video duration
    percentage = (getAll.percent * 100) + "%";
    seconds = getAll.seconds;
    console.log('currentPos: ' + currentPos);
    console.log('percentage: ' + percentage);
    console.log('seconds: ' + seconds);


    var currtym = player.getCurrentTime();


    //144 seconds

    if (seconds < 144) {
        songSelected = false;
    }
    if (!songSelected && seconds > 4) {
        console.log("aquiii");
        player.setVolume(0);
        selectSong();     
    }
    if(seconds>162 && seconds<164){
      playNewSong(false);
      player.setVolume(1);
    }
});

var hiddenContainer = document.getElementById("hidden_container");
hiddenContainer.style.display = "block";



function selectSong() {
    // iframe.click();
    player.pause();

    var videoContainer = document.getElementById("video-container");
    videoContainer.style.opacity = "0.3";
    videoContainer.style.filter = "blur(5px)";


    

    var playerContainer = document.getElementById("container-player");
    playerContainer.style.display = "block";

    audioDemoPlayer1 = document.getElementById("audio-demo-1");
    audioDemoPlayer2 = document.getElementById("audio-demo-2");
    audioDemoPlayer3 = document.getElementById("audio-demo-3");

    audioDemoPlayer1.play();
}


var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', function onSlide(ev) {
    var id = ev.relatedTarget.id;

    switch (id) {
        case "s1":
            // do something the id is 1

            audioDemoPlayer2.pause();
            audioDemoPlayer3.pause();

            audioDemoPlayer1.currentTime = 0;
            audioDemoPlayer1.play();
            break;
        case "s2":
            // do something the id is 2
            audioDemoPlayer1.pause();
            audioDemoPlayer3.pause();
            audioDemoPlayer2.currentTime = 0;
            audioDemoPlayer2.play();
            break;
        case "s3":
            // do something the id is 3
            audioDemoPlayer1.pause();
            audioDemoPlayer2.pause();
            audioDemoPlayer3.currentTime = 0;
            audioDemoPlayer3.volume = 0.5;
            audioDemoPlayer3.play();
            break;
        default:
            //the id is none of the above
    }
    //console.log(myCarousel);
})

var btn_play_player1 = document.getElementById("btn-play1");

btn_play_player1.addEventListener("click", function () {

    songToPlay = 1;
    goBack();


});

var btn_play_player2 = document.getElementById("btn-play2");

btn_play_player2.addEventListener("click", function () {

    songToPlay = 2;
    goBack();

});

var btn_play_player3 = document.getElementById("btn-play3");

btn_play_player3.addEventListener("click", function () {

    songToPlay = 3;
    goBack();

});


function goBack() {
    songSelected = true;
    console.log("selected song : " + songToPlay);
    audioDemoPlayer1.pause();
    audioDemoPlayer2.pause();
    audioDemoPlayer3.pause();

   

    var videoContainer = document.getElementById("video-container");
    videoContainer.style.opacity = "1";
    videoContainer.style.filter = "blur(0px)";

    var playerContainer0 = document.getElementById("container-playerX");
    playerContainer0.style.display = "none";


    var playerContainer = document.getElementById("container-player");
    playerContainer.style.display = "none";


    player.play();
    playNewSong(true);

}

function playNewSong(play) {

    switch (songToPlay) {
        case 1:
            audioPlayer1 = document.getElementById("audio-1");
            if(play){
            audioPlayer1.play();
        }else{
            audioPlayer1.pause();
        }

            

            break;
        case 2:
            audioPlayer2 = document.getElementById("audio-2");
            if(play){
                audioPlayer2.play();
            }else{
                audioPlayer2.pause();
            }
            break;
        case 3:
            audioPlayer3 = document.getElementById("audio-3");
             
            if(play){
                audioPlayer3.volume = 0.5;
                audioPlayer3.play();
            }else{
                audioPlayer3.pause();
            }
            break;

        default:
            break;
    }




}