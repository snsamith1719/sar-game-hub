import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4b0e6af35ba841d8a2fdac862f7cb19a'
    }
})