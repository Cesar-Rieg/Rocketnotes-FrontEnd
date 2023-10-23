import axios from "axios";

//const LOCAL_URL = `http://localhost:3000`;
const PROD_URL = 'https://rocketnotes-api-cuvp.onrender.com';

export const api = axios.create({
    baseURL: PROD_URL
});