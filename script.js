const playBtn = document.getElementById('playBtn');
const bgMusic = document.getElementById('bgMusic');
const floatingImgs = document.querySelectorAll('.floating-img');
const spaceContainer = document.getElementById('spaceContainer');
let isPlaying = false;

// Music button functionality
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        playBtn.innerText = "🎵 Play Semangat Booster";
    } else {
        bgMusic.play();
        playBtn.innerText = "⏸️ Pause Music";
    }
    isPlaying = !isPlaying;
});

// Handle clicking on floating images to burst them
floatingImgs.forEach(img => {
    img.addEventListener('click', function(e) {
        // Prevent burst if already burst
        if (this.classList.contains('burst')) return;
        
        // Add burst animation class
        this.classList.add('burst');
        
        // Get image position and create floating clone
        const rect = this.getBoundingClientRect();
        const clonedImg = document.createElement('img');
        clonedImg.src = this.src;
        clonedImg.alt = this.alt;
        clonedImg.className = 'space-floating-image';
        clonedImg.style.left = rect.left + 'px';
        clonedImg.style.top = rect.top + 'px';
        
        spaceContainer.appendChild(clonedImg);
        
        // Remove the burst image after animation
        setTimeout(() => {
            this.style.display = 'none';
        }, 800);
        
        // Remove the floating clone after some time
        setTimeout(() => {
            clonedImg.remove();
        }, 6800);
    });
});