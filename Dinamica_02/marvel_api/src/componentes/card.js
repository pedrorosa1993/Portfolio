import React from 'react';
import './styles.css';

export const Card = ({heroitem}) => {//sempre colocar a propos dentro de chaves, se tiver mais de uma colocar virgula
    //const { heroitem } = props;
    console.log(heroitem)
    return (
          <div className="container">
            <img src={heroitem.thumbnail.path + '.' + heroitem.thumbnail.extension} alt="imagem" className="imagem"></img>
            <div className="container-style">
                <h2 className="texto-nome">{heroitem.name}</h2>
                <p className="texto-desc">{heroitem.description}</p>
            </div>
          </div>
    )

}
    