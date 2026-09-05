/* Kimlik, iletişim ve hero içeriği. Site genelinde tek kaynak. */
window.PORTFOLIO = window.PORTFOLIO || {};

window.PORTFOLIO.profile = {
  name: 'Zehra Gül Büyükarslan',
  nameLines: ['Zehra Gül', 'Büyükarslan'],
  initials: 'ZG',
  email: 'zgbuyukarslan@icloud.com',
  photo: 'img/profile.jpg',

  role: {
    en: 'AI / Web3 Full-Stack Engineer',
    de: 'AI- / Web3-Full-Stack-Entwicklerin',
    tr: 'AI / Web3 Tam Yığın Geliştirici',
  },

  motto: {
    en: 'Contribute to Solving Real-World Problems Through Software',
    de: 'Mit Software an Lösungen für reale Probleme arbeiten',
    tr: 'Yazılımla gerçek dünya problemlerinin çözümüne katkı sunmak',
  },

  location: {
    en: 'Istanbul, Turkey',
    de: 'Istanbul, Türkei',
    tr: 'İstanbul, Türkiye',
  },

  about: {
    en: 'Final-year Computer Engineering student at Karabük University, with an Erasmus+ semester at the University of Lodz. I build AI-native and Web3 products end to end — from LLM prompt pipelines and RAG integrations to Solidity contracts and the interfaces on top of them. Comfortable leading short-cycle projects and working with multidisciplinary teams.',
    de: 'Studentin im letzten Jahr des Bachelorstudiums Informatik an der Karabük-Universität, mit einem Erasmus+-Semester an der Universität Łódź. Ich entwickle KI-native und Web3-Produkte von Anfang bis Ende — von LLM-Prompt-Pipelines und RAG-Integrationen bis zu Solidity-Verträgen und den zugehörigen Oberflächen. Erfahren in der Leitung kurzzyklischer Projekte und in der Arbeit mit interdisziplinären Teams.',
    tr: 'Karabük Üniversitesi Bilgisayar Mühendisliği son sınıf öğrencisiyim; bir dönemi Erasmus+ ile Lodz Üniversitesi\'nde geçirdim. AI-native ve Web3 ürünleri uçtan uca geliştiriyorum — LLM istem hatları ve RAG entegrasyonlarından Solidity sözleşmelerine ve üzerlerindeki arayüzlere kadar. Kısa döngülü projeleri yürütmekte ve çok disiplinli ekiplerle çalışmakta deneyimliyim.',
  },

  stats: [
    { value: '8', label: { en: 'Projects', de: 'Projekte', tr: 'Proje' } },
    { value: '14', label: { en: 'Certificates', de: 'Zertifikate', tr: 'Sertifika' } },
    { value: '∞', label: { en: 'Curiosity', de: 'Neugier', tr: 'Merak' } },
  ],

  /* Almanca CV henüz yok; DE dilinde İngilizce CV sunuluyor. */
  cv: {
    en: { file: 'assets/cv_en.pdf', label: 'EN' },
    de: { file: 'assets/cv_en.pdf', label: 'EN' },
    tr: { file: 'assets/cv_tr.pdf', label: 'TR' },
  },
  cvDownloadName: 'Zehra-Gul-Buyukarslan-CV.pdf',

  social: [
    { id: 'github', label: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/zehragulbuyukarslan' },
    { id: 'linkedin', label: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/zehragulbuyukarslan/' },
    { id: 'medium', label: 'Medium', icon: 'fab fa-medium', url: 'https://medium.com/@zehragulbuyukarslan' },
    { id: 'instagram', label: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/zehragul.studio/' },
  ],
};
