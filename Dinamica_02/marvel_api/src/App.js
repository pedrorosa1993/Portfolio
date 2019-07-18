import React, {Component} from 'react'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import {Card} from './componentes/card';

const md5 = require('md5');

const publicKey = '57ed4235b7ffd4a333c5d49e626987a1';
const privateKey = '96ed15bee4538eccbcc5ebf3f6ec841eb85a4df8';
const timeStamp = Date.now.toString();

const hash = md5(timeStamp + privateKey + publicKey);

class App extends Component {
  state = {
    heroes: []
  }


    async componentDidMount(){
      const respost = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)//Requisição // Caminho para consumo
      .then((res)=> {//Promessa
        return res.data;
      }).catch((error) => {
        return error;
      })

      const heroes = respost.data.results;
      this.setState({heroes});
      console.log(heroes);
    }



  /*render(){
    return(
      <div className="App">
        {
          this.state.heroes.map((hero)=>(
            <div>
              <p key={hero.id}>
                {hero.name}
              </p>
              <p>
                {hero.description}
              </p>
            </div>
          ))
        }
      </div>
    );
  }*/

  render(){
    return(
      <div className="App">

        <div className="header-container">
          <header className="header">
            <img src={require('../src/imagens/Marvel-Logo.png')} className="logo"></img>
          </header>
        </div>

          <section className="lista_section">
          {
            this.state.heroes.map((hero)=>(
              <Card
                key={hero.id}
                heroitem={hero}
              />
            ))
          }
          </section>
        



      </div>
    );
  }
}

export default App;
