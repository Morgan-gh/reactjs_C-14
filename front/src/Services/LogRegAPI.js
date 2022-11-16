import { URL_LOGIN, URL_REGISTER } from "../Config/Config";
import axios from "axios";

function login(email, password) {
    return axios.post(URL_LOGIN, { identifier: email, password:password })
}

function register(email, password) {
    return axios.post(URL_REGISTER, { username: email, email: email ,password:password })
}


export default {
    login,
    register
}