var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	video.volume = 1.0
	volume.innerHTML = (video.volume * 100) + "%";
	console.log(video.volume + "%");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9
	console.log("New Speed " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 10 / 9
	console.log("New Speed " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 5){
		video.currentTime += 5
	}
	else{
		video.currentTime = 0
	}
	console.log("Current Time " + video.currentTime)
	console.log("Duration" + video.duration)
	video.play()
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted == false){
		video.muted = true;
		this.innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		this.innerHTML = "Mute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value / 100;
	volume.innerHTML = this.value + "%";
	console.log(video.volume);
});


document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
});

