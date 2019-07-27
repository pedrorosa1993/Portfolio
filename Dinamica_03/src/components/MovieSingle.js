import React from 'react';

const MovieSingle = (props) =>{
    const {image, title, desc} = props;



    return(
        <div className="item">
            <img src={image} />
            <div className="texto">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default MovieSingle;