import React from 'react';
import FormCitas from './FormularioDetalles';
import ServiciosSummary from './';

const ReservarCita_2 = () => {
    return (
        <div className="w-full flex justify-center py-4">
            {/* Contenedor principal */}
            <div className="flex flex-wrap w-full px-4">
                {/* Parte izquierda: Formulario de datos */}
                <div className="w-full lg:w-1/2 pb-8 pr-4"> {/* Add paddingRight for spacing */}
                    <h2 className="text-2xl font-bold mb-4 text-salmon">Ingrese sus Datos</h2>
                    <FormCitas />
                </div>
                
               
            </div>
        </div>
    );
};

export default ReservarCita_2;
