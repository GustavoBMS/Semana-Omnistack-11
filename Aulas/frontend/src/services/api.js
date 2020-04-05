import axios from 'axios';

const api = axios.create({
    //Cria o caminho fixo da rota
    baseURL: "http://localhost:3333",
});

export default api;