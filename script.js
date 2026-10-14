
 // Floating hearts
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

// Background music
const music = document.getElementById("bgMusic");
const video = document.querySelector("video");

// Pause music when video starts
if (music && video) {
  video.addEventListener("play", () => {
    music.pause();
  });

  // Resume music when video ends
  video.addEventListener("ended", () => {
    music.play().catch(() => {
      console.log("Browser meminta interaksi untuk memutar musik.");
    });
  });
}

// Try autoplay when the page opens
if (music) {
  music.volume = 1;
  music.play().catch(() => {
    console.log("Autoplay diblokir browser.");
  });
}
