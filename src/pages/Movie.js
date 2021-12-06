import { Link } from "react-router-dom";
import {  useHistory, useParams } from "react-router";

import Loading from "../component/Loading";
import ReactPlayer from 'react-player'
import { toast } from 'react-toastify';
import useGetMovie from "../customHooks/useGetMovie";

// const GET_DATA_URL = 'http://localhost:4000/movie/';
const GET_DATA_URL = 'https://react-movie-db-c34f2-default-rtdb.firebaseio.com/movie/';
const Movie = () => {
    const {id} = useParams();
    const {movies: movieData, isLoading } = useGetMovie(GET_DATA_URL + id + '.json');
    const history = useHistory();
    const handleDelete = () => {
        fetch(GET_DATA_URL + id + '.json', {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
            toast.success('Remove form database!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    }

    return (
        <main className="main-content">
            <div className="container">
                <div className="page">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <span>{ movieData && movieData.title }</span>
                    </div>

                    { isLoading && <Loading /> }
                    {
                        movieData &&
                        <div className="content">
                            <div className="row">
                                <div className="col-md-6">
                                    <figure className="movie-poster"><img src={ movieData.cover } alt="CoverImage" /></figure>
                                </div>
                                <div className="col-md-6">
                                    <h2 className="movie-title">{  movieData.title }</h2>
                                    <div className="movie-summary">
                                        <p>{ movieData.descrip }</p>
                                    </div>
                                </div>
                            </div> 
                            <div className="entry-content">
                                <center>
                                <ReactPlayer  controls url={ movieData.tailer } />
                                </center>
                            </div>
                            <button onClick={ handleDelete }>Delete</button>
                        </div>
                    }
                </div>
            </div> 
		</main>
    );
}
export default Movie