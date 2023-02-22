export const WEB_BANNER_URL =
    'https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1675311230/web-home/Banner_kdm99t.jpg';

export const PLAN_FAMILIAR_IMAGE =
    'https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1673919886/Planes_Familiares_lrgqbv.jpg';

export const PLAN_COMERCIAL_IMAGE =
    'https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1673919885/Planes_Comerciales2_wzhw52.jpg';

export interface PLANS_HOME {
    title: string;
    itemsIncludes: PLANS_HOME_INCLUDES[];
}

export interface PLANS_HOME_INCLUDES {
    title: string;
    key: string;
}
export const PLAN_FAMILIAR: PLANS_HOME = {
    title: 'Planes Personales o Familiares',
    itemsIncludes: [
        {
            title: 'Recolección de Residuos Orgánicos',
            key: 'residuosOrgánicos',
        },
        {
            title: 'Acopio de residuos orgánicos',
            key: 'acopio',
        },
        {
            title: 'Recojo de Reciclables o Eco Ladrillos',
            key: 'ecoladrillos',
        },
    ],
};

export const PLAN_COMERCIAL: PLANS_HOME = {
    title: 'Planes Grupales o Comerciales',
    itemsIncludes: [
        {
            title: 'Servicio de Barrio Compostero',
            key: 'barrio',
        },
        {
            title: 'Servicio de Compostaje Comercial',
            key: 'comercial',
        },
    ],
};

export const TITLE_BLOG_HOME = 'Conoce Nuestros Talleres Q';
export const BANNER_PLAN_FAMILIAR =
    'https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1674527487/web-home/banner_plan_familiar_lwxxkp.jpg';

export const BANNER_PLAN_COMERCIAL =
    'https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1677035178/web-home/banner_plan_comercial_jbcu9k.png';
export const BANNER_TALLER_HOME =
    'https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1675386717/web-home/Collage_foto_taller_qppwhg.jpg';

export const QOSQOMPOSTA_FACEBOOK_URL = 'https://www.facebook.com/Qosqomposta';
export const QOSQOMPOSTA_INSTAGRAM_URL = 'https://www.instagram.com/qosqomposta/';
export const QOSQOMPOSTA_WHATSAPP_URL = 'wa.link/0pqt7s';

// Services CTA
export const RECOLECCION_RESIDUOS_ORGANICOS_CTA = '/';
