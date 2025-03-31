/* eslint-disable @typescript-eslint/no-unused-vars */
import { Media, MovieSectionProps } from '@/types';
import React, { useEffect, useState } from 'react';
import { getMovie } from '@/utils/apiService';
import { Box, Typography } from '@mui/material';
import SliderButton from '../sliderButton/sliderButton'; // Fixed import name (capital S, B)
import Cards from '../Cards/Cards';

const MovieSections: React.FC<MovieSectionProps> = ({
  heading,
  endpoint,
  loading,
  setLoading,
}) => {
  const [media, setMedia] = useState<Media[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const fetchMovies = async () => {
    if (setLoading) {
      setLoading(true);
    }
    try {
      const res = await getMovie(endpoint);
      if (res.error) {
        setError(res.error.message);
        setMedia([]);
      } else {
        setMedia(res.data?.results || []);
        setError(null);
      }
    } catch (err) {
      setError('Failed to fetch movies');
      setMedia([]);
    } finally {
      if (setLoading) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [endpoint, setLoading]);

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const scrollLeft = (event.target as HTMLElement).scrollLeft;
    setIsScrolled(scrollLeft > 0);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textTransform: 'capitalize',
        marginTop: '-9rem',
        zIndex: '-1',
      }}
    >
      {error && <Typography>{error}</Typography>}
      {!loading && !error && (
        <>
          <Typography
            component="strong"
            sx={{
              fontSize: '1.2rem',
              marginLeft: '3rem',
              padding: '.5rem 0',
              width: 'fit-content',
              marginBottom: '.85rem',
              zIndex: '1',
            }}
          >
            {heading}
          </Typography>
          <Box
            className="scroll-container-parent" 
            sx={{
              display:'flex',
              alignItems:'center',
              position:'relative',
            }}
          >
            {isScrolled && <SliderButton isRight={false} />}
            <Box
            className="scroll-container"
            onScroll={handleScroll}
            sx={{
              display:'flex',
              flexDirection:'row',
              padding:{xs:"3.2rem 6rem 12.5rem"},
              overflowX:"hidden",
              marginTop:'-3rem',
              "&::-webkit-scrollbar":{
                display:'none',
              }
            }}
            >
              {media?.filter(item=>item.poster_path !== null && item.background_path !== null).map(
                (item,index)=>(
                  <Cards key={index} item={item} enableGenres={false} />
                )
              )
              }
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default MovieSections;