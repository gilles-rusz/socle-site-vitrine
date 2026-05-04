// ============================================================
// CONFIGURATION DU SITE — Modifiez ce fichier pour personnaliser
// ============================================================

export const siteConfig = {
  // --- Informations générales ---
  name: "Mon Entreprise",
  tagline: "Votre slogan accrocheur ici",
  description:
    "Description courte de votre entreprise pour le SEO et les réseaux sociaux.",
  url: "https://www.monentreprise.fr",
  email: "contact@monentreprise.fr",
  phone: "+33 6 12 34 56 78",
  address: "123 Rue Principale, 67000 Strasbourg",

  // --- Réseaux sociaux ---
  social: {
    facebook: "https://facebook.com/monentreprise",
    instagram: "https://instagram.com/monentreprise",
    linkedin: "https://linkedin.com/company/monentreprise",
    twitter: "",
  },

  // --- Navigation ---
  nav: [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#apropos" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "Contact", href: "#contact" },
  ],

  // --- Hero ---
  hero: {
    title: "Donnez vie à vos projets",
    highlight: "digitaux",
    subtitle:
      "Nous créons des solutions modernes et performantes pour propulser votre activité. Qualité, créativité et résultats concrets.",
    cta: "Demander un devis gratuit",
    ctaHref: "#contact",
    secondaryCta: "Découvrir nos services",
    secondaryCtaHref: "#services",
  },

  // --- Services ---
  services: {
    title: "Nos Services",
    subtitle:
      "Des solutions complètes et sur mesure pour répondre à tous vos besoins.",
    items: [
      {
        icon: "Globe",
        title: "Sites Vitrines",
        description:
          "Sites web élégants et performants pour présenter votre entreprise et vos services.",
      },
      {
        icon: "ShoppingCart",
        title: "E-Commerce",
        description:
          "Boutiques en ligne complètes avec paiement sécurisé et gestion des stocks.",
      },
      {
        icon: "Code",
        title: "Applications Web",
        description:
          "Applications sur mesure : dashboards, CRM, outils internes et plateformes collaboratives.",
      },
      {
        icon: "Smartphone",
        title: "Design Responsive",
        description:
          "Interfaces adaptées à tous les écrans : mobile, tablette et desktop.",
      },
      {
        icon: "Search",
        title: "Référencement SEO",
        description:
          "Optimisation pour les moteurs de recherche et stratégie de visibilité en ligne.",
      },
      {
        icon: "Wrench",
        title: "Maintenance & Support",
        description:
          "Contrats de maintenance, mises à jour, sécurité et support technique continu.",
      },
    ],
  },

  // --- À propos ---
  about: {
    title: "À propos",
    headline: "Qui sommes-nous ?",
    paragraphs: [
      "Nous sommes une équipe passionnée par le développement web et les nouvelles technologies.",
      "Avec plusieurs années d'expérience, nous accompagnons les entreprises de toutes tailles dans leur transformation digitale.",
      "Notre approche : écoute, rigueur et créativité pour des résultats qui dépassent vos attentes.",
    ],
    stats: [
      { value: "10+", label: "Ans d'expérience" },
      { value: "50+", label: "Projets réalisés" },
      { value: "100%", label: "Clients satisfaits" },
    ],
  },

  // --- Témoignages ---
  testimonials: {
    title: "Témoignages",
    subtitle: "Ce que nos clients disent de nous.",
    items: [
      {
        name: "Marie Dupont",
        role: "Gérante, Boulangerie du Centre",
        content:
          "Un travail remarquable ! Mon site est magnifique et mes ventes en ligne ont augmenté de 40%. Je recommande vivement.",
        rating: 5,
      },
      {
        name: "Pierre Martin",
        role: "Directeur, PME Solutions",
        content:
          "Professionnel, réactif et à l'écoute. Le site a été livré dans les délais avec une qualité irréprochable.",
        rating: 5,
      },
      {
        name: "Sophie Lambert",
        role: "Coach bien-être",
        content:
          "Exactement ce dont j'avais besoin pour lancer mon activité en ligne. Simple, efficace et très beau.",
        rating: 5,
      },
    ],
  },

  // --- Contact ---
  contact: {
    title: "Contact",
    subtitle:
      "Une question ? Un projet ? N'hésitez pas à nous contacter, nous vous répondrons rapidement.",
    formFields: {
      name: "Votre nom",
      email: "Votre email",
      phone: "Votre téléphone (optionnel)",
      subject: "Sujet",
      message: "Votre message",
      submit: "Envoyer le message",
    },
  },

  // --- Footer ---
  footer: {
    copyright: "© 2026 Mon Entreprise. Tous droits réservés.",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/confidentialite" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
