export interface ProcessStep {
  num: string;
  title: string;
  description: string;
  duration: string;
  tone: 'yellow' | 'red' | 'lime' | 'cyan';
}

export const process: ProcessStep[] = [
  {
    num: '01',
    title: 'Nos metemos en tu negocio',
    description:
      'Llamadas sin agenda de ventas. Preguntas incómodas. Tu equipo, tu producto y tus números vistos desde dentro.',
    duration: 'Semana 1',
    tone: 'yellow',
  },
  {
    num: '02',
    title: 'Diagnóstico y plan',
    description:
      'Un documento, sin powerpoint. Qué está roto, qué se aprovecha y qué se va a hacer, con fechas y responsables.',
    duration: 'Semanas 1-2',
    tone: 'red',
  },
  {
    num: '03',
    title: 'Ejecución sin teatro',
    description:
      'Campañas en marcha. Contenido publicado. Ideas que se prueban esta semana, no en el trimestre que viene.',
    duration: 'Semanas 2-6',
    tone: 'lime',
  },
  {
    num: '04',
    title: 'Medimos, cortamos, escalamos',
    description:
      'Cada 30 días: números encima de la mesa. Lo que no rinde muere. Lo que rinde, recibe más presupuesto.',
    duration: 'Mensual',
    tone: 'cyan',
  },
];