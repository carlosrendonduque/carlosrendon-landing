import type { Lang } from '../i18n/ui';

// Quotes people published themselves on LinkedIn, with the name and role of
// whoever wrote them. Excerpted to contiguous sentences, never reworded, and
// trimmed of client names to keep the public-copy rule. The Spanish is a
// translation of the English original.
// The section disappears while this list is empty.
export interface Testimonial {
  quote: Record<Lang, string>;
  name: string;
  role: Record<Lang, string>;
}

export const testimonials: Testimonial[] = [
  {
    quote: {
      en: 'Carlos consistently showcased exceptional skills in designing and implementing Salesforce solutions tailored to project requirements. His deep understanding of the Salesforce platform enabled us to streamline processes and enhance overall efficiency within our team.',
      es: 'Carlos demostró de forma consistente habilidades excepcionales diseñando e implementando soluciones Salesforce ajustadas a los requerimientos del proyecto. Su conocimiento profundo de la plataforma nos permitió simplificar procesos y mejorar la eficiencia de todo el equipo.',
    },
    name: 'Nick Phillips',
    role: {
      en: 'Salesforce & Cloud Solutions Architect',
      es: 'Arquitecto de soluciones Salesforce y cloud',
    },
  },
  {
    quote: {
      en: 'Quite knowledgeable in many aspects as he advised so many businesses and had to tackle and solve countless and really complex issues in companies of all sizes. Always committed and walking that extra mile to deliver the best service and products/software.',
      es: 'Muy versado en muchos aspectos: asesoró a muchísimos negocios y tuvo que enfrentar y resolver incontables problemas realmente complejos en empresas de todos los tamaños. Siempre comprometido y dando la milla extra para entregar el mejor servicio y el mejor software.',
    },
    name: 'Jorge Alejandro Núñez Giraldo',
    role: {
      en: 'Agile/SCRUM Product Owner and Business Analyst',
      es: 'Product Owner Agile/SCRUM y analista de negocio',
    },
  },
];
