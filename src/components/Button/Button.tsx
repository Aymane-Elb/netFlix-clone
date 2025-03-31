import { ButtonProps } from '@/types';
import Box from '@mui/material/Box';
import React from 'react'

const Button:React.FC<ButtonProps>=({props})=>  {
    const {filled,label,Icon,rounded,onClick,hidden} = props;
    const backgroundColor =filled? "white " :"#6d6d6db3";
    const fontColor = filled? "black" : "white";

    if(hidden){
        return null
    }
    return (
      <>
        <Box
        component='button'
        onClick={onClick}
        sx={{
            zIndex:10,
            color:fontColor,
            backgroundColor:backgroundColor,
            width:rounded ?"min-content":"fit-content",
            padding:rounded ? ".4rem": ".7rem 1.8rem", 
            borderRadius:rounded ? "50%":".3rem" ,
            cursor:"pointer",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            margin:rounded? ".2rem" : '.4rem',
        }}>
            <Box>
                <Box>
                    {label}
                </Box>
            </Box>

        </Box>
      </>
    )
  }

export default Button;
