export interface QosqompostaService {
    _id: string;
    name: string;
    description: string;
    summary?: string;
    includes?: string[];
    notIncludes?: string[];
    price: number;
    type: string;
    modality?: string;
    pick_up_days: string[];
    place_of_pickup: string[];
    clientType: string[];
    createdAt?: string;
    updatedAt?: string;
    icon?: string;
    delivery?: boolean;
    bucket?: boolean;
}

export interface ModalityService extends QosqompostaService {
    price: number;
    id: string;
}
export interface QosqompostaServiceMerged extends Omit<QosqompostaService, 'modality'> {
    modality: ModalityService[];
}
