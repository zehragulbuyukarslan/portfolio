/* Deneyim zaman çizelgesi. kind: work | education | volunteer — filtre ve ikon bunu kullanır. */
window.PORTFOLIO = window.PORTFOLIO || {};

window.PORTFOLIO.experience = [
  {
    id: 'kbu-data-analyst',
    kind: 'work',
    current: true,
    org: 'Karabük University — Information Technology Directorate',
    role: { en: 'Data Analyst', de: 'Datenanalystin', tr: 'Veri Analisti' },
    period: {
      en: 'Oct 2024 – Oct 2026 · Part-time, on-site',
      de: 'Okt. 2024 – Okt. 2026 · Teilzeit, vor Ort',
      tr: 'Eki 2024 – Eki 2026 · Yarı zamanlı, ofis',
    },
    desc: {
      en: 'Collected, structured, and cleaned the datasets behind the university\'s AI chatbot. Trained it with user scenarios and sample dialogues, raised answer accuracy on frequently asked questions, and built a RAG integration so responses stay current.',
      de: 'Datensätze für den KI-Chatbot der Universität gesammelt, strukturiert und bereinigt. Das System mit Nutzerszenarien und Beispieldialogen trainiert, die Antwortgenauigkeit bei häufigen Fragen erhöht und eine RAG-Integration gebaut, damit die Antworten aktuell bleiben.',
      tr: 'Üniversitenin yapay zekâ sohbet botunun veri kümelerini topladım, düzenledim ve temizledim. Kullanıcı senaryoları ve örnek diyaloglarla sistemi eğittim, sık sorulan sorulardaki yanıt doğruluğunu artırdım ve yanıtların güncel kalması için RAG entegrasyonu geliştirdim.',
    },
    tags: ['Python', 'RAG', 'NLP', 'Data Cleaning'],
  },
  {
    id: 'prompt-engineer-intern',
    kind: 'work',
    org: { en: 'U.S.-based AI Startup', de: 'KI-Startup (USA)', tr: 'ABD merkezli yapay zekâ girişimi' },
    role: { en: 'Prompt Engineer Intern', de: 'Prompt-Engineering-Praktikantin', tr: 'İstem Mühendisi Stajyeri' },
    period: {
      en: 'Aug 2025 – Dec 2025 · Full-time, on-site',
      de: 'Aug. 2025 – Dez. 2025 · Vollzeit, vor Ort',
      tr: 'Ağu 2025 – Ara 2025 · Tam zamanlı, ofis',
    },
    desc: {
      en: 'Researched, designed, and tested prompt engineering techniques for LLM systems in business intelligence, automation, and customer interaction — including a "Smart Dispatch" system for the U.S. home services sector.',
      de: 'Prompt-Engineering-Techniken für LLM-Systeme in Business Intelligence, Automatisierung und Kundeninteraktion erforscht, entworfen und getestet — darunter ein „Smart Dispatch"-System für den US-Haushaltsdienstleistungssektor.',
      tr: 'İş zekâsı, otomasyon ve müşteri etkileşimindeki LLM sistemleri için istem mühendisliği tekniklerini araştırdım, tasarladım ve test ettim — bunlara ABD ev hizmetleri sektörüne yönelik bir "Akıllı Gönderim" sistemi de dâhil.',
    },
    tags: ['LLM', 'Prompt Engineering', 'Business Intelligence'],
  },
  {
    id: 'deep-dive-dynamics',
    kind: 'work',
    org: 'Deep Dive Dynamics',
    role: { en: 'Software Developer', de: 'Softwareentwicklerin', tr: 'Yazılım Geliştirici' },
    period: {
      en: 'Sep 2024 – Aug 2025 · Full-time, hybrid',
      de: 'Sep. 2024 – Aug. 2025 · Vollzeit, hybrid',
      tr: 'Eyl 2024 – Ağu 2025 · Tam zamanlı, hibrit',
    },
    desc: {
      en: 'Built motion control and mission automation for autonomous underwater vehicles, and implemented the computer vision pipelines alongside them. Worked in Python and C++ with Pixhawk, PyMAVLink, and ROS, using PID-based control for precise handling.',
      de: 'Bewegungssteuerung und Missionsautomatisierung für autonome Unterwasserfahrzeuge entwickelt und die zugehörigen Computer-Vision-Pipelines umgesetzt. Arbeit in Python und C++ mit Pixhawk, PyMAVLink und ROS, mit PID-basierter Regelung für präzise Steuerung.',
      tr: 'Otonom sualtı araçları için hareket kontrolü ve görev otomasyonu geliştirdim, yanı sıra görüntü işleme hatlarını kurdum. Pixhawk, PyMAVLink ve ROS ile Python ve C++ kullandım; hassas kontrol için PID tabanlı algoritmalar uyguladım.',
    },
    tags: ['Python', 'C++', 'ROS', 'OpenCV', 'Embedded'],
  },
  {
    id: 'ieee-cs',
    kind: 'volunteer',
    org: 'Karabük IEEE Computer Society',
    role: { en: 'Committee Member', de: 'Komiteemitglied', tr: 'Komite Üyesi' },
    period: { en: 'Student club', de: 'Studentischer Verein', tr: 'Öğrenci kulübü' },
    desc: {
      en: 'Organised career development workshops on CV writing and interview preparation.',
      de: 'Workshops zur Karriereentwicklung rund um Lebenslauf und Bewerbungsgespräche organisiert.',
      tr: 'Özgeçmiş hazırlama ve mülakat hazırlığı üzerine kariyer geliştirme atölyeleri düzenledim.',
    },
    tags: [],
  },
];

window.PORTFOLIO.education = [
  {
    id: 'karabuk',
    org: { en: 'Karabük University', de: 'Karabük-Universität', tr: 'Karabük Üniversitesi' },
    role: {
      en: 'B.Sc. in Computer Engineering',
      de: 'B.Sc. Informatik / Computer Engineering',
      tr: 'Bilgisayar Mühendisliği (Lisans)',
    },
    period: { en: 'Oct 2023 – Jul 2027', de: 'Okt. 2023 – Jul. 2027', tr: 'Eki 2023 – Tem 2027' },
  },
  {
    id: 'lodz',
    org: { en: 'University of Lodz', de: 'Universität Łódź', tr: 'Lodz Üniversitesi' },
    role: {
      en: 'Computer Science — Erasmus+ exchange',
      de: 'Informatik — Erasmus+-Austausch',
      tr: 'Bilgisayar Bilimleri — Erasmus+ değişimi',
    },
    period: { en: 'Spring semester 2025', de: 'Sommersemester 2025', tr: '2025 Bahar dönemi' },
  },
];
