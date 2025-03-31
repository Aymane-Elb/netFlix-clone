import { CardProps, Genre } from '@/types';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player';  
import React, { useState } from 'react'
import { Button } from '@mui/material';

const Cards :React.FC<CardProps>=({item, enableGenres, removeMovie})=> {
  const [genres,setGenres]=useState<Genre[]>([]);
  const [trailerKey,setTrailerKey]=useState<string | null>(null);
  const [error,setError] = useState<string|null>(null);
  const [isMute,setIsMute]=useState<boolean>(true);
  const [isHovered,setIsHovered]=useState<boolean>(false);
  const [isMounted,setIsMounted]=useState<boolean>(false);
  const [isInLocalStorage,setIsInLocalStorage]=useState<boolean>(false);
  const [modalOpen,setModalOpen]=useState<boolean>(false);
    return (
      <>
      <Box>
        {isHovered && trailerKey?
          (
            <Box>
              <ReactPlayer/>
              <Box>
                <Button>

                </Button>
              </Box>
            </Box>
          )
        }
        
      </Box>
        
      </>
    );
  };



export default Cards;