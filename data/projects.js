/* Projeler. featured: true olanlar ana sayfadaki karuselde çıkar, hepsi projects.html'de listelenir.
   Görseli olmayan projeler icon alanıyla placeholder karta düşer. */
window.PORTFOLIO = window.PORTFOLIO || {};

window.PORTFOLIO.projects = [
  {
    id: 'rwa-home',
    featured: true,
    year: '2026',
    icon: 'fa-solid fa-house-chimney-crack',
    tags: ['Solidity', 'Foundry', 'Arc Testnet', 'Vite', 'TypeScript', 'viem'],
    title: {
      en: 'RWA Home Tokenization Platform',
      de: 'RWA-Plattform zur Tokenisierung von Wohnimmobilien',
      tr: 'RWA Konut Tokenizasyon Platformu',
    },
    desc: {
      en: 'A real-world-asset tokenization system for residential property, with separate landlord, buyer, and tenant roles. Solidity contracts built and tested with Foundry, deployed to the Arc Testnet, and driven by a Vite + TypeScript frontend using viem — the capstone of an intensive blockchain development bootcamp.',
      de: 'Ein Tokenisierungssystem für Wohnimmobilien als Real World Asset, mit getrennten Rollen für Vermieter, Käufer und Mieter. Solidity-Verträge mit Foundry entwickelt und getestet, auf dem Arc-Testnet deployed und über ein Vite-+-TypeScript-Frontend mit viem angesteuert — das Abschlussprojekt eines intensiven Blockchain-Bootcamps.',
      tr: 'Konut için ev sahibi, alıcı ve kiracı rollerini ayrı ayrı tanımlayan bir gerçek dünya varlığı (RWA) tokenizasyon sistemi. Solidity sözleşmelerini Foundry ile yazıp test ettim, Arc Testnet\'e dağıttım ve viem kullanan Vite + TypeScript arayüzüyle bağladım — yoğun bir blokzincir bootcamp\'inin bitirme projesi.',
    },
    context: { en: 'BuilderMare Summer Bootcamp 2026', de: 'BuilderMare Summer Bootcamp 2026', tr: 'BuilderMare Summer Bootcamp 2026' },
    links: [{ type: 'github', url: 'https://github.com/zehragulbuyukarslan/Summer-Bootcamp-2026' }],
  },
  {
    id: 'monadstamp',
    featured: true,
    year: '2026',
    icon: 'fa-solid fa-stamp',
    tags: ['Monad Testnet', 'ERC-721 SBT', 'EIP-712', 'React', 'Vite', 'Tailwind'],
    title: {
      en: 'MonadStamp — Event Check-in dApp',
      de: 'MonadStamp — Event-Check-in-dApp',
      tr: 'MonadStamp — Etkinlik Check-in dApp\'i',
    },
    desc: {
      en: 'A check-in dApp for physical events on the Monad Testnet, issuing ERC-721 soulbound tokens through an EIP-712 gasless relay. Worked around the RPC\'s missing eth_newFilter with chunked getLogs polling to keep the dashboard live. Mobile-first interface, built in a single day at the Monad Blitz Ankara hackathon.',
      de: 'Eine Check-in-dApp für Präsenz-Events auf dem Monad-Testnet, die ERC-721-Soulbound-Token über ein gasfreies EIP-712-Relay ausgibt. Das fehlende eth_newFilter der RPC wurde durch gestücktes getLogs-Polling ersetzt, damit das Dashboard live bleibt. Mobile-first-Oberfläche, an einem Tag beim Hackathon Monad Blitz Ankara gebaut.',
      tr: 'Monad Testnet üzerinde fiziksel etkinlikler için, EIP-712 gasless relay mimarisiyle ERC-721 tabanlı SBT dağıtan bir check-in dApp\'i. Monad RPC\'sinin eth_newFilter kısıtını parçalı getLogs yoklamasıyla aşarak panoyu canlı tuttum. Mobil öncelikli arayüz, Monad Blitz Ankara hackathonunda tek günde tamamlandı.',
    },
    context: { en: 'Monad Blitz Ankara hackathon', de: 'Hackathon Monad Blitz Ankara', tr: 'Monad Blitz Ankara hackathonu' },
    links: [{ type: 'github', url: 'https://github.com/zehragulbuyukarslan/MonadStamp' }],
  },
  {
    id: 'arbifi',
    featured: true,
    year: '2026',
    image: 'img/arbifi.png',
    tags: ['Next.js', 'TypeScript', 'Solana', 'Prisma', 'Tailwind'],
    title: {
      en: 'ArbiFi — AI Dispute Resolution on Solana',
      de: 'ArbiFi — KI-Streitbeilegung auf Solana',
      tr: 'ArbiFi — Solana Üzerinde AI Anlaşmazlık Çözümü',
    },
    imageAlt: {
      en: 'ArbiFi dispute portal interface',
      de: 'Oberfläche des ArbiFi-Streitportals',
      tr: 'ArbiFi anlaşmazlık portalı arayüzü',
    },
    desc: {
      en: 'Dispute resolution for freelance work, DAOs, and digital transactions is slow and depends on a central authority. ArbiFi lets both parties submit evidence, has an AI layer analyse the case and produce a readable decision, and secures the outcome on-chain on Solana. Built with a partner: Next.js and Tailwind on the front, Next.js API routes with Prisma and SQL behind.',
      de: 'Streitbeilegung bei Freelance-Arbeit, DAOs und digitalen Transaktionen ist langsam und hängt von einer zentralen Instanz ab. Bei ArbiFi reichen beide Parteien Belege ein, eine KI-Schicht analysiert den Fall und erzeugt eine verständliche Entscheidung, deren Ergebnis on-chain auf Solana gesichert wird. Gemeinsam mit einem Partner entwickelt: Next.js und Tailwind im Frontend, Next.js-API-Routen mit Prisma und SQL dahinter.',
      tr: 'Serbest çalışma, DAO\'lar ve dijital işlemlerde anlaşmazlık çözümü yavaş ilerliyor ve merkezî bir otoriteye bağlı kalıyor. ArbiFi\'de iki taraf da kanıtlarını sunuyor, yapay zekâ katmanı vakayı analiz edip okunabilir bir karar üretiyor ve sonuç Solana üzerinde zincire yazılıyor. Bir ortakla birlikte geliştirdim: önde Next.js ve Tailwind, arkada Prisma ve SQL ile Next.js API rotaları.',
    },
    links: [],
  },
  {
    id: 'it-alan-sec',
    featured: true,
    year: '2026',
    icon: 'fa-solid fa-compass',
    tags: ['JavaScript', 'HTML', 'CSS', 'GitHub Pages'],
    title: {
      en: 'IT Alan Seç — IT Career Path Test',
      de: 'IT Alan Seç — Test zur IT-Berufsorientierung',
      tr: 'IT Alan Seç — Bilişimde Alan Seçme Testi',
    },
    desc: {
      en: 'A talent test for students who know they want to work in IT but not which branch. Answers are scored across career tracks and turned into a recommendation. Published on GitHub Pages and open to anyone.',
      de: 'Ein Eignungstest für Studierende, die in die IT wollen, aber noch nicht wissen, in welchen Bereich. Die Antworten werden über Berufsfelder hinweg bewertet und in eine Empfehlung übersetzt. Auf GitHub Pages veröffentlicht und frei zugänglich.',
      tr: 'Bilişimde çalışmak isteyen ama hangi alanda ilerleyeceğine karar veremeyen öğrenciler için bir yetenek testi. Yanıtlar kariyer alanları üzerinden puanlanıp bir öneriye dönüştürülüyor. GitHub Pages üzerinde yayında ve herkese açık.',
    },
    links: [
      { type: 'demo', url: 'https://zehragulbuyukarslan.github.io/IT-Alan-Sec/' },
      { type: 'github', url: 'https://github.com/zehragulbuyukarslan/IT-Alan-Sec' },
    ],
  },
  {
    id: 'email-filter',
    featured: true,
    year: '2025',
    image: 'img/del-mails.png',
    tags: ['Python', 'IMAP', 'GitHub Actions', 'YAML'],
    title: {
      en: 'Autonomous Email Filtering System',
      de: 'Autonomes E-Mail-Filtersystem',
      tr: 'Otonom E-posta Filtreleme Sistemi',
    },
    imageAlt: {
      en: 'Email filtering system',
      de: 'E-Mail-Filtersystem',
      tr: 'E-posta filtreleme sistemi',
    },
    desc: {
      en: 'Python automation that keeps an inbox clean by filtering and purging mail over IMAP by sender and keyword. A GitHub Actions workflow runs it daily on its own, with UTF-8 search support, expunge handling, and structured error logging — hundreds of messages cleared without manual work.',
      de: 'Python-Automatisierung, die ein Postfach sauber hält, indem sie Mails per IMAP nach Absender und Stichwort filtert und löscht. Ein GitHub-Actions-Workflow führt sie täglich selbstständig aus — mit UTF-8-Suche, Expunge-Behandlung und strukturiertem Fehler-Logging; hunderte Nachrichten ohne Handarbeit bereinigt.',
      tr: 'Gelen kutusunu IMAP üzerinden gönderen ve anahtar kelimeye göre filtreleyip temizleyen Python otomasyonu. GitHub Actions iş akışı her gün kendiliğinden çalışıyor; UTF-8 arama desteği, expunge yönetimi ve yapılandırılmış hata kaydıyla yüzlerce e-posta elle uğraşmadan temizlendi.',
    },
    links: [{ type: 'github', url: 'https://github.com/zehragulbuyukarslan/e-posta-imha-edici' }],
  },
  {
    id: 'chatbot',
    featured: true,
    year: '2025',
    image: 'img/chatbot.jpg',
    tags: ['AI', 'NLP', 'RAG', 'Dataset'],
    title: {
      en: 'University Chatbot',
      de: 'Universitäts-Chatbot',
      tr: 'Üniversite Sohbet Botu',
    },
    imageAlt: {
      en: 'Chatbot development',
      de: 'Chatbot-Entwicklung',
      tr: 'Sohbet botu geliştirme',
    },
    desc: {
      en: 'An AI chatbot for the Karabük University website, built at the IT Directorate. I collected and cleaned the datasets, designed the user scenarios that trained it, and added a RAG integration so its answers track the current information rather than a frozen snapshot.',
      de: 'Ein KI-Chatbot für die Website der Karabük-Universität, entwickelt in der IT-Direktion. Ich habe die Datensätze gesammelt und bereinigt, die Nutzerszenarien für das Training entworfen und eine RAG-Integration ergänzt, damit die Antworten dem aktuellen Stand folgen statt einem eingefrorenen Abzug.',
      tr: 'Karabük Üniversitesi web sitesi için Bilgi İşlem Daire Başkanlığı\'nda geliştirilen yapay zekâ sohbet botu. Veri kümelerini topladım ve temizledim, botu eğiten kullanıcı senaryolarını tasarladım ve yanıtların donmuş bir kopya yerine güncel bilgiyi takip etmesi için RAG entegrasyonu ekledim.',
    },
    links: [],
  },
  {
    id: 'auv',
    featured: false,
    year: '2025',
    image: 'img/nesne-tespit-takip-sema.png',
    tags: ['Python', 'C++', 'ROS', 'OpenCV', 'Pixhawk'],
    title: {
      en: 'Autonomous Underwater Vehicle',
      de: 'Autonomes Unterwasserfahrzeug',
      tr: 'Otonom Sualtı Aracı',
    },
    imageAlt: {
      en: 'Object detection and tracking schema for the underwater vehicle',
      de: 'Schema zur Objekterkennung und -verfolgung des Unterwasserfahrzeugs',
      tr: 'Sualtı aracı için nesne tespit ve takip şeması',
    },
    desc: {
      en: 'Motion control, mission automation, and computer vision for Deep Dive Dynamics\' autonomous underwater vehicle, using Pixhawk, PyMAVLink, and ROS with PID-based control algorithms and integrated sensors.',
      de: 'Bewegungssteuerung, Missionsautomatisierung und Computer Vision für das autonome Unterwasserfahrzeug von Deep Dive Dynamics — mit Pixhawk, PyMAVLink und ROS, PID-basierten Regelalgorithmen und integrierter Sensorik.',
      tr: 'Deep Dive Dynamics\'in otonom sualtı aracı için hareket kontrolü, görev otomasyonu ve görüntü işleme; Pixhawk, PyMAVLink ve ROS ile PID tabanlı kontrol algoritmaları ve entegre sensörler.',
    },
    links: [],
  },
  {
    id: 'ideathon',
    featured: false,
    year: '2025',
    icon: 'fa-solid fa-trophy',
    tags: ['Ideathon', 'AI', 'InoGen'],
    title: {
      en: 'Sosyalfest Ideathon — 2nd Place (InoGen)',
      de: 'Sosyalfest-Ideathon — 2. Platz (InoGen)',
      tr: 'Sosyalfest Ideathon — 2.\'lik Ödülü (InoGen)',
    },
    desc: {
      en: 'Co-designed the vision for InoGen, a platform of workshops and collaborations that grows young people\'s creative thinking, problem-solving, and business skills. Produced the team\'s visuals and presentation material with AI tools.',
      de: 'Die Vision von InoGen mitentwickelt — einer Plattform aus Workshops und Kooperationen, die kreatives Denken, Problemlösung und unternehmerische Fähigkeiten junger Menschen fördert. Visuals und Präsentationsmaterial des Teams mit KI-Werkzeugen erstellt.',
      tr: 'Gençlerin yaratıcı düşünme, problem çözme ve iş becerilerini geliştiren atölye ve iş birliklerinden oluşan InoGen platformunun vizyonunu birlikte tasarladım. Ekibin görsellerini ve sunum materyallerini yapay zekâ araçlarıyla ürettim.',
    },
    links: [],
  },
];
