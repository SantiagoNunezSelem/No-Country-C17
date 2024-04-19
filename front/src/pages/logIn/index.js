import React from 'react'

function logIn() {
    return (
    <div id="log-in" className="w-full h-full">
        <div id="separador-nav"></div>

        <h3 className='text-center text-white text-2xl font-semibold p-4'>ADMINISTRACION</h3>
        <div className="w-full h-full m-auto">
            
            <form action="/login" method="post">

                <div className="flex flex-col items-center justify-center w-72 mb-5">
                    <label for="usuario">Usuario:</label>
                    <input type="text" id="usuario" name="usuario" required/>
                </div>
                <div className="flex flex-col items-center justify-center w-72 mb-5">
                    <label for="contraseña">Contraseña:</label>
                    <input type="password" id="contraseña" name="contraseña" required/>
                </div>
                

            </form>
        </div>
    </div>
    )
}

export default logIn
