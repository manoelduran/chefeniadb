
export const LOAD_ROOMS_START = 'LOAD_ROOMS_START';
export const LOAD_ROOMS_SUCCESS = 'LOAD_ROOMS_SUCCESS';
export const LOAD_ROOMS_ERROR = 'LOAD_ROOMS_ERROR';


export interface RoomsState {
    isLoading: boolean;
    rooms: Room[];
    error: string | null;
}