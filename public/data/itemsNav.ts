export interface ItemsNav {
  label: string;
  link: string;
  options?: ItemsNav[];
}
export const ITEMS_NAV: ItemsNav[] = [
  {
    label: 'Servicios',
    link: '/servicios',
    options: [
      {
        label: 'Personal o Familiar',
        link: '/servicios/personal',
      },
      {
        label: 'Barrio o Comercial',
        link: '/servicios/comercial',
      },
    ],
  },
  {
    label: 'Talleres',
    link: '/talleres',
  },
  {
    label: 'Blog',
    link: '/blog',
  },
  {
    label: 'Sobre Nosotros',
    link: '/sobre-nosotros',
  },
];
