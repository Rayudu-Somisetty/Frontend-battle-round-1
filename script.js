const bgBase = document.getElementById("bgBase");
const bgAberration = document.getElementById("bgAberration");
const digits = document.querySelectorAll(".digit");
const fill = document.getElementById("loaderFill");

let percent = 0;

// Animate digits with smooth 3D roll
function updateDigits(val) {
  const str = String(val).padStart(3, "0");
  str.split("").forEach((d, i) => {
    const el = digits[i];
    if (el.dataset.digit !== d) {
      el.style.transform = "rotateX(-90deg)";
      setTimeout(() => {
        el.textContent = d;
        el.dataset.digit = d;
        el.style.transform = "rotateX(0deg)";
      }, 100);
    }
  });
}

// Start loader (0 to 100 in 10 seconds)
const totalTime = 10000;
const stepTime = totalTime / 101;

const loader = setInterval(() => {
  if (percent > 100) {
    clearInterval(loader);

    // Fade out the screen
    document.body.classList.add("fade-out");

    // Redirect after fade
    setTimeout(() => {
      window.location.href = "ad.html"; // Change if needed
    }, 800);
    return;
  }

  updateDigits(percent);
  fill.style.width = percent + "%";
  percent++;
}, stepTime);

// Cursor-based distortion background effect
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  const translateX = x * 10;
  const translateY = y * 10;
  const skewX = x * 2;
  const skewY = y * 2;

  bgBase.style.transform = `translate(${translateX}px, ${translateY}px)`;
  bgAberration.style.transform = `translate(${translateX * 1.5}px, ${translateY * 1.5}px) skew(${skewX}deg, ${skewY}deg) scale(1.03)`;
});
