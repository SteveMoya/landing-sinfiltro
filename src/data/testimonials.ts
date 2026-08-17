export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

// mock: testimonios ficticios de clientes
export const testimonials: Testimonial[] = [
  {
    quote:
      'La primera agencia que nos dijo qué estábamos haciendo mal a los 20 minutos de la primera llamada. Respeto.',
    name: 'Roberto Vega',
    role: 'CEO · Torque Motors',
    initials: 'RV',
  },
  {
    quote:
      'Duplicaron nuestro ROAS en dos meses y el reporte mensual cabe en una página. Así se trabaja.',
    name: 'Ana López',
    role: 'Growth · Nube & Co',
    initials: 'AL',
  },
  {
    quote:
      'El lanzamiento agotó stock en 48 horas. Estábamos preparados para un mes. No nos quejamos.',
    name: 'Marcos Peña',
    role: 'Fundador · Kartelo',
    initials: 'MP',
  },
];