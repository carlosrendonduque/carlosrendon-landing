import { SITE } from '../site';
import type { Lang } from '../i18n/ui';

export const personJsonLd = (lang: Lang) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Carlos Rendón',
  alternateName: ['Carlos Rendon', 'Carlos Rendón Duque'],
  url: SITE.url,
  image: `${SITE.url}/images/carlos-avatar.jpg`,
  email: `mailto:${SITE.email}`,
  jobTitle:
    lang === 'en'
      ? 'AI engineer for regulated enterprise platforms'
      : 'Ingeniero de IA para plataformas empresariales reguladas',
  description:
    lang === 'en'
      ? 'Salesforce and OmniStudio engineer and applied-AI builder. Writer of transmedia fiction and AI-assisted music producer.'
      : 'Ingeniero Salesforce y OmniStudio y constructor de IA aplicada. Escritor de ficción transmedia y productor musical con IA.',
  address: { '@type': 'PostalAddress', addressLocality: 'Brisbane', addressRegion: 'QLD', addressCountry: 'AU' },
  nationality: ['Australia', 'Colombia'],
  knowsLanguage: ['en', 'es'],
  knowsAbout: [
    'Salesforce',
    'OmniStudio',
    'Model Context Protocol',
    'Retrieval-augmented generation',
    'Human-in-the-loop AI',
    'Interactive fiction',
    'Transmedia storytelling',
    'Music production',
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Universidad de Antioquia' },
    { '@type': 'CollegeOrUniversity', name: 'Universidad Icesi' },
  ],
  sameAs: [SITE.linkedin, SITE.github],
});
