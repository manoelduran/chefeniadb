import axios from 'axios';

export const api = axios.create({
    baseURL: "http://192.168.15.10:3333",
})

export const getMvps = async () => {
        const response = await api.get("/mvps");
        console.log("responseGETMVPS", response.data)
    return response;
};


// export const createUser = async (data: FormUser) => {
//     const response = await api.post("/users", data);
//     return response;
// }