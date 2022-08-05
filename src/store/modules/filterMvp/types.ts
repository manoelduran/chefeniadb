import { loadFilterMvpStart } from "./actions";

export const LOAD_FILTER_MVP_START = 'LOAD_FILTER_MVP_START';
export const LOAD_FILTER_MVP_SUCCESS = 'LOAD_FILTER_MVP_SUCCESS';
export const LOAD_FILTER_MVP_ERROR = 'LOAD_FILTER_MVP_ERROR';

export type onSendCallForFilterMvpStart = ReturnType<typeof loadFilterMvpStart>

export interface FilterMvpState {
    isLoading: boolean;
    mvp: Mvp;
    error: string | null;
}