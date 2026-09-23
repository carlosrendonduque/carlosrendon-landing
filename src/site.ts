// Single place for links and third-party accounts.
// Empty strings switch the related feature to its fallback (usually email).
export const SITE = {
  url: 'https://carlosrendon.co',
  name: 'Carlos Rendón',
  email: 'carlos.rendon.duque@gmail.com',
  linkedin: 'https://www.linkedin.com/in/carlosrendonduque/',
  github: 'https://github.com/carlosrendonduque',
  // Buttondown username; the newsletter form posts to it when set.
  buttondown: 'carlosrendon',
  // Conserje chat backend. The widget only renders when this has a value.
  //
  // In dev it points at the local server (`node --experimental-strip-types
  // bin/serve.ts` in ~/Documents/repos/artificial-intelligence/conserje/server)
  // so the chat is there while Carlos works on the site, and no published page
  // ever depends on a machine only he can reach.
  //
  // In production it is the deployed backend, which is a separate Netlify
  // project: this site is static and stays on GitHub Pages. carlosrendon.co is
  // in that backend's per-site origin allowlist, so the cross-origin call is
  // allowed from here and refused from anywhere else.
  conserje: import.meta.env.DEV
    ? 'http://localhost:8000/chat'
    : 'https://api.carlosrendon.co/chat',
  // Umami website id; the analytics script only loads when this is set.
  umami: '0c89b82e-bc41-4191-aba1-ab86e7c79269',
  umamiSrc: 'https://cloud.umami.is/script.js',
  // Published day rate floor for build work, in AUD. Zero hides the price.
  // Each language formats it with its own thousands separator.
  dayRate: 1200,
  // Last content review, shown in the footer and on /now.
  updated: '2026-09-22',
} as const;

export const mailto = (subject: string, body = '') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
