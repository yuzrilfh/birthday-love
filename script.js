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

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 900);


/* =====================================
   BACKGROUND MUSIC
===================================== */

const music = document.getElementById("bgMusic");
const video = document.querySelector(".video-frame video");

if (music) {
  music.volume = 1;

  // Coba memutar musik saat website dibuka
  music.play().catch(() => {
    console.log(
      "Autoplay diblokir browser. Musik menunggu interaksi pengguna."
    );
  });
}


/* =====================================
   MUSIC AND VIDEO CONTROL
===================================== */

if (music && video) {

  // Hentikan musik ketika video mulai diputar
  video.addEventListener("play", () => {
    music.pause();
  });

  // Lanjutkan musik ketika video selesai
  video.addEventListener("ended", () => {
    music.play().catch(() => {
      console.log("Silakan putar musik secara manual.");
    });
  });
}


/* =====================================
   START MUSIC AFTER USER INTERACTION
===================================== */

if (music) {
  const startMusic = () => {
    // Jangan mulai musik jika video sedang diputar
    if (video && !video.paused && !video.ended) {
      return;
    }

    music.play().catch(() => {});
  };

  // Interaksi pertama pengunjung dapat mengaktifkan musik
  document.addEventListener("click", startMusic, { once: true });
  document.addEventListener("touchstart", startMusic, {
    once: true,
    passive: true
  });
}
```
