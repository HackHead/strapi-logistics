import axios from "axios";

const BASE_URL = 'http://127.0.0.1:1337/api'

const server = axios.create({
    baseURL: BASE_URL,
})

const getStrapiMenu = async () => {
    try {
        const res = await server.get('/menus/1?nested&populate=*')

        return res.data.data?.attributes?.items;
    } catch (error) {
        console.log(error)
        throw new Error(`Во время получения навигации произошла ошибка: ${error}`)
    }
}

const getPageBody = async () => {
    try {
        const res = await server.get('/pages/1')

        return res.data.data;
    } catch (error) {
        console.log(error)
        throw new Error(`Во время получения навигации произошла ошибка: ${error}`)
    }
}

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
    getStrapiMenu,
    getPageBody,
    getFooterGenerall,
    getContacts,
    server
}