import { Link } from "react-router-dom";

const MovieList = (props) =>{
    const {movies} = props;
    return (
        movies.map( (movie) => (
            <div className={`col-sm-6 ${props.responsiveClassContrl}`} key={movie.id}>
                <div className=" latest-movie">
                    <Link to={`/details/`+movie.id}><img src={movie.cover} alt="CoverImage" /></Link>
                </div>
            </div>
        ) )
    );
}
export default MovieList;