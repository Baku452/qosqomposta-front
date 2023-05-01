import { QosqompostaServiceMerged, QosqompostaService } from '@/types/serviceQosqomposta';

export const mergeServicesByType = (
    services: QosqompostaService[],
): QosqompostaServiceMerged[] => {
    const mergedServices: { [type: string]: QosqompostaServiceMerged[] } = {};
    services.forEach(service => {
        const serviceType = service.type;
        if (!mergedServices[serviceType]) {
            mergedServices[serviceType] = [
                {
                    ...service,
                    modality: [
                        {
                            id: service._id,
                            name: service.modality,
                            price: service.price,
                        },
                    ],
                },
            ];
        } else {
            const existingService = mergedServices[serviceType].find(
                currentService => currentService.type === service.type,
            );

            if (existingService) {
                existingService.modality.push({
                    id: service._id,
                    name: service.modality,
                    price: service.price,
                });
            } else {
                mergedServices[serviceType].push({
                    ...service,
                    modality: [
                        {
                            id: service._id,
                            name: service.modality,
                            price: service.price,
                        },
                    ],
                });
            }
        }
    });

    const result: QosqompostaServiceMerged[] = [];
    for (const type in mergedServices) {
        if (Object.prototype.hasOwnProperty.call(mergedServices, type)) {
            result.push(...mergedServices[type]);
        }
    }

    return result;
};
