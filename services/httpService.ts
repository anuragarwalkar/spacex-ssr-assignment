import axios from 'axios';

const { get, post, put, patch } = axios;

export default {
    get, post, put,
    patch, delete: axios.delete
}