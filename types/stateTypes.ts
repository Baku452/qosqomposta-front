import { UserInfo } from 'firebase-admin/lib/auth/user-record';
import { WasteService } from './wasteManagement';

export interface AppState {
  user: AppUser;
}

export interface AppUser extends Omit<UserInfo, 'toJSON'> {
  name?: string;
  membership?: string;
  isActive?: string;
  roles?: string[];
  isRegistering?: boolean;
}

export interface WasteManagementServices {
  services: WasteService[] | null;
  selectedService?: string;
  isFetchingServices?: boolean;
}
