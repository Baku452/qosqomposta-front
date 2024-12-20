export interface Family {
  family_id: string;
  name: string;
  address: string;
  reference: string;
  isActive: boolean;
  deletedAt?: Date;
  district?: string;
  customId: string;
}
