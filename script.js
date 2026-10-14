```javascript
/* =====================================
   FLOATING HEARTS
===================================== */

const hearts = ["♡", "♥", "💙", "✦"];

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";
  heart.textContent =
    hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration =
    (5 + Math.random() * 5) + "s";
  heart.style.fontSize =
    (12 + Math.random() * 16) + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 900);


/* =====================================
   BACKGROUND MUSIC
===================================== */

const music = document.getElementById("bgMusic");
const video = document.querySelector(".video-frame video");
const openButton = document.querySelector('a[href="#memories"]');

function startMusic() {
  if (!music) return;

  // Jangan putar musik selama video sedang berjalan
  if (video && !video.paused && !video.ended) return;

  music.volume = 1;

  music.play().catch((error) => {
    console.log("Musik belum bisa diputar:", error);
  });
}

// Coba autoplay saat website dibuka
if (music) {
  music.play().catch(() => {
    console.log("Menunggu interaksi pengunjung untuk memutar musik.");
  });
}

// Mulai musik saat tombol Open Our Memories ditekan
if (openButton) {
  openButton.addEventListener("click", startMusic);
}


/* =====================================
   VIDEO CONTROLS
===================================== */

if (music && video) {
  // Hentikan musik ketika video mulai diputar
  video.addEventListener("play", () => {
    music.pause();
  });

  // Lanjutkan musik ketika video selesai
  video.addEventListener("ended", () => {
    startMusic();
  });
}
```
