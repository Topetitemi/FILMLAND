import MovieCard from './MovieCard.jsx'
import './App.css';
import SearchIcon from './searchbtn.png'
import { useState,useEffect } from 'react';
const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=ad934795'

// const apiUrl = 'http://www.omdbapi.com/?apikey=ad934795';

const App = () =>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMovies = async (title) =>{
        const response = await fetch(`${apiUrl}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() =>{
     searchMovies('korean');
    }, [])
    return (
     <div className="app">
        <h1>MOVIELAND</h1>
        <div className="search">
            <input 
            placeholder="Search movie here"
            value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
            src={SearchIcon}
            alt="search"
            onClick={
                () => searchMovies(searchTerm) }
            />
    
        </div>
        {movies?.length > 0
         ? (  
         <div className='container'>
            {movies.map((movie) =>{
                return <MovieCard movie={movie} />         
            })}
         
        </div>) : (
            <div className='empty'>
                <h2>No movie found</h2>
            </div>
        )
        }
      
        </div>
    );
}

export default App;