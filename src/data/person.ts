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
      ? 'Applied AI engineer'
      : 'Ingeniero de IA aplicada',
  description:
    lang === 'en'
      ? 'Applied-AI engineer: MCP servers, memory and agent orchestration with human approval, built on enterprise platform experience. Writer of transmedia fiction and AI-assisted music producer.'
      : 'Ingeniero de IA aplicada: servidores MCP, memoria y orquestación de agentes con aprobación humana, sobre experiencia en plataformas empresariales. Escritor de ficción transmedia y productor musical con IA.',
  address: { '@type': 'PostalAddress', addressLocality: 'Brisbane', addressRegion: 'QLD', addressCountry: 'AU' },
  nationality: ['Australia', 'Colombia'],
  knowsLanguage: ['en', 'es'],
  knowsAbout: [
    'Salesforce',
    'OmniStudio',
    'Model Context Protocol',
    'Agentic architecture',
    'AI agent orchestration',
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
