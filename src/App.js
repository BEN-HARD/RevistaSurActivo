import './App.css';
import { NavegadorFixed } from './NavegadorFixed';
import { Footer } from './Footer';
import { Cinta } from './Cinta';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Servicio } from './Compo_Slider/components/servicios/Servicio';
import reportero from './assets/img/reportero.jpg';
import flecha from './assets/img/Flecha.png';

import Fondo from './Compo_Slider/components/carrusel/Fondo';
import { Cinta2 } from './Cinta2';



function App() {
  
const ParrafoServicio=
<div className='texto_reportajes'>
<strong className='reportajes'>Reportajes</strong>
<ul>
  <li>Visitamos la zona</li>
  <li>Fotografías</li>
  <li>Entrevista y recoleccion de información,
  para posterior publicación en nuestra revista</li>
</ul>
</div>

var texto_mision=<div className='texto_mision'>
  Buscamos recolectar,informar y promocionar actividades presentes en la zona sur de nuestro país
</div>

  return (
    <div className='fonco'>
      <NavegadorFixed/>
      <div className='fondus'>
        <h6>Selecciona una actividad</h6>
        <img id='flecha' src={flecha} />
      </div>
      <div className='bajo_fondo'>
      <Cinta/>
      <Cinta2/>
      </div>
      <div className='bajobajo_fondo'>
        <div className='div_flayer'></div>
      </div>
      <div className='nose'></div>
      <div className='div_servicios'>
        <div className='servicios'>
        <Servicio titulo={"Servicio"} texto={ParrafoServicio} imagen={reportero}/>
        </div>
        <div className='servicios'>
        <Servicio titulo={"Nuestra Misión"} texto={texto_mision}/>
        </div>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
