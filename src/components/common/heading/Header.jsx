import React from 'react'
import Head from './Head'
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'> 
          <ul className='flexSB'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/courses'>Todos los Cursos</Link></li>
            <li><Link to='/about'>Acerca de</Link></li>
            <li><Link to='/team'>Equipo</Link></li>
            <li><Link to='/pricing'>Precios</Link></li>
            <li><Link to='/journla'></Link></li>
            <li><Link to='/contact'>Contacto</Link></li>
          </ul>
          <div className="start">
            <div className="button">Obtener Certificado</div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header