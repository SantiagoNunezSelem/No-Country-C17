import React from 'react';
import FormCitas from './FormularioDetalles';
import IconsComponent from './resumen-servicios';



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
                {/* Parte derecha: Resumen de Servicios y Total a Pagar */}
                <div className="w-full lg:w-1/2 pb-8 pl-5"> {/* Add paddingLeft for spacing */}
                    {/* Sección de Resumen de Servicios */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-custom-red">Resumen de Servicios</h2>
                    <IconsComponent/>
                    </div>
                    
                    
                    
                </div>
               
            </div>
        </div>
    );
};

export default ReservarCita_2;
