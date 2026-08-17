export interface Stat {
  value: string;
  label: string;
  tone: 'yellow' | 'red' | 'lime' | 'cyan';
}

export const stats: Stat[] = [
  { value: '+120', label: 'MARCAS TRABAJADAS', tone: 'yellow' },
  { value: '8,4x', label: 'ROAS MEDIO EN PAID', tone: 'red' },
  { value: '+400', label: 'CAMPAÑAS LANZADAS', tone: 'lime' },
  { value: '92%', label: 'CLIENTES QUE RENUEVAN', tone: 'cyan' },
];