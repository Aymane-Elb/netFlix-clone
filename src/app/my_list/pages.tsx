'use client'
import {Media, MediaItem} from '@/types';
import { Box } from '@mui/material';
import React, { useState } from 'react';



const MyListPage = ()=>{
    const [movie,setMovie]= useState<Media[]>([]);
    const [loading,setLoading]= useState<boolean>(true);
    const [erro,setError]= useState<string | null>(null);

    // const loadMovies = async ()=>{
    //     setLoading(true);
    //     const favoriteItems:MediaItem[]=
    //         JSON.parse(localStorage.getItem('favoriteItems'))||'[]';

    // };


    return (
        <>
        </>
    )



}