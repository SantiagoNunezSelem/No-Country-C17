import React from 'react';

function logIn() {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div id="log-in" className="flex flex-col items-center justify-center w-full h-screen">
            <h3 className='text-center text-white text-2xl font-semibold p-4'>ADMINISTRACION</h3>
            <div className="flex flex-col items-center justify-center w-72 p-4 rounded-lg">
                <form onSubmit={() =>handleSubmit(e)} className="flex flex-col items-center justify-center w-full">

                    <div className="flex flex-col mb-5 w-full">
                        <label htmlFor="usuario" className="mb-2 text-salmon">Usuario:</label>
                        <input type="text" id="usuario" name="usuario" required className="px-3 py-2 border border-gray-300 rounded-lg w-full" />
                    </div>

                    <div className="flex flex-col mb-5 w-full">
                        <label htmlFor="contraseña" className="mb-2 text-salmon">Contraseña:</label>
                        <input type="password" id="contraseña" name="contraseña" required className="px-3 py-2 border border-gray-300 rounded-lg w-full" />
                    </div>

                    <button type="submit" className="w-56 text-white font-bold py-2 my-4 px-4 rounded bg-salmon">Iniciar sesión</button>

                </form>
            </div>
        </div>
    );
}

export default logIn;
