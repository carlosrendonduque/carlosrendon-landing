import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;

// Public site copy: sectors only, never client names. Specifics live in the CV and LinkedIn.

export interface Project {
  id: string;
  name: string;
  // Which section of /lab this belongs to. Explicit, because slicing the array
  // by position meant removing one project silently reclassified another.
  kind: 'ai' | 'foundations' | 'story';
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
    kind: 'ai',
    name: 'Conserje',
    tagline: { en: 'A chat that qualifies leads, routed through n8n', es: 'Un chat que califica leads y los enruta con n8n' },
    body: {
      en: 'The chat on this site. A short conversation instead of a form: it extracts a brief, scores it, and hands it to n8n workflows for notifications, email and CRM.',
      es: 'El chat de este sitio. Una conversación corta en lugar de un formulario: extrae un brief, lo califica y lo entrega a flujos de n8n para avisos, correo y CRM.',
    },
    stack: ['n8n', 'TypeScript', 'Vanilla JS', 'Claude'],
    status: { en: 'Open source', es: 'Código abierto' },
    repo: 'https://github.com/carlosrendonduque/conserje',
  },
  {
    id: 'workbrain',
    kind: 'ai',
    name: 'WorkBrain',
    tagline: { en: 'Project memory for AI coding assistants', es: 'Memoria de proyecto para asistentes de código' },
    body: {
      en: 'An MCP server that gives Claude Code and Cursor the context of each project: decisions, conventions and the history that never lives in the code. Hybrid search, strict isolation between projects.',
      es: 'Un servidor MCP que le da a Claude Code y Cursor el contexto de cada proyecto: decisiones, convenciones y el historial que nunca vive en el código. Búsqueda híbrida y aislamiento estricto entre proyectos.',
    },
    stack: ['MCP', 'TypeScript', 'Postgres + pgvector', 'Claude'],
    status: { en: 'In daily use', es: 'En uso diario' },
    repo: 'https://github.com/carlosrendonduque/workbrain-mcp',
  },
  {
    id: 'bayzara',
    kind: 'ai',
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
    kind: 'ai',
    name: 'Conato',
    tagline: { en: 'A writing editor where the model only proposes', es: 'Un editor donde el modelo solo propone' },
    body: {
      en: 'Every request carries your canon and the passages from the rest of your work that bear on it, so an answer never arrives context-free. Self-hosted and single-user.',
      es: 'Cada petición lleva tu canon y los pasajes del resto de tu obra que vienen al caso, así que ninguna respuesta llega sin contexto. Autoalojado y de un solo usuario.',
    },
    stack: ['Next.js', 'TipTap', 'Vercel AI SDK', 'pgvector'],
    status: { en: 'In daily use', es: 'En uso diario' },
    repo: 'https://github.com/carlosrendonduque/conato',
  },
  {
    id: 'vigia',
    kind: 'ai',
    name: 'vigia',
    tagline: { en: 'Watches public tenders so a person decides which to bid for', es: 'Vigila licitaciones públicas para que una persona decida a cuáles presentarse' },
    body: {
      en: 'Reads Colombia’s open procurement data, flags what is new since the last run and matches it against a company’s profile. Every reason it gives is checked against the record. It recommends; it never bids.',
      es: 'Lee los datos abiertos de contratación pública de Colombia, marca lo nuevo desde la última revisión y lo cruza con el perfil de una empresa. Cada razón que da se verifica contra el registro. Recomienda; nunca se presenta.',
    },
    stack: ['Python', 'Open data', 'SQLite', 'Claude'],
    status: { en: 'Prototype', es: 'Prototipo' },
    repo: 'https://github.com/carlosrendonduque/vigia',
  },
  {
    id: 'release-radar',
    kind: 'ai',
    name: 'Release Radar',
    tagline: { en: 'Which parts of a Salesforce release touch your org', es: 'Qué partes de un release de Salesforce tocan tu org' },
    body: {
      en: 'Reads the release notes, maps an org’s metadata and returns what may break and what to test, each point quoted from the source. The tool does the reading; the consultant decides.',
      es: 'Lee las notas del release, mapea la metadata de una org y devuelve qué puede romperse y qué probar, cada punto citado de la fuente. La herramienta hace la lectura; el consultor decide.',
    },
    stack: ['Python', 'BM25', 'Headless Chrome', 'Claude'],
    status: { en: 'Prototype', es: 'Prototipo' },
    repo: 'https://github.com/carlosrendonduque/salesforce-release-radar',
  },
  {
    id: 'veredicto',
    kind: 'foundations',
    name: 'veredicto',
    tagline: { en: 'Does your agent ask before it acts?', es: '¿Tu agente pregunta antes de actuar?' },
    body: {
      en: 'An eval harness that measures when a tool-using agent acts, asks a person or refuses, including when a document tries to hijack it. The score comes from what the agent did, not from what it said.',
      es: 'Un banco de pruebas que mide cuándo un agente con herramientas actúa, le pregunta a una persona o se niega, incluso cuando un documento intenta secuestrarlo. La nota sale de lo que el agente hizo, no de lo que dijo.',
    },
    stack: ['Python', 'Evals', 'OpenTelemetry', 'Claude'],
    status: { en: 'Prototype', es: 'Prototipo' },
    repo: 'https://github.com/carlosrendonduque/veredicto',
  },
  {
    id: 'crisol',
    kind: 'foundations',
    name: 'crisol',
    tagline: { en: 'Lab notes on what happens inside a language model', es: 'Notas de laboratorio sobre lo que pasa dentro de un modelo de lenguaje' },
    body: {
      en: 'A tokenizer and samplers written from scratch, run on a small local model. First finding: the same text costs 7–42% more tokens in Spanish than in English.',
      es: 'Un tokenizador y muestreadores escritos desde cero, sobre un modelo local pequeño. Primer hallazgo: el mismo texto cuesta entre 7 % y 42 % más tokens en español que en inglés.',
    },
    stack: ['Python', 'MLX', 'NumPy'],
    status: { en: 'Open source', es: 'Código abierto' },
    repo: 'https://github.com/carlosrendonduque/crisol',
  },
  {
    id: 'forja',
    kind: 'foundations',
    name: 'forja',
    tagline: { en: 'Training small models, from scratch to fine-tuning', es: 'Entrenar modelos pequeños, desde cero hasta el ajuste fino' },
    body: {
      en: 'The labs where I train instead of prompt: a transformer from scratch, LoRA, preference tuning and reinforcement learning with verifiable rewards. Planned and budgeted, not run yet.',
      es: 'Los laboratorios donde entreno en vez de solo instruir: un transformer desde cero, LoRA, ajuste por preferencias y aprendizaje por refuerzo con recompensas verificables. Planeados y presupuestados, aún sin correr.',
    },
    stack: ['PyTorch', 'MLX', 'TRL'],
    status: { en: 'Planned', es: 'Planeado' },
    repo: 'https://github.com/carlosrendonduque/forja',
  },
  {
    id: 'calamus',
    kind: 'story',
    name: 'calamus',
    tagline: { en: 'Reader components for digital stories', es: 'Componentes de lectura para historias digitales' },
    body: {
      en: 'One text, five reading modes: scroll, book, terminal, editorial and hypertext.',
      es: 'Un texto, cinco modos de lectura: scroll, libro, terminal, editorial e hipertexto.',
    },
    stack: ['React', 'TypeScript'],
    status: { en: 'Open source', es: 'Código abierto' },
    repo: 'https://github.com/carlosrendonduque/calamus',
    live: 'https://carlosrendonduque.github.io/calamus/',
  },
];

// Public cases describe the class of problem, never the product that happened to
// be under it. Platforms age out; the capability does not, and naming SKUs reads
// as a tool inventory. Vendor specifics belong in the CV written for a given role.
export interface Case {
  id: string;
  title: L;
  sector: L;
  capabilities: Record<Lang, string[]>;
  points: Record<Lang, string[]>;
}

export const cases: Case[] = [
  {
    id: 'health',
    title: { en: 'A national health service platform', es: 'Una plataforma nacional de salud' },
    sector: { en: 'Health sector', es: 'Sector salud' },
    capabilities: {
      en: ['Systems integration', 'Real-time contact centre', 'Incident response', 'Handover'],
      es: ['Integración de sistemas', 'Centro de contacto en tiempo real', 'Respuesta a incidentes', 'Traspaso'],
    },
    points: {
      en: [
        'Contact centre integration in real time: routing, presence, and conversations that survive a dropped session or a handover.',
        'Long multi-step intake journeys that never lose a person’s work.',
        'Escalation point for production incidents on a clinically risk-rated platform, and the written handover the next team ran on.',
      ],
      es: [
        'Integración de centro de contacto en tiempo real: enrutamiento, presencia y conversaciones que sobreviven a una sesión caída o a un traspaso.',
        'Trayectos de captura largos, de varios pasos, que nunca pierden lo que la persona ya escribió.',
        'Punto de escalamiento para incidentes de producción en una plataforma con riesgo clínico, y el traspaso escrito con el que siguió el equipo entrante.',
      ],
    },
  },
  {
    id: 'public-sector',
    title: { en: 'Citizen reporting platforms', es: 'Plataformas de reporte ciudadano' },
    sector: { en: 'Public sector', es: 'Sector público' },
    capabilities: {
      en: ['Low-code journeys', 'Release management', 'Multi-environment', 'Root-cause analysis'],
      es: ['Trayectos low-code', 'Gestión de releases', 'Varios entornos', 'Análisis de causa raíz'],
    },
    points: {
      en: [
        'Guided multi-step journeys used directly by the public, built low-code and deployed across channels and devices.',
        'Release management across a multi-environment estate, every deployment with a rollback path.',
        'Production defects traced end to end, from the form a citizen filled to the document and the email they received.',
      ],
      es: [
        'Trayectos guiados de varios pasos que usa directamente la ciudadanía, construidos en low-code y desplegados en varios canales y dispositivos.',
        'Gestión de releases en un conjunto de varios entornos, cada despliegue con su camino de reversa.',
        'Defectos de producción rastreados de punta a punta, del formulario que llenó una persona al documento y al correo que recibió.',
      ],
    },
  },
  {
    id: 'insurance',
    title: { en: 'Contract automation', es: 'Automatización de contratos' },
    sector: { en: 'Insurance', es: 'Seguros' },
    capabilities: {
      en: ['Solution engineering', 'Presales', 'Contract lifecycle', 'API integration'],
      es: ['Ingeniería de soluciones', 'Preventa', 'Ciclo de vida de contratos', 'Integración por API'],
    },
    points: {
      en: [
        'Technical discovery and proofs of concept alongside sales, turning an open brief into a scope someone could sign.',
        'Contract lifecycle end to end: generation, negotiation, document output and e-signature.',
        'System-to-system integration across platform boundaries, including the failure cases.',
      ],
      es: [
        'Descubrimiento técnico y pruebas de concepto junto al equipo comercial, convirtiendo un brief abierto en un alcance que alguien pudiera firmar.',
        'Ciclo de vida del contrato de punta a punta: generación, negociación, salida documental y firma electrónica.',
        'Integración entre sistemas de plataformas distintas, incluidos los casos de falla.',
      ],
    },
  },
];

// Scope, not chronology. A timeline that ends on the most recent rung reads as
// a descent whatever the rungs say, and the dated version lives on LinkedIn.
export const scopes: L[] = [
  { en: 'Enterprise platforms in production', es: 'Plataformas empresariales en producción' },
  { en: 'Integration between systems', es: 'Integración entre sistemas' },
  { en: 'Solution engineering and presales', es: 'Ingeniería de soluciones y preventa' },
  { en: 'Applied AI', es: 'IA aplicada' },
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
