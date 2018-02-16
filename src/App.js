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
    fetch("https://yts.am/api/v2/list_movies.json?sort_by=like_count")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

_renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
}

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading Loading"}
      </div>

    );
  }
}

export default App;
