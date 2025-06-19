// Background movement
const bgBase = document.getElementById("bgBase");
const bgAberration = document.getElementById("bgAberration");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  const tx = x * 10;
  const ty = y * 10;
  const skewX = x * 2;
  const skewY = y * 2;

  bgBase.style.transform = `translate(${tx}px, ${ty}px)`;
  bgAberration.style.transform = `translate(${tx * 1.5}px, ${ty * 1.5}px) skew(${skewX}deg, ${skewY}deg) scale(1.03)`;
});

function showSlideImages(wordElement, imageGroup) {
  const rect = wordElement.getBoundingClientRect();
  const leftImg = imageGroup.querySelector(".slide-img.left");
  const rightImg = imageGroup.querySelector(".slide-img.right");

  // Position left image to the left of the word
  leftImg.style.left = `${rect.left - leftImg.offsetWidth - 10}px`;
  leftImg.style.top = `${rect.top + window.scrollY + rect.height / 2}px`;

  // Position right image to the right of the word
  rightImg.style.left = `${rect.right + 10}px`;
  rightImg.style.top = `${rect.top + window.scrollY + rect.height / 2}px`;

  imageGroup.classList.add("show");
}

function hideSlideImages(imageGroup) {
  imageGroup.classList.remove("show");
}

// Reports
const reportHover = document.getElementById("reportHover");
const reportImages = document.getElementById("reportImages");

reportHover.addEventListener("mouseenter", () => {
  showSlideImages(reportHover, reportImages);
});
reportHover.addEventListener("mouseleave", () => {
  hideSlideImages(reportImages);
});

// Forecasts
const forecastHover = document.getElementById("forecastHover");
const forecastImages = document.getElementById("forecastImages");

forecastHover.addEventListener("mouseenter", () => {
  showSlideImages(forecastHover, forecastImages);
});
forecastHover.addEventListener("mouseleave", () => {
  hideSlideImages(forecastImages);
});

