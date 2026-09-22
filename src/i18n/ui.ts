export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];

export const htmlLang: Record<Lang, string> = { en: 'en-AU', es: 'es-CO' };
export const ogLocale: Record<Lang, string> = { en: 'en_AU', es: 'es_CO' };

export type Page = '' | 'work' | 'consulting' | 'lab' | 'art' | 'now' | 'about';

export const path = (lang: Lang, page: Page = '') => `/${lang}/${page ? `${page}/` : ''}`;

export const staticLangPaths = () => langs.map((lang) => ({ params: { lang } }));

export const ui = {
  en: {
    skip: 'Skip to content',
    nav: {
      work: 'Work',
      consulting: 'Consulting',
      lab: 'Lab',
      art: 'Art',
      about: 'About',
      contact: 'Contact',
    },
    chat: {
      cta: 'Tell me about your project',
      greeting: 'Hi, I’m Carlos’s assistant. What are you working on?',
    },
    langSwitch: 'Leer en español',
    footer: {
      line: 'AI proposes, the human decides.',
      updated: 'Updated',
      now: 'What I’m doing now',
    },
    newsletter: {
      title: 'A monthly letter',
      body: 'Once a month: what I built, what I wrote, what I heard. Three short sections (Build, Work, Music), one email, no tracking pixels.',
      label: 'Email address',
      cta: 'Subscribe',
      fallback: 'The first issue is on its way. Email me and I’ll add you to the list.',
      fallbackCta: 'Add me to the list',
      fallbackSubject: 'Newsletter: add me to the list',
    },
    readMore: 'Read more',
    repo: 'Code',
    live: 'Live',
    private: 'Private repo',
    inDevelopment: 'In development',
  },
  es: {
    skip: 'Saltar al contenido',
    nav: {
      work: 'Trabajo',
      consulting: 'Consultoría',
      lab: 'Laboratorio',
      art: 'Arte',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    chat: {
      cta: 'Cuéntame tu proyecto',
      greeting: 'Hola, soy el asistente de Carlos. ¿En qué estás trabajando?',
    },
    langSwitch: 'Read in English',
    footer: {
      line: 'La IA propone, el humano decide.',
      updated: 'Actualizado',
      now: 'En qué ando ahora',
    },
    newsletter: {
      title: 'Una carta al mes',
      body: 'Una vez al mes: lo que construí, lo que escribí, lo que escuché. Tres secciones cortas (Build, Obra, Música), un solo correo, sin píxeles de rastreo.',
      label: 'Correo electrónico',
      cta: 'Suscribirme',
      fallback: 'La primera carta viene en camino. Escríbeme y te agrego a la lista.',
      fallbackCta: 'Agrégame a la lista',
      fallbackSubject: 'Newsletter: agrégame a la lista',
    },
    readMore: 'Leer más',
    repo: 'Código',
    live: 'En vivo',
    private: 'Repo privado',
    inDevelopment: 'En desarrollo',
  },
} as const;

export const formatDate = (iso: string, lang: Lang) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString(htmlLang[lang], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
