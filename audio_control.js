const audio = document.getElementById('videoElement');
const play = document.getElementById('btn-play');
const volumeControl = document.getElementById('volumeControl');
const atras = document.getElementById('btn-atras');
const adelante = document.getElementById('btn-adelante');
const fullscreen = document.getElementById('btn-fullscreen');

fullscreen.addEventListener('click', () => {
    if (audio.requestFullscreen) {
        audio.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        audio.webkitRequestFullscreen();
        /*Safari*/
    } else if (audio.msRequestFullscreen) {
        audio.msRequestFullscreen();
        /*IE11*/
    }

});


play.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        play.textContent = 'Pausa';
    } else {
        audio.pause();
        play.textContent = 'Reproducir';
    }
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

atras.addEventListener('click', () => {
    audio.currentTime -= 10;
});

adelante.addEventListener('click', () => {
    audio.currentTime += 10;
})