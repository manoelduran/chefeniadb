import axios from 'axios';
import { UserState } from '../store/modules/user/types';

export const api = axios.create({
    baseURL: "http://192.168.15.11:3333",
})

export const getMvpsByRoomId = async (room_id: string) => {
    const response = await api.get(`/roomMvps/${room_id}`);
    console.log('response', response)
    return response;
};

export const getRooms = async () => {
    const response = await api.get("/rooms");
    console.log('response', response)
    return response;
};

export const getMvp = async (name: string) => {
    const response = await api.get(`/mvps/${name}`);
    return response;
};

export const authUser = async (data: FormUser) => {
    const response = await api.post<UserState>("/session", data);
    console.log('response', response.data)
    return response;
}