import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-cafe.firebaseio.com/'
});

export default instance;