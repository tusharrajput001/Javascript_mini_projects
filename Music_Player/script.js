const tracks = [
    {
      name: "Let me down slowly",
      artist: "Alec Benjamin",
      cover: "./images/alec.jpg",
      source: "./music/Let me down slowly.mp3",
    },
    {
      name: "Let me love you",
      artist: "DJ Snake/Justin Beiber",
      cover: "./images/dj.jpg",
      source: "./music/Let me love you.mp3",
    },
    {
      name: "Perfect",
      artist: "Ed Sheeran",
      cover: "./images/ed.jpg",
      source: "./music/Perfect.mp3",
    },
  ];
  
  
  
  const audio = new Audio();
  let currentTrackIndex = 0;
  let isDragging = false;
  
  const playButton = document.querySelector('.play');
  const skipBackButton = document.querySelector('.skip-back');
  const skipForwardButton = document.querySelector('.skip-forward');
  const coverImg = document.getElementById('cover');
  const titleElement = document.getElementById('title');
  const artistElement = document.getElementById('artist');
  const currentTimeElement = document.getElementById('currentTime');
  const durationElement = document.getElementById('duration');
  const progressBar = document.getElementById('progress');
  const progressHead = document.querySelector('.progress-head');
  
  function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    audio.src = track.source;
    coverImg.src = track.cover;
    titleElement.textContent = track.name;
    artistElement.textContent = track.artist;
    audio.load();
  }
  
  function playTrack() {
    audio.play();
    playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }
  
  function pauseTrack() {
    audio.pause();
    playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
  
  function togglePlay() {
    if (audio.paused) {
      playTrack();
    } else {
      pauseTrack();
    }
  }
  
  function skipBack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
  }
  
  function skipForward() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
  }
  
  function updateProgressBar() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    currentTimeElement.textContent = currentTime;
    durationElement.textContent = duration;
    progressHead.style.left = `${progress}%`;
  }
  
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  
  function setProgress(event) {
    const progressBarRect = progressBar.getBoundingClientRect(); // Get the position and dimensions of the progress bar
    const clickX = event.clientX - progressBarRect.left; // Calculate the click position relative to the progress bar
    const progressBarWidth = progressBar.clientWidth;
    const duration = audio.duration;
    
    const newTime = (clickX / progressBarWidth) * duration;
  
    // Set the current playback time of the audio to the new time
    audio.currentTime = newTime;
  
    // Update the progress bar and time display
    updateProgressBar();
  }
  
  progressBar.addEventListener('click', setProgress);
  
  
  audio.addEventListener('ended', () => {
    skipForward();
  });
  
  audio.addEventListener('timeupdate', updateProgressBar);
  playButton.addEventListener('click', togglePlay);
  skipBackButton.addEventListener('click', skipBack);
  skipForwardButton.addEventListener('click', skipForward);
  
  // Load first track
  loadTrack(currentTrackIndex);
  