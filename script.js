const playBtn = document.getElementById('playBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        playBtn.innerText = "🎵 Play Our Song";
    } else {
        bgMusic.play();
        playBtn.innerText = "⏸️ Pause Music";
    }
    isPlaying = !isPlaying;
});