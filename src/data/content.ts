import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;

// Public site copy: sectors only, never client names. Specifics live in the CV and LinkedIn.

export interface Project {
  id: string;
  name: string;
  tagline: L;
  body: L;
  stack: string[];
  status: L;
  repo?: string;
  live?: string;
}

export const labProjects: Project[] = [
  {
    id: 'conserje',
    name: 'Conserje',
    tagline: { en: 'A chat that qualifies leads, routed through n8n', es: 'Un chat que califica leads y los enruta con n8n' },
    body: {
      en: 'The chat on this site. A short conversation instead of a form: it extracts a brief, scores it, and hands it to n8n workflows for notifications, email and CRM.',
      es: 'El chat de este sitio. Una conversación corta en lugar de un formulario: extrae un brief, lo califica y lo entrega a flujos de n8n para avisos, correo y CRM.',
    },
    stack: ['n8n', 'PHP', 'Vanilla JS', 'Claude'],
    status: { en: 'Open source', es: 'Código abierto' },
    repo: 'https://github.com/carlosrendonduque/conserje',
  },
  {
    id: 'workbrain',
    name: 'WorkBrain',
    tagline: { en: 'Project memory for AI coding assistants', es: 'Memoria de proyecto para asistentes de código' },
    body: {
      en: 'An MCP server that gives Claude Code and Cursor each client’s tickets, decisions and rules, with hybrid search and strict isolation between clients.',
      es: 'Un servidor MCP que le da a Claude Code y Cursor los tickets, decisiones y reglas de cada cliente, con búsqueda híbrida y aislamiento estricto entre clientes.',
    },
    stack: ['MCP', 'TypeScript', 'Postgres + pgvector', 'Claude'],
    status: { en: 'In daily use', es: 'En uso diario' },
    repo: 'https://github.com/carlosrendonduque/workbrain-mcp',
  },
  {
    id: 'bayzara',
    name: 'Bayzara',
    tagline: { en: 'AI agents that ask before they act', es: 'Agentes de IA que preguntan antes de actuar' },
    body: {
      en: 'Agents declare every action first. Low-risk actions run; anything touching money, customers or personal data waits for a named person.',
      es: 'Los agentes declaran cada acción antes. Lo de bajo riesgo corre; lo que toca dinero, clientes o datos personales espera a una persona con nombre.',
    },
    stack: ['TypeScript', 'SvelteKit', 'Cloudflare Workers'],
    status: { en: 'Prototype', es: 'Prototipo' },
  },
  {
    id: 'conato',
    name: 'Conato',
    tagline: { en: 'A writing editor where the model only proposes', es: 'Un editor donde el modelo solo propone' },
    body: {
      en: 'Claude, GPT, Gemini and DeepSeek in one editor. Every suggestion arrives as a diff; nothing enters the text until the author accepts it.',
      es: 'Claude, GPT, Gemini y DeepSeek en un solo editor. Cada sugerencia llega como un diff; nada entra al texto hasta que el autor la acepta.',
    },
    stack: ['Next.js', 'Vercel AI SDK', 'pgvector'],
    status: { en: 'In daily use', es: 'En uso diario' },
  },
  {
    id: 'dataset-preflight',
    name: 'dataset-preflight',
    tagline: { en: 'Checks a report against its data', es: 'Verifica un informe contra sus datos' },
    body: {
      en: 'Fails if a number in the text can’t be derived from the delivered file, and suggests the one you probably meant.',
      es: 'Falla si una cifra del texto no se puede derivar del archivo entregado, y sugiere la que probablemente querías.',
    },
    stack: ['Python', 'CLI'],
    status: { en: 'Open source', es: 'Código abierto' },
    repo: 'https://github.com/carlosrendonduque/dataset-preflight',
  },
  {
    id: 'calamus',
    name: 'calamus',
    tagline: { en: 'Reader components for digital stories', es: 'Componentes de lectura para historias digitales' },
    body: {
      en: 'One text, five reading modes: scroll, book, terminal, editorial and hypertext.',
      es: 'Un texto, cinco modos de lectura: scroll, libro, terminal, editorial e hipertexto.',
    },
    stack: ['React', 'TypeScript'],
    status: { en: 'Open source', es: 'Código abierto' },
    repo: 'https://github.com/carlosrendonduque/calamus',
  },
  {
    id: 'tonotopia',
    name: 'tonotopia',
    tagline: { en: 'Sound that reacts to the reader', es: 'Sonido que reacciona al lector' },
    body: {
      en: 'A Web Audio engine where scenes change with what the reader does.',
      es: 'Un motor de Web Audio donde las escenas cambian según lo que hace el lector.',
    },
    stack: ['TypeScript', 'Web Audio'],
    status: { en: 'Early version', es: 'Versión temprana' },
    repo: 'https://github.com/carlosrendonduque/tonotopia',
  },
];

export interface Case {
  id: string;
  title: L;
  sector: L;
  stack: string[];
  points: Record<Lang, string[]>;
}

export const cases: Case[] = [
  {
    id: 'health',
    title: { en: 'A national health service platform', es: 'Una plataforma nacional de salud' },
    sector: { en: 'Health sector', es: 'Sector salud' },
    stack: ['Service Cloud', 'LWC', 'Apex', 'Omni-Channel', 'Genesys', 'Einstein Bot'],
    points: {
      en: [
        'Salesforce, Genesys and Omni-Channel messaging: routing, presence and session recovery.',
        'Complex multi-tab forms that never lose unsaved work.',
        'Escalation point for production incidents, and a full handover to the next team.',
      ],
      es: [
        'Salesforce, Genesys y mensajería Omni-Channel: enrutamiento, presencia y recuperación de sesiones.',
        'Formularios complejos de varias pestañas que nunca pierden lo no guardado.',
        'Punto de escalamiento para incidentes en producción y traspaso completo al siguiente equipo.',
      ],
    },
  },
  {
    id: 'public-sector',
    title: { en: 'Citizen reporting platforms', es: 'Plataformas de reporte ciudadano' },
    sector: { en: 'Public sector', es: 'Sector público' },
    stack: ['OmniStudio', 'Apex', 'Salesforce CLI'],
    points: {
      en: [
        'OmniStudio forms used directly by the public.',
        'Releases and sandbox refreshes across a multi-org estate, each with a rollback plan.',
        'Production defects traced end to end, from form to PDF to email.',
      ],
      es: [
        'Formularios OmniStudio que usa directamente la ciudadanía.',
        'Releases y refresh de sandboxes en un conjunto de varias orgs, cada uno con plan de rollback.',
        'Defectos de producción rastreados de punta a punta, del formulario al PDF y al correo.',
      ],
    },
  },
  {
    id: 'insurance',
    title: { en: 'Contract automation', es: 'Automatización de contratos' },
    sector: { en: 'Insurance', es: 'Seguros' },
    stack: ['OmniStudio', 'Vlocity CLM', 'DocGen', 'REST'],
    points: {
      en: [
        'Discovery and proofs of concept alongside sales.',
        'Contract lifecycle with document generation and e-signature.',
        'Integrations between Salesforce and external systems.',
      ],
      es: [
        'Descubrimiento y pruebas de concepto junto al equipo comercial.',
        'Ciclo de vida de contratos con generación de documentos y firma electrónica.',
        'Integraciones entre Salesforce y sistemas externos.',
      ],
    },
  },
];

// The path, oldest first. No dates, no company names.
export const path: L[] = [
  { en: 'Developer, then lead developer, on payroll systems in Medellín', es: 'Desarrollador y luego líder de desarrollo en sistemas de nómina, en Medellín' },
  { en: 'Co-founder of a software consultancy', es: 'Cofundador de una consultora de software' },
  { en: 'Software engineer in Brisbane: aviation and university research', es: 'Ingeniero de software en Brisbane: aviación e investigación universitaria' },
  { en: 'Salesforce and OmniStudio: integration, disability services, insurance', es: 'Salesforce y OmniStudio: integración, servicios de discapacidad, seguros' },
  { en: 'AI model evaluation, freelance', es: 'Evaluación de modelos de IA, freelance' },
  { en: 'Independent contractor for the health and public sectors', es: 'Contratista independiente para los sectores salud y público' },
];

export const certifications = [
  'OmniStudio Developer',
  'OmniStudio Consultant',
  'Platform Developer I',
  'JavaScript Developer I',
  'Agentforce Service Consultant',
  'Experience Cloud Consultant',
  'Platform App Builder',
  'Administrator',
];

export interface Artwork {
  id: string;
  name: string;
  kind: L;
  body: L;
  status?: L;
  live?: string;
}

export const artworks: Artwork[] = [
  {
    id: 'toma-1024',
    name: 'Toma 1024',
    kind: { en: 'Transmedia · Master’s thesis', es: 'Transmedia · trabajo de grado' },
    body: {
      en: 'A box of loose pieces, a web app inside the fiction, and a music layer. An electronic ensemble and a take that never passes.',
      es: 'Una caja de piezas sueltas, una app web dentro de la ficción y una capa musical. Un ensamble electrónico y una toma que nunca pasa.',
    },
    status: { en: 'In development', es: 'En desarrollo' },
  },
  {
    id: 'nullheim',
    name: 'Nullheim',
    kind: { en: 'Interactive novel', es: 'Novela interactiva' },
    body: {
      en: 'Inside a decaying Unix terminal, you talk to Nevet, an archive AI.',
      es: 'Dentro de una terminal Unix en decadencia, conversas con Nevet, una IA archivista.',
    },
    live: 'https://nullheim.lovable.app',
  },
  {
    id: 'fragmentado',
    name: 'Fragmentado',
    kind: { en: 'Interactive fiction · Spanish', es: 'Ficción interactiva · español' },
    body: {
      en: 'Three acts, three centuries. Read it as a video call, a chat, a profile or a visual novel.',
      es: 'Tres actos, tres siglos. Se lee como videollamada, chat, perfil o novela visual.',
    },
    live: 'https://carlosrendonduque.github.io/fragmentado/',
  },
  {
    id: 'parallax-story',
    name: 'Parallax Story',
    kind: { en: 'Story for your phone', es: 'Historia para el celular' },
    body: {
      en: 'Location, motion, camera and weather shape what you read.',
      es: 'La ubicación, el movimiento, la cámara y el clima cambian lo que lees.',
    },
    live: 'https://carlosrendonduque.github.io/parallax-story/',
  },
];
