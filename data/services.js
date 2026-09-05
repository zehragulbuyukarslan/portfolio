/* "Ne yapıyorum" kartları. Sıra = ekranda görünen sıra. */
window.PORTFOLIO = window.PORTFOLIO || {};

window.PORTFOLIO.services = [
  {
    id: 'ai',
    icon: 'fa-solid fa-robot',
    title: { en: 'AI & LLM Engineering', de: 'KI- & LLM-Engineering', tr: 'AI ve LLM Mühendisliği' },
    desc: {
      en: 'Prompt pipelines, RAG integrations, and dataset work that make language models reliable in production.',
      de: 'Prompt-Pipelines, RAG-Integrationen und Datensatzarbeit, die Sprachmodelle im Produktivbetrieb verlässlich machen.',
      tr: 'İstem hatları, RAG entegrasyonları ve veri kümesi çalışmalarıyla dil modellerini üretimde güvenilir hâle getiriyorum.',
    },
  },
  {
    id: 'web',
    icon: 'fa-solid fa-code',
    title: { en: 'Full-Stack Web Development', de: 'Full-Stack-Webentwicklung', tr: 'Tam Yığın Web Geliştirme' },
    desc: {
      en: 'Responsive interfaces and the APIs behind them, built with Next.js, TypeScript, React, and SQL.',
      de: 'Responsive Oberflächen und die APIs dahinter — mit Next.js, TypeScript, React und SQL.',
      tr: 'Next.js, TypeScript, React ve SQL ile duyarlı arayüzler ve arkalarındaki API\'ler.',
    },
  },
  {
    id: 'web3',
    icon: 'fa-solid fa-cube',
    title: { en: 'Web3 & Smart Contracts', de: 'Web3 & Smart Contracts', tr: 'Web3 ve Akıllı Sözleşmeler' },
    desc: {
      en: 'Solidity contracts tested with Foundry, deployed to testnets, and wired to dApp frontends via viem.',
      de: 'Solidity-Verträge, mit Foundry getestet, auf Testnets deployed und über viem an dApp-Frontends angebunden.',
      tr: 'Foundry ile test edilen, testnet\'e dağıtılan ve viem üzerinden dApp arayüzlerine bağlanan Solidity sözleşmeleri.',
    },
  },
  {
    id: 'design',
    icon: 'fa-solid fa-palette',
    title: { en: 'Design & Content', de: 'Design & Content', tr: 'Tasarım ve İçerik' },
    desc: {
      en: 'Visual identities, presentation material, and edited video for products and teams that need to be understood.',
      de: 'Visuelle Identitäten, Präsentationsmaterial und Videoschnitt für Produkte und Teams, die verstanden werden wollen.',
      tr: 'Anlaşılmak isteyen ürün ve ekipler için görsel kimlik, sunum materyali ve video kurgu.',
    },
  },
];
