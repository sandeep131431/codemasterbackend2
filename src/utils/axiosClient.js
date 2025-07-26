const axios = require('axios');

const axiosClient =  axios.create({
    baseURL: 'https://code-masterbackend1.vercel.app',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


module.exports = axiosClient;

