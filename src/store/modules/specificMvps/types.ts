import { loadSpecificMvpsStart } from "./actions";

export const LOAD_SPECIFIC_MVPS_START = 'LOAD_SPECIFIC_MVPS_START';
export const LOAD_SPECIFIC_MVPS_SUCCESS = 'LOAD_SPECIFIC_MVPS_SUCCESS';
export const LOAD_SPECIFIC_MVPS_ERROR = 'LOAD_SPECIFIC_MVPS_ERROR';


export type onSendCallForSpecificMvpsStart = ReturnType<typeof loadSpecificMvpsStart>

export interface SpecificMvpsState {
    isLoading: boolean;
    specificMvps: Mvp[];
    error: string | null;
}