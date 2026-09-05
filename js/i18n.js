/* Dil motoru + arayüz metinleri.
   İçerik metinleri burada değil, data/ altındaki dosyalarda durur;
   burada yalnızca menü, başlık, buton gibi sabit arayüz sözcükleri var. */
(function () {
  'use strict';

  const STORAGE_KEY = 'portfolioLang';
  const SUPPORTED = ['en', 'de', 'tr'];
  const FALLBACK = 'en';

  const UI = {
    en: {
      meta: {
        index: 'Zehra Gül Büyükarslan — AI / Web3 Full-Stack Engineer',
        projects: 'Projects & Experience — Zehra Gül Büyükarslan',
        writing: 'Writing — Zehra Gül Büyükarslan',
        certificates: 'Certificates & Awards — Zehra Gül Büyükarslan',
        description:
          'Portfolio of Zehra Gül Büyükarslan — computer engineering student building AI-native and Web3 products: LLM pipelines, RAG integrations, Solidity contracts, and full-stack web.',
      },
      nav: {
        logo_aria: 'Home',
        home: 'Home',
        services: 'Services',
        experience: 'Experience',
        projects: 'Projects',
        certificates: 'Certificates',
        writing: 'Writing',
        contact: 'Contact',
        lang_aria: 'Language',
      },
      lang: { en: 'EN', de: 'DE', tr: 'TR' },
      hero: {
        profile_alt: 'Profile picture',
        cta_work: 'View Work',
        cta_cv: 'Download CV',
        cta_cv_aria: 'Download CV as PDF',
        cta_touch: 'Get in Touch',
      },
      about: { tag: 'About Me', title: "Hi, I'm Zehra!" },
      scroll: 'Scroll',
      services: { tag: 'What I Do', title: 'My Services' },
      experience: {
        tag: 'Track Record',
        title: 'Experience',
        education: 'Education',
        volunteering: 'Volunteering',
        current: 'Current',
      },
      projects: {
        tag: 'Portfolio',
        title: 'Projects & Experience',
        view_all: 'View all',
        carousel_region: 'Projects and experience',
        prev: 'Previous project',
        next: 'Next project',
        demo: 'Live demo',
        source: 'Source code',
        intro:
          'Selected work across AI, Web3, automation, and robotics — from internships and volunteering to shipped side projects.',
      },
      certificates: {
        tag: 'Credentials',
        title: 'Certificates & Awards',
        view_all: 'View all',
        view: 'View certificate',
        intro: 'Courses, workshops, grants, and awards — most with the document attached.',
      },
      skills: { tag: 'Toolbox', title: 'Skills & Stack', spoken: 'Spoken languages' },
      writing: {
        tag: 'Medium',
        title: 'Writing',
        view_all: 'View all',
        carousel_region: 'Writing articles',
        prev: 'Previous article',
        next: 'Next article',
        read_medium: 'Read on Medium',
        read_aria: 'Read article on Medium',
        profile_link: 'Profile on Medium',
        intro: 'Articles on prompt engineering, AI techniques, and tech — published on Medium.',
        in_turkish: 'in Turkish',
      },
      page: { back: 'Back to home' },
      footer: {
        eyebrow: "Let's work together",
        heading: 'Get In Touch',
        contact: 'Contact',
        email: 'Email',
        location: 'Location',
        connect: 'Connect',
        rights: '© 2026 Zehra Gül Büyükarslan. All rights reserved.',
      },
      carousel: { range: '{first}–{last} / {total}', single: '{n} / {total}' },
    },

    de: {
      meta: {
        index: 'Zehra Gül Büyükarslan — AI- / Web3-Full-Stack-Entwicklerin',
        projects: 'Projekte & Erfahrung — Zehra Gül Büyükarslan',
        writing: 'Artikel — Zehra Gül Büyükarslan',
        certificates: 'Zertifikate & Auszeichnungen — Zehra Gül Büyükarslan',
        description:
          'Portfolio von Zehra Gül Büyükarslan — Informatikstudentin, die KI-native und Web3-Produkte baut: LLM-Pipelines, RAG-Integrationen, Solidity-Verträge und Full-Stack-Web.',
      },
      nav: {
        logo_aria: 'Startseite',
        home: 'Start',
        services: 'Leistungen',
        experience: 'Erfahrung',
        projects: 'Projekte',
        certificates: 'Zertifikate',
        writing: 'Artikel',
        contact: 'Kontakt',
        lang_aria: 'Sprache',
      },
      lang: { en: 'EN', de: 'DE', tr: 'TR' },
      hero: {
        profile_alt: 'Profilbild',
        cta_work: 'Arbeiten ansehen',
        cta_cv: 'Lebenslauf',
        cta_cv_aria: 'Lebenslauf als PDF herunterladen',
        cta_touch: 'Kontakt aufnehmen',
      },
      about: { tag: 'Über mich', title: 'Hallo, ich bin Zehra!' },
      scroll: 'Scrollen',
      services: { tag: 'Was ich mache', title: 'Meine Leistungen' },
      experience: {
        tag: 'Werdegang',
        title: 'Erfahrung',
        education: 'Ausbildung',
        volunteering: 'Ehrenamt',
        current: 'Aktuell',
      },
      projects: {
        tag: 'Portfolio',
        title: 'Projekte & Erfahrung',
        view_all: 'Alle ansehen',
        carousel_region: 'Projekte und Erfahrung',
        prev: 'Vorheriges Projekt',
        next: 'Nächstes Projekt',
        demo: 'Live-Demo',
        source: 'Quellcode',
        intro:
          'Ausgewählte Arbeiten aus KI, Web3, Automatisierung und Robotik — von Praktika und Ehrenamt bis zu veröffentlichten eigenen Projekten.',
      },
      certificates: {
        tag: 'Nachweise',
        title: 'Zertifikate & Auszeichnungen',
        view_all: 'Alle ansehen',
        view: 'Zertifikat ansehen',
        intro: 'Kurse, Workshops, Förderungen und Auszeichnungen — meist mit hinterlegtem Dokument.',
      },
      skills: { tag: 'Werkzeugkasten', title: 'Fähigkeiten & Stack', spoken: 'Sprachkenntnisse' },
      writing: {
        tag: 'Medium',
        title: 'Artikel',
        view_all: 'Alle ansehen',
        carousel_region: 'Artikel',
        prev: 'Vorheriger Artikel',
        next: 'Nächster Artikel',
        read_medium: 'Auf Medium lesen',
        read_aria: 'Artikel auf Medium lesen',
        profile_link: 'Profil auf Medium',
        intro: 'Artikel über Prompt Engineering, KI-Techniken und Technologie — veröffentlicht auf Medium.',
        in_turkish: 'auf Türkisch',
      },
      page: { back: 'Zurück zur Startseite' },
      footer: {
        eyebrow: 'Lassen Sie uns zusammenarbeiten',
        heading: 'Kontakt',
        contact: 'Kontakt',
        email: 'E-Mail',
        location: 'Standort',
        connect: 'Vernetzen',
        rights: '© 2026 Zehra Gül Büyükarslan. Alle Rechte vorbehalten.',
      },
      carousel: { range: '{first}–{last} / {total}', single: '{n} / {total}' },
    },

    tr: {
      meta: {
        index: 'Zehra Gül Büyükarslan — AI / Web3 Tam Yığın Geliştirici',
        projects: 'Projeler ve Deneyim — Zehra Gül Büyükarslan',
        writing: 'Yazılar — Zehra Gül Büyükarslan',
        certificates: 'Sertifikalar ve Ödüller — Zehra Gül Büyükarslan',
        description:
          'Zehra Gül Büyükarslan\'ın portfolyosu — AI-native ve Web3 ürünler geliştiren bilgisayar mühendisliği öğrencisi: LLM hatları, RAG entegrasyonları, Solidity sözleşmeleri ve tam yığın web.',
      },
      nav: {
        logo_aria: 'Ana sayfa',
        home: 'Ana Sayfa',
        services: 'Hizmetler',
        experience: 'Deneyim',
        projects: 'Projeler',
        certificates: 'Sertifikalar',
        writing: 'Yazılar',
        contact: 'İletişim',
        lang_aria: 'Dil',
      },
      lang: { en: 'EN', de: 'DE', tr: 'TR' },
      hero: {
        profile_alt: 'Profil fotoğrafı',
        cta_work: 'Çalışmalarım',
        cta_cv: 'CV İndir',
        cta_cv_aria: 'CV\'yi PDF olarak indir',
        cta_touch: 'İletişime Geç',
      },
      about: { tag: 'Hakkımda', title: 'Merhaba, ben Zehra!' },
      scroll: 'Kaydır',
      services: { tag: 'Ne Yapıyorum', title: 'Hizmetlerim' },
      experience: {
        tag: 'Geçmiş',
        title: 'Deneyim',
        education: 'Eğitim',
        volunteering: 'Gönüllülük',
        current: 'Devam ediyor',
      },
      projects: {
        tag: 'Portfolyo',
        title: 'Projeler ve Deneyim',
        view_all: 'Tümünü gör',
        carousel_region: 'Projeler ve deneyim',
        prev: 'Önceki proje',
        next: 'Sonraki proje',
        demo: 'Canlı demo',
        source: 'Kaynak kod',
        intro:
          'Yapay zekâ, Web3, otomasyon ve robotik alanlarından seçilmiş çalışmalar — stajlardan ve gönüllülükten yayına alınmış kişisel projelere.',
      },
      certificates: {
        tag: 'Belgeler',
        title: 'Sertifikalar ve Ödüller',
        view_all: 'Tümünü gör',
        view: 'Sertifikayı gör',
        intro: 'Eğitimler, atölyeler, destekler ve ödüller — çoğunun belgesi ekli.',
      },
      skills: { tag: 'Araç Kutusu', title: 'Yetenekler ve Yığın', spoken: 'Konuşulan diller' },
      writing: {
        tag: 'Medium',
        title: 'Yazılar',
        view_all: 'Tümünü gör',
        carousel_region: 'Yazılar',
        prev: 'Önceki yazı',
        next: 'Sonraki yazı',
        read_medium: 'Medium\'da oku',
        read_aria: 'Yazıyı Medium\'da oku',
        profile_link: 'Medium profili',
        intro: 'İstem mühendisliği, yapay zekâ teknikleri ve teknoloji üzerine yazılar — Medium\'da yayımlandı.',
        in_turkish: 'Türkçe',
      },
      page: { back: 'Ana sayfaya dön' },
      footer: {
        eyebrow: 'Birlikte çalışalım',
        heading: 'İletişime Geçin',
        contact: 'İletişim',
        email: 'E-posta',
        location: 'Konum',
        connect: 'Bağlan',
        rights: '© 2026 Zehra Gül Büyükarslan. Tüm hakları saklıdır.',
      },
      carousel: { range: '{first}–{last} / {total}', single: '{n} / {total}' },
    },
  };

  function detectLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (_) {}
    const nav = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : FALLBACK;
  }

  let current = detectLang();

  function getLang() {
    return current;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang) || lang === current) return;
    current = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
    document.documentElement.lang = lang;
    window.dispatchEvent(new CustomEvent('portfolio:i18n', { detail: { lang } }));
  }

  /* 'projects.title' gibi bir yolu arayüz sözlüğünden çözer. */
  function t(path) {
    const parts = path.split('.');
    for (const lang of [current, FALLBACK]) {
      let cur = UI[lang];
      let ok = true;
      for (const p of parts) {
        if (cur == null || typeof cur !== 'object') {
          ok = false;
          break;
        }
        cur = cur[p];
      }
      if (ok && typeof cur === 'string') return cur;
    }
    return '';
  }

  /* data/ dosyalarındaki {en,de,tr} nesnelerini (ya da düz değerleri) çözer. */
  function pick(value) {
    if (value == null) return '';
    if (typeof value === 'string' || Array.isArray(value)) return value;
    if (typeof value === 'object') {
      if (value[current] !== undefined) return value[current];
      if (value[FALLBACK] !== undefined) return value[FALLBACK];
    }
    return '';
  }

  function formatCounter(first, last, total, visibleCount) {
    const tpl = visibleCount > 1 ? t('carousel.range') : t('carousel.single');
    return tpl
      .replace('{first}', first)
      .replace('{last}', last)
      .replace('{n}', first)
      .replace('{total}', total);
  }

  window.I18N = { getLang, setLang, t, pick, formatCounter, SUPPORTED };

  document.documentElement.lang = current;
})();
