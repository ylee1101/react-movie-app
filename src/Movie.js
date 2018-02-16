import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

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
function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie" >
            <div className="Movie_Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Columns">
                <h2>{title}</h2>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenres genre={genre} key ={index}/> )}
                </div>
                <div className="synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis=' ....'
                    trimRight
                    basedOn='letters'
                    />
                </div>
            </div>
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

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    )
}

function MovieGenres({genre}){
    return (
        <span className="Movie_Genre">{genre} </span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    // key: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired

}

MovieGenres.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;