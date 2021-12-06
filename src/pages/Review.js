import { Link } from "react-router-dom";
import Loading from "../component/Loading";
import useGetMovieList from "../customHooks/useGetMovieList";
// const GET_DATA_URL = 'http://localhost:4000/movie';
const GET_DATA_URL = 'https://react-movie-db-c34f2-default-rtdb.firebaseio.com/movie.json';
const Review = () => {
    const { movies, isLoading  } = useGetMovieList(GET_DATA_URL);

    return (
        <main className="main-content">
            <div className="container">
                <div className="page">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <span>Movie Review</span>
                    </div>

                    {/* <div className="filters">
                        <select name="#" id="#" placeholder="Choose Category">
                            <option value="#">Action</option>
                            <option value="#">Drama</option>
                            <option value="#">Fantasy</option>
                            <option value="#">Horror</option>
                            <option value="#">Adventure</option>
                        </select>
                    </div> */}
                    <div className="movie-list">
                    {isLoading && <Loading />}
                    {
                        movies && 
                        movies.map((movie) => (
                            <div className="movie" key={movie.id}>
                                <figure className="movie-poster"><img src={ movie.cover } alt="CoverImage" /></figure>
                                <div className="movie-title"><Link to={'/details/' + movie.id }>{ movie.title }</Link></div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
		</main>
    );
}
export default Review;