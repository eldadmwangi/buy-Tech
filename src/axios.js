import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:5001/buy-tech-ac05c/us-central1/api' //api cloud functions...// 
})

export default instance;