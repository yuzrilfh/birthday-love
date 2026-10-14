```javascript
/* FLOATING HEARTS */
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


/* BACKGROUND MUSIC */
const music = document.getElementById("bgMusic");
const video = document.querySelector(".video-frame video");

if (music) {
  music.volume = 1;

  // Coba putar musik saat website dibuka
  music.play().catch(() => {
    console.log("Autoplay diblokir browser.");
  });
}


/* VIDEO CONTROLS */
if (music && video) {
  // Musik berhenti saat video mulai
  video.addEventListener("play", () => {
    music.pause();
  });

  // Musik lanjut saat video selesai
  video.addEventListener("ended", () => {
    music.play().catch(() => {
      console.log("Musik perlu diputar manual.");
    });
  });
}
```
