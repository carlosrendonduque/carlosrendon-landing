// Single place for links and third-party accounts.
// Empty strings switch the related feature to its fallback (usually email).
export const SITE = {
  url: 'https://carlosrendon.co',
  name: 'Carlos Rendón',
  email: 'carlos.rendon.duque@gmail.com',
  linkedin: 'https://www.linkedin.com/in/carlosrendonduque/',
  github: 'https://github.com/carlosrendonduque',
  // Cal.com booking page for Unoffice Hours, e.g. 'https://cal.com/carlosrendon/unoffice-hours'
  calUrl: '',
  // Buttondown username; the newsletter form posts to it when set.
  buttondown: '',
  // Last content review, shown in the footer and on /now.
  updated: '2026-09-22',
} as const;

export const mailto = (subject: string, body = '') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
