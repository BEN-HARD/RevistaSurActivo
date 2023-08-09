import React from 'react'
import './NavegadorFixed.css';
import LogoRevista from './assets/img/LogoRevista.png'

export const NavegadorFixed = () => {
  return (
    <div className='contenedor-fixed glass-effect'>
     <div className='primer'>
      <img src={LogoRevista} className='Logo' style={{ maxWidth: '100%', maxHeight:'100%'}} ></img>
     </div>
     <div className='segundo'>
      
     </div>
     <div className='tercero'>
      <a href='https://wa.me/56999119378'>
        <button>
          <b>Escribenos</b>
        </button>
      </a>
     </div>
    </div>
  )
}
