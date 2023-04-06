var timer = null;
var time = 0;
var running = false;

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(function(){
      time++;
      var hours = Math.floor(time / 3600);
      var minutes = Math.floor((time - (hours * 3600)) / 60);
      var seconds = time - (hours * 3600) - (minutes * 60);
      var display = hours + ':' + minutes + ':' + seconds;
      document.getElementById('clock').innerHTML = display;
    }, 1000);
  }
}

function pauseTimer() {
  if (running) {
    running = false;
    clearInterval(timer);
  }
}

function resetTimer() {
  running = false;
  clearInterval(timer);
  time = 0;
  document.getElementById('clock').innerHTML = '00:00:00';
}