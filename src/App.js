import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from "./pages/Home";
import Review from "./pages/Review";
import Footer from "./component/Footer";
import Header from "./component/Header";
import AddMovie from "./pages/AddMovie";
import Movie from "./pages/Movie";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
	<Router>
		<div id="site-content">
			<Header />
			<Switch>
				<Route exact path="/" > <Home />  </Route>
				<Route path="/review" > <Review />  </Route>
				<Route path="/add-movie"> <AddMovie />  </Route>
				<Route path="/details/:id"> <Movie />  </Route>
			</Switch>
			<ToastContainer />
			<Footer />
		</div>
	</Router>
  );
}

export default App;
