import React from 'react'

function NavBarCitas( {numPaso} ) {

    return (
    <div id="nav-bar-citas" className='w-full'>
        <h3 className='text-center mt-5 mb-5'>Sistema de Citas</h3>
        <div className='flex flex-row align-center justify-center w-3/4 m-auto'>
            
            <div className={`container-paso-cita ${numPaso >= 1 ? "si" : "no"} `}>
                <div className='circle-icon'>1</div>
                <p>Seleccionar servicios</p>
            </div>

            <div className={`container-paso-cita ${numPaso >= 2 ? "si" : "no"} `}>
                <div className='circle-icon'>2</div>
                <p>Fijar fecha y hora</p>
            </div>

            <div className={`container-paso-cita ${numPaso >= 3 ? "si" : "no"} `}>
                <div className='circle-icon'>3</div>
                <p>Seleccionar profesional</p>
            </div>

            <div className={`container-paso-cita ${numPaso >= 4 ? "si" : "no"} `}>
                <div className='circle-icon'>4</div>
                <p>Datos de contacto</p>
            </div>

            <div className={`container-paso-cita ${numPaso >= 5 ? "si" : "no"} `}>
                <div className='circle-icon'>5</div>
                <p>Resumen de la reserva</p>
            </div>

        </div>
    </div>
    )
}

export default NavBarCitas
