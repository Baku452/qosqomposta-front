import { FilterParam, FilterParamsClients, SortCriteria } from '@/types/mainTypes';

export function extractFields(dataset: any) {
  const result = [];

  for (const obj of dataset) {
    const { fields } = obj;
    const { nombdep, capital } = fields;

    result.push({ value: capital, label: capital, nombdep });
  }

  return result;
}

export const toggleSortDirection = (currentDirection?: SortCriteria): SortCriteria => {
  if (currentDirection === 'asc') {
    return 'desc';
  }
  if (currentDirection === 'desc') {
    return null;
  }

  if (currentDirection === null) {
    return 'asc';
  }

  return null;
};

export const buildFetchUsersURL = (filters?: FilterParamsClients): string => {
  let url = '';

  if (filters) {
    if (filters.compost) {
      url += `compost=${filters.compost.value}&`;
    }

    if (filters.name) {
      url += `name=${filters.name.value}&`;
    }

    if (filters.district) {
      url += `district=${filters.district.value}&`;
    }

    if (filters.service) {
      url += `service=${filters.service.value}&`;
    } else {
      url += `service=DEFAULT`;
    }
  }

  if (filters?.sortCriteria?.value && filters?.sortCriteria?.sortDirection) {
    url += `sortCriteria=${filters?.sortCriteria?.value}:${filters?.sortCriteria?.sortDirection}`;
  }
  return url;
};

export const convertPriceToString = (value: number): string => {
  if (value === 0) return 'Gratis';
  return `S/. ${value.toFixed(2)}`;
};

export const defaultValue = (value: string | undefined | null): string => {
  if (value != null) {
    return value;
  }
  return '--';
};
