import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import MovieHolder from './MovieHolder';
import Button from './TryButton';

const Result = () => {
  const location = useLocation();
  const data = location.state?.result || [];
  const [movieDetails, setMovieDetails] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: '<<tmdb API(to access the banner of movie)>>'
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const results = await Promise.all(
        data.map(async (item) => {
          try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${item.id}?language=en-US`, options);
            const json = await res.json();
            return {
              id: item.id,
              image_path: json.poster_path,
              movie_name: json.title,
              overview: json.overview,
              rate: json.vote_average
            };
          } catch (err) {
            console.error(`Error fetching movie ${item.id}:`, err);
            return null;
          }
        })
      );

      setMovieDetails(results.filter(movie => movie !== null));
    };

    fetchDetails();
  }, [data]);

  return (
    <>
      <div className='w-full min-h-lvh overflow-y-auto overflow-x-hidden mt-5'>
        <div className="movie flex flex-wrap align-middle justify-center">
          {movieDetails.map((movie, index) => (
          <MovieHolder
            key={index}
            image_path={movie.image_path}
            movie_name={movie.movie_name}
            overview={movie.overview}
            rate={movie.rate}
          />
        ))}
        </div>
      
        <div className="button flex justify-center text-lg my-3.5 pb-3.5">
          <Button />
        </div>
      </div>
    </>
  )
}

export default Result