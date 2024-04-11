const axios = require("axios");
// вызываем переменную с токенном из .env
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
// создаем подключение клиента
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL + "/api",
    headers: {
        Authorization: 'Bearer ' + API_TOKEN,
    }
});

// API - запросы
const getDostoin = () => axiosClient.get('/dostoinstvas?populate=*');
const getRoom = () => axiosClient.get('/komnaties?populate=*')

export default {
    getDostoin,
    getRoom,
}