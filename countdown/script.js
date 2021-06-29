const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 21 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);


//Play & pause audio
function toggleAudioStatus(){
  if(audio.paused){
      audio.play();
  }else{
      audio.pause();
  }
}
//update play/pause icon
function updatePlayIcon(){
  if(audio.paused){
      play.innerHTML = '<i class="fas fa-volume-mute fa-2x"></i>';
  }else{
      play.innerHTML = '<i class="fas fa-volume-up fa-2x"></i>';
  }
}

const audio = document.querySelector('#audio')
const play = document.querySelector('.play')

play.addEventListener('click',toggleAudioStatus);
audio.addEventListener('pause',updatePlayIcon);
audio.addEventListener('play',updatePlayIcon);


