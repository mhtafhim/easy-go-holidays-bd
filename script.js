// Mobile menu toggle
const menuToggleButton = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (menuToggleButton && mobileMenu) {
  menuToggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Theme: init and toggle
const themeToggleButton = document.getElementById('themeToggle');
const iconSun = document.getElementById('themeIconSun');
const iconMoon = document.getElementById('themeIconMoon');

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
    if (iconSun) iconSun.classList.remove('hidden');
    if (iconMoon) iconMoon.classList.add('hidden');
  } else {
    root.classList.remove('dark');
    if (iconSun) iconSun.classList.add('hidden');
    if (iconMoon) iconMoon.classList.remove('hidden');
  }
}

function getPreferredTheme() {
  const stored = localStorage.getItem('eg_theme');
  if (stored === 'light' || stored === 'dark') return stored;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

let currentTheme = getPreferredTheme();
applyTheme(currentTheme);

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('eg_theme', currentTheme);
    applyTheme(currentTheme);
  });
}

// Collapse mobile menu on link click (bound after potential dynamic render)
let allNavLinks = [];
function setupNavLinks() {
  allNavLinks = Array.from(document.querySelectorAll('a.nav-link'));
  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (!mobileMenu) return;
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
  });
}
setupNavLinks();

// Active nav link on scroll
const sectionIds = ['home', 'packages', 'stats', 'gallery', 'reviews', 'about', 'contact'];
const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
function updateActiveNav() {
  const scrollPosition = window.scrollY + window.innerHeight * 0.3;
  let currentSectionId = 'home';
  for (const section of sections) {
    if (section.offsetTop <= scrollPosition) {
      currentSectionId = section.id;
    }
  }
  allNavLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    const isActive = href === `#${currentSectionId}`;
    link.classList.toggle('text-teal-600', isActive);
    link.classList.toggle('font-semibold', isActive);
    link.classList.toggle('border-b-2', isActive);
    link.classList.toggle('border-teal-500', isActive);
  });
}
window.addEventListener('scroll', throttle(updateActiveNav, 150));
window.addEventListener('load', updateActiveNav);

// generic toggle function for modals

function toggleDetails(id, show) {
  const modal = document.getElementById(id);
  if (show) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  } else {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}
// Simple throttle
function throttle(fn, wait) {
  let inThrottle = false;
  let pendingArgs = null;
  return function throttled(...args) {
    if (inThrottle) {
      pendingArgs = args;
      return;
    }
    fn.apply(this, args);
    inThrottle = true;
    setTimeout(() => {
      inThrottle = false;
      if (pendingArgs) {
        fn.apply(this, pendingArgs);
        pendingArgs = null;
      }
    }, wait);
  };
}

// Counters animation when in view
const counterElements = Array.from(document.querySelectorAll('.counter'));
if (counterElements.length > 0) {
  const countersObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        countersObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counterElements.forEach(el => countersObserver.observe(el));
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target') || '0', 10);
  const duration = 1600;
  const start = 0;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = easeOutCubic(progress);
    const value = Math.floor(start + (target - start) * eased);
    element.textContent = value.toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      element.classList.add('counter-pop');
      setTimeout(() => element.classList.remove('counter-pop'), 320);
    }
  }
  requestAnimationFrame(tick);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// Gallery lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
let galleryImages = Array.from(document.querySelectorAll('.gallery-img'));
let currentGalleryIndex = 0;

function openLightbox(index) {
  if (!lightbox || !lightboxImage) return;
  currentGalleryIndex = index;
  lightboxImage.src = galleryImages[currentGalleryIndex].src;
  lightbox.classList.remove('hidden');
  lightbox.classList.add('lightbox-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.add('hidden');
  lightbox.classList.remove('lightbox-open');
  document.body.style.overflow = '';
}

function setupGalleryBindings() {
  galleryImages = Array.from(document.querySelectorAll('.gallery-img'));
  galleryImages.forEach((img, idx) => {
    img.addEventListener('click', () => openLightbox(idx));
  });
}
setupGalleryBindings();

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Reviews carousel
const reviewsTrack = document.getElementById('reviewsTrack');
const prevReviewBtn = document.getElementById('prevReview');
const nextReviewBtn = document.getElementById('nextReview');
let reviewIndex = 0;
let reviewTimer = null;

function updateReviewsTransform() {
  if (!reviewsTrack) return;
  const offset = -reviewIndex * 100;
  reviewsTrack.style.transform = `translateX(${offset}%)`;
}

function nextReview() {
  if (!reviewsTrack) return;
  const slidesCount = reviewsTrack.children.length;
  reviewIndex = (reviewIndex + 1) % slidesCount;
  updateReviewsTransform();
}

function prevReview() {
  if (!reviewsTrack) return;
  const slidesCount = reviewsTrack.children.length;
  reviewIndex = (reviewIndex - 1 + slidesCount) % slidesCount;
  updateReviewsTransform();
}

function startAutoSlide() {
  stopAutoSlide();
  reviewTimer = setInterval(nextReview, 4000);
}

function stopAutoSlide() {
  if (reviewTimer) clearInterval(reviewTimer);
}

if (nextReviewBtn) nextReviewBtn.addEventListener('click', () => { nextReview(); startAutoSlide(); });
if (prevReviewBtn) prevReviewBtn.addEventListener('click', () => { prevReview(); startAutoSlide(); });

if (reviewsTrack) {
  updateReviewsTransform();
  startAutoSlide();
  reviewsTrack.parentElement.addEventListener('mouseenter', stopAutoSlide);
  reviewsTrack.parentElement.addEventListener('mouseleave', startAutoSlide);
}

// Scroll reveal animations (supports dynamic content)
let revealObserverInstance = null;
function initRevealObserver() {
  if (revealObserverInstance) return;
  revealObserverInstance = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        revealObserverInstance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
}
function observeRevealTargets() {
  initRevealObserver();
  const candidates = Array.from(document.querySelectorAll('.reveal'))
    .filter(el => !el.classList.contains('reveal-visible'));
  candidates.forEach(el => revealObserverInstance.observe(el));
}
observeRevealTargets();

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());

// -------------------------------
// Dynamic rendering from EG_DATA
// -------------------------------
function renderFromData() {
  const data = window.EG_DATA;
  if (!data) return;

  // Nav links (desktop and mobile)
  try {
    const nav = document.querySelector('header nav');
    if (nav) {
      // Desktop: find the first container holding nav-link anchors that's not inside #mobileMenu
      const desktopLink = Array.from(nav.querySelectorAll('a.nav-link')).find(a => !a.closest('#mobileMenu'));
      const desktopContainer = desktopLink ? desktopLink.parentElement : null;
      if (desktopContainer) {
        desktopContainer.innerHTML = data.navLinks.map(l => `<a href="${l.href}" class="nav-link py-2 text-slate-700 dark:text-slate-200 hover:text-teal-600 hover:dark:text-teal-400">${l.label}</a>`).join('');
      }
      // Mobile
      const mobileLinksContainer = document.querySelector('#mobileMenu .flex');
      if (mobileLinksContainer) {
        mobileLinksContainer.innerHTML = data.navLinks.map(l => `<a href="${l.href}" class="nav-link block px-2 py-2 rounded hover:bg-slate-100 hover:dark:bg-slate-800 dark:text-slate-200">${l.label}</a>`).join('');
      }
    }
  } catch {}

  // Gallery images
  try {
    const galleryGrid = document.querySelector('#gallery .grid');
    if (galleryGrid && data.gallery && data.gallery.length) {
      galleryGrid.innerHTML = data.gallery.map((src, i) => (
        `<img class="reveal gallery-img aspect-[4/3] w-full object-cover rounded-xl hover:scale-[1.02] transition shadow" src="${src}" alt="Gallery image ${i + 1}">`
      )).join('');
      setupGalleryBindings();
      observeRevealTargets();
    }
  } catch {}

  // Reviews slides
  try {
    if (reviewsTrack && data.reviews && data.reviews.length) {
      reviewsTrack.innerHTML = data.reviews.map(r => (
        `<div class="shrink-0 w-full p-6 sm:p-10 grid sm:grid-cols-[120px,1fr] gap-6 items-center">
          <img class="h-24 w-24 rounded-full object-cover" src="${r.avatar}" alt="${r.name}">
          <div>
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-lg">${r.name}</h3>
              <div class="text-yellow-500">${r.stars}</div>
            </div>
            <p class="mt-2 text-slate-600 dark:text-slate-300">${r.text}</p>
          </div>
        </div>`
      )).join('');
      reviewIndex = 0;
      updateReviewsTransform();
      startAutoSlide();
    }
  } catch {}

  // Packages grid: target the first grid under #packages
  try {
    const packagesGrid = document.querySelector('#packages .grid');
    if (packagesGrid && data.packages && data.packages.length) {
      packagesGrid.innerHTML = data.packages.map(p => (
        `<article class="bg-white dark:bg-slate-800 rounded-2xl shadow hover:shadow-xl transition overflow-hidden border border-slate-100 dark:border-slate-700">
          <div class="relative">
            <img class="h-56 w-full object-cover" src="${p.image}" alt="Tour Highlights">
            <div class="absolute top-2 right-4 rounded-2xl bg-sky-400 text-black px-4 py-3 shadow-lg text-right">
              <div class="text-xl sm:text-2xl font-extrabold leading-none">${p.price}</div>
              <div class="text-[11px] sm:text-xs line-through text-black/90">${p.oldPrice}</div>
            </div>
            ${p.unavailable ? `
            <div class="absolute top-40 left-0.5 rounded-2xl bg-amber-100/95 text-black px-4 py-2 shadow-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a1 1 0 0 1 .894.553l9 18A1 1 0 0 1 21 22H3a1 1 0 0 1-.894-1.447l9-18A1 1 0 0 1 12 2zm0 6a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1zm0 10a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"/></svg>
              <span class="text-xs sm:text-sm font-semibold tracking-wide">This package is currently unavailable</span>
            </div>` : ''}
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 mb-4">${p.title}<br>${p.subtitle ? `<span class=\"text-sm font-semibold text-blue-500\">${p.subtitle}</span>` : ''}</h3>
            ${p.detailsHtml ? `<button data-modal-id="${p.id}" class="pkg-details-btn bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition">📄 View Details</button>` : ''}
          </div>
        </article>
        ${p.detailsHtml ? `
        <div id="${p.id}" class=" fixed inset-0 bg-black/60 hidden items-center justify-center z-50">
          <div class="bg-white w-full max-w-2xl mx-4 rounded-xl shadow-lg p-6 overflow-y-auto max-h-[90vh] animate-slideDown">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold">🌞 Tour Details</h3>
              <button data-close-modal-id="${p.id}" class="text-red-500 font-bold text-lg">✖</button>
            </div>
            ${p.detailsHtml}
          </div>
        </div>` : ''}`
      )).join('');

      // bind package modal buttons
      Array.from(packagesGrid.querySelectorAll('.pkg-details-btn')).forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-modal-id');
          if (id) toggleDetails(id, true);
        });
      });
      Array.from(document.querySelectorAll('[data-close-modal-id]')).forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-close-modal-id');
          if (id) toggleDetails(id, false);
        });
      });
      observeRevealTargets();
    }
  } catch {}

  // Rebind nav links after rebuild
  setupNavLinks();
  updateActiveNav();
}

// Run after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderFromData);
} else {
  renderFromData();
}