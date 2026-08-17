export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  name: string;
  url: string;
  icon: 'instagram' | 'x' | 'tiktok' | 'youtube';
}

export const site = {
  name: 'SIN.FILTRO',
  tagline: 'Decimos lo que otros solo susurran.',
  description:
    'Estudio de comunicación y marketing directo. Estrategia, contenido y campañas sin humo, sin capas de pelota, sin filtros.',
  url: 'https://sinfiltro.stevemoya.me',
  email: 'hola@sinfiltro.agencia',
  founded: 2019,

  nav: [
    { label: 'Manifiesto', href: '#manifiesto' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Opiniones', href: '#opiniones' },
  ] satisfies NavItem[],

  hero: {
    badge: 'AGENCIA DE COMUNICACIÓN · DESDE 2019',
    titleLines: ['DECIMOS LO QUE', 'OTROS SOLO', 'SUSURRAN.'],
    subtitle:
      'Estrategia, contenido y campañas directas. Sin humo, sin relleno, sin filtros. Si no funciona, lo borramos y lo hacemos bien.',
    primaryCta: 'Hablemos claro',
    secondaryCta: 'Ver manifiesto',
  },

  socials: [
    { name: 'Instagram', url: 'https://instagram.com/sinfiltro.agencia', icon: 'instagram' },
    { name: 'X', url: 'https://x.com/sinfiltro', icon: 'x' },
    { name: 'TikTok', url: 'https://tiktok.com/@sinfiltro.agencia', icon: 'tiktok' },
    { name: 'YouTube', url: 'https://youtube.com/@sinfiltroagencia', icon: 'youtube' },
  ] satisfies Social[],

  marquee: ['SIN HUMO', 'SIN RELLENO', 'SIN MIEDO', 'SIN FILTROS', 'SIN EXCUSAS', 'CON RESULTADOS'] as const,
};