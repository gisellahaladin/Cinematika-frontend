import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
    const [movies, setMovies] = useState(null); // movies array from backend
    const [classicMovies, setClassicMovies] = useState([]);
    const [silentMovies, setSilentMovies] = useState([]);
    const [cultMovies, setCultMovies] = useState([]);

    useEffect(() => {
        axios
        .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`)
        .then(res => setMovies(res.data))
        .catch(e => console.log(e));
    }, []);

    useEffect(() => {
        // Filter movies into respective categories
        if (movies) {
            setClassicMovies(movies.filter((movie) => movie.genre === 'Classic'));
            setSilentMovies(movies.filter((movie) => movie.genre === 'Silent'));
            setCultMovies(movies.filter((movie) => movie.genre === 'Cult'));
            }
        }, [movies]);

    const renderMovies = (moviesList) => {
            return moviesList.map((movie) => (
                <li className='m-2' key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                    <div>
                        <img className='max-h-56 m-1 hover:opacity-60 hover:sepia transition duration-250 ease-in-out' src={movie.poster} alt='' />
                    </div>
                    <div className='text-sm text-white text-center w-36'>{movie.title}</div>
                    </Link>
                </li>
                ));
            };
            
            return (
                <div className='content-center justify-center w-full grid place-items-center mt-1 mb-5'>
                <div>
                <h2 className='text-3xl text-left text-white font-extrabold'>Classic Movies</h2>
                <ul className='flex  flex-row bg-black m-2'>{classicMovies && renderMovies(classicMovies)}</ul>
                <h2 className='text-white text-3xl text-left font-extrabold'>Silent Movies</h2>
                <ul className='flex  flex-row bg-black'>{silentMovies && renderMovies(silentMovies)}</ul>
                <h2 className='text-white text-3xl text-left font-extrabold'>Cult Movies</h2>
                <ul className='flex  flex-row bg-black'>{cultMovies && renderMovies(cultMovies)}</ul>
                </div>
                </div>
            );
};

export default Movies;