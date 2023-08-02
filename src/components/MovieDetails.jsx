import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [movie, setMovie] = useState(null); // movie object from backend

    useEffect(() => {
        axios
        .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
        .then(res => setMovie(res.data))
        .catch(e => setError(e.response?.data?.message));
    }, [id]);

    const handleDelete = () => {
        axios
        .delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
        .then(res => navigate('/'))
        .catch(e => console.log(e));
    };
    return (
        <div className='content-center justify-center w-full grid place-items-center mt-1 mb-5 p-5'>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {movie && (
            <>
            <h2 className='text-3xl text-left text-white font-extrabold mb-5'>{movie.title}</h2>
            <div className='bg-black p-4 border-white border-2'>
            <img className='max-h-96' src={movie.poster} alt='' />
            </div>
            <div className='p-4'>
            <p className='text-lg text-white text-center'>Director: {movie.director}</p>
            <p className='text-lg text-white text-center'>Year: {movie.year}</p>
            <p className='text-lg text-white text-center'>Genre: {movie.genre}</p>
            <p className='text-lg text-white text-center'>Rating: {movie.rating}/5</p>
            </div>
            <div>
                <button className='text-lg rounded-sm text-white bg-indigo-950 border-2 border-pink-400'>
            <Link to={`/movies/${id}/update`}>Update Movie</Link>
            </button>
            <button className='text-lg rounded-sm text-white bg-indigo-950 border-2 border-pink-400' onClick={handleDelete}>Delete Movie</button>
            </div>
            </>
        )}
    </div>
    );
};

export default MovieDetails;
