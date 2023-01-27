import { loadMvpsStart } from "./actions";

export const LOAD_MVPS_START = 'LOAD_MVPS_START';
export const LOAD_MVPS_SUCCESS = 'LOAD_MVPS_SUCCESS';
export const LOAD_MVPS_ERROR = 'LOAD_MVPS_ERROR';

export type onSendCallForShowMvpStart = ReturnType<typeof loadMvpsStart>
export interface MvpsState {
    isLoading: boolean;
    mvps: Mvp[];
    error: string | null;
}