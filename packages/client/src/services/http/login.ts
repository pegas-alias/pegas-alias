import axios from 'axios';

const apiUrl = 'https://ya-praktikum.tech/api/v2';

export const registerUser = (data: any) => {
    axios.post(apiUrl + '/auth/signup', data, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
}

export const loginUser = (data: any) => {
    axios.post(apiUrl + '/auth/signin', data, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
}