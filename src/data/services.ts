import type { IconName } from '../components/ui/Icon.astro';

export interface Service {
  icon: IconName;
  title: string;
  tag: string;
  description: string;
  tone: 'yellow' | 'red' | 'lime' | 'cyan' | 'pink' | 'cream';
  sticker?: string;
}

export const services: Service[] = [
  {
    icon: 'rocket',
    title: 'Estrategia de marca',
    tag: '01',
    description:
      'Diagnóstico sin anestesia: quién eres, quién deberías ser y qué coño te diferencia. En 15 días tienes el plan en la mano.',
    tone: 'yellow',
    sticker: 'SIN PELOTAS',
  },
  {
    icon: 'pen',
    title: 'Contenido que vende',
    tag: '02',
    description:
      'Scripts, guiones y campañas que suenan a humanos, no a departamento de marketing. Texto que aprieta el gatillo.',
    tone: 'red',
    sticker: 'DIRECTO',
  },
  {
    icon: 'megaphone',
    title: 'Campañas pagadas',
    tag: '03',
    description:
      'Meta, Google, TikTok. Presupuesto que se mide en ROAS, no en bonitos. Si la métrica no crece, se mata la campaña.',
    tone: 'lime',
    sticker: 'ROAS > EGO',
  },
  {
    icon: 'bolt',
    title: 'Social media real',
    tag: '04',
    description:
      'Nada de publicar por publicar. Calendarios con intención, comunidad con respuesta y crisis manejadas en minutos.',
    tone: 'cyan',
    sticker: '24/7',
  },
  {
    icon: 'presentation',
    title: 'Lanzamientos 360°',
    tag: '05',
    description:
      'Del teaser al post-venta: lanzamos productos, servicios y eventos con todo el ruido necesario para que se escuchen.',
    tone: 'pink',
    sticker: 'RUIDO BUENO',
  },
  {
    icon: 'chart',
    title: 'Analítica y reportes',
    tag: '06',
    description:
      'Reportes de una página, en lenguaje humano. Lo que funciona, lo que no, y lo que vamos a hacer al respecto.',
    tone: 'cream',
  },
];