import React from 'react';
import './Servicio.css';
export const Servicio = ({imagen,titulo,texto}) => {
  return (
    <div className='servicio'>
            <h6>{titulo}</h6>
            <div className='contenedor_imagen_servicio'>
              <img src={imagen} style={{ maxWidth: '100%', maxHeight:'100%'}}/>
            </div>
            <p>
              {texto}
            </p>
    </div>
  )
}
