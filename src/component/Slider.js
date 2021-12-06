import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
import './Slider'
const Slider =  (props) => {
  const {movies} = props;
  return (
    <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
        autoplay     : true,
      } }
    >
      {
        movies.map((movie) => (
			<SplideSlide key={movie.id}>
        		<Link to={`/details/`+movie.id}><img  src={movie.cover} alt="SlideImage" /></Link> 
      		</SplideSlide>
        ))
      }
    </Splide>
  );
}

export default Slider;