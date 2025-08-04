// Scroll-activated animation for memory cards
const memoryCards = document.querySelectorAll(".memory-card");

function handleScrollAnimation() {
  memoryCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const isVisible = cardTop < window.innerHeight * 0.85;

    if (isVisible) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);

// Initial setup
memoryCards.forEach((card) => {
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.8s ease-out";
});

// Hover zoom scroll effect for gallery photos
const galleryPhotos = document.querySelectorAll(".photos img");

window.addEventListener("scroll", () => {
  galleryPhotos.forEach((img, index) => {
    const speed = 0.3 + (index % 5) * 0.05;
    const yOffset = window.scrollY * speed;
    img.style.transform = `translateY(${yOffset}px) scale(1.05)`;
  });
});

// Optional: Add interactive hover cycling on gallery
let currentHover = 0;
function autoHoverGallery() {
  galleryPhotos.forEach((img, i) => {
    img.style.border = "2px solid transparent";
    img.style.filter = "brightness(1)";
    if (i === currentHover) {
      img.style.border = "5px solid gold";
      img.style.filter = "brightness(1)";
    }
  });

  currentHover = (currentHover + 1) % galleryPhotos.length;
}

setInterval(autoHoverGallery, 2500); // every 2.5s

// Optional: Sound effect on click (add a nostalgic mp3 file)
// const clickSound = new Audio("click.mp3");
// document.body.addEventListener("click", () => clickSound.play());

// Subtle background color pulsing
const section = document.querySelector(".memories");
let hue = 0;

setInterval(() => {
  hue = (hue + 1) % 360;
  section.style.background = `linear-gradient(135deg, hsl(${hue}, 80%, 90%), hsl(${(hue + 60) % 360}, 100%, 95%))`;
}, 100);
