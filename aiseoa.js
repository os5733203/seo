/* ── aiseoa.js — shared across all pages ── */

// ── TRANSLATIONS ──────────────────────────────────────────────
const i18n = {
  en: {
    nav_home: "Home", nav_about: "About", nav_portfolio: "Portfolio",
    nav_services: "Services", nav_blog: "Blog", nav_contact: "Contact",
    nav_cta: "Free Audit",
    footer_rights: "© 2025 aiseoa.com — All rights reserved.",
    footer_desc: "Professional SEO specialist helping businesses across Europe, Australia & the Arab world rank higher and grow faster.",
    footer_pages: "Pages", footer_services: "Services", footer_connect: "Connect",
    open_now: "Open Now", closed_now: "Closed",
    hours_title: "Working Hours",
    mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday",
    fri: "Friday", sat: "Saturday", sun: "Sunday",
  },
  ar: {
    nav_home: "الرئيسية", nav_about: "من نحن", nav_portfolio: "أعمالنا",
    nav_services: "الخدمات", nav_blog: "المدونة", nav_contact: "تواصل",
    nav_cta: "تدقيق مجاني",
    footer_rights: "© 2025 aiseoa.com — جميع الحقوق محفوظة.",
    footer_desc: "متخصص SEO محترف يساعد الشركات في أوروبا وأستراليا والعالم العربي على التصدر في جوجل.",
    footer_pages: "الصفحات", footer_services: "الخدمات", footer_connect: "تواصل معنا",
    open_now: "متاح الآن", closed_now: "مغلق",
    hours_title: "ساعات العمل",
    mon: "الإثنين", tue: "الثلاثاء", wed: "الأربعاء", thu: "الخميس",
    fri: "الجمعة", sat: "السبت", sun: "الأحد",
  }
};

let currentLang = localStorage.getItem('aiseoa_lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('aiseoa_lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Add Cairo font for Arabic
  if (lang === 'ar' && !document.getElementById('cairo-font')) {
    const link = document.createElement('link');
    link.id = 'cairo-font';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap';
    document.head.appendChild(link);
  }

  // Update lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.textContent = lang === 'en' ? 'العربية' : 'English';
  });

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key]) el.placeholder = i18n[lang][key];
  });

  // Update page-specific translations
  if (typeof applyPageTranslations === 'function') applyPageTranslations(lang);
}

function toggleLang() {
  applyLang(currentLang === 'en' ? 'ar' : 'en');
}

// ── NAV ACTIVE STATE ───────────────────────────────────────────
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-center a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === page || (page === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });
}

// ── MOBILE MENU ────────────────────────────────────────────────
function toggleMenu() {
  const m = document.getElementById('mobile-menu');
  if (m) m.classList.toggle('open');
}

// ── FADE IN ON SCROLL ──────────────────────────────────────────
function initFadeIn() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

// ── COUNT UP ───────────────────────────────────────────────────
function countUp(id, target, duration = 1400, prefix = '', suffix = '') {
  const el = document.getElementById(id);
  if (!el) return;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = prefix + Math.round(current) + suffix;
    if (current >= target) clearInterval(timer);
  }, 16);
}

// ── WORKING HOURS ──────────────────────────────────────────────
const HOURS = {
  0: null,                        // Sunday — closed
  1: ['09:00', '18:00'],          // Monday
  2: ['09:00', '18:00'],          // Tuesday
  3: ['09:00', '18:00'],          // Wednesday
  4: ['09:00', '18:00'],          // Thursday
  5: ['09:00', '15:00'],          // Friday
  6: null,                        // Saturday — closed
};

function isOpenNow() {
  const now = new Date();
  const day = now.getDay();
  const h = HOURS[day];
  if (!h) return false;
  const [startH, startM] = h[0].split(':').map(Number);
  const [endH, endM] = h[1].split(':').map(Number);
  const mins = now.getHours() * 60 + now.getMinutes();
  return mins >= startH * 60 + startM && mins < endH * 60 + endM;
}

function renderHours(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const t = i18n[currentLang];
  const dayNames = [t.sun, t.mon, t.tue, t.wed, t.thu, t.fri, t.sat];
  const today = new Date().getDay();
  // Mon-Fri-Sat-Sun order: show Mon first
  const order = [1,2,3,4,5,6,0];
  let html = '';
  order.forEach(d => {
    const h = HOURS[d];
    const isToday = d === today;
    html += `<div class="hour-row${isToday?' today':''}${!h?' closed':''}">
      <span class="day">${dayNames[d]}</span>
      <span class="time">${h ? h[0]+' – '+h[1] : (currentLang==='ar'?'مغلق':'Closed')}</span>
    </div>`;
  });
  el.innerHTML = html;
}

// ── TYPED HERO ─────────────────────────────────────────────────
function initTyped(elId, wordsEn, wordsAr) {
  const el = document.getElementById(elId);
  if (!el) return;
  let wi = 0, ci = 0, deleting = false;
  function getWords() { return currentLang === 'ar' ? wordsAr : wordsEn; }
  function type() {
    const words = getWords();
    const word = words[wi % words.length];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
      setTimeout(type, 70);
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi++; setTimeout(type, 300); return; }
      setTimeout(type, 38);
    }
  }
  setTimeout(type, 800);
}

// ── INIT ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  setActiveNav();
  initFadeIn();
});
