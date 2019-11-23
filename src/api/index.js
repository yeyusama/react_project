import axiosInstance from './request';

export const reqLogin = (username,password)=> axiosInstance({
    method: 'POST',
    url: './login',
    data:{
        username,
        password
    }
})