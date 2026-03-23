/* =========================================
   Portfolio JS – nav, typewriter, reveal,
   contact form, active links, year
   ========================================= */

// ── Navbar scroll effect ──────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  updateActiveNav();
});

// ── Mobile hamburger menu ─────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ── Active nav link on scroll ─────────────
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);
    if (!link) return;

    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    link.classList.toggle('active', scrollPos >= top && scrollPos < bottom);
  });
}

// ── Typewriter effect ─────────────────────
const typedEl = document.getElementById('typed-text');
const phrases = [
  'Full-Stack Developer',
  'Problem Solver',
  'Open-Source Enthusiast',
  'UI/UX Tinkerer',
];
let phraseIdx = 0;
let charIdx = 0;
let deleting = false;
const TYPING_SPEED = 90;
const DELETING_SPEED = 50;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 300;

function typeWriter() {
  const current = phrases[phraseIdx];

  if (deleting) {
    charIdx--;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(typeWriter, PAUSE_AFTER_DELETE);
      return;
    }
    setTimeout(typeWriter, DELETING_SPEED);
  } else {
    charIdx++;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeWriter, PAUSE_AFTER_TYPE);
      return;
    }
    setTimeout(typeWriter, TYPING_SPEED);
  }
}

typeWriter();

// ── Scroll reveal animation ───────────────
const revealEls = document.querySelectorAll(
  '.section-title, .section-subtitle, .about-text, .about-stats, ' +
  '.skill-category, .project-card, .stat-card, .contact-item, .contact-form'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach(el => revealObserver.observe(el));

// ── Contact form ──────────────────────────
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    setStatus('Please fill in all fields.', 'error');
    return;
  }

  if (!isValidEmail(email)) {
    setStatus('Please enter a valid email address.', 'error');
    return;
  }

  // Simulate sending (replace with real API call as needed)
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

  setTimeout(() => {
    setStatus('✓ Message sent! I\'ll get back to you soon.', 'success');
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    setTimeout(() => setStatus('', ''), 5000);
  }, 1500);
});

function setStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.className = `form-status ${type}`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── Footer year ───────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();
