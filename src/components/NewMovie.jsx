import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import filmStrip from "../assets/filmstrip.png";
import newFilm from "../assets/now-showing.jpeg"


const NewMovie = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');
    const [genre, setGenre] = useState('');
    // const [poster, setPoster] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        // let defaultImage = ""
        // {image: image || defaultImage}      

        // const newMovie = {
        //     title,
        //     director,
        //     year,
        //     rating,
        //     genre,
        //     poster
        // };        

        axios
        .post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`, { title, director, year, rating, genre, newFilm })
        .then(res => {
            console.log(res.data);
            navigate('/');
        })
        .catch(e => console.log(e));
    };
    return (
        <div className='grid place-items-center mt-1 mb-5 p-5 content-center justify-center'>
            <div>
            <img className='contrast-200' src={filmStrip} alt="" />
            </div>
        <h2>Add a New Movie</h2>
        <form className='p-2 flex flex-col w-3/4 text-lg text-white text-center' onSubmit={handleSubmit}>
            <label htmlFor="">Title</label>
            <input className='text-black' type="text" name="title" value={title}
            onChange={e => setTitle(e.target.value)}
            required
            />
            <label htmlFor="">Director</label>
            <input className='text-black' type="text" name="director" value={director} onChange={e => setDirector(e.target.value)} />
            <label htmlFor="">Year</label>
            <input className='text-black' type="text" name="year" value={year} onChange={e => setYear(e.target.value)} />
            <label htmlFor="">Rating</label>
            <input className='text-black' type="text" name="rating" value={rating} onChange={e => setRating(e.target.value)} />
            <label htmlFor="">Genre</label>
            <input className='text-black' type="text" name="genre" value={genre} onChange={e => setGenre(e.target.value)} />
            <button>Submit</button>
        </form>
        </div>
    );
};

export default NewMovie;
