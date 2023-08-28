import {
  WasteManagementServiceMerged,
  WasteManagementService,
} from '@/types/wasteManagement';

export const mergeServicesByType = (
  services: WasteManagementService[],
): WasteManagementServiceMerged[] => {
  const mergedServices: { [type: string]: WasteManagementServiceMerged[] } = {};
  services.forEach(service => {
    const serviceType = service.type;
    if (!mergedServices[serviceType]) {
      mergedServices[serviceType] = [
        {
          ...service,
          modality: [
            {
              ...service,
              id: service._id,
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
          ...service,
          id: service._id,
          price: service.price,
        });
      } else {
        mergedServices[serviceType].push({
          ...service,
          modality: [
            {
              ...service,
              id: service._id,
              price: service.price,
            },
          ],
        });
      }
    }
  });

  const result: WasteManagementServiceMerged[] = [];
  for (const type in mergedServices) {
    if (Object.prototype.hasOwnProperty.call(mergedServices, type)) {
      result.push(...mergedServices[type]);
    }
  }

  return result;
};
