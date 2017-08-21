function initPlayer() {
video = document.querySelector(".video");
video.loop=true;
video.play();

//setting variables
playpause=document.querySelector(".playpausebtn");
mutespeaker=document.querySelector(".mutespeakerbtn");
progressbar=document.querySelector(".progressbar");
volumebar=document.querySelector(".volumebar");
fullscreen=document.querySelector(".fullscreenbtn");

//Event Handling
playpause.addEventListener("click", playPause); 
mutespeaker.addEventListener("click", mute);
progressbar.addEventListener("change", vidSeek);
video.addEventListener("timeupdate", progUpdate);
volumebar.addEventListener("change", volBar);
fullscreen.addEventListener("click", fullScreen);

//functions 
function playPause() {
    if (video.paused) {
      video.play();
      playpause.style.background="url(images/pause.jpeg)";
      playpause.style.backgroundSize = "cover";	
}
    else { 
    video.pause();
    playpause.style.background="url(images/play.jpeg)";
    playpause.style.backgroundSize = "cover";
}
}

function vidSeek() {
    var seektime = video.duration * (progressbar.value / 100);
    video.currentTime=seektime;
}

function progUpdate() {
    var progresstime=video.currentTime * (100/video.duration);
    progressbar.value=progresstime
}

function volBar() {
    video.volume = volumebar.value / 100;
}

function mute () {
    if(video.muted) {
      video.muted=false;
      mutespeaker.style.background="url(images/mute.jpeg)";
      mutespeaker.style.backgroundSize = "cover";
}
    else { 
      video.muted=true;
      mutespeaker.style.background="url(images/speaker.jpeg)";
      mutespeaker.style.backgroundSize = "cover";
	}
}

function fullScreen() {
    if (video.webkitRequestFullScreen) {
      video.webkitRequestFullScreen();
}
    else if (video.mozRequestFullScreen) {
      video.webkitRequestFullScreen();
}
    else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
}
}
}

window.addEventListener("load", initPlayer);