// Mobile menu toggle
const menuToggleButton = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (menuToggleButton && mobileMenu) {
  menuToggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Collapse mobile menu on link click
const allNavLinks = Array.from(document.querySelectorAll('a.nav-link'));
allNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (!mobileMenu) return;
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  });
});

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
const galleryImages = Array.from(document.querySelectorAll('.gallery-img'));
let currentGalleryIndex = 0;

function openLightbox(index) {
  if (!lightbox || !lightboxImage) return;
  currentGalleryIndex = index;
  lightboxImage.src = galleryImages[currentGalleryIndex].src;
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
}

galleryImages.forEach((img, idx) => {
  img.addEventListener('click', () => openLightbox(idx));
});

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

// Scroll reveal animations
const revealEls = Array.from(document.querySelectorAll('.reveal'));
if (revealEls.length > 0) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));
}

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = String(new Date().getFullYear()); 