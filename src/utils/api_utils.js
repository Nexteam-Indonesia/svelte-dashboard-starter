import axios from "axios"

const axiosApi = axios.create({
    baseURL: 'https://reqres.in/api/'
});

const apiRequest = (method, path, request) => {

    // TODO : add your own authorization here
    const headers = {
        'Accept': 'application/json'
    }

    return axiosApi({
        method: method,
        headers: headers,
        url: path,
        data: request
    }).then(res => {
        return Promise.resolve(res.data)
    }).catch(err => {
        return Promise.reject(err)
    })

}

const getRequestApi = (path) => apiRequest("get", path)

export default {
    getRequestApi
}