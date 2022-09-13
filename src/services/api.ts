import axios from 'axios';

export const api = axios.create({
    baseURL: "http://192.168.15.7:3333",
})

export const getMvps = async () => {
    const response = await api.get("/generalmvps");
    console.log('response', response)
    return response;
};

export const getSpecificMvps = async (room: string) => {
    if (room === 'room_1') {
        const response = await api.get("/mvpsfirstroom");
        return response;
    }
    if (room === 'room_2') {
        const response = await api.get("/mvpssecondroom");
        return response;
    }
    if (room === 'room_3') {
        const response = await api.get("/mvpsthirdroom");
        return response;
    }
    if (room === 'room_4') {
        const response = await api.get("/mvpsfourthroom");
        return response;
    }
    return null;
};

export const getMvp = async (name: string) => {
    const response = await api.get(`/mvps/${name}`);
    return response;
};

// export const createUser = async (data: FormUser) => {
//     const response = await api.post("/users", data);
//     return response;
// }