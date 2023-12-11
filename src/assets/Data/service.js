import axios from 'axios';
import data from '../Data/datafake'
const api = axios.create({
    method: 'get',
    baseURL: data
})

export default api;