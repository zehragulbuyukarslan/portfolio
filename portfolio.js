
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
    const interactives = document.querySelectorAll('a, button, .service-card, .project-item, .article-card, .section-carousel-btn, .btn-view-all');
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
 
  // ── Active nav link on scroll (home) or current page (projects / writing) ──
  const navLinks  = document.querySelectorAll('.menu a');
  const isProjectsPage = /projects\.html$/i.test(window.location.pathname);
  const isWritingPage = /writing\.html$/i.test(window.location.pathname);

  if (isProjectsPage) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === 'projects.html');
    });
  } else if (isWritingPage) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === 'writing.html');
    });
  } else {
    const sections = document.querySelectorAll('section[id], footer[id]');
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
  }
 
  // ── Scroll-reveal for sections ─────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
 
  document.querySelectorAll('.service-card, .project-item, .article-card, .section-header, .projects-page-intro').forEach(el => {
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
  if (orbs.length) {
    document.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 8;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    });
  }

  // ── Horizontal carousels (projects & writing on home) ─────────────
  const initHorizontalCarousel = (viewportId, trackId, prevId, nextId, counterId, itemSelector) => {
    const carouselViewport = document.getElementById(viewportId);
    const carouselTrack = document.getElementById(trackId);
    const carouselPrev = document.getElementById(prevId);
    const carouselNext = document.getElementById(nextId);
    const carouselCounter = document.getElementById(counterId);

    if (!carouselViewport || !carouselTrack || !carouselPrev || !carouselNext || !carouselCounter) return;

    const items = carouselTrack.querySelectorAll(itemSelector);
    if (!items.length) return;

    const GAP = 28;

    const visibleCount = () => carouselViewport.clientWidth >= 640 ? 2 : 1;

    const itemWidth = () => {
      const vc = visibleCount();
      return (carouselViewport.clientWidth - GAP * (vc - 1)) / vc;
    };

    const slideSpan = () => itemWidth() + GAP;

    const setSlideWidths = () => {
      const iw = itemWidth();
      items.forEach((el) => {
        el.style.flex = `0 0 ${iw}px`;
        el.style.width = `${iw}px`;
        el.style.minWidth = `${iw}px`;
      });
    };

    const maxIndex = () => Math.max(0, items.length - visibleCount());

    const getIndex = () => {
      const span = slideSpan();
      if (span <= 0) return 0;
      return Math.min(maxIndex(), Math.round(carouselViewport.scrollLeft / span));
    };

    const scrollToIndex = (idx) => {
      const i = Math.max(0, Math.min(maxIndex(), idx));
      carouselViewport.scrollTo({ left: i * slideSpan(), behavior: 'smooth' });
    };

    const updateChrome = () => {
      const i = getIndex();
      const vc = visibleCount();
      const first = i + 1;
      const last = Math.min(i + vc, items.length);
      carouselCounter.textContent = vc > 1 ? `${first}–${last} / ${items.length}` : `${first} / ${items.length}`;
      carouselPrev.disabled = i <= 0;
      carouselNext.disabled = i >= maxIndex();
    };

    carouselPrev.addEventListener('click', () => scrollToIndex(getIndex() - 1));
    carouselNext.addEventListener('click', () => scrollToIndex(getIndex() + 1));

    let scrollEndTimer;
    carouselViewport.addEventListener('scroll', () => {
      updateChrome();
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(updateChrome, 150);
    }, { passive: true });

    carouselViewport.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      carouselViewport.scrollLeft += e.deltaY;
    }, { passive: false });

    carouselViewport.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToIndex(getIndex() - 1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToIndex(getIndex() + 1);
      }
    });

    window.addEventListener('resize', () => {
      const idx = Math.min(getIndex(), maxIndex());
      setSlideWidths();
      requestAnimationFrame(() => {
        carouselViewport.scrollLeft = idx * slideSpan();
        updateChrome();
      });
    });

    setSlideWidths();
    updateChrome();
  };

  initHorizontalCarousel(
    'carousel-projects-viewport',
    'carousel-projects-track',
    'carousel-projects-prev',
    'carousel-projects-next',
    'carousel-projects-counter',
    '.project-item'
  );
  initHorizontalCarousel(
    'carousel-writing-viewport',
    'carousel-writing-track',
    'carousel-writing-prev',
    'carousel-writing-next',
    'carousel-writing-counter',
    '.article-card'
  );
 
});