export interface AppState {
    user: AppUser;
}
export interface AppUser {
    displayName: string;
    photoUrl?: string;
}
