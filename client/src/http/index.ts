import axios from "axios";

const BASE_URL = 'http://172.24.0.1:1337/api'

const server = axios.create({
    baseURL: BASE_URL,
})


const getFooterGenerall = async () => {
    try {
        const res = await server.get('/footer-generall')

        return res.data
    } catch (error) {
        throw new Error(`Во время получения произошла ошибка: ${error}`)
    }
}

const getContacts = async () => {
    try {
        const res = await server.get('/contact')

        return res.data
    } catch (error) {
        throw new Error(`Во время получения произошла ошибка: ${error}`)
    }
}

export {
    getFooterGenerall,
    getContacts,
    server
}