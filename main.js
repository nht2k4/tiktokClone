const prev = document.querySelector(".prev i"),
next = document.querySelector(".next i"),
video = document.querySelector(".video-lab video"),
play_pause = document.querySelector(".play_pause"),
text_name = document.querySelector(".name"),
img_box = document.querySelector(".img");

prev.addEventListener("click", (e) =>{
    prevTrack();
    backwrd();
});
next.addEventListener("click", (e) =>{
    nextTrack();
    fwrd();
});
// Specify globally used value
let track_index = 0;
let isPlaying = false;

// Create the video element for the player
let curr_track = document.createElement('video');
let track_list = [
    {
        path: "https://www.tiktok.com/@capcutvn.98/video/7347723192519232775?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	},
	{
        path: "https://www.tiktok.com/@tnhw.cutii._/video/7347221346511768834?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	},
	{
        path: "https://www.tiktok.com/@.trinam99/video/7346814013973515522?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	},
	{
        path: "https://www.tiktok.com/@quangdai164/video/7346918513191177480?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	},
	{
        path: "https://www.tiktok.com/@hanhnguyen3011/video/7345775704824352007?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	},
	{
        path: "https://www.tiktok.com/@q_huyp_/video/7345429939396594964?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	},
	{
        path: "https://www.tiktok.com/@lailaquanday02/video/7331012440274029867?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	},
];
let track = [
    
	"https://www.tiktok.com/@capcutvn.98/video/7347723192519232775?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	,
	
       "https://www.tiktok.com/@tnhw.cutii._/video/7347221346511768834?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	,
	
         "https://www.tiktok.com/@.trinam99/video/7346814013973515522?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	,
	
         "https://www.tiktok.com/@quangdai164/video/7346918513191177480?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	,
	
        "https://www.tiktok.com/@hanhnguyen3011/video/7345775704824352007?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	,
	
         "https://www.tiktok.com/@q_huyp_/video/7345429939396594964?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	,
	
         "https://www.tiktok.com/@lailaquanday02/video/7331012440274029867?is_from_webapp=1&sender_device=pc&web_id=7229201742323140098"
	,
]
let radome_track = track[Math.floor(Math.random()*track.length)]; //sorting items one-by-one and picking them randomly
window.onload = (e)=>{
    video.src = radome_track;
}
// Load the first track in the tracklist
loadTrack(track_index);

// calling the loadTrack function
function loadTrack(track_index) {
    // Load new track
    video.src = track_list[track_index].path;
    curr_track.load(); //loading the firsr track
    curr_track.addEventListener("ended", nextTrack);
}
function playpauseTrack() {
    // Switch between playing and pausing
    // depending on the current state
    if(!isPlaying) playTrack();
    else pauseTrack();
}
video.addEventListener("click", e => {
    pauseTrack();
    console.log(e);
});
// function to pause track
function pauseTrack() {
    // pause the loaded track
    video.pause();
    isPlaying = false;
    play_pause.classList.add("show");
    play_pause.innerHTML = "<i class='bx bx-play' ></i>";

    setTimeout(()=>{
        video.play();
        isPlaying = true;
        play_pause.innerHTML = "<i class='bx bx-pause' ></i>";
    },1000);

    setTimeout(()=>{
        play_pause.classList.remove("show");
    }, 1300);
}
function nextTrack() {
    // Go forward to the next track if the
	// current one is the last in the track list
    if(track_index < track_list.length - 1)
    track_index += 1;
    else track_index = 0;

    // Load and play the new track
    loadTrack(track_index);
    playTrack();
}
function prevTrack() {
    // Go back to the last track if the
	// current one is the first in the track list
    if(track_index > 0)
    track_index -= 1;
    else track_index = track_list.length;

    // Load and play the new track
    loadTrack(track_index);
    playTrack();
}
function playTrack() {
	// play the loaded track
	curr_track.play();
	isPlaying = true;
}
function backwrd() {
    // storing username in an array
    idArray = new Array()
    idArray [1] = "Tân Ú"
    idArray [2] = "Huệ Ngọc"
    idArray [3] = "Tú Quyên"
    idArray [4] = "Thịnh"
    idArray [5] = "Thành Tiến"
  
    randomParagraph = Math.floor(Math.random()*5);
  
    text_name.innerHTML = idArray[randomParagraph + 1] + "<i class='bx bxs-check-circle' style='color: #24eff2'></i>";
}
function fwrd() {
    // storing username in an array
    
    idArray = new Array()
    idArray [1] = "Tân Nguyễn"
    idArray [2] = "Huệ Ngọc"
    idArray [3] = "Tú Quyên"
    idArray [4] = "Ngọc Bình"
    idArray [5] = "Bé Bo"
    randomParagraph = Math.floor(Math.random()*5);
  
    text_name.innerHTML = idArray[randomParagraph + 1] + "<i class='bx bxs-check-circle' style='color: #24eff2'></i>";
}
img_box.addEventListener("click", (e) => {
    console.log(e);
    img_box.classList.add("followed");

    setTimeout(()=>{
        img_box.classList.add("fade");
    },1400);
});



  
