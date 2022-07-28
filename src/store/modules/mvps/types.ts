
export const LOAD_MVPS_START = 'LOAD_MVPS_START';
export const LOAD_MVPS_SUCCESS = 'LOAD_MVPS_SUCCESS';
export const LOAD_MVPS_ERROR = 'LOAD_MVPS_ERROR';


export interface MvpsState {
    isLoading: boolean;
    mvps: Mvp[];
    error: string | null;
}