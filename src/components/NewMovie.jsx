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

        const newMovie = {
            title,
            director,
            year,
            rating,
            genre,
            poster: newFilm,
        };        

        axios
        .post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`, newMovie)
        .then(res => {
            console.log(res.data);
            navigate('/');
        })
        .catch(e => console.log(e));
    };
    return (
        <div className='grid place-items-center mt-1 mb-5 p-5 content-center justify-center font-primary'>
            <div>
            <img className='contrast-200 h-20 mb-4' src={filmStrip} alt="" />
            </div>
        <h2 className='text-3xl text-left text-white font-primary font-bold mb-2 mt-2'>Add a New Movie</h2>
        <form className='p-2 flex flex-col w-96 text-lg text-white text-center' onSubmit={handleSubmit}>
            <label className='m-2' htmlFor="">Title</label>
            <input className='text-black' type="text" name="title" value={title}
            onChange={e => setTitle(e.target.value)}
            required
            />
            <label className='m-2' htmlFor="">Director</label>
            <input className='text-black' type="text" name="director" value={director} onChange={e => setDirector(e.target.value)} />
            <label className='m-2' htmlFor="">Year</label>
            <input className='text-black' type="text" name="year" value={year} onChange={e => setYear(e.target.value)} />
            <label className='m-2' htmlFor="">Rating</label>
            <input className='text-black' type="text" name="rating" value={rating} onChange={e => setRating(e.target.value)} />
            <label className='m-2' htmlFor="">Genre</label>
            <input className='text-black' type="text" name="genre" value={genre} onChange={e => setGenre(e.target.value)} />
            <div className='text-center mt-2'><button className='text-lg text-white  bg-slate-950 border-2 border-white m-4 p-2 w-48 text-center justify-center align-middle hover:border-blue-300'>Submit</button>
            </div>
        </form>
        </div>
    );
};

export default NewMovie;
