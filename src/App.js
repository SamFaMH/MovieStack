import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=a55b7618';


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovie = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json(); 

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovie('Spiderman');
    }, []);

    return(
        <div className='app'>
            <h1>MovieStack</h1>

            {/* SEARCH area div */}
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange = {(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovie(searchTerm)}
                />
            </div>
            
            {
                movies?.length > 0
                ?(
                    <div className='container'>
                        {movies.map((movie) =>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

            {/* */}
          
        </div>
    );
}

export default App;