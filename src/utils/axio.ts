import axios, {AxiosInstance} from "axios";

const getInstance = ():AxiosInstance => {
    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        headers:{
            'Accept':"application/json",
        }
    });
}

export default getInstance;