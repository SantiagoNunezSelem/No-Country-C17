import React from 'react';
import FormCitas from './FormularioDetalles';
import IconsComponent from './resumen-servicios';
import { Box, Container } from '@mui/material';


const ReservarCita_2 = () => {
    return (
        <Container sx={{
            justifyContent:'center',
            alignContent:'center',
            sm:{minWidth:'full'},
            md:{maxWidth:3/5}
        }}>
        <div id='form-fields-text' className="w-full flex justify-center py-4">
            {/* Contenedor principal */}
            <div className="flex flex-wrap w-full">
                {/* Parte izquierda: Formulario de datos */}
                <div className="w-full lg:w-2/3"> {/* Add padding Right for spacing */}
            
                    <FormCitas />
                </div>
                {/* Parte derecha: Resumen de Servicios y Total a Pagar */}
                <div className="w-full lg:w-1/3 "> {/* Add padding Left for spacing */}
                    {/* Sección de Resumen de Servicios */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-custom-red">Resumen de Servicios</h2>
                    <IconsComponent/>
                    </div>  
                </div>
            </div>
        </div>
        </Container>
    );
};

export default ReservarCita_2;
