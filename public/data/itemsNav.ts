export interface ItemsNav {
    label: string;
    link: string;
    options?: ItemsNav[];
}
export const ITEMS_NAV: ItemsNav[] = [
    {
        label: 'Servicios',
        link: '/planes',
        options: [
            {
                label: 'Familiar',
                link: '/planes/familiar',
            },
            {
                label: 'Barrio o Comercial',
                link: '/planes/comercial',
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
