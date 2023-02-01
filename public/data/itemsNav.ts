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
                label: 'Familiar',
                link: '/servicios/familiar',
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
