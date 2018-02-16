import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie'
 

// 여기서는 App Component에서 Movie Component한테 title 이랑 poster props 를 준다
// from here title is the name of the props - it means Movie component has a property of title.
class App extends Component {

  // to put component on page these are the steps (Rendering procress) there is Update process*
  // 1. componentWillMount() {
        // componentWillMount is usually used for something like calling API or doing something before rendering
  // }
  // 2. render() {
  // }
  // 3. componentDidMount() {
  // }
  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
      const movies = this.state.movies.map((movie) => {
        return <Movie 
          title={movie.title_english} 
          poster={movie.medium_cover_image} 
          key={movie.id} 
          genres={movie.genres} 
          synopsis={movie.synopsis}
        />
      })
      return movies
  }

  _getMovies = async () => {
    const movies = await this._callAPI()
    this.setState({
      movies
    })
  }

  _callAPI = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "WAIT! FUCKING Loading Loading"}
      </div>

    );
  }
}

export default App;
