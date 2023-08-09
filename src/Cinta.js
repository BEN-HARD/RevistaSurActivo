import React from 'react';
import './Cinta.css';
import canotaje from './assets/img/iconos/canotaje.png';
import excursionismo from './assets/img/iconos/excursionismo.png';
import pesca from './assets/img/iconos/pesca.png';
import rafting from './assets/img/iconos/rafting.png';
import padel from './assets/img/iconos/padel.png';
import sky from './assets/img/iconos/sky.png';
import tirolina from './assets/img/iconos/tirolina.png';
export const Cinta = () => {
  return (
    <div className='cinta glass_effect'>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'> 
                <img className='iconos' src={canotaje} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Piragüismo</p>
        </div>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'>
                <img className='iconos' src={excursionismo} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Trekking</p>
        </div>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'>
                <img className='iconos' src={pesca} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Pesca Deportiva</p>
        </div>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'>
                <img className='iconos' src={rafting} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Rafting</p>
        </div>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'>
                <img className='iconos' src={padel} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Pádel</p>
        </div>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'>
                <img className='iconos' src={sky} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Paracaidismo</p>
        </div>
        <div className='cajita_cinta'>
            <div className='contenedor_icono'>
                <img className='iconos' src={tirolina} style={{ maxWidth: '100%', maxHeight:'100%'}} />
            </div>
            <p>Canopy</p>
        </div>
    </div>
  )
}