import axios from 'axios';

export const api = axios.create({
    baseURL: "http://192.168.15.4:3333",
})

export const getMvps = async () => {
    const response = await api.get<{mvp :Mvp}>("/mvps");
    return response;
};

export const getSpecificMvps = async (room: string) => {
        const response = await api.get<{mvp :Mvp}>(`/specificmvps/${room}`);
        return response;
}
// export const createUser = async (data: FormUser) => {
//     const response = await api.post("/users", data);
//     return response;
// }