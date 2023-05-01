export interface QosqompostaService {
    _id: string;
    name: string;
    price: number;
    type: string;
    modality?: string;
    pick_up_days: string[];
    place_of_pickup: string[];
    clientType: string[];
    createdAt?: string;
    updatedAt?: string;
    icon?: string;
}

export interface QosqompostaServiceMerged extends Omit<QosqompostaService, 'price'> {
    prices: number[];
}
