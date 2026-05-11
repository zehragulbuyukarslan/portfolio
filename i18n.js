(function () {
  'use strict';

  const STORAGE_KEY = 'portfolioLang';
  const SUPPORTED = ['en', 'de', 'tr'];

  const STRINGS = {
    en: {
      meta: {
        index: 'Zehra Gül Büyükarslan',
        projects: 'Projects & Experience — Zehra Gül Büyükarslan',
        writing: 'Writing — Zehra Gül Büyükarslan',
      },
      nav: {
        logo_aria: 'Home',
        home: 'Home',
        services: 'Services',
        projects: 'Projects',
        writing: 'Writing',
        contact: 'Contact',
        lang_aria: 'Language',
      },
      lang: { en: 'EN', de: 'DE', tr: 'TR' },
      hero: {
        profile_alt: 'Profile picture',
        label: 'Software Developer & Designer',
        motto: 'Contribute to Solving Real-World Problems Through Software',
        cta_work: 'View Work',
        cta_cv: 'Download CV',
        cta_touch: 'Get in Touch',
        cta_cv_aria: 'Download CV as PDF',
      },
      about: {
        tag: 'About Me',
        title: "Hi, I'm Zehra!",
        body:
          '3rd-year Computer Engineering student @ Karabük University. Specializing in AI Native Applications and Web Development with a focus on creating a tangible positive impact. Constantly evolving, one line of code at a time.',
        stat_projects: 'Projects',
        stat_services: 'Services',
        stat_curiosity: 'Curiosity',
      },
      scroll: 'Scroll',
      services: {
        tag: 'What I Do',
        title: 'My Services',
        web_title: 'Web Development',
        web_desc: 'Building modern, responsive websites and web applications from scratch.',
        ai_title: 'Artificial Intelligence',
        ai_desc: 'Developing AI-powered solutions and integrating intelligent features.',
        video_title: 'Video Editing',
        video_desc: 'Creating polished, engaging video content for various platforms.',
        design_title: 'Graphic Design',
        design_desc: 'Crafting visual identities and designs that communicate effectively.',
      },
      projects_section: {
        tag: 'Portfolio',
        title: 'Projects & Experience',
        view_all: 'View all',
        carousel_region: 'Projects and experience',
        prev: 'Previous project',
        next: 'Next project',
      },
      writing_section: {
        tag: 'Medium',
        title: 'Writing',
        view_all: 'View all',
        carousel_region: 'Writing articles',
        prev: 'Previous article',
        next: 'Next article',
        read_medium: 'Read on Medium',
        read_aria: 'Read article on Medium',
      },
      projects_page: {
        back: 'Back to home',
        tag: 'Portfolio',
        title: 'Projects & Experience',
        intro:
          'Selected work across automation, robotics, AI, and full-stack development — from internships and volunteering to shipped side projects.',
      },
      writing_page: {
        back: 'Back to home',
        tag: 'Medium',
        title: 'Writing',
        intro: 'Articles on prompt engineering, AI techniques, and tech — published on Medium.',
        profile_link: 'Profile on Medium',
      },
      projects: {
        email_title: 'Autonomous Email Filtering System',
        email_desc:
          'A Python program that automatically deletes unwanted emails using IMAP protocol. Fully autonomous via GitHub Actions and YAML — runs every morning at 10:00 AM Turkish time.',
        email_alt: 'Email filtering system',
        auv_title: 'Autonomous Underwater Vehicle',
        auv_desc:
          "Contributed to DDD organization's AUV — motion control, mission automation, and computer vision using Pixhawk, PyMAVLink, ROS, and PID-based control algorithms.",
        auv_alt: 'Autonomous underwater vehicle development',
        chatbot_title: 'University Chatbot',
        chatbot_desc:
          'Volunteered at the IT Department to develop an AI-powered chatbot for the university website — collected datasets, handled data cleaning, and designed user scenarios. Developing RAG integration to keep answers aligned with up-to-date information.',
        chatbot_alt: 'Chatbot development',
        m8d6_title: 'Prompt Engineer Intern — M8D6',
        m8d6_desc:
          'Researched, designed, and tested prompt techniques to improve large language model performance for M8D6 products. Focus on business intelligence, automation, and customer interaction — including the Smart Dispatch system for the U.S. home services sector.',
        ideathon_title: 'Sosyalfest Ideathon — 2nd Place (InoGen)',
        ideathon_desc:
          "Helped design the InoGen platform vision: workshops and collaborations to grow young people's creative thinking, problem-solving, and business skills. Used AI tools to produce visuals and presentation materials for the team.",
        arbifi_title: 'ArbiFi — AI Dispute Resolution on Solana',
        arbifi_desc:
          'For freelance work, DAOs, and digital transactions, dispute resolution is often slow and depends on central authority. ArbiFi lets both parties present evidence; an AI analyzes the case and produces a clear, human-readable decision. Architecture secures final outcomes on-chain on Solana for transparency and trustless execution. Stack: Next.js and Tailwind CSS (frontend), TypeScript and Next.js API Routes (backend), Prisma and SQL (database).',
        arbifi_alt: 'ArbiFi dispute portal UI',
      },
      footer: {
        eyebrow: "Let's work together",
        heading: 'Get In Touch',
        contact: 'Contact',
        email: 'Email',
        location: 'Location',
        location_value: 'Istanbul, Turkey',
        connect: 'Connect',
        rights: '© 2026 Zehra Gül Büyükarslan. All rights reserved.',
      },
      carousel: {
        range: '{first}–{last} / {total}',
        single: '{n} / {total}',
      },
    },
    de: {
      meta: {
        index: 'Zehra Gül Büyükarslan',
        projects: 'Projekte & Erfahrung — Zehra Gül Büyükarslan',
        writing: 'Texte — Zehra Gül Büyükarslan',
      },
      nav: {
        logo_aria: 'Startseite',
        home: 'Start',
        services: 'Leistungen',
        projects: 'Projekte',
        writing: 'Texte',
        contact: 'Kontakt',
        lang_aria: 'Sprache',
      },
      lang: { en: 'EN', de: 'DE', tr: 'TR' },
      hero: {
        profile_alt: 'Profilbild',
        label: 'Softwareentwicklerin & Designerin',
        motto: 'Mit Software echte Probleme lösen',
        cta_work: 'Arbeiten ansehen',
        cta_cv: 'Lebenslauf herunterladen',
        cta_touch: 'Kontakt aufnehmen',
        cta_cv_aria: 'Lebenslauf als PDF herunterladen',
      },
      about: {
        tag: 'Über mich',
        title: 'Hallo, ich bin Zehra!',
        body:
          'Computerengineering-Studium im 3. Jahr an der Karabük University. Schwerpunkt: KI-native Anwendungen und Webentwicklung mit dem Ziel, spürbare positive Wirkung zu erzielen. Ständig am Lernen — eine Codezeile nach der anderen.',
        stat_projects: 'Projekte',
        stat_services: 'Leistungen',
        stat_curiosity: 'Neugier',
      },
      scroll: 'Scroll',
      services: {
        tag: 'Was ich tue',
        title: 'Meine Leistungen',
        web_title: 'Webentwicklung',
        web_desc: 'Moderne, responsive Websites und Webanwendungen von Grund auf neu entwickeln.',
        ai_title: 'Künstliche Intelligenz',
        ai_desc: 'KI-gestützte Lösungen entwickeln und intelligente Funktionen integrieren.',
        video_title: 'Videobearbeitung',
        video_desc: 'Hochwertige, ansprechende Videoinhalte für verschiedene Plattformen erstellen.',
        design_title: 'Grafikdesign',
        design_desc: 'Visuelle Identitäten und Designs, die klar kommunizieren.',
      },
      projects_section: {
        tag: 'Portfolio',
        title: 'Projekte & Erfahrung',
        view_all: 'Alle anzeigen',
        carousel_region: 'Projekte und Erfahrung',
        prev: 'Vorheriges Projekt',
        next: 'Nächstes Projekt',
      },
      writing_section: {
        tag: 'Medium',
        title: 'Texte',
        view_all: 'Alle anzeigen',
        carousel_region: 'Artikel',
        prev: 'Vorheriger Artikel',
        next: 'Nächster Artikel',
        read_medium: 'Auf Medium lesen',
        read_aria: 'Artikel auf Medium lesen',
      },
      projects_page: {
        back: 'Zurück zur Startseite',
        tag: 'Portfolio',
        title: 'Projekte & Erfahrung',
        intro:
          'Ausgewählte Arbeiten aus Automatisierung, Robotik, KI und Full-Stack-Entwicklung — von Praktika und Ehrenamt bis zu eigenen Projekten.',
      },
      writing_page: {
        back: 'Zurück zur Startseite',
        tag: 'Medium',
        title: 'Texte',
        intro: 'Artikel zu Prompt Engineering, KI-Techniken und Tech — veröffentlicht auf Medium.',
        profile_link: 'Profil auf Medium',
      },
      projects: {
        email_title: 'Autonomes E-Mail-Filterprogramm',
        email_desc:
          'Ein Python-Programm, das unerwünschte E-Mails per IMAP automatisch löscht. Vollständig autonom über GitHub Actions und YAML — täglich um 10:00 Uhr türkischer Zeit.',
        email_alt: 'E-Mail-Filtersystem',
        auv_title: 'Autonomes Unterwasserfahrzeug (AUV)',
        auv_desc:
          'Mitwirkung am AUV der DDD-Organisation — Bewegungssteuerung, Missionsautomatisierung und Computer Vision mit Pixhawk, PyMAVLink, ROS und PID-basierten Regelungsalgorithmen.',
        auv_alt: 'Entwicklung autonomes Unterwasserfahrzeug',
        chatbot_title: 'Universitäts-Chatbot',
        chatbot_desc:
          'Ehrenamt in der IT-Abteilung: KI-gestützter Chatbot für die Universitätswebsite — Datensätze gesammelt, Datenbereinigung und Nutzerszenarien gestaltet. RAG-Integration in Arbeit, damit Antworten aktuell bleiben.',
        chatbot_alt: 'Chatbot-Entwicklung',
        m8d6_title: 'Praktikum Prompt Engineering — M8D6',
        m8d6_desc:
          'Recherche, Design und Tests von Prompt-Techniken zur Verbesserung der LLM-Leistung für M8D6-Produkte. Schwerpunkt: Business Intelligence, Automatisierung und Kundeninteraktion — u. a. Smart Dispatch für den US-Heimdienstsektor.',
        ideathon_title: 'Sosyalfest Ideathon — 2. Platz (InoGen)',
        ideathon_desc:
          'Mitgestaltung der InoGen-Plattformvision: Workshops und Kooperationen, um kreatives Denken, Problemlösung und unternehmerische Fähigkeiten junger Menschen zu stärken. KI-Tools für Visuals und Präsentationsmaterialien genutzt.',
        arbifi_title: 'ArbiFi — KI-Streitbeilegung auf Solana',
        arbifi_desc:
          'Bei Freelance-Arbeit, DAOs und digitalen Transaktionen ist Streitbeilegung oft langsam und zentralisiert. ArbiFi ermöglicht beiden Parteien, Beweise einzureichen; eine KI analysiert den Fall und liefert eine verständliche Entscheidung. Architektur sichert Ergebnisse on-chain auf Solana für Transparenz und trustless Ausführung. Stack: Next.js und Tailwind CSS (Frontend), TypeScript und Next.js API Routes (Backend), Prisma und SQL (Datenbank).',
        arbifi_alt: 'ArbiFi Streitportal UI',
      },
      footer: {
        eyebrow: 'Lassen Sie uns zusammenarbeiten',
        heading: 'Kontakt',
        contact: 'Kontakt',
        email: 'E-Mail',
        location: 'Standort',
        location_value: 'Istanbul, Türkei',
        connect: 'Netzwerke',
        rights: '© 2026 Zehra Gül Büyükarslan. Alle Rechte vorbehalten.',
      },
      carousel: {
        range: '{first}–{last} / {total}',
        single: '{n} / {total}',
      },
    },
    tr: {
      meta: {
        index: 'Zehra Gül Büyükarslan',
        projects: 'Projeler ve Deneyim — Zehra Gül Büyükarslan',
        writing: 'Yazılar — Zehra Gül Büyükarslan',
      },
      nav: {
        logo_aria: 'Ana sayfa',
        home: 'Ana Sayfa',
        services: 'Hizmetler',
        projects: 'Projeler',
        writing: 'Yazılar',
        contact: 'İletişim',
        lang_aria: 'Dil',
      },
      lang: { en: 'EN', de: 'DE', tr: 'TR' },
      hero: {
        profile_alt: 'Profil fotoğrafı',
        label: 'Yazılım Geliştirici & Tasarımcı',
        motto: 'Yazılımla gerçek dünya sorunlarına çözüm üretmek',
        cta_work: 'Çalışmalarım',
        cta_cv: 'CV İndir',
        cta_touch: 'İletişime geç',
        cta_cv_aria: 'CV dosyasını PDF olarak indir',
      },
      about: {
        tag: 'Hakkımda',
        title: 'Merhaba, ben Zehra!',
        body:
          'Karabük Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. AI-native uygulamalar ve web geliştirme üzerine çalışıyor; somut ve olumlu etki yaratmaya odaklanıyorum. Her satır kodla kendimi geliştiriyorum.',
        stat_projects: 'Projeler',
        stat_services: 'Hizmetler',
        stat_curiosity: 'Merak',
      },
      scroll: 'Kaydır',
      services: {
        tag: 'Neler yapıyorum',
        title: 'Hizmetlerim',
        web_title: 'Web Geliştirme',
        web_desc: 'Modern, duyarlı web siteleri ve web uygulamalarını sıfırdan geliştirmek.',
        ai_title: 'Yapay Zekâ',
        ai_desc: 'Yapay zekâ destekli çözümler geliştirmek ve akıllı özellikler entegre etmek.',
        video_title: 'Video Düzenleme',
        video_desc: 'Farklı platformlar için özenli ve ilgi çekici video içerikleri üretmek.',
        design_title: 'Grafik Tasarım',
        design_desc: 'Etkili iletişim kuran görsel kimlikler ve tasarımlar oluşturmak.',
      },
      projects_section: {
        tag: 'Portfolyo',
        title: 'Projeler ve Deneyim',
        view_all: 'Tümünü gör',
        carousel_region: 'Projeler ve deneyim',
        prev: 'Önceki proje',
        next: 'Sonraki proje',
      },
      writing_section: {
        tag: 'Medium',
        title: 'Yazılar',
        view_all: 'Tümünü gör',
        carousel_region: 'Yazı makaleleri',
        prev: 'Önceki yazı',
        next: 'Sonraki yazı',
        read_medium: "Medium'da oku",
        read_aria: "Makaleyi Medium'da oku",
      },
      projects_page: {
        back: 'Ana sayfaya dön',
        tag: 'Portfolyo',
        title: 'Projeler ve Deneyim',
        intro:
          'Otomasyon, robotik, yapay zekâ ve tam yığın geliştirmeden seçilmiş işler — staj ve gönüllülükten yayınlanan yan projelere.',
      },
      writing_page: {
        back: 'Ana sayfaya dön',
        tag: 'Medium',
        title: 'Yazılar',
        intro:
          "İstem mühendisliği, yapay zekâ teknikleri ve teknoloji üzerine Medium'da yayımlanan yazılar.",
        profile_link: "Medium'daki profilim",
      },
      projects: {
        email_title: 'Otonom E-posta Filtreleme Sistemi',
        email_desc:
          "IMAP protokolü ile istenmeyen e-postaları otomatik silen bir Python programı. GitHub Actions ve YAML ile tamamen otonom — her gün saat 10:00'da (Türkiye saati) çalışır.",
        email_alt: 'E-posta filtreleme sistemi',
        auv_title: 'Otonom Sualtı Aracı',
        auv_desc:
          'DDD organizasyonunun AUV projesine katkı — Pixhawk, PyMAVLink, ROS ve PID tabanlı kontrol algoritmaları ile hareket kontrolü, görev otomasyonu ve bilgisayarlı görü.',
        auv_alt: 'Otonom sualtı aracı geliştirme',
        chatbot_title: 'Üniversite Sohbet Robotu',
        chatbot_desc:
          'Üniversite web sitesi için yapay zekâ destekli sohbet robotu geliştirmek üzere Bilgi İşlem’de gönüllü çalıştım — veri setleri toplandı, veri temizliği ve kullanıcı senaryoları tasarlandı. Güncel bilgiye uygun yanıtlar için RAG entegrasyonu geliştiriliyor.',
        chatbot_alt: 'Sohbet robotu geliştirme',
        m8d6_title: 'İstem Mühendisi Stajyeri — M8D6',
        m8d6_desc:
          'M8D6 ürünleri için büyük dil modellerinin performansını artırmaya yönelik istem tekniklerini araştırdım, tasarladım ve test ettim. Odak: iş zekâsı, otomasyon ve müşteri etkileşimi — ABD ev hizmetleri sektörü için Smart Dispatch sistemi dahil.',
        ideathon_title: 'Sosyalfest Ideathon — İkincilik (InoGen)',
        ideathon_desc:
          'InoGen platform vizyonunun tasarımına katkı: gençlerin yaratıcı düşünme, problem çözme ve iş becerilerini geliştirmek için atölyeler ve iş birlikleri. Ekip için görseller ve sunum materyalleri üretmek üzere yapay zekâ araçları kullanıldı.',
        arbifi_title: 'ArbiFi — Solana Üzerinde Yapay Zekâ ile Uyuşmazlık Çözümü',
        arbifi_desc:
          'Serbest çalışma, DAO’lar ve dijital işlemlerde uyuşmazlık çözümü genelde yavaştır ve merkezi otoriteye bağlıdır. ArbiFi, tarafların kanıt sunmasına izin verir; yapay zekâ dosyayı analiz eder ve anlaşılır bir karar üretir. Mimari, şeffaflık ve güvensiz yürütme için sonuçları Solana zincirinde güvence altına alır. Yığın: Next.js ve Tailwind CSS (ön yüz), TypeScript ve Next.js API Routes (arka yüz), Prisma ve SQL (veritabanı).',
        arbifi_alt: 'ArbiFi uyuşmazlık portalı arayüzü',
      },
      footer: {
        eyebrow: 'Birlikte çalışalım',
        heading: 'İletişime geçin',
        contact: 'İletişim',
        email: 'E-posta',
        location: 'Konum',
        location_value: 'İstanbul, Türkiye',
        connect: 'Bağlantılar',
        rights: '© 2026 Zehra Gül Büyükarslan. Tüm hakları saklıdır.',
      },
      carousel: {
        range: '{first}–{last} / {total}',
        single: '{n} / {total}',
      },
    },
  };

  function getBrowserLang() {
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    const low = String(nav).toLowerCase();
    if (low.startsWith('de')) return 'de';
    if (low.startsWith('tr')) return 'tr';
    return 'en';
  }

  function getLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.includes(stored)) return stored;
    } catch (_) {}
    return getBrowserLang();
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}
    applyAll(lang);
  }

  function t(lang, path) {
    const parts = path.split('.');
    let cur = STRINGS[lang];
    for (const p of parts) {
      if (cur == null || typeof cur !== 'object') return null;
      cur = cur[p];
    }
    return typeof cur === 'string' ? cur : null;
  }

  function resolve(path) {
    const lang = getLang();
    let val = t(lang, path);
    if (val == null && lang !== 'en') val = t('en', path);
    return val;
  }

  function applyAll(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'en';
    document.documentElement.lang = lang;

    const page = document.body && document.body.getAttribute('data-page');
    const metaKey = page === 'projects' ? 'meta.projects' : page === 'writing' ? 'meta.writing' : 'meta.index';
    const title = t(lang, metaKey) || t('en', metaKey);
    if (title) document.title = title;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      let val = t(lang, key);
      if (val == null) val = t('en', key);
      if (val != null) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (!key) return;
      let val = t(lang, key);
      if (val == null) val = t('en', key);
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (!key) return;
      let val = t(lang, key);
      if (val == null) val = t('en', key);
      if (val != null) el.setAttribute('placeholder', val);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (!key) return;
      let val = t(lang, key);
      if (val == null) val = t('en', key);
      if (val != null) el.setAttribute('alt', val);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria-label');
      if (!key) return;
      let val = t(lang, key);
      if (val == null) val = t('en', key);
      if (val != null) el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('a[data-i18n-nav]').forEach((el) => {
      const key = el.getAttribute('data-i18n-nav');
      if (!key) return;
      let val = t(lang, key);
      if (val == null) val = t('en', key);
      if (val != null) {
        el.textContent = val;
        el.setAttribute('data-text', val);
      }
    });

    document.querySelectorAll('[data-i18n-aria-logo]').forEach((el) => {
      let val = t(lang, 'nav.logo_aria');
      if (val == null) val = t('en', 'nav.logo_aria');
      if (val != null) el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      const active = btnLang === lang;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.classList.toggle('lang-btn--active', active);
    });

    window.dispatchEvent(new CustomEvent('portfolio:i18n', { detail: { lang } }));
  }

  function formatCarouselCounter(first, last, total, visibleCount) {
    const lang = getLang();
    if (visibleCount > 1) {
      let tpl = t(lang, 'carousel.range');
      if (tpl == null) tpl = t('en', 'carousel.range');
      return tpl.replace('{first}', first).replace('{last}', last).replace('{total}', total);
    }
    let tpl = t(lang, 'carousel.single');
    if (tpl == null) tpl = t('en', 'carousel.single');
    return tpl.replace('{n}', first).replace('{total}', total);
  }

  window.PortfolioI18n = {
    getLang,
    setLang,
    resolve,
    formatCarouselCounter,
    applyAll,
  };

  function initLangSwitcher() {
    const group = document.querySelector('.lang-switcher');
    if (!group) return;
    const aria = resolve('nav.lang_aria');
    if (aria) group.setAttribute('aria-label', aria);

    group.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang) setLang(lang);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLangSwitcher();
    applyAll(getLang());
  });
})();
