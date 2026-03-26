
/* =============================================
   PORTFOLIO.JS — Zehra Gül Büyükarslan
   ============================================= */
 
document.addEventListener('DOMContentLoaded', () => {
 
  // ── Custom Cursor ──────────────────────────
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
 
  if (dot && ring) {
    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
 
    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top  = mouseY + 'px';
    });
 
    // Smooth ring follow
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      requestAnimationFrame(animateRing);
    };
    animateRing();
 
    // Hover effect on interactive elements
    const interactives = document.querySelectorAll('a, button, .service-card, .project-item');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
  }
 
  // ── Sticky Header ─────────────────────────
  const header = document.getElementById('mainHeader');
  if (header) {
    const handleScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }
 
  // ── Active nav link on scroll ──────────────
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks  = document.querySelectorAll('.menu a');
 
  const observerOptions = {
    rootMargin: '-40% 0px -50% 0px',
    threshold: 0
  };
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, observerOptions);
 
  sections.forEach(s => sectionObserver.observe(s));
 
  // ── Scroll-reveal for sections ─────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
 
  document.querySelectorAll('.service-card, .project-item, .section-header').forEach(el => {
    el.classList.add('will-reveal');
    revealObserver.observe(el);
  });
 
  // ── Smooth scroll for nav links ────────────
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
 
  // ── Parallax orbs on mouse move ────────────
  const orbs = document.querySelectorAll('.hero-gradient-orb');
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    orbs.forEach((orb, i) => {
      const speed = (i + 1) * 8;
      orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  });
 
});