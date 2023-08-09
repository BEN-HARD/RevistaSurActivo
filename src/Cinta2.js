import React from 'react';
import './Cinta2.css';
import restaurante from './assets/img/iconos/restaurante.png';
import esqui from './assets/img/iconos/esqui.png';
import cabalgata from './assets/img/iconos/caballo.png';
import cabañas from './assets/img/iconos/cabañas.png';
import tinaja from './assets/img/iconos/tinaja.png';
import termas from './assets/img/iconos/termas.png';
import eventos from './assets/img/iconos/personas.png';
export const Cinta2 = () => {
  return (
    <div className='cinta glass_effect'>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'> 
                <img className='iconos' src={restaurante} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Restaurantes</p>
        </div>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'>
                <img className='iconos' src={esqui} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Esqui</p>
        </div>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'>
                <img className='iconos' src={cabalgata} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Cabalgatas</p>
        </div>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'>
                <img className='iconos' src={cabañas} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Cabañas</p>
        </div>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'>
                <img className='iconos' src={tinaja} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Tinajas</p>
        </div>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'>
                <img className='iconos' src={termas} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Termas</p>
        </div>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'>
                <img className='iconos' src={eventos} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Eventos</p>
        </div>
    </div>
  )
}