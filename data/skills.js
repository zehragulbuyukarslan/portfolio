/* Teknik yığın ve diller. Gruplar sırayla render edilir. */
window.PORTFOLIO = window.PORTFOLIO || {};

window.PORTFOLIO.skills = [
  {
    id: 'languages',
    label: { en: 'Languages', de: 'Programmiersprachen', tr: 'Programlama Dilleri' },
    items: ['Python', 'C', 'C++', 'C#', 'Java', 'JavaScript', 'TypeScript', 'Solidity', 'SQL'],
  },
  {
    id: 'frameworks',
    label: { en: 'Frameworks & Libraries', de: 'Frameworks & Bibliotheken', tr: 'Çatılar ve Kütüphaneler' },
    items: ['Next.js', 'React', 'Vite', 'Tailwind CSS', 'Prisma', 'ROS', 'OpenCV', 'viem'],
  },
  {
    id: 'tools',
    label: { en: 'Tools', de: 'Werkzeuge', tr: 'Araçlar' },
    items: ['Git', 'GitHub', 'GitHub Actions', 'Foundry', 'VS Code', 'Jupyter', 'Pixhawk', 'PyMAVLink'],
  },
  {
    id: 'concepts',
    label: { en: 'Concepts', de: 'Konzepte', tr: 'Kavramlar' },
    items: {
      en: ['Prompt Engineering', 'RAG', 'Smart Contracts', 'OOP', 'ML Basics', 'Computer Vision'],
      de: ['Prompt Engineering', 'RAG', 'Smart Contracts', 'OOP', 'ML-Grundlagen', 'Computer Vision'],
      tr: ['İstem Mühendisliği', 'RAG', 'Akıllı Sözleşmeler', 'Nesne Tabanlı Programlama', 'Makine Öğrenmesi Temelleri', 'Görüntü İşleme'],
    },
  },
];

window.PORTFOLIO.spokenLanguages = [
  { name: { en: 'Turkish', de: 'Türkisch', tr: 'Türkçe' }, level: { en: 'C2 · Native', de: 'C2 · Muttersprache', tr: 'C2 · Ana dil' } },
  { name: { en: 'English', de: 'Englisch', tr: 'İngilizce' }, level: { en: 'C1 · Advanced', de: 'C1 · Fortgeschritten', tr: 'C1 · İleri' } },
  { name: { en: 'German', de: 'Deutsch', tr: 'Almanca' }, level: { en: 'A2 · Basic', de: 'A2 · Grundkenntnisse', tr: 'A2 · Başlangıç' } },
];
