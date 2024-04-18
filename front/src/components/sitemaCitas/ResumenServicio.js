import { Container } from 'postcss';
import React from 'react';
import { Box, IconButton, Typography, Grid } from "@mui/material";
import ServiciosReservados from '../ServicePickerInfo';
import { Height } from '@mui/icons-material';
import { Koulen } from 'next/font/google';

let tarjetaResumenReserva= ServiciosReservados()

const datosUsuarioMock=[
    {
    nombre:'usuario',
    apellido:'nuevo',
    email:'email@web',
    telefono:'+541234567890',
    comentario:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]

function ResumenServicio(){

    return(
        <div>
            <Typography variant="h1" justifyContent='center' alignContent="center" variant='subtitle1' 
            sx={{
                width:"fit-content",
                p: 1,
                color:"#F84646"
                }}
                >Tus Servicios Reservados</Typography>
            <Grid gridTemplateColumns={2}>
                <Box  sx={{
                    gridColumn:1,
                    display:'flex',
                    flexDirection: 'row',
                    margin: 1,
                    }}
                    >
                    <div>
                        {tarjetaResumenReserva}
                    </div>
                </Box>
                <Box  sx={{
                    gridColumn:2,
                    display:'flex',
                    flexDirection: 'row',
                    margin: 1,
                    }}
                    >
                    <div>
                        Datos Usuario
                        {datosUsuarioMock.nombre}
                    </div>
                </Box>
            </Grid>
        </div>
        );
}

export default ResumenServicio;