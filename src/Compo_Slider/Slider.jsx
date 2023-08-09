import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';

function Slider({imagenes}) {
  return (
    <div className='contenedor_carrusel'>
        <Carousel>
      <Carousel.Item>
        <img src={imagenes.luna}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={imagenes.canotaje}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={imagenes.Padel}/>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Slider;
