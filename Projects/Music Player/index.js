//Song Infos
let  now_Playing=document.querySelector(".now-playing");
let track_Art=document.querySelector(".track-art");
let track_Name=document.querySelector(".track-name");
let track_artist=document.querySelector(".track-artist");

//Button Infos
let previous_btn=document.querySelector(".previous-track");
let play_pause_btn=document.querySelector(".start-pause");
let next_btn=document.querySelector(".next-track");



//Time Infos 
let seek_slider=document.querySelector(".seek-slider");
let volume_slider=document.querySelector(".volume-slider");
let current_time=document.querySelector(".current-time");
let total_duration=document.querySelector(".total-duration");


let track_idx=0;
let isPlaying=false;
let updateTimer;


let current_track=document.createElement("audio");


//List of songs
let track_list = [
    {
      name: "Goosebumbs",
      artist: "Travis Scott",
      image: "https://images.genius.com/a02bd2d7e262205754e91984da048a41.1000x1000x1.jpg",
      path: "song.mp3"
    },
    {
      name: "505",
      artist: "Arctic Monkeys",
      image: "https://images.saatchiart.com/saatchi/1695953/art/8074124/7141057-HSC00001-7.jpg",
      path: "505.mp3"
    },

  ];





  // Functions




  function loadTrack(track_idx){
//Reseting the old track
clearInterval(updateTimer);
//bu napıyo
        resetValues();

    //Loading the new track
    current_track.src=track_list[track_idx].path;
    current_track.load();

    //Updating details of track

    track_Art.style.backgroundImage =
     "url(" + track_list[track_idx].image + ")";
    track_Name.textContent=track_list[track_idx].name;
    track_artist.textContent=track_list[track_idx].artist;
    now_Playing.textContent= "Playing "+(track_idx+1)+ " of "+track_list.length;
    
    // Set an interval of 300 milliseconds
  // for updating the seek slider 

   updateTimer=setInterval(seekUpdate,300);
    //Moving to next track if the song is ended

    current_track.addEventListener("ended",nextTrack);


  }

  function resetValues(){
    current_time.textContent="00:00";
    total_duration.textContent="00:00";
    seek_slider.value=0;

  }


  function playPauseChecker(){
    //Deciding whether song starts to play or stop


    if(!isPlaying) playTrack();
    else pauseTrack();

   
    
  }
   function playTrack(){

    isPlaying=true;
    //Playing the track
    current_track.play();
    //Replace  play btn with pause btn
    play_pause_btn.innerHTML='<i class="fa fa-pause-circle fa-5x"></i>';
   }

   function pauseTrack(){
    isPlaying=false;
    //Pausing the track
    current_track.pause();
    //Replace pause btn with play btn
    play_pause_btn.innerHTML='<i class="fa fa-play-circle fa-5x"></i>';
   }

   function nextTrack(){
    //Checking if the player reach last song 
    if(track_idx<track_list.length-1){
        track_idx++;
    }
    //Going back to beginning 
    else {
        track_idx=0;
    }
    loadTrack(track_idx);
    playTrack();
}

function  previousTrack(){
    if(track_idx>0){
        track_idx--;
    }
    //Going back to beginning 
    else {
        track_idx=track_list.length-1;

    }
    loadTrack(track_idx);
    playTrack();

}


function seekTo(){
    //Calculating seek position
    seekTo=current_track.duration*(seek_slider.value/100);
    current_track.currentTime=seekTo;

}


function setVolume(){
    // Calculating volume percentage and applying it 
    current_track.volume=volume_slider.value/100;
    console.log(volume_slider.value);
}

function seekUpdate(){
    let seekPosition=0;
    // Check if the current track duration is a legible number
    if (!isNaN(current_track.duration)) {
        seekPosition = current_track.currentTime * (100 / current_track.duration);
        seek_slider.value = seekPosition;
     


    let currentMinutes=Math.floor(current_track.currentTime/60);
    let currentSeconds=Math.floor(current_track.currentTime-currentMinutes*60);
    let durationMinutes = Math.floor(current_track.duration / 60);
    let durationSeconds = Math.floor(current_track.duration - durationMinutes * 60);


    //Adding 0 to single digit values
    if(currentSeconds<10) {currentSeconds="0"+currentSeconds;}
    if(currentMinutes<10){currentMinutes="0"+currentMinutes;}
    if(durationSeconds<10){durationSeconds="0"+durationSeconds;}
    if(durationMinutes<10){durationMinutes="0"+durationMinutes;}
    

    //Displaying updated version
    current_time.textContent=currentMinutes+":"+currentSeconds;
    total_duration.textContent=durationMinutes+":"+durationSeconds;
    }
}

loadTrack(track_idx);