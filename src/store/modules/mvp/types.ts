import { loadMvpStart } from "./actions";

export const LOAD_MVP_START = 'LOAD_MVP_START';
export const LOAD_MVP_SUCCESS = 'LOAD_MVP_SUCCESS';
export const LOAD_MVP_ERROR = 'LOAD_MVP_ERROR';

export type onSendCallForMvpStart = ReturnType<typeof loadMvpStart>

export interface MvpState {
    isLoading: boolean;
    mvp: Mvp;
    error: string | null;
}