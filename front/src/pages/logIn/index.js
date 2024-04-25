'use client'
import React, { useState } from 'react';

const LogIn = () => {

    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const userName = e.target[0].value
        const pwd = e.target[1].value

        /* Despues lo hacemos bien con una query a la db */
        if(userName === "master" && pwd === "master")
            window.location.href = "http://localhost:3000/admin"
        else{
            setMensajeError("Usuario o contraseña incorrectos.")
            setUsuario('');
            setContrasena('');
        }
    }

    return (
        <div id="log-in" className="flex flex-col items-center justify-center w-full h-screen">
            <h3 className='text-center text-white text-2xl font-semibold p-4'>ADMINISTRADOR</h3>
            <div className="flex flex-col items-center justify-center w-72 p-4 rounded-lg">
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full">

                    <div className="flex flex-col mb-5 w-full">
                        <label htmlFor="usuario" className="mb-2 text-salmon">Usuario:</label>
                        <input type="text" id="usuario" name="usuario" required
                        onChange={(e) => setUsuario(e.target.value)} value={usuario}
                        className="px-3 py-2 border border-gray-300 rounded-lg w-full text-black" />
                    </div>

                    <div className="flex flex-col mb-5 w-full">
                        <label htmlFor="contraseña" className="mb-2 text-salmon">Contraseña:</label>
                        <input type="password" id="contraseña" name="contraseña"
                        onChange={(e) => setContrasena(e.target.value)} value={contrasena}
                        required className="px-3 py-2 border border-gray-300 rounded-lg w-full text-black" />
                    </div>

                    {mensajeError && <p style={{color:'red'}}>{mensajeError}</p>}

                    <button type="submit" className="w-56 text-white font-bold py-2 my-4 px-4 rounded bg-salmon">Iniciar sesión</button>

                </form>
            </div>
        </div>
    );
}

export default LogIn;
