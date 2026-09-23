// Single place for links and third-party accounts.
// Empty strings switch the related feature to its fallback (usually email).
export const SITE = {
  url: 'https://carlosrendon.co',
  name: 'Carlos Rendón',
  email: 'carlos.rendon.duque@gmail.com',
  linkedin: 'https://www.linkedin.com/in/carlosrendonduque/',
  github: 'https://github.com/carlosrendonduque',
  // Buttondown username; the newsletter form posts to it when set.
  buttondown: '',
  // Conserje chat backend. The widget only renders when this has a value.
  // In dev it points at the local backend (php -S localhost:8000 -t public in
  // ~/Documents/repos/artificial-intelligence/conserje), so the chat is there
  // while Carlos works on the site. The published build gets '' until the
  // backend is deployed: localhost is the visitor's own machine, and an https
  // page cannot call http at all, so a published chat could only ever fail.
  // Replace the whole expression with the deployed https URL to go live.
  conserje: import.meta.env.DEV ? 'http://localhost:8000/chat' : '',
  // Umami website id; the analytics script only loads when this is set.
  umami: '',
  umamiSrc: 'https://cloud.umami.is/script.js',
  // Published day rate floor for build work, in AUD. Zero hides the price.
  // Each language formats it with its own thousands separator.
  dayRate: 1200,
  // Last content review, shown in the footer and on /now.
  updated: '2026-09-22',
} as const;

export const mailto = (subject: string, body = '') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
