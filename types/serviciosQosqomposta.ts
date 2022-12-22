export interface IncludedNotIncluded {
  id: string;
  name: string;
}

export interface OptionServices {
  id: string;
  value: string | number;
  label: string;
}
export interface ServiceQosqomposta {
  id: string;
  name: string;
  image?: string;
  altName?: string;
  pricing: OptionServices[];
  description: string;
  included?: IncludedNotIncluded[];
  notIncludedServices?: IncludedNotIncluded[];
  featured?: boolean;
  location?: OptionServices[];
  currency?: string;
  daysOfPickUp: OptionServices[];
}
