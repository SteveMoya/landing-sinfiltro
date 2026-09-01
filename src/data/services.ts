import type { IconName } from '../components/ui/Icon.astro';

export interface Service {
  icon: IconName;
  title: string;
  tag: string;
  description: string;
  long: string;
  what: string[];
  improves: string;
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
    long:
      'Sentamos contigo (y si hace falta, contra ti) para destripar tu marca: tu mercado, tu competencia, tu mensaje y tus incoherencias. Salimos con una estrategia de posicionamiento y un plan de acción que no se queda en un PDF bonito.',
    what: [
      'Auditoría completa de marca: posicionamiento, mensaje y competencia.',
      'Definición de personalidad, tono y propuesta de valor.',
      'Roadmap de 90 días con acciones concretas y medibles.',
    ],
    improves:
      'Dejas de ser "otra marca más" y empiezas a ser la que el cliente recuerda y elige sin dudar.',
    tone: 'yellow',
    sticker: 'SIN PELOTAS',
  },
  {
    icon: 'pen',
    title: 'Contenido que vende',
    tag: '02',
    description:
      'Scripts, guiones y campañas que suenan a humanos, no a departamento de marketing. Texto que aprieta el gatillo.',
    long:
      'Escribimos y pautamos contenido que habla el idioma de tu cliente real. Nada de "soluciones innovadoras": frases que responden objeciones, que venden y que se comparten. Texto con intención de compra, no relleno.',
    what: [
      'Guiones para videos, reels y campañas pagadas.',
      'Copywriting para web, email y redes que convierte.',
      'Estructura de mensajes por etapa del embudo.',
    ],
    improves:
      'Tu comunicación pasa de gastar a generar: más respuestas, más clics y más ventas por el mismo contenido.',
    tone: 'red',
    sticker: 'DIRECTO',
  },
  {
    icon: 'megaphone',
    title: 'Campañas pagadas',
    tag: '03',
    description:
      'Meta, Google, TikTok. Presupuesto que se mide en ROAS, no en bonitos. Si la métrica no crece, se mata la campaña.',
    long:
      'Planificamos, lanzamos y optimizamos campañas en las plataformas donde está tu cliente. Cada peso invertido tiene un objetivo: ventas. Optimizamos en vivo, cortamos lo que no funciona y escalamos lo que rinde.',
    what: [
      'Gestión de campañas en Meta, Google y TikTok Ads.',
      'Segmentación de audiencias con intención de compra.',
      'Optimización continua en vivo hasta maximizar el ROAS.',
    ],
    improves:
      'Dejas de tirar presupuesto al aire y empiezas a pagar solo por resultados que se ven en la cuenta de resultados.',
    tone: 'lime',
    sticker: 'ROAS > EGO',
  },
  {
    icon: 'bolt',
    title: 'Social media real',
    tag: '04',
    description:
      'Nada de publicar por publicar. Calendarios con intención, comunidad con respuesta y crisis manejadas en minutos.',
    long:
      'Gestionamos tus redes con estrategia: contenido alineado al objetivo, comunidad que recibe respuesta y reputación vigilada. Si algo se sale de control, respondemos en minutos, no en días.',
    what: [
      'Calendarios con intención: cada post tiene un objetivo.',
      'Gestión de comunidad y respuesta a clientes en tiempo real.',
      'Monitoreo y manejo de crisis para proteger tu reputación.',
    ],
    improves:
      'Tus redes dejan de ser un escaparate muerto y se convierten en canal de venta y de confianza con tu audiencia.',
    tone: 'cyan',
    sticker: '24/7',
  },
  {
    icon: 'presentation',
    title: 'Lanzamientos 360°',
    tag: '05',
    description:
      'Del teaser al post-venta: lanzamos productos, servicios y eventos con todo el ruido necesario para que se escuchen.',
    long:
      'Coordinamos el lanzamiento completo: teaser, expectativa, campañas, contenido, día del lanzamiento y seguimiento post-venta. Todo sincronizado para que tu producto no pase desapercibido.',
    what: [
      'Estrategia de expectativa con teasers y secuencia de campañas.',
      'Coordinación de contenido, publicidad y canales en el día clave.',
      'Seguimiento y retención post-venta para maximizar el retorno.',
    ],
    improves:
      'Tu producto sale con el máximo impacto posible: más alcance, más ventas el primer día y una base de clientes que vuelve.',
    tone: 'pink',
    sticker: 'RUIDO BUENO',
  },
  {
    icon: 'chart',
    title: 'Analítica y reportes',
    tag: '06',
    description:
      'Reportes de una página, en lenguaje humano. Lo que funciona, lo que no, y lo que vamos a hacer al respecto.',
    long:
      'Medimos todo lo que hacemos y te lo contamos claro. Reportes de una página, sin tecnicismos: qué funcionó, qué no, cuánto costó y qué haremos. Decisiones basadas en datos, no en corazonadas.',
    what: [
      'Dashboards y reportes legibles de una sola página.',
      'Análisis de métricas reales de cada canal y campaña.',
      'Recomendaciones accionables con próximo paso definido.',
    ],
    improves:
      'Dejas de adivinar y tomas decisiones con datos: sabes exactamente dónde rinde tu dinero y qué ajustar para crecer.',
    tone: 'cream',
  },
];