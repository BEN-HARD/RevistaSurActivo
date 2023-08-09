import React from 'react';
import './Footer.css';
import LogoRevista from './assets/img/LogoRevista.png';
import logo_facebook from './assets/img/logo_facebook.png'


export const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='div-footer'>
        <div className='divisor'>
          <img src={LogoRevista} className='imagen-footer'></img>
          <p className='slogan'>¡Tu expedición comienza aquí!</p>
        </div>
        <div className='divisor'>
          <h6>Social</h6>
          <a href='https://web.facebook.com/unnuevopuntodeencuentro'>
            <img  id='id-face' src={logo_facebook}></img>
          </a>
        </div>
        <div className='divisor'>
          <h6>Servicios</h6>
          <p className='p-servicios'>Reportajes</p>
          <p className='p-servicios'>Divulgación</p>
        </div>
      </div>
    </div>
  )
}