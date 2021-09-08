import axios from "axios";

const instance = axios.create({
    baseURL:'...' //api cloud functions...// 
})

export default instance;