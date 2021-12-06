import { Link } from "react-router-dom";
const Header = () =>{
    return (
        <header className="site-header">
            <div className="container">
                <Link to="/" id="branding">
                    <img src="/images/logo.png" alt="" className="logo" />
                    <div className="logo-copy">
                        <h1 className="site-title">Company Name</h1>
                        <small className="site-description">Tagline goes here</small>
                    </div>
                </Link>
                
                <div className="main-navigation">
        
                    <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                    <ul className="menu">
                        <li className="menu-item"><Link to="/">Home</Link></li>
                        <li className="menu-item"><Link to="/review">Movie reviews</Link></li>
                        <li className="menu-item"><Link to="/add-movie">Add movie</Link></li>
                    </ul> 
                </div> 

                <div className="mobile-navigation"></div>
            </div>
		</header>
    );
}
export default Header;