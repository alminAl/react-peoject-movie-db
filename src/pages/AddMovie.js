import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { toast } from 'react-toastify';

// const DATA_SUBMIT_URL = 'http://localhost:4000/movie';
const DATA_SUBMIT_URL = 'https://react-movie-db-c34f2-default-rtdb.firebaseio.com/movie.json';

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [cover, setCover] = useState('');
    const [tailer, setTailer] = useState('');
    const [descrip, setDescrip] = useState('');
    const history = useHistory();

    const handelSubmit = (e) =>{
        e.preventDefault();
        const movie = {title, type, cover, tailer, descrip};
        
        fetch(DATA_SUBMIT_URL, {
            method: "POST", 
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(movie)
        })
        .then(() => {
            toast.success('Movie addedd done!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            history.push('/')
        })
    }
    return (
        <main className="main-content">
            <div className="container">
                <div className="page">
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link>
                        <span>All movie</span>
                    </div>

                    <div className="content">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>Add movie</h2>
                                <ul className="contact-detail">
                                    <li>
                                        <img src="images/icon-contact-map.png" alt="#" />
                                        <address><span>Company name. INC</span> <br />550 Avenue Street, New york</address>
                                    </li>
                                    <li>
                                        <img src="images/icon-contact-phone.png" alt="" />
                                        <a href="tel:1590912831">+1 590 912 831</a>
                                    </li>
                                    <li>
                                        <img src="images/icon-contact-message.png" alt="" />
                                        <a href="mailto:contact@companyname.com">contact@companyname.com</a>
                                    </li>
                                </ul>
                                <div className="contact-form">
                                    <form onSubmit={handelSubmit}>
                                    <select name="#" id="#" placeholder="Choose Category" 
                                        required
                                        onChange = { (e) => setType(e.target.value) }
                                    >
                                            <option value="">Select Type</option>
                                            <option value="Action">Action</option>
                                            <option value="Drama">Drama</option>
                                            <option value="Fantasy">Fantasy</option>
                                            <option value="Horror">Horror</option>
                                            <option value="Adventure">Adventure</option>
                                        </select>
                                        <br /> <br />
                                        <input type="text" className="name" placeholder="movie name..." 
                                            required
                                            onChange = { (e) => setTitle(e.target.value) } 
                                        />
                                        <input type="url" className="email" placeholder="image link..." 
                                            required 
                                            onChange = { (e) => setCover(e.target.value) }
                                        />
                                        <input type="url" className="website" placeholder="tailer..." 
                                            required
                                            onChange = { (e) => setTailer(e.target.value) } 
                                        />
                                        <textarea className="message" placeholder="description..."
                                            onChange = { (e) => setDescrip(e.target.value) }
                                        ></textarea>
                                        <input type="submit"  />
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-7 col-md-offset-1">
                                <div className="map"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
		</main>
    );
}
export default AddMovie;