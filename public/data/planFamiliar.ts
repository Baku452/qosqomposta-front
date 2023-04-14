import { AccordionItems } from '@/types/mainTypes';
import { COSTO_RECOJO_RECICLABLES_ECOLADRILLOS } from './prices';

export const LINK_CTA_SERVICIO_FAMILIAR = '/';
export const HOURS_DATES_ACCORDION = 'Horarios y días de recojo';
export const MONTHLY_COST_ACCORDION = 'Costo Mensual ';
export const ZERO_RESIDUE_ACCORDION = 'Cero Residuo ';
export const ZERO_RESIDUE_ACCORDION_CONTENT =
    'Puedes solicitar un saQuillo para juntar tus residuos reciclables ACEPTADOS como botellas de plasticos transparentes y duras, latas, tetrapak, contenedores de vidrio, y tambien ECOLADRILLOS, ¡convirtiendote en una familia de cero residuos! No tiene ningun costo adicional, por el contrario, agradecemos tu compromiso ambiental con más compost y talleres gratuitos.';
export const MONTHLY_COST_ACCORDION_CONTENT = `Recojo mensual: S/20. <br>
Recojo semanal: S/50.`;

export const ACOPIO_DE_RESIDUOS_IMG =
    'https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1675826957/servicios/acopio-de-residuos_vsgue0.png';

export const SERVICIO_BARRIO_QOMPOSTERO_IMG =
    'https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1676947500/servicios/servicio-barrio-qompostero_iypfiq.png';

export const SERVICIO_COMPOSTAJE_COMERCIAL_IMG =
    'https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1675826957/servicios/servicio-compostaje-comercial_dwb94j.png';

// Recoleccion de Residuos
export const RECOLECCION_RESIDUOS_ORGANICOS_TITLE = 'Recoleccion de residuos organicos';
export const RECOLECCION_RESIDUOS_ORGANICOS_CONTENT =
    ' El servicio comienza cuando te entregamos el balde Qosqomposta. Tú juntas tus residuos orgánicos en este balde y nosotros lo recogemos de tu domicilio y te entregamos un nuevo balde limpio y listo para ser usado otra vez.';
export const RECOLECCION_RESIDUOS_ORGANICOS_IMG =
    'https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1675830289/servicios/recoleccion-residuos_ap56qk.png';

export const RECOLECCION_RESIDUOS_ORGANICOS_ACCORDION: AccordionItems[] = [
    {
        title: HOURS_DATES_ACCORDION,
        content: `<span className="text-greenQ font-semibold">
            Horarios: 7am - 1pm
            </span><br />
            <span className="text-greenQ font-semibold">
                Días de recojo:
            </span>
            JUEVES: San Blas, Centro Histórico <br />
            VIERNES: Cercado,Santiago, Wanchaq Norte <br />
            SABADO: San Sebastian, San Jeronimo, Wanchaq Sur <br /> `,
    },
    {
        title: MONTHLY_COST_ACCORDION,
        content: MONTHLY_COST_ACCORDION_CONTENT,
    },
    {
        title: ZERO_RESIDUE_ACCORDION,
        content: ZERO_RESIDUE_ACCORDION_CONTENT,
    },
];

//Acopio de Residuos
export const ACOPIO_DE_RESIDUOS_TITLE = 'Acopio de residuos organicos';
export const ACOPIO_DE_RESIDUOS_CONTENT =
    'El servicio empieza cuando vas a uno de nuestros puntos de acopio y recoges el balde Qosqomposta (un balde de 20 lt). Aquí juntaras tus restos orgánicos aprobados. Una vez lleno, debes traerlo de vuelta al centro de acopio y cambiarlo por un nuevo balde. Tus residuos serán llevados y procesados en nuestra planta compostera hasta convertirse en un alimento para el suelo.';

export const ACOPIO_DE_RESIDUOS_ACCORDION: AccordionItems[] = [
    {
        title: 'Puntos de Acopio',
        content: `1) Nido Qompostero. Urb Ttio Q-15, detrás del Mercado de Ttio. <br />
                  2) Ch'usaq Mercado Sostenible, Urb. Larapa D-2-12, Parque 1 Larapa.`,
    },
    {
        title: 'Costo Mensual',
        content: `Acopio mensual: S/15.<br />
                  Acopio semanal: S/40.`,
    },
];

//Recojo de Reciclables y Ecoladrillo
export const RECOJO_RECICLABLES_TITLE = 'RECOJO DE RECICLABLES Y ECOLADRILLOS ';
export const RECOJO_RECICLABLES_IMG =
    'https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1675826957/servicios/recojo-de-reciclables_oqopq3.png';

export const RECOJO_RECICLABLES_CONTENT =
    'Si aún no deseas compostar, pero te interesa ayudar a reducir tus desperdicios por medio de reciclaje y ecoladrillos, ponemos a tu disposición estas opciones:';

export const RECOJO_RECICLABLES_ACCORDION: AccordionItems[] = [
    {
        title: 'Servicio de Acopio',
        content: `Junta ordenadamente tus residuos reciclables aceptados*, limpios y secos en un saquillo. Cuando este lleno, tráelo a nuestro punto de acopio detrás del Mercado de Ttio (mapa).
        Recuerda que cada saquillo de reciclables o ecoladrillo que nos entregues, equivale a la entrega de 1kg de compost para tus plantas. <br />
        Horario de acopio: Sábados de 9am - 1pm <br /> 
        Costo: Gratuito
        `,
    },
    {
        title: 'Servicio de Recojo',
        content: `Incluye la entrega de un parante y saquillos en consignación para juntar reciclables*, flyer impreso y recojo de acuerdo a tu ubicación.
        Horarios: 7am - 1pm <br />
        Horarios: 7am - 1pm <br /> <br />
        Días de recojo:<br />
        JUEVES: San Blas, Centro Histórico<br />
        VIERNES: Cercado, Santiago, Wanchaq Norte<br />
        SABADO: San Sebastian, San Jeronimo, Wanchaq Sur<br />
        Costo $/. ${COSTO_RECOJO_RECICLABLES_ECOLADRILLOS} Pago único inicial por cada parante en consignación. 
        `,
    },
];

export const RECOJO_RECICLABLES_ADVERTISE =
    '*Luego de tu inscripción, te enviaremos los residuos reciclables que aceptamos. Si no cumples con las instrucciones, lamentamos que no podremos aceptar tus residuos.';

//Microqomposteros
export const MICROQOMPOSTEROS_IMG =
    'https://res.cloudinary.com/https-qosqomposta-com/image/upload/v1676952379/servicios/microqompostero_ud20i2.png';
