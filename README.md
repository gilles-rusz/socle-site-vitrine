# Socle Site Vitrine

Template professionnel de site vitrine construit avec **Next.js**, **Tailwind CSS** et **Framer Motion**. Prêt à être cloné et personnalisé pour chaque client.

## Fonctionnalités

- **Design responsive** — Mobile-first, adapté à tous les écrans
- **SEO optimisé** — Métadonnées, Open Graph, Twitter Cards
- **Formulaire de contact** — API route avec validation et rate limiting
- **Animations fluides** — Framer Motion pour un rendu professionnel
- **Personnalisation facile** — Un seul fichier de configuration à modifier
- **Performance** — Score Lighthouse 90+ (Performance, SEO, Accessibilité)

## Sections incluses

1. **Header** — Navigation responsive + menu burger mobile + CTA
2. **Hero** — Titre accrocheur, sous-titre, deux boutons d'action
3. **Services** — Grille de 6 services avec icônes (personnalisables)
4. **À propos** — Présentation + statistiques chiffrées
5. **Témoignages** — Avis clients avec étoiles
6. **Contact** — Formulaire complet + coordonnées
7. **Footer** — Copyright + liens légaux

## Installation

```bash
# Cloner le template
git clone https://github.com/gilles-rusz/socle-site-vitrine.git mon-projet-client
cd mon-projet-client

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Personnalisation

### 1. Modifier le fichier de configuration

Tout le contenu du site est dans **`src/config/site.ts`** :

```typescript
export const siteConfig = {
  name: "Mon Entreprise",        // Nom de l'entreprise
  tagline: "Votre slogan",       // Slogan
  email: "contact@exemple.fr",   // Email de contact
  phone: "+33 6 12 34 56 78",    // Téléphone

  hero: {
    title: "Donnez vie à vos projets",
    highlight: "digitaux",        // Mot mis en couleur
    // ...
  },

  services: {
    items: [
      { icon: "Globe", title: "Sites Vitrines", description: "..." },
      // Ajouter/modifier/supprimer des services
    ],
  },

  // Témoignages, À propos, Contact, Footer...
};
```

### 2. Modifier les couleurs

Les couleurs sont définies dans **`src/app/globals.css`** :

```css
@theme inline {
  --color-primary-500: #10b981;  /* Couleur principale (vert émeraude) */
  --color-accent-500: #f59e0b;   /* Couleur d'accent (ambre) */
  --color-dark-900: #0f172a;     /* Couleur du texte foncé */
}
```

Remplacez les valeurs hexadécimales par les couleurs du client.

### 3. Ajouter le logo

Remplacez `/public/logo.png` par le logo du client, puis ajoutez-le dans le Header si besoin.

### 4. Configurer le formulaire de contact

**Option A : Formspree (recommandé pour commencer)**
1. Créez un formulaire sur [formspree.io](https://formspree.io)
2. Ajoutez la variable d'environnement :
   ```
   FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx
   ```

**Option B : SMTP (envoi direct)**
1. Installez nodemailer : `npm install nodemailer`
2. Décommentez le code SMTP dans `src/app/api/contact/route.ts`
3. Ajoutez les variables d'environnement SMTP

### 5. Déployer

```bash
# Build de production
npm run build

# Déployer sur Vercel
npx vercel --prod
```

## Structure du projet

```
src/
├── app/
│   ├── api/contact/route.ts    # API formulaire de contact
│   ├── globals.css             # Thème et styles globaux
│   ├── layout.tsx              # Layout principal + SEO
│   └── page.tsx                # Page d'accueil
├── components/
│   ├── Header.tsx              # Navigation
│   ├── Hero.tsx                # Section héro
│   ├── Services.tsx            # Section services
│   ├── About.tsx               # Section à propos
│   ├── Testimonials.tsx        # Section témoignages
│   ├── Contact.tsx             # Section contact
│   └── Footer.tsx              # Pied de page
└── config/
    └── site.ts                 # Configuration du site
```

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Langage** : TypeScript
- **Déploiement** : Vercel (recommandé)

## Licence

Usage interne Web RG Est. Template réutilisable pour les projets clients.
