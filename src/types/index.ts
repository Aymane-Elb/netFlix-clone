import { IconTypeMap } from "@mui/material";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface SliderButtonProps{
    isRight: boolean;
}

export interface ButtonProps{
    filled?: boolean;
    label?:string;
    Icon: any;
    rounded?: boolean;
    onClick?: ()=> void;
    hidden?:  boolean;

}

export interface CardProps{
    defaultCard?: boolean;
    removeMovie?:(id:number)=> void;
    item: Media;
    Mediatype?: string;
    enableGenres?: boolean;
}

export enum MediaType{
    MOVIE="movie",
    TV = "tv"
}

export interface Video{
    id: string;
    key: string;
    type: string;
    name: string;
    site: string; 
}

export interface  MediaItem{
    id: number;
    type: "movie" | "tv";
    title: string; 
}

export interface RengerGenreProps{
    genreIds:number[];
    
}
export interface ChildrenProvider{
    children:React.ReactNode
    
}
export interface ModalProps{
    modalData: Media;
    modalOpen: boolean;
    enableGenres: boolean;
    handlClose: ()=> void;
    
}
export interface SimilarMediaProps{
    id:number;
    
}
export interface AxiosErrorType{
    code?: string;
    message:string;
    config:AxiosRequestConfig;
    name:string;
    request?:XMLHttpRequest;
    response?:AxiosResponse;
    status?:number;
    stack?:string;


}

export interface RequestError extends Error{
    status?: number;
    details?:unknown;
}
export interface ApiResponse<T>{
    data?:T;
    error?: RequestError | undefined;
    
}

export interface MovieResponses{
    page:number,
    total_results: number,
    total_pages : number,
    genres?:[];
    results: [];
}
export interface Genre{
    id: number;
    name: string;
}
export interface Media{
    id:number;
    adult: boolean;
    background_path:string;
    genre_ids:number[];
    original_language:string;
    original_title:string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    key?: string;
    type?: string;
    genres?: [];
    }
export interface MovieSectionProps {
    heading: string;
    endpoint: string;
    loading?: boolean;
    setLoading?: (loading: boolean) => void;
}
      