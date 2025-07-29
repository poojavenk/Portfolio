// Update footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Dark Mode Toggle
const body = document.body;
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// Toggle on click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Fade-in and Skill Bar Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Animate skill bars
      if (entry.target.id === "skills") {
        const bars = entry.target.querySelectorAll(".fill");
        bars.forEach(bar => {
          const targetWidth = bar.getAttribute("style").match(/width:\s*(\d+%)/)[1];
          bar.style.width = targetWidth;
        });
      }
      // Stop observing once visible
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Apply observer to all fade-in elements
document.querySelectorAll(".fade-in").forEach(section => {
  // Make visible immediately if already in view (on load)
  if (section.getBoundingClientRect().top < window.innerHeight) {
    section.classList.add("visible");
  } else {
    observer.observe(section);
  }
});

// Contact form (dummy message)
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "Thank you! Your message has been received.";
  formMessage.style.color = "green";
  contactForm.reset();
});
document.addEventListener('DOMContentLoaded', () => {
  const starsContainer = document.querySelector('.stars');

  // Generate 150 stars
  for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    starsContainer.appendChild(star);
  }

  // Shooting stars every 4–8 seconds
  setInterval(() => {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');
    shootingStar.style.top = `${Math.random() * 50}%`;
    shootingStar.style.left = `-200px`;
    starsContainer.appendChild(shootingStar);

    setTimeout(() => {
      shootingStar.remove();
    }, 5000);
  }, 4000 + Math.random() * 4000);
});
