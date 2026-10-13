document.documentElement.classList.remove("no-js");

/* ---------- Header: add background once the page scrolls ---------- */
const header = document.querySelector(".site-header");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 40);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

/* ---------- Mobile nav toggle ---------- */
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

const setMenuOpen = (open) => {
  navToggle.setAttribute("aria-expanded", String(open));
  navMenu.classList.toggle("is-open", open);
};

navToggle.addEventListener("click", () => {
  setMenuOpen(navToggle.getAttribute("aria-expanded") !== "true");
});

navMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

/* ---------- Countdown ---------- */
const countdown = document.querySelector(".countdown");

if (countdown) {
  const target = new Date(countdown.dataset.date).getTime();
  const units = {
    days: countdown.querySelector('[data-unit="days"]'),
    hours: countdown.querySelector('[data-unit="hours"]'),
    minutes: countdown.querySelector('[data-unit="minutes"]'),
    seconds: countdown.querySelector('[data-unit="seconds"]'),
  };

  const tick = () => {
    const diff = Math.max(0, target - Date.now());
    units.days.textContent = Math.floor(diff / 86400000);
    units.hours.textContent = Math.floor((diff / 3600000) % 24);
    units.minutes.textContent = Math.floor((diff / 60000) % 60);
    units.seconds.textContent = Math.floor((diff / 1000) % 60);
    if (diff === 0) clearInterval(timer);
  };

  const timer = setInterval(tick, 1000);
  tick();
}

/* ---------- Reveal sections on scroll ---------- */
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
