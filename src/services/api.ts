import axios from 'axios';

export const api = axios.create({
    baseURL: "http://192.168.15.9:3333",
})

export const getMvps = async () => {
    const response = await api.get("/mvps");
    return response;
};

export const getSpecificMvps = async (room: string) => {
    console.log('room', room)
    if (room === 'room_1') {
        const response = await api.get("/room_1");
        console.log('response', response)
        return response;
    }
    if (room === 'room_2') {
        const response = await api.get("/room_2");
        console.log('response', response)
        return response;
    }
    if (room === 'room_3') {
        const response = await api.get("/room_3");
        console.log('response', response)
        return response;
    }
    if (room === 'room_4') {
        const response = await api.get("/room_4");
        console.log('response', response)
        return response;
    }
    return null;
}
// export const createUser = async (data: FormUser) => {
//     const response = await api.post("/users", data);
//     return response;
// }