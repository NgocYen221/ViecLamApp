import axios from "axios";

export const endpoints = {
    'jobs': '/jobs/',
}


export default axios.create({
    baseURL: "http://172.20.10.4:8000/"
})