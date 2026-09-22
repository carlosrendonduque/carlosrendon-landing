import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;

export interface Project {
  id: string;
  name: string;
  tagline: L;
  body: L;
  points: Record<Lang, string[]>;
  stack: string[];
  status: L;
  year: string;
  repo?: string;
  live?: string;
}

// Lab: curated applied-AI and tooling projects. Order is the order shown.
export const labProjects: Project[] = [
  {
    id: 'workbrain',
    name: 'WorkBrain',
    tagline: {
      en: 'Project memory for AI coding assistants',
      es: 'Memoria de proyecto para asistentes de código con IA',
    },
    body: {
      en: 'Consultants work across many engagements where ticket history, decisions and conventions live outside the code, and must never mix between clients. WorkBrain gives Claude Code and Cursor that memory through an MCP server.',
      es: 'Un consultor trabaja en muchos proyectos cuyo historial de tickets, decisiones y convenciones vive fuera del código, y nunca debe mezclarse entre clientes. WorkBrain le da esa memoria a Claude Code y Cursor mediante un servidor MCP.',
    },
    points: {
      en: [
        'HTTP Model Context Protocol server: search, context composition, document capture with draft approval, decision records and per-project rules read at session start.',
        'Hybrid retrieval: pgvector (HNSW) plus keyword search, reranked with Voyage and packed into a token budget.',
        'Tenant isolation that fails closed: a dedicated database per client, scoped API keys, an audit log of every call, and secret scanning before anything is ingested.',
      ],
      es: [
        'Servidor Model Context Protocol por HTTP: búsqueda, composición de contexto, captura de documentos con aprobación de borradores, registro de decisiones y reglas por proyecto que el asistente lee al iniciar.',
        'Recuperación híbrida: pgvector (HNSW) más búsqueda por palabras clave, con rerank de Voyage y empaquetado dentro de un presupuesto de tokens.',
        'Aislamiento por cliente que falla cerrado: una base de datos por cliente, API keys con alcance, log de auditoría de cada llamada y escaneo de secretos antes de ingerir nada.',
      ],
    },
    stack: ['TypeScript', 'Next.js', 'Postgres + pgvector', 'Voyage', 'Claude', 'MCP', 'Vercel'],
    status: { en: 'In daily use', es: 'En uso diario' },
    year: '2026',
    repo: 'https://github.com/carlosrendonduque/workbrain-mcp',
  },
  {
    id: 'bayzara',
    name: 'Bayzara',
    tagline: {
      en: 'A human-in-the-loop control layer for AI agents',
      es: 'Una capa de control humano para agentes de IA',
    },
    body: {
      en: 'Agents register their work and declare every external action before taking it. The server decides whether each action can run, needs a notification, needs a person, or must never happen.',
      es: 'Los agentes registran su trabajo y declaran cada acción externa antes de ejecutarla. El servidor decide si la acción puede correr, si requiere avisar, si necesita a una persona o si nunca debe ocurrir.',
    },
    points: {
      en: [
        'Every action is classified as act, notify, ask or never from its impact, reversibility, sensitivity and confidence; money, customers, compliance and personal data always need a named approver.',
        'Append-only operating record, workspace isolation enforced in the data layer, idempotency keys, HMAC-signed messages and a fail-closed check before every run.',
        'A conformance suite drives reference agents over HTTP through approval, escalation, compensation and misbehaving-agent scenarios.',
      ],
      es: [
        'Cada acción se clasifica como actuar, avisar, preguntar o nunca según su impacto, reversibilidad, sensibilidad y confianza; dinero, clientes, cumplimiento y datos personales siempre requieren un aprobador con nombre.',
        'Registro que solo admite agregar, aislamiento por workspace en la capa de datos, claves de idempotencia, mensajes firmados con HMAC y una verificación que falla cerrada antes de cada ejecución.',
        'Una suite de conformidad conduce agentes de referencia por HTTP a través de escenarios de aprobación, escalamiento, compensación y agentes que se portan mal.',
      ],
    },
    stack: ['TypeScript', 'SvelteKit', 'Cloudflare Workers', 'D1', 'Drizzle', 'Zod', 'Playwright'],
    status: { en: 'Working prototype', es: 'Prototipo funcional' },
    year: '2026',
  },
  {
    id: 'conato',
    name: 'Conato',
    tagline: {
      en: 'A multi-model writing editor where the model only proposes',
      es: 'Un editor de escritura multi-modelo donde el modelo solo propone',
    },
    body: {
      en: 'Built to replace four chat windows and a lot of copy-paste while writing my Master’s thesis. Every model output lands as a proposal; nothing enters the text until the author has read the diff and accepted it.',
      es: 'Nació para reemplazar cuatro ventanas de chat y mucho copiar y pegar mientras escribía mi tesis de maestría. Toda salida de un modelo llega como propuesta; nada entra al texto hasta que el autor lee el diff y lo acepta.',
    },
    points: {
      en: [
        'Claude, GPT, Gemini and DeepSeek behind one interface; prompts are versioned in the repository.',
        'Retrieval tuned for literary prose: paragraph chunks, separate document and query embeddings, voice-aware ranking and MMR for variety.',
        'A canon graph (characters, places, objects) exposed as an authenticated retrieval API for other apps.',
      ],
      es: [
        'Claude, GPT, Gemini y DeepSeek en una sola interfaz; los prompts se versionan en el repositorio.',
        'Recuperación afinada para prosa literaria: fragmentos por párrafo, embeddings separados para documento y consulta, ranking sensible a la voz y MMR para variedad.',
        'Un grafo de canon (personajes, lugares, objetos) expuesto como API de recuperación autenticada para otras aplicaciones.',
      ],
    },
    stack: ['Next.js', 'TypeScript', 'Tiptap', 'Vercel AI SDK', 'Postgres + pgvector', 'Voyage'],
    status: { en: 'In daily use', es: 'En uso diario' },
    year: '2026',
  },
  {
    id: 'dataset-preflight',
    name: 'dataset-preflight',
    tagline: {
      en: 'Check a data report against the dataset it describes',
      es: 'Verifica un informe de datos contra el dataset que describe',
    },
    body: {
      en: 'Most data checks validate the data. This one validates the story told about it: every figure in the prose must be derivable from the delivered file, or the check fails and suggests the number you probably meant.',
      es: 'Casi todas las validaciones revisan los datos. Esta revisa la historia que se cuenta sobre ellos: cada cifra del texto debe poder derivarse del archivo entregado, o la verificación falla y sugiere el número que probablemente querías decir.',
    },
    points: {
      en: [
        'Standard-library Python CLI with optional extras for xlsx, Google Sheets parity and link checks.',
        'Streams files over 100 MB and exits non-zero, so it can gate a CI pipeline.',
        'Extracted from real data-delivery work after reviewers rejected numbers that did not match.',
      ],
      es: [
        'CLI en Python con la librería estándar, con extras opcionales para xlsx, paridad con Google Sheets y verificación de enlaces.',
        'Procesa en streaming archivos de más de 100 MB y sale con código distinto de cero, así que puede bloquear un pipeline de CI.',
        'Salió de trabajo real de entrega de datos, después de que los revisores rechazaran cifras que no cuadraban.',
      ],
    },
    stack: ['Python', 'CLI', 'CI'],
    status: { en: 'Open source · MIT', es: 'Código abierto · MIT' },
    year: '2026',
    repo: 'https://github.com/carlosrendonduque/dataset-preflight',
  },
  {
    id: 'calamus',
    name: 'calamus',
    tagline: {
      en: 'Reusable reader components for digital storytelling',
      es: 'Componentes de lectura reutilizables para narrativa digital',
    },
    body: {
      en: 'A React reader with five modes (scroll, book, terminal, editorial and hypertext) themed through CSS tokens, so the same text can be read in the form each work asks for.',
      es: 'Un lector en React con cinco modos (scroll, libro, terminal, editorial e hipertexto) tematizable con tokens CSS, para que un mismo texto se lea en la forma que cada obra pide.',
    },
    points: { en: [], es: [] },
    stack: ['TypeScript', 'React', 'Vite'],
    status: { en: 'Open source · MIT', es: 'Código abierto · MIT' },
    year: '2026',
    repo: 'https://github.com/carlosrendonduque/calamus',
  },
  {
    id: 'tonotopia',
    name: 'tonotopia',
    tagline: {
      en: 'A state-driven sound engine for narrative',
      es: 'Un motor de sonido narrativo basado en estado',
    },
    body: {
      en: 'Web Audio scenes that react to what the reader does instead of playing a track from start to finish, with a typed contract so a work can hand its sound design to the engine.',
      es: 'Escenas de Web Audio que reaccionan a lo que hace el lector en lugar de reproducir una pista de principio a fin, con un contrato tipado para que una obra le entregue su diseño sonoro al motor.',
    },
    points: { en: [], es: [] },
    stack: ['TypeScript', 'Web Audio'],
    status: { en: 'Early version', es: 'Versión temprana' },
    year: '2026',
    repo: 'https://github.com/carlosrendonduque/tonotopia',
  },
];

export interface Case {
  id: string;
  title: L;
  client: L;
  role: L;
  period: string;
  stack: string[];
  summary: L;
  points: Record<Lang, string[]>;
}

// Work: enterprise case studies, facts from the CV only.
export const cases: Case[] = [
  {
    id: 'national-counselling',
    title: {
      en: 'A national counselling platform where every session matters',
      es: 'Una plataforma nacional de consejería donde cada sesión importa',
    },
    client: { en: 'a national health service · a national counselling line', es: 'a national health service · a national counselling line' },
    role: { en: 'Senior Salesforce engineer (contract)', es: 'Ingeniero Salesforce senior (contrato)' },
    period: '2025 – 2026',
    stack: ['Service Cloud', 'LWC', 'Apex', 'Flows', 'Omni-Channel', 'Genesys', 'Einstein Bot', 'Azure DevOps'],
    summary: {
      en: 'Australia’s national domestic, family and sexual violence counselling service runs on Salesforce. Counsellors cannot lose a conversation, a form or a routing decision in the middle of a call.',
      es: 'El servicio nacional australiano de consejería en violencia doméstica, familiar y sexual funciona sobre Salesforce. Un consejero no puede perder una conversación, un formulario ni una decisión de enrutamiento en medio de una llamada.',
    },
    points: {
      en: [
        'Owned the Salesforce, Genesys and Omni-Channel messaging and Einstein Bot stack: routing, presence sync and session recovery.',
        'Built the Lightning Web Component suite for the Child Protection Report: a multi-tab form that keeps unsaved work across console sub-tabs and coordinates open tabs through Lightning Message Service.',
        'Tier 2 escalation point for clinically risk-rated production incidents, with root-cause analysis and written findings for clinical, operations and service-desk stakeholders.',
        'Led the formal knowledge transfer and handover of the platform to the incoming delivery team.',
      ],
      es: [
        'Responsable del stack de Salesforce, Genesys, mensajería Omni-Channel y Einstein Bot: enrutamiento, sincronización de presencia y recuperación de sesiones.',
        'Construí la suite de Lightning Web Components del Child Protection Report: un formulario de varias pestañas que conserva el trabajo sin guardar entre sub-pestañas de la consola y coordina las pestañas abiertas con Lightning Message Service.',
        'Punto de escalamiento Tier 2 para incidentes de producción con riesgo clínico, con análisis de causa raíz y hallazgos escritos para equipos clínicos, de operaciones y de mesa de servicio.',
        'Lideré la transferencia formal de conocimiento y el traspaso de la plataforma al equipo entrante.',
      ],
    },
  },
  {
    id: 'public-sector-ops',
    title: {
      en: 'Keeping public-sector platforms safe to change',
      es: 'Plataformas del sector público que se pueden cambiar sin miedo',
    },
    client: { en: 'a state police service online reporting · a government services contractor', es: 'Reportes en línea de a state police service · a government services contractor' },
    role: { en: 'Salesforce & OmniStudio engineer (contract)', es: 'Ingeniero Salesforce y OmniStudio (contrato)' },
    period: '2025 – 2026',
    stack: ['OmniStudio', 'OmniScripts', 'DataRaptors', 'Apex', 'Salesforce CLI', 'Change sets'],
    summary: {
      en: 'Citizen-facing reporting forms and a multi-org estate where a bad release or a botched sandbox refresh reaches the public.',
      es: 'Formularios de reporte para la ciudadanía y un conjunto de varias orgs donde un mal release o un refresh de sandbox mal hecho llega al público.',
    },
    points: {
      en: [
        'Inventoried a ten-org estate and wrote a single sandbox refresh runbook that reconciled six contradicting documents.',
        'Ran development and UAT sandbox refreshes end to end, restoring and verifying fourteen integrations.',
        'Shipped a targeted production fix with pre-deployment baselines and a written rollback plan; rotated certificates and integration secrets across environments.',
        'Diagnosed OmniStudio form defects on public forms, from a submit that never completed to a PDF that printed the wrong answer, and wrote release impact analyses ahead of each Salesforce release.',
      ],
      es: [
        'Inventarié un conjunto de diez orgs y escribí un único runbook de refresh de sandboxes que concilió seis documentos contradictorios.',
        'Ejecuté de punta a punta los refresh de las sandboxes de desarrollo y UAT, restaurando y verificando catorce integraciones.',
        'Desplegué un fix puntual en producción con líneas base previas y un plan de rollback escrito; roté certificados y secretos de integración entre ambientes.',
        'Diagnostiqué defectos de formularios públicos en OmniStudio, desde un envío que nunca terminaba hasta un PDF que imprimía la respuesta equivocada, y escribí análisis de impacto antes de cada release de Salesforce.',
      ],
    },
  },
  {
    id: 'insurance-clm',
    title: {
      en: 'Contract lifecycle automation and proofs of concept for insurance',
      es: 'Automatización del ciclo de vida de contratos y pruebas de concepto para seguros',
    },
    client: { en: 'an insurer', es: 'an insurer' },
    role: { en: 'Senior OmniStudio engineer (contract)', es: 'Ingeniero OmniStudio senior (contrato)' },
    period: '2023 – 2025',
    stack: ['OmniStudio', 'Vlocity CLM', 'DocGen', 'Adobe eSignature', 'Apex', 'LWC', 'REST'],
    summary: {
      en: 'Technical discovery, demonstrations and proofs of concept alongside sales, then building the contract lifecycle on a managed-package architecture.',
      es: 'Descubrimiento técnico, demostraciones y pruebas de concepto junto al equipo comercial, y después la construcción del ciclo de vida de contratos sobre una arquitectura de paquete gestionado.',
    },
    points: {
      en: [
        'Ran discovery with customers and built prototypes that proved feasibility, advising on configure versus extend and shaping scope and estimates.',
        'Maintained Vlocity CLM (document templates, clause library, state models) and DocGen automation with Adobe eSignature.',
        'Built OmniScripts, Integration Procedures, DataRaptors and REST integrations to move contract data between Salesforce and external systems.',
      ],
      es: [
        'Hice descubrimiento con clientes y construí prototipos que demostraron factibilidad, asesorando entre configurar o extender y definiendo alcance y estimaciones.',
        'Mantuve Vlocity CLM (plantillas de documentos, biblioteca de cláusulas, modelos de estado) y la automatización de DocGen con Adobe eSignature.',
        'Construí OmniScripts, Integration Procedures, DataRaptors e integraciones REST para mover datos de contratos entre Salesforce y sistemas externos.',
      ],
    },
  },
];

export const experience: { when: string; role: L; where: string }[] = [
  { when: '2025 – now', role: { en: 'Senior Salesforce & OmniStudio Engineer, independent contractor', es: 'Ingeniero Salesforce y OmniStudio senior, contratista independiente' }, where: 'a national health service · a state police service · a government services contractor' },
  { when: '2024 – 2025', role: { en: 'AI model evaluator, freelance', es: 'Evaluador de modelos de IA, freelance' }, where: 'Revelo · Mindrift' },
  { when: '2023 – 2025', role: { en: 'Senior Salesforce OmniStudio Engineer', es: 'Ingeniero Salesforce OmniStudio senior' }, where: 'an insurer' },
  { when: '2021 – 2022', role: { en: 'Senior Salesforce OmniStudio Developer', es: 'Desarrollador Salesforce OmniStudio senior' }, where: 'PwC Australia · NDIA' },
  { when: '2020 – 2021', role: { en: 'Software Engineer (OmniStudio, Kafka, Airflow)', es: 'Ingeniero de software (OmniStudio, Kafka, Airflow)' }, where: 'Construcciones El Cóndor' },
  { when: '2020 – 2021', role: { en: 'Web Developer', es: 'Desarrollador web' }, where: 'The University of Queensland' },
  { when: '2018 – 2020', role: { en: 'Senior Software Engineer', es: 'Ingeniero de software senior' }, where: 'Avmin (Air Charter Specialists)' },
  { when: '2010 – 2018', role: { en: 'Co-founder & General Manager', es: 'Cofundador y gerente general' }, where: 'Zen Innovation Technologies, Medellín' },
  { when: '2003 – 2015', role: { en: 'Developer to Lead Developer', es: 'De desarrollador a líder de desarrollo' }, where: 'Dynamic Modular System, Medellín' },
];

export const certifications = [
  'Salesforce Certified OmniStudio Developer',
  'Salesforce Certified OmniStudio Consultant',
  'Salesforce Certified Platform Developer I',
  'Salesforce Certified JavaScript Developer I',
  'Salesforce Certified Agentforce Service Consultant',
  'Salesforce Certified Experience Cloud Consultant',
  'Salesforce Certified Platform App Builder',
  'Salesforce Certified Administrator',
];

export interface Artwork {
  id: string;
  name: string;
  kind: L;
  body: L;
  year: string;
  status?: L;
  live?: string;
  language?: L;
}

export const artworks: Artwork[] = [
  {
    id: 'toma-1024',
    name: 'Toma 1024',
    kind: { en: 'Transmedia work · Master’s thesis', es: 'Obra transmedia · trabajo de grado' },
    body: {
      en: 'A work that does not fit in one format: a box of loose pieces, accordion books and a short novel, read in any order, plus a web app that lives inside the fiction and a music layer. An electronic ensemble, a quantum music computer, and a take that never passes.',
      es: 'Una obra que no cabe en un solo formato: una caja de piezas sueltas, acordeones y una novela corta, que se leen en cualquier orden, más una aplicación web que vive dentro de la ficción y una capa musical. Un ensamble electrónico, una computadora cuántica musical y una toma que nunca pasa.',
    },
    year: '2026',
    status: { en: 'In development', es: 'En desarrollo' },
  },
  {
    id: 'nullheim',
    name: 'Nullheim',
    kind: { en: 'Interactive novel', es: 'Novela interactiva' },
    body: {
      en: 'A bilingual story set inside a decaying Unix terminal, where the reader talks to Nevet, an archive AI with retrieval over the canon and guardrails that belong to the story.',
      es: 'Una historia bilingüe dentro de una terminal Unix en decadencia, donde el lector conversa con Nevet, una IA archivista con recuperación sobre el canon y límites que pertenecen a la historia.',
    },
    year: '2025 – 2026',
    live: 'https://nullheim.lovable.app',
    language: { en: 'English / Spanish', es: 'Inglés / español' },
  },
  {
    id: 'fragmentado',
    name: 'Fragmentado',
    kind: { en: 'Interactive fiction', es: 'Ficción interactiva' },
    body: {
      en: 'A story in three acts, set in 2030, 2087 and 2307, about losing what makes us human. Read it as a video call with an AI interviewer, a chat, a subject profile or a visual novel.',
      es: 'Una historia en tres actos, en 2030, 2087 y 2307, sobre la pérdida de lo humano. Se lee como videollamada con una IA entrevistadora, como chat, como perfil del sujeto o como novela visual.',
    },
    year: '2025',
    live: 'https://carlosrendonduque.github.io/fragmentado/',
    language: { en: 'Spanish', es: 'Español' },
  },
  {
    id: 'parallax-story',
    name: 'Parallax Story',
    kind: { en: 'Sensor-driven story', es: 'Historia guiada por sensores' },
    body: {
      en: 'A story that reads your phone: location, motion, camera, weather and time of day shape what you see. Best opened on a mobile device.',
      es: 'Una historia que lee tu teléfono: ubicación, movimiento, cámara, clima y hora del día cambian lo que ves. Mejor abrirla desde el celular.',
    },
    year: '2025',
    live: 'https://carlosrendonduque.github.io/parallax-story/',
  },
];
