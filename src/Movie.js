import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// 여기서는 Movie Component가 MoviePoster Component한테 poster Component 를 준다
// class Movie extends Component {
//     render() {
//         return(
//             <div>
//                 <h2>
//                     {this.props.title}
//                 </h2>
//                 <MoviePoster poster={this.props.poster} />
//             </div>
//         )
//     }
// }


// For class you need this.dasdjkasdjl key word but from normal function title is just title (object) and poster is just poster
function Movie({title, poster}){
    return (
        <div>
            <h2>{title}</h2>
            <MoviePoster poster={poster} />
        </div>
    )
}

// class MoviePoster extends Component{

//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         return(
//             <img src={this.props.poster} alt="Movie Poster"/>
//         )
//     }
// }

function MoviePoster({poster}){
    return (
        <img src={poster} alt="Movie Poster" />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;