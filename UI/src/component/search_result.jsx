import React, { useState } from 'react';
import movie_name from "../../movie_name";
import api from '../api';
import { useNavigate } from 'react-router-dom';

const SearchResult = ({ input }) => {

    const navigate = useNavigate();
    
    if (!movie_name || !Array.isArray(movie_name)) {
        console.error('movie_name is not properly imported or is not an array');
        return null;
    }

    const findSuggestion = (name) => {
        api.post('/suggestions', { name })
            .then(response => {
                console.log('Suggestions:', response.data);
                navigate('/result', { state: { result: response.data } });
            })
            .catch(error => {
                console.error('Error fetching suggestions:', error);
            });
    }

    return (
        <>
            <div className='absolute top-full left-0 w-full max-h-60 overflow-y-auto my-2.5 text-center bg-black/80 rounded-2xl text-xl z-10'>
                {movie_name
                    .filter((movie) => {
                        if (input.trim() === "") return false;
                        let movieName = "";
                        
                        if (typeof movie === 'string') {
                            movieName = movie;
                        } else if (movie && typeof movie === 'object') {
                            movieName = movie.name || movie.title || movie.movie || "";
                        }
                        
                        if (typeof movieName === 'string') {
                            return movieName.toLowerCase().includes(input.toLowerCase());
                        }
                        
                        return false;
                    })
                    .map((movie, index) => {
                        let displayName = "";
                        
                        if (typeof movie === 'string') {
                            displayName = movie;
                        } else if (movie && typeof movie === 'object') {
                            displayName = movie.name || movie.title || movie.movie || "Unknown";
                        }
                        
                        return (
                            <div 
                            key={index}
                            className='hover:bg-white/70 hover:text-black p-2 cursor-pointer movieName border-b border-white/50'
                            onClick={() => {findSuggestion(displayName)}}>
                                {displayName}
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default SearchResult;