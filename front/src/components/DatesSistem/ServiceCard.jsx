import React, { useState } from 'react';
import Image from "next/image";
import { BsTrash } from 'react-icons/bs';


/// ESTE CODIGO ES DE DAMIAN SOLA

function ServiceCard({ titulo, img, texto, precio, addService }) {

    const [add, setAdd] = useState(false);

    const handleClick = () => {
        setAdd(!add)
        addService(titulo)
    }

    return (
        <div className="flex flex-col items-center mb-4">
            <div className="rounded-full overflow-hidden mb-2" style={{ width: "230px", height: "230px" }}>
                <Image src={img} alt="servicios" width={400} height={400} className="transition-transform duration-300 transform-gpu hover:scale-110" />
            </div>
            <h3 className="text-center mb-2 font-manrope font-bold text-2xl">{titulo.toUpperCase()}</h3>
            <div className="flex flex-col items-center">
                <p className="text-center my-2 text-white font-manrope text-base font-bold leading-[25px]">{texto}
                </p>
                <p className="text-center my-2 text-white">Precio: <span className="font-koulen text-red-500 text-xl font-normal leading-[25px]">{precio}</span></p>
            </div>
            {add ? <Eliminar handleClick={handleClick}/> : <Agregar  handleClick={handleClick}/>}
        </div>
    )
}

const Agregar = ({handleClick}) => {
    return(
        <button onClick={handleClick} className='flex bg-salmon w-4/5 text-white items-center p-2 rounded-md'>
            <p className='text-2xl px-2'>+</p> Agregar Servicio
        </button>
    )
}

const Eliminar = ({handleClick}) => {
    return(
        <button onClick={handleClick} className='flex bg-transparent border w-4/5 items-center justify-center border-white text-white p-2 rounded-md'>
            <BsTrash /><p className='px-2'>Eliminar</p>
        </button>
    )
}

export default ServiceCard;


