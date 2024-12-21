const video = document.getElementById('videoElement');
const play = document.getElementById('btn-play');
const volumeControl = document.getElementById('volumeControl');
const atras = document.getElementById('btn-atras');
const adelante = document.getElementById('btn-adelante');
const fullscreen = document.getElementById('btn-fullscreen');

fullscreen.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
        /*Safari*/
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
        /*IE11*/
    }

});

play.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        play.textContent = 'Pausa';
    } else {
        video.pause();
        play.textContent = 'Reproducir';
    }
});

volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});

atras.addEventListener('click', () => {
    video.currentTime -= 10;
});

adelante.addEventListener('click', () => {
    video.currentTime += 10;
})