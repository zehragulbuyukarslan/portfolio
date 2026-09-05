/* data/ içeriğini HTML'e çeviren bileşenler.
   Her bölüm bir mount noktasına yazılır: <div data-render="projects"></div>
   Dil değişince app.js bu fonksiyonları yeniden çalıştırır. */
(function () {
  'use strict';

  const D = window.PORTFOLIO;
  const t = (k) => window.I18N.t(k);
  const pick = (v) => window.I18N.pick(v);

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* Alt sayfalarda ana sayfa çapaları index.html ile ön eklenmeli. */
  function homePrefix() {
    return document.body.getAttribute('data-page') === 'home' ? '' : 'index.html';
  }

  function navLinks() {
    const p = homePrefix();
    const page = document.body.getAttribute('data-page');
    return [
      { href: p + '#hero', label: t('nav.home'), active: false },
      { href: p + '#services', label: t('nav.services'), active: false },
      { href: p + '#experience', label: t('nav.experience'), active: false },
      { href: 'projects.html', label: t('nav.projects'), active: page === 'projects' },
      { href: 'certificates.html', label: t('nav.certificates'), active: page === 'certificates' },
      { href: 'writing.html', label: t('nav.writing'), active: page === 'writing' },
      { href: p + '#footer', label: t('nav.contact'), active: false },
    ];
  }

  const components = {
    header() {
      const links = navLinks()
        .map(
          (l) =>
            `<li><a href="${esc(l.href)}" data-text="${esc(l.label)}"${l.active ? ' class="active"' : ''}>${esc(l.label)}</a></li>`
        )
        .join('');

      const langBtns = window.I18N.SUPPORTED.map((lang) => {
        const active = lang === window.I18N.getLang();
        return `<button type="button" class="lang-btn${active ? ' lang-btn--active' : ''}" data-lang="${lang}" aria-pressed="${active}">${esc(
          t('lang.' + lang)
        )}</button>`;
      }).join('');

      return `
        <nav class="menu">
          <a href="index.html" class="logo" aria-label="${esc(t('nav.logo_aria'))}">${esc(D.profile.initials)}</a>
          <button type="button" class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="navPanel" aria-label="${esc(
            t('nav.home')
          )}">
            <span></span><span></span><span></span>
          </button>
          <div class="menu-right" id="navPanel">
            <ul>${links}</ul>
            <div class="lang-switcher" role="group" aria-label="${esc(t('nav.lang_aria'))}">${langBtns}</div>
          </div>
        </nav>`;
    },

    hero() {
      const p = D.profile;
      const cv = p.cv[window.I18N.getLang()] || p.cv.en;
      const stats = p.stats
        .map(
          (s) =>
            `<div class="stat"><span class="stat-num">${esc(s.value)}</span><span class="stat-label">${esc(pick(s.label))}</span></div>`
        )
        .join('');

      return `
        <div class="hero-bg">
          <div class="hero-gradient-orb orb-1"></div>
          <div class="hero-gradient-orb orb-2"></div>
          <div class="hero-gradient-orb orb-3"></div>
        </div>

        <div class="hero-inner">
          <article id="hero-profile">
            <div class="profile-img-wrapper">
              <div class="profile-ring"></div>
              <img src="${esc(p.photo)}" alt="${esc(t('hero.profile_alt'))}" class="profile-img">
            </div>
            <div class="hero-profile-text">
              <p class="hero-label">${esc(pick(p.role))}</p>
              <h1 class="name">${esc(p.nameLines[0])}<br><span>${esc(p.nameLines[1])}</span></h1>
              <h2 class="motto">${esc(pick(p.motto))}</h2>
              <div class="hero-cta">
                <a href="#projects" class="btn-primary">${esc(t('hero.cta_work'))}</a>
                <a href="${esc(cv.file)}" class="btn-secondary" download="${esc(p.cvDownloadName)}" aria-label="${esc(
        t('hero.cta_cv_aria')
      )}">
                  <i class="fa-solid fa-file-arrow-down hero-cta-cv-icon" aria-hidden="true"></i>
                  <span>${esc(t('hero.cta_cv'))}</span>
                  <span class="cv-lang-badge">${esc(cv.label)}</span>
                </a>
                <a href="#footer" class="btn-secondary">${esc(t('hero.cta_touch'))}</a>
              </div>
            </div>
          </article>

          <article id="hero-about" class="about">
            <div class="about-tag">${esc(t('about.tag'))}</div>
            <h2>${esc(t('about.title'))}</h2>
            <p>${esc(pick(p.about))}</p>
            <div class="about-stats">${stats}</div>
          </article>
        </div>

        <div class="scroll-indicator">
          <span>${esc(t('scroll'))}</span>
          <div class="scroll-line"></div>
        </div>`;
    },

    services() {
      const cards = D.services
        .map(
          (s, i) => `
          <div class="service-card" style="--card-delay: ${i * 0.1}s">
            <div class="card-icon-wrap"><i class="${esc(s.icon)}"></i></div>
            <h3>${esc(pick(s.title))}</h3>
            <p>${esc(pick(s.desc))}</p>
            <div class="card-number">${String(i + 1).padStart(2, '0')}</div>
          </div>`
        )
        .join('');

      return `
        <div class="section-header">
          <span class="section-tag">${esc(t('services.tag'))}</span>
          <h2>${esc(t('services.title'))}</h2>
        </div>
        <div class="cards">${cards}</div>`;
    },

    experience() {
      const icons = { work: 'fa-solid fa-briefcase', education: 'fa-solid fa-graduation-cap', volunteer: 'fa-solid fa-hand-holding-heart' };

      const item = (e, kind) => {
        const tags = (e.tags || []).length
          ? `<div class="timeline-tags">${e.tags.map((tag) => `<span class="chip">${esc(tag)}</span>`).join('')}</div>`
          : '';
        const badge = e.current ? `<span class="timeline-badge">${esc(t('experience.current'))}</span>` : '';
        const desc = e.desc ? `<p class="timeline-desc">${esc(pick(e.desc))}</p>` : '';
        return `
          <li class="timeline-item timeline-item--${kind}">
            <span class="timeline-marker"><i class="${esc(icons[kind])}" aria-hidden="true"></i></span>
            <div class="timeline-body">
              <div class="timeline-head">
                <h3>${esc(pick(e.role))}</h3>${badge}
              </div>
              <p class="timeline-org">${esc(pick(e.org))}</p>
              <p class="timeline-period">${esc(pick(e.period))}</p>
              ${desc}
              ${tags}
            </div>
          </li>`;
      };

      const work = D.experience.filter((e) => e.kind === 'work').map((e) => item(e, 'work')).join('');
      const volunteer = D.experience.filter((e) => e.kind === 'volunteer').map((e) => item(e, 'volunteer')).join('');
      const education = D.education.map((e) => item(e, 'education')).join('');

      return `
        <div class="section-header">
          <span class="section-tag">${esc(t('experience.tag'))}</span>
          <h2>${esc(t('experience.title'))}</h2>
        </div>
        <div class="timeline-columns">
          <ul class="timeline">${work}</ul>
          <div class="timeline-side">
            <h3 class="timeline-side-title">${esc(t('experience.education'))}</h3>
            <ul class="timeline timeline--compact">${education}</ul>
            <h3 class="timeline-side-title">${esc(t('experience.volunteering'))}</h3>
            <ul class="timeline timeline--compact">${volunteer}</ul>
          </div>
        </div>`;
    },

    projects(host) {
      const all = host.getAttribute('data-variant') === 'page';
      const list = all ? D.projects : D.projects.filter((p) => p.featured);
      const cards = list.map((p, i) => projectCard(p, i)).join('');

      if (all) return `<div class="projects-grid projects-grid--page">${cards}</div>`;

      return `
        <div class="section-header section-header--projects">
          <div class="section-header-text">
            <span class="section-tag">${esc(t('projects.tag'))}</span>
            <h2>${esc(t('projects.title'))}</h2>
          </div>
          <a href="projects.html" class="btn-view-all">${esc(t('projects.view_all'))}</a>
        </div>
        ${carousel('projects', cards, t('projects.carousel_region'), t('projects.prev'), t('projects.next'))}`;
    },

    certificates(host) {
      const all = host.getAttribute('data-variant') === 'page';
      const list = all ? D.certificates : D.certificates.filter((c) => c.featured);
      const cards = list.map((c) => certCard(c)).join('');

      const grid = `<div class="cert-grid">${cards}</div>`;
      if (all) return grid;

      return `
        <div class="section-header section-header--projects">
          <div class="section-header-text">
            <span class="section-tag">${esc(t('certificates.tag'))}</span>
            <h2>${esc(t('certificates.title'))}</h2>
          </div>
          <a href="certificates.html" class="btn-view-all">${esc(t('certificates.view_all'))}</a>
        </div>
        ${grid}`;
    },

    skills() {
      const groups = D.skills
        .map((g) => {
          const items = pick(g.items);
          return `
            <div class="skill-group">
              <h3>${esc(pick(g.label))}</h3>
              <div class="chip-row">${items.map((i) => `<span class="chip">${esc(i)}</span>`).join('')}</div>
            </div>`;
        })
        .join('');

      const spoken = D.spokenLanguages
        .map((l) => `<div class="spoken-item"><span class="spoken-name">${esc(pick(l.name))}</span><span class="spoken-level">${esc(pick(l.level))}</span></div>`)
        .join('');

      return `
        <div class="section-header">
          <span class="section-tag">${esc(t('skills.tag'))}</span>
          <h2>${esc(t('skills.title'))}</h2>
        </div>
        <div class="skills-layout">
          <div class="skill-groups">${groups}</div>
          <div class="spoken-languages">
            <h3>${esc(t('skills.spoken'))}</h3>
            ${spoken}
          </div>
        </div>`;
    },

    writing(host) {
      const all = host.getAttribute('data-variant') === 'page';
      const cards = D.writing.posts.map((post, i) => articleCard(post, i)).join('');

      if (all) return `<div class="writing-grid">${cards}</div>`;

      return `
        <div class="section-header section-header--projects">
          <div class="section-header-text">
            <span class="section-tag">${esc(t('writing.tag'))}</span>
            <h2>${esc(t('writing.title'))}</h2>
          </div>
          <a href="writing.html" class="btn-view-all">${esc(t('writing.view_all'))}</a>
        </div>
        ${carousel('writing', cards, t('writing.carousel_region'), t('writing.prev'), t('writing.next'))}`;
    },

    footer() {
      const p = D.profile;
      const social = p.social
        .map(
          (s) =>
            `<a href="${esc(s.url)}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.label)}">
               <i class="${esc(s.icon)}"></i><span>${esc(s.label)}</span>
             </a>`
        )
        .join('');

      return `
        <div class="footer-container">
          <div class="footer-top-text">
            <span class="footer-eyebrow">${esc(t('footer.eyebrow'))}</span>
            <h2 class="footer-heading">${esc(t('footer.heading'))}</h2>
          </div>

          <div class="footer-content">
            <div class="footer-section contact-section">
              <h3 class="footer-title">${esc(t('footer.contact'))}</h3>
              <div class="contact-info">
                <div class="info-item">
                  <span class="label">${esc(t('footer.email'))}</span>
                  <a href="mailto:${esc(p.email)}">${esc(p.email)}</a>
                </div>
                <div class="info-item">
                  <span class="label">${esc(t('footer.location'))}</span>
                  <p>${esc(pick(p.location))}</p>
                </div>
              </div>
            </div>

            <div class="footer-section connect-section">
              <h3 class="footer-title">${esc(t('footer.connect'))}</h3>
              <div class="social-links">${social}</div>
            </div>
          </div>

          <div class="footer-divider"></div>
          <div class="footer-bottom"><p>${esc(t('footer.rights'))}</p></div>
        </div>`;
    },

    pageIntro(host) {
      const key = host.getAttribute('data-intro');
      const backHref = 'index.html#' + (host.getAttribute('data-back') || 'hero');
      return `
        <a href="${esc(backHref)}" class="projects-back"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> <span>${esc(
        t('page.back')
      )}</span></a>
        <div class="section-header">
          <span class="section-tag">${esc(t(key + '.tag'))}</span>
          <h1>${esc(t(key + '.title'))}</h1>
        </div>
        <div class="projects-page-intro"><p>${esc(t(key + '.intro'))}</p></div>`;
    },
  };

  function projectCard(p, i) {
    const tags = `<span class="project-tag">${esc((p.tags || []).join(' · '))}</span>`;

    const media = p.image
      ? `<div class="project-img-wrap">
           <img src="${esc(p.image)}" alt="${esc(pick(p.imageAlt) || pick(p.title))}" loading="lazy">
           <div class="project-overlay">${tags}</div>
         </div>`
      : `<div class="project-img-wrap project-img-wrap--placeholder">
           <span class="project-placeholder-icon"><i class="${esc(p.icon || 'fa-solid fa-code')}" aria-hidden="true"></i></span>
           <div class="project-overlay">${tags}</div>
         </div>`;

    const linkLabel = { demo: t('projects.demo'), github: t('projects.source') };
    const linkIcon = { demo: 'fa-solid fa-arrow-up-right-from-square', github: 'fab fa-github' };
    const links = (p.links || []).length
      ? `<div class="project-links">${p.links
          .map(
            (l) =>
              `<a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer" class="project-link">
                 <i class="${esc(linkIcon[l.type])}" aria-hidden="true"></i> ${esc(linkLabel[l.type])}
               </a>`
          )
          .join('')}</div>`
      : '';

    const context = p.context ? `<p class="project-context">${esc(pick(p.context))}</p>` : '';

    return `
      <article class="project-item" style="--item-delay: ${(i * 0.08).toFixed(2)}s">
        ${media}
        <div class="project-content">
          <div class="project-title-row">
            <h3>${esc(pick(p.title))}</h3>
            <span class="project-year">${esc(p.year || '')}</span>
          </div>
          ${context}
          <p>${esc(pick(p.desc))}</p>
          ${links}
        </div>
      </article>`;
  }

  function certCard(c) {
    const extras = (c.extraFiles || [])
      .map(
        (x) =>
          `<a class="cert-extra" href="${esc(x.file)}" target="_blank" rel="noopener noreferrer">${esc(pick(x.label))}</a>`
      )
      .join('');

    const inner = `
      <span class="cert-icon"><i class="${esc(c.icon)}" aria-hidden="true"></i></span>
      <div class="cert-body">
        <h3>${esc(pick(c.title))}</h3>
        <p class="cert-meta">${esc(c.issuer)} · ${esc(c.year)}</p>
      </div>
      ${c.file ? `<span class="cert-cta"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></span>` : ''}`;

    const card = c.file
      ? `<a class="cert-card cert-card--linked" href="${esc(c.file)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(
          t('certificates.view')
        )}: ${esc(pick(c.title))}">${inner}</a>`
      : `<div class="cert-card">${inner}</div>`;

    return extras ? `<div class="cert-cell">${card}<div class="cert-extras">${extras}</div></div>` : `<div class="cert-cell">${card}</div>`;
  }

  function articleCard(post, i) {
    const langBadge = post.lang === 'tr' && window.I18N.getLang() !== 'tr'
      ? `<span class="article-lang">${esc(t('writing.in_turkish'))}</span>`
      : '';
    return `
      <a href="${esc(post.url)}" class="article-card" target="_blank" rel="noopener noreferrer" style="--item-delay: ${(i * 0.05).toFixed(
      2
    )}s" aria-label="${esc(t('writing.read_aria'))}">
        <div class="article-card-icon" aria-hidden="true"><i class="fab fa-medium"></i></div>
        <div class="article-card-content">
          <h3>${esc(post.title)}${langBadge}</h3>
          <p>${esc(pick(post.desc))}</p>
          <span class="article-card-cta"><span>${esc(t('writing.read_medium'))}</span> <i class="fa-solid fa-up-right-from-square" aria-hidden="true"></i></span>
        </div>
      </a>`;
  }

  function carousel(name, cards, region, prevLabel, nextLabel) {
    return `
      <div class="section-carousel" id="carousel-${name}">
        <button type="button" class="section-carousel-btn section-carousel-btn--prev" id="carousel-${name}-prev" aria-label="${esc(
      prevLabel
    )}">
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>
        <div class="section-carousel-viewport" id="carousel-${name}-viewport" tabindex="0" role="region" aria-roledescription="carousel" aria-label="${esc(
      region
    )}">
          <div class="section-carousel-track" id="carousel-${name}-track">${cards}</div>
        </div>
        <button type="button" class="section-carousel-btn section-carousel-btn--next" id="carousel-${name}-next" aria-label="${esc(
      nextLabel
    )}">
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
      <p class="section-carousel-meta"><span id="carousel-${name}-counter"></span></p>`;
  }

  function renderAll() {
    document.querySelectorAll('[data-render]').forEach((host) => {
      const name = host.getAttribute('data-render');
      const fn = components[name];
      if (fn) host.innerHTML = fn(host);
    });

    const page = document.body.getAttribute('data-page');
    const metaKey = 'meta.' + (page === 'home' ? 'index' : page);
    document.title = t(metaKey) || t('meta.index');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));
  }

  window.Render = { renderAll };
})();
