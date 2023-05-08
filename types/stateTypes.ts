import { UserInfo } from 'firebase-admin/lib/auth/user-record';

export interface AppState {
    user: AppUser;
}

export interface CompostUserDetails {
    amountCompost?: number;
    amountTrash?: number;
}
export interface AppUser extends Omit<UserInfo, 'toJSON'> {
    membership?: string;
    isActive?: string;
    roles?: string[];
    compostDetails?: CompostUserDetails;
    isLoading?: boolean;
}

export interface QosqompostaServices {
    selectedService?: string;
}
