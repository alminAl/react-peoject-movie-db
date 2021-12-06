
import Slider from "../component/Slider";
import useGetMovieList from "../customHooks/useGetMovieList";
import Loading from "../component/Loading";
import MovieList from "../component/MovieList";

// const GET_DATA_URL = 'http://localhost:4000/movie';
const GET_DATA_URL= 'https://react-movie-db-c34f2-default-rtdb.firebaseio.com/movie.json';
const Home = () =>{    
    const {movies, isLoading} = useGetMovieList(GET_DATA_URL);
    return (
        <main className="main-content">
            <div className="container">
                <div className="page">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="slider">
                                <ul className="slides">
                                    { isLoading && <Loading /> }
                                    {movies && <Slider movies={movies}></Slider>}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                { isLoading && <Loading /> }
                                {  movies && <MovieList movies={movies.filter((movie, i) => i<2)} responsiveClassContrl={'col-md-12'} /> }
                            </div>
                        </div>
                    </div> 
                    <div className="row">
                        { isLoading && <Loading /> }
                        {  movies && <MovieList movies={movies.filter((movie, i) => i>=2)} responsiveClassContrl={'col-md-3'} /> }
                    </div>
                </div>
            </div>
            <script src="js/app.js"></script>
		</main>
    );
}

export default Home;