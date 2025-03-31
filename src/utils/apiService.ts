import { ApiResponse, AxiosErrorType, MovieResponses } from "@/types";
import { AxiosRequestConfig } from "axios";
import getInstance from "./axio";




const getRequest = async <T>(
    url:string,
    config?:AxiosRequestConfig,
):Promise <ApiResponse<T>> => {
    const axiosInstance = getInstance();
    try{
        const response = await axiosInstance.get<T>(url,config)

        return {data : response.data}
    }
    catch (err){
        const error = err as AxiosErrorType;
        const status = error.response?.status;
        const details = error.response?.data;

        return {
            error:{
                message: `Failed to getch data from ${url}`,
                status,
                details,
                name:"",
            }
        }
    }
    
}


export const getMovie = async (
    endpoint: string,
):Promise <ApiResponse<MovieResponses>> =>{
    const config: AxiosRequestConfig = {
        params:{
            api_key: process.env.NEXT_PUBLIC_TMBD_KEY,
            sort_by: "vote_average.desc",
            page: 1,
        }
    }
    return await getRequest<MovieResponses>(endpoint, config);
}




