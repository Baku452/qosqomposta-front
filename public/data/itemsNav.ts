import {
    ABOUT_US_PATH,
    BLOG_PATH,
    SERVICES_PATH,
    SERVICE_COMERCIAL_PATH,
    SERVICE_FAMILIAR_PATH,
    TALLERES_PATH,
} from 'routes.config';

export interface ItemsNav {
    label: string;
    link: string;
    options?: ItemsNav[];
}
export const ITEMS_NAV: ItemsNav[] = [
    {
        label: 'Servicios',
        link: SERVICES_PATH,
        options: [
            {
                label: 'Familiar',
                link: SERVICE_FAMILIAR_PATH,
            },
            {
                label: 'Barrio o Comercial',
                link: SERVICE_COMERCIAL_PATH,
            },
        ],
    },
    {
        label: 'Talleres',
        link: TALLERES_PATH,
    },
    {
        label: 'Blog',
        link: BLOG_PATH,
    },
    {
        label: 'Sobre Nosotros',
        link: ABOUT_US_PATH,
    },
];
