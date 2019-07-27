import React, {Component} from 'react'
import axios from 'axios';
import logo from './Imagens/logo.png';
import './App.css';
import MovieSlider from './components/MovieSlider';
import ImageGallery from 'react-image-gallery';


const token = 'e5693481ef000bfdd855a0f21ad39631';
const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/'
});

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      movies:[]
    }
  }


componentDidMount(){
API.get(`popular?api_key=${token}`)
.then(resp => {
  console.log(resp)
  this.setState({
    movies: resp.data.results
  })
})
.catch(erro => {
  console.error(erro)
})
}


render(){

  return (
    <div className="App">
      <header className="App-header">
        <div class="left">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div class="right">
                <a href="">Início</a>
                <a href="">Séries</a>
                <a href="">Filmes</a>
                <a href="">Adicionados recentemente</a>
                <a href="">Minha Lista</a>
        </div> 
      </header>

      <div class="wrapper">
          <MovieSlider movies={this.state.movies}/>
      </div>
    </div>
  );
 }
}

export default App;
