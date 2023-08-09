import { Carousel } from 'react-carousel-minimal';
import './Fondo.css';


function Fondo() {
 const data = [
  {
    image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
    caption: "Restaurantes"
  },
  {
    image: "https://images.pexels.com/photos/13295019/pexels-photo-13295019.jpeg",
    caption: "Scotland"
  },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    bottom:'80px'
  }
  /*const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }*/
  const centerTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // Center the text
    zIndex: 1, // Ensure the text is above the images
    fontSize: '2em',
    fontWeight: 'bold',
    color: 'white'};
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0"
        }}>
          <Carousel
            data={data}
            time={7000}
            width="100vw"
            height="100vh"
            captionStyle={captionStyle}
            slideNumber={false}
            //slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="url('https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg')"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100vw",
              maxHeight: "100vh",
              margin: "0",
            }}
          />
          <div style={centerTextStyle} className='texto_central'>HAZ CLICK AQUI Y ESCOGE UNA ACTIVIDAD</div>
        </div>
      </div>
    </div>
  );
}

export default Fondo;