import {useEffect, useState} from "react";

import MovieCard from "./MovieCard";

import './App.css';
import './search.svg';
// c92c9efb

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=c92c9efb';

const movie1 ={
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}


const App = () =>{
    const [movies, setMovies] = useState([]);
    const [searchTearm, setSearchTearm] = useState('');

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`); 
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() =>{
        searchMovies("spiderman");

    }, []);

    return(
        <div className="app">
            <h1>MovieLands</h1>
            <div className="search">
                <input 
                    placeholder="Search for a movie"
                    value={searchTearm}
                    onChange={(e) => {setSearchTearm(e.target.value)}}
                />
                <img 
                    src={searchMovies.svg}
                    alt="search"
                    onClick={() =>{ searchMovies(searchTearm)}}
                />

            </div>


            {
                movies?.length > 0 ?
                (
                    <div className="container">
                        {movies.map((movie) =>(
                            <MovieCard movie = {movie}/>
                        ))}

                   
                    </div>
                ): (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )

            }

        </div>
    );
}

export default App;