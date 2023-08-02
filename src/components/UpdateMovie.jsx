import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});
    const [error, setError] = useState('');
    useEffect(() => {
        axios
        .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`)
        .then(res => setMovie(res.data))
        .catch(e => setError(e.response?.data?.message));
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`, movie)
        .then(res => {
            console.log(res.data);
            navigate('/');
        })
        .catch(e => console.log(e));
    };
    const handleChange = e => {
        const { name, value } = e.target;
        setMovie({ ...movie, [name]: value });
        // const updatedBook = {...book}
        // updatedBook[name] = value
        // setState(updatedBook)
    };
    return (
        <div>
        <h2>Update Movie</h2>
        <form className='p-2 flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor="">Title</label>
            <input
            type="text"
            name="title"
            value={movie?.title || ''}
            onChange={handleChange}
            required
            />
            <label htmlFor="">Director</label>
            <input 
            type="text"
            name="director" 
            value={movie?.director || ''} onChange={handleChange} />
            <label htmlFor="">Year</label>
            <input 
            type="text"
            name="year" 
            value={movie?.year || ''} onChange={handleChange} />
            <label htmlFor="">Rating</label>
            <input 
            type="text" 
            name="rating" 
            value={movie?.rating || ''} onChange={handleChange} />
            <label htmlFor="">Genre</label>
            <input 
            type="text" 
            name="genre" 
            value={movie?.genre || ''} onChange={handleChange} />
            <button>Update Movie</button>
        </form>
        <div className='h-96'></div>
        </div>
    );
};

export default UpdateMovie;