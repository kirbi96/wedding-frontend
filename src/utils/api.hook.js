import axios from "axios"

const baseUrl = "http://localhost:80/"

export const Api = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
})
