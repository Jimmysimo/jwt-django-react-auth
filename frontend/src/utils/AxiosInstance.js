import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'


const baseURL = 'http://127.0.0.1:8000'


let authTokens =  localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null

const AxiosInstance = axios.create({
    baseURL,
    headers:{Authorization: `Bearer ${authTokens?.access}`} 
});

AxiosInstance.interceptors.request.use(async req => {
    // if(!authTokens){
        authTokens =  localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
        req.headers.Authorization = `Bearer ${authTokens?.access}`
    // }
    return req
})

export default AxiosInstance;