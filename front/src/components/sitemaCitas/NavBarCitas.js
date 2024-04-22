import React from 'react'

function NavBarCitas( {numPaso,  setNumPaso} ) {

    return (
    <div id="nav-bar-citas" className='w-full'>
        <h3 className='text-center text-white text-2xl font-semibold p-4'>SISTEMA DE CITAS</h3> {/* damiian sola metio mano */}
        <div className='flex flex-row align-center justify-center w-3/4 m-auto'>
            
            <div className={`container-paso-cita ${numPaso >= 1 ? "si" : "no"} ${numPaso == 1 ? "activo" : ""} `}>
                <div className='circle-icon' onClick={() => setNumPaso(1)}>1</div>
                <p>Seleccionar servicios</p>
            </div>

            <div className={`container-paso-cita ${numPaso >= 2 ? "si" : "no"} ${numPaso == 2 ? "activo" : ""} `}>
                <div className='circle-icon' onClick={() => setNumPaso(2)}>2</div>
                <p>Seleccionar profesional</p>
            </div>

            <div className={`container-paso-cita ${numPaso >= 3 ? "si" : "no"} ${numPaso == 3 ? "activo" : ""}`}>
                <div className='circle-icon' onClick={() => setNumPaso(3)}>3</div>
                <p>Fijar fecha y hora</p>
            </div>

            <div className={`container-paso-cita ${numPaso >= 4 ? "si" : "no"} ${numPaso == 4 ? "activo" : ""}`}>
                <div className='circle-icon' onClick={() => setNumPaso(4)}>4</div>
                <p>Datos de contacto</p>
            </div>

            <div className={`container-paso-cita ${numPaso >= 5 ? "si" : "no"} ${numPaso == 5 ? "activo" : ""}`}>
                <div className='circle-icon' onClick={() => setNumPaso(5)}>5</div>
                <p>Resumen de la reserva</p>
            </div>
        </div>
    </div>
    )
}

export default NavBarCitas
