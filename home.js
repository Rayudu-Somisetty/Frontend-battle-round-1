document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card.animate");

  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = '🌞';
  document.body.appendChild(themeToggle);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));

  // Dynamic scroll-based transformations
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    cards.forEach((card, index) => {
      const offset = (scrollY - card.offsetTop + window.innerHeight * 0.5) / 50;
      if (!card.classList.contains('visible')) {
        card.style.transform = `translateY(${Math.max(50 - offset, 0)}px)`;
        card.style.opacity = `${Math.min(1, 0.2 + offset / 10)}`;
      }
    });
  });

  // Dark mode toggle
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.innerHTML = document.body.classList.contains('dark') ? '🌜' : '🌞';
  });
});
