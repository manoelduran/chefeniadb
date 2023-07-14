import axios from 'axios';
import { UserState } from '../store/modules/user/types';

export const api = axios.create({
    baseURL: "https://x842j2ebxd.execute-api.us-east-1.amazonaws.com/dev/",
})

export const getMvpsByRoomId = async (room_id: string) => {
    const response = await api.get(`/roomMvps/${room_id}`);
    return response;
};

export const getRooms = async () => {
    const response = await api.get("/rooms");
    return response;
};

export const getMvp = async (name: string) => {
    const response = await api.get(`/mvps/${name}`);
    return response;
};

export const authUser = async (data: FormUser) => {
    const response = await api.post<UserState>("/session", data);
    return response;
}