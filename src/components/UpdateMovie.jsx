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
        <div className='grid place-items-center mt-1 mb-5 p-5 content-center justify-center font-primary'>
        <h2  className='text-3xl text-center text-white font-semibold font-primary mb-5 mt-2'>Update Movie</h2>
        <img src="" alt="" />
        <form className='p-2 flex flex-col content-center justify-center w-96' onSubmit={handleSubmit}>
            <label className='text-lg text-white text-center mt-2 p-1' htmlFor="">Title</label>
            <input className='p-1'
            type="text"
            name="title"
            value={movie?.title || ''}
            onChange={handleChange}
            required
            />
            <label className='text-lg text-white text-center mt-2 p-1' htmlFor="">Director</label>
            <input className='p-1' 
            type="text"
            name="director" 
            value={movie?.director || ''} onChange={handleChange} />
            <label className='text-lg text-white text-center mt-2 p-1' htmlFor="">Year</label>
            <input className='p-1' 
            type="text"
            name="year" 
            value={movie?.year || ''} onChange={handleChange} />
            <label className='text-lg text-white text-center mt-2 p-1' htmlFor="">Rating</label>
            <input className='p-1' 
            type="text" 
            name="rating" 
            value={movie?.rating || ''} onChange={handleChange} />
            <label className='text-lg text-white text-center mt-2 p-1' htmlFor="">Genre</label>
            <input className='p-1' 
            type="text" 
            name="genre" 
            value={movie?.genre || ''} onChange={handleChange} />
            <button className='text-lg text-white bg-slate-950 border-2 border-white m-4 p-2 font-primary mt-8 hover:border-blue-300'>Update Movie</button>
        </form>
        <div className='h-96'></div>
        </div>
    );
};

export default UpdateMovie;