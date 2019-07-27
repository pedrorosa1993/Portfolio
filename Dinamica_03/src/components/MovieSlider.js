import React from 'react';
import MovieSingle from './MovieSingle';

const MovieSlider = (props) =>{
    const {movies, title} = props;
    return(
    <section>
        <h2>{title}</h2>
        {
        movies.map(movie => (
            movie.backdrop_path ? 
                <MovieSingle
                    key={movie.title}
                    image = {`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    title = {movie.title}
                    desc = {movie.desc}
                />
             : null
        ))
        }
    </section>
    );
};

export default MovieSlider;