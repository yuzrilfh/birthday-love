/* FLOATING HEARTS */
const hearts = ["♡", "♥", "💙", "✦"];

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heart.style.fontSize = (12 + Math.random() * 16) + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 900);


/* MUSIC AND VIDEO */
const music = document.getElementById("bgMusic");
const video = document.querySelector(".video-frame video");
const openButton = document.getElementById("openMemories");

function playMusic() {
  if (!music) return;

  // Jangan putar musik saat video masih berjalan
  if (video && !video.paused && !video.ended) return;

  music.play().catch((error) => {
    console.log("Musik gagal diputar:", error);
  });
}

// Putar musik saat tombol pembuka diklik
if (openButton && music) {
  openButton.addEventListener("click", () => {
    playMusic();
  });
}

// Pause musik ketika video mulai diputar
if (music && video) {
  video.addEventListener("play", () => {
    music.pause();
  });

  // Lanjutkan musik ketika video selesai
  video.addEventListener("ended", () => {
    playMusic();
  });
}
