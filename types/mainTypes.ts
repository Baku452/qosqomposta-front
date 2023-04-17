export interface AccordionItems {
    title: string;
    content: string;
}

export interface ServiceSectionItem {
    id: string;
    title: string;
    content?: string;
    imageSection?: string;
    accordionItems?: AccordionItems[];
    advertise?: string;
    buttonCTA?: {
        link: string;
        label: string;
    };
}

export interface ImageWeb {
    altTitle: string;
    urlImage: string;
    customClassName?: string;
}

export interface PathPage {
    name: string;
    path: string;
    key: string;
}

export interface AsyncActionType {
    request: string;
    success: string;
    error: string;
}
