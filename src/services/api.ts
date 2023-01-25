import axios from 'axios';

export const api = axios.create({
    baseURL: "http://192.168.15.10:3333",
})

export const getMvpsByRoomId = async (room_id: string) => {
    const response = await api.get(`/roomMvps/${room_id}`);
    console.log('response', response)
    return response;
};

export const getMvp = async (name: string) => {
    const response = await api.get(`/mvps/${name}`);
    return response;
};

// export const createUser = async (data: FormUser) => {
//     const response = await api.post("/users", data);
//     return response;
// }