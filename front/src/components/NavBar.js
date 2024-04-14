"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi'; // Importa los iconos que desees usar

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("showMenu:", showMenu);
  };

  return (
    <nav className='flex flex-col md:flex-row items-center justify-between w-full py-6 md:py-8'>
      <div id='container-logo' className='flex justify-center md:justify-center'>
        <Image src={require('../img/logo.png')} alt='Barbershop' />
      </div>
      <button
        className='menu-button md:hidden'
        onClick={toggleMenu}
        aria-label='Abrir menú'
      >
        {/* Utiliza el icono correspondiente según el estado de showMenu */}
        {showMenu ? <FiX className='h-6 w-6' /> : <FiMenu className='h-6 w-6' />}
      </button>
      <div
        id='nav'
        className={`nav md:flex md:h-auto ${showMenu ? 'block' : 'hidden md:block'}`}
      >
        <ul className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-16 md:pr-20 md:pl-2 md:mt-0'>
          <li>
            <Link href='/#'>Inicio</Link>
          </li>
          <li>
            <Link href='/#service-section'>Servicios</Link>
          </li>
          <li>
            <Link href='/#sucursales-section'>Sucursales</Link>
          </li>
          <li>
            <Link href='/#staff'>Staff</Link>
          </li>
          <li>
            <Link href='/#contacto-section'>Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
