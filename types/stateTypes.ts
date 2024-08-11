import { UserInfo } from 'firebase-admin/lib/auth/user-record';
import { WasteService } from './wasteManagement';

export interface AppState {
  user: AppUser;
}

export interface CompostUserDetails {
  amountCompost?: number;
  amountTrash?: number;
}
export interface AppUser extends Omit<UserInfo, 'toJSON'> {
  name?: string;
  membership?: string;
  isActive?: string;
  roles?: string[];
  compostDetails?: CompostUserDetails;
  isRegistering?: boolean;
}

export interface WasteManagementServices {
  services: WasteService[] | null;
  selectedService?: string;
  isFetchingServices?: boolean;
}
