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
}
