/* Etkileşimler: imleç, yapışkan başlık, mobil menü, scroll animasyonları, karuseller.
   İçerik yeniden render edildiğinde UI.refresh() ile tekrar bağlanır. */
(function () {
  'use strict';

  let revealObserver = null;
  let sectionObserver = null;
  const carouselCleanups = [];

  /* ── İmleç (yalnızca ince işaretleyicili cihazlarda) ───────── */
  function initCursor() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;
    if (!window.matchMedia('(pointer: fine)').matches) {
      dot.remove();
      ring.remove();
      return;
    }

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    });

    (function animate() {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      requestAnimationFrame(animate);
    })();

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .service-card, .project-item, .article-card, .cert-card')) ring.classList.add('hover');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, .service-card, .project-item, .article-card, .cert-card')) ring.classList.remove('hover');
    });
  }

  /* ── Yapışkan başlık ───────────────────────────────────────── */
  function initHeader() {
    const header = document.getElementById('mainHeader');
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobil menü ────────────────────────────────────────────── */
  function initNavToggle() {
    const toggle = document.getElementById('navToggle');
    const panel = document.getElementById('navPanel');
    if (!toggle || !panel) return;

    const close = () => {
      panel.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
      const open = panel.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  /* ── Dil düğmeleri ─────────────────────────────────────────── */
  function initLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => window.I18N.setLang(btn.getAttribute('data-lang')));
    });
  }

  /* ── Görünüme girince beliren bölümler ─────────────────────── */
  function initReveal() {
    if (revealObserver) revealObserver.disconnect();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll('.service-card, .project-item, .article-card, .cert-cell, .timeline-item, .skill-group, .section-header, .projects-page-intro')
      .forEach((el) => {
        el.classList.add('will-reveal');
        revealObserver.observe(el);
      });
  }

  /* ── Menüde aktif bölüm ────────────────────────────────────── */
  function initActiveNav() {
    if (sectionObserver) sectionObserver.disconnect();
    if (document.body.getAttribute('data-page') !== 'home') return;

    const navAnchors = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('section[id], footer[id]');
    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navAnchors.forEach((link) => {
            const href = link.getAttribute('href') || '';
            link.classList.toggle('active', href.endsWith('#' + entry.target.id));
          });
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => sectionObserver.observe(s));
  }

  /* ── Çapa bağlantılarında yumuşak kaydırma ─────────────────── */
  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ── Hero'daki ışık kürelerinde paralaks ─────────────────────
     Küreler her render'da yenilendiği için referanslar refresh'te tazelenir. */
  let orbs = [];
  function initOrbs() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.addEventListener('mousemove', (e) => {
      if (!orbs.length) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 8;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    });
  }

  /* ── Yatay karusel ─────────────────────────────────────────── */
  function initCarousel(name, itemSelector) {
    const viewport = document.getElementById(`carousel-${name}-viewport`);
    const track = document.getElementById(`carousel-${name}-track`);
    const prev = document.getElementById(`carousel-${name}-prev`);
    const next = document.getElementById(`carousel-${name}-next`);
    const counter = document.getElementById(`carousel-${name}-counter`);
    if (!viewport || !track || !prev || !next || !counter) return;

    const items = track.querySelectorAll(itemSelector);
    if (!items.length) return;

    const GAP = 28;
    const visibleCount = () => (viewport.clientWidth >= 640 ? 2 : 1);
    const itemWidth = () => {
      const vc = visibleCount();
      return (viewport.clientWidth - GAP * (vc - 1)) / vc;
    };
    const slideSpan = () => itemWidth() + GAP;
    const maxIndex = () => Math.max(0, items.length - visibleCount());

    const setSlideWidths = () => {
      const iw = itemWidth();
      items.forEach((el) => {
        el.style.flex = `0 0 ${iw}px`;
        el.style.width = `${iw}px`;
        el.style.minWidth = `${iw}px`;
      });
    };

    const getIndex = () => {
      const span = slideSpan();
      return span <= 0 ? 0 : Math.min(maxIndex(), Math.round(viewport.scrollLeft / span));
    };

    const scrollToIndex = (idx) => {
      const i = Math.max(0, Math.min(maxIndex(), idx));
      viewport.scrollTo({ left: i * slideSpan(), behavior: 'smooth' });
    };

    const updateChrome = () => {
      const i = getIndex();
      const vc = visibleCount();
      counter.textContent = window.I18N.formatCounter(i + 1, Math.min(i + vc, items.length), items.length, vc);
      prev.disabled = i <= 0;
      next.disabled = i >= maxIndex();
    };

    prev.addEventListener('click', () => scrollToIndex(getIndex() - 1));
    next.addEventListener('click', () => scrollToIndex(getIndex() + 1));

    let scrollEndTimer;
    viewport.addEventListener(
      'scroll',
      () => {
        updateChrome();
        clearTimeout(scrollEndTimer);
        scrollEndTimer = setTimeout(updateChrome, 150);
      },
      { passive: true }
    );

    /* Shift + tekerlek yatay kaydırır; düz tekerlek sayfayı kaydırmaya devam eder. */
    viewport.addEventListener(
      'wheel',
      (e) => {
        if (!e.shiftKey || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
        e.preventDefault();
        viewport.scrollLeft += e.deltaY;
      },
      { passive: false }
    );

    viewport.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToIndex(getIndex() - 1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToIndex(getIndex() + 1);
      }
    });

    const onResize = () => {
      const idx = Math.min(getIndex(), maxIndex());
      setSlideWidths();
      requestAnimationFrame(() => {
        viewport.scrollLeft = idx * slideSpan();
        updateChrome();
      });
    };
    window.addEventListener('resize', onResize);
    carouselCleanups.push(() => window.removeEventListener('resize', onResize));

    /* Slayt genişlikleri piksel cinsinden sabitlendiği için, kapsayıcı
       herhangi bir sebeple boyut değiştirdiğinde yeniden ölçülmeli. */
    if (window.ResizeObserver) {
      const ro = new ResizeObserver(onResize);
      ro.observe(viewport);
      carouselCleanups.push(() => ro.disconnect());
    }

    setSlideWidths();
    updateChrome();
  }

  /* Yeniden render sonrası çalışan bağlamalar. */
  function refresh() {
    while (carouselCleanups.length) carouselCleanups.pop()();
    orbs = Array.from(document.querySelectorAll('.hero-gradient-orb'));
    initNavToggle();
    initLangSwitcher();
    initReveal();
    initActiveNav();
    initCarousel('projects', '.project-item');
    initCarousel('writing', '.article-card');
  }

  /* Sayfa ömrü boyunca bir kez çalışan bağlamalar. */
  function init() {
    initCursor();
    initHeader();
    initSmoothScroll();
    initOrbs();
    refresh();
  }

  window.UI = { init, refresh };
})();
