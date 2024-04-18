import { Container } from 'postcss';
import React from 'react';
import { Box, IconButton, Typography, Grid } from "@mui/material";
import ServiciosReservados from '../ServicePickerInfo';

let tarjetaResumenReserva= ServiciosReservados()
function ResumenServicio(){
    return(
        <div>
            <Typography id='titulo-resumen-reserva' justifyContent='center' alignContent="center" variant='subtitle1' sx={{color:"#F84646"}}>Tus Servicios Reservados</Typography>
            <Box  sx={{
                display:'flex',
                flexDirection: 'column',
                }}
                >
                <div>
                    {tarjetaResumenReserva}
                </div>
            </Box>
        </div>
        );
}

export default ResumenServicio;