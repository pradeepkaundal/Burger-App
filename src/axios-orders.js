import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-371ae.firebaseio.com/'
});

export default instance;