import { Container } from 'postcss';
import React from 'react';
import { Box, IconButton, Typography, Grid, createTheme } from "@mui/material";
import ServiciosReservados from '@/components/sitemaCitas/seleccionarFecha-Seccion/resumenServicios';


let tarjetaResumenReserva= ServiciosReservados()

function ResumenServicio(){

const datosUsuarioMock={
    nombre:'usuario',
    apellido:'nuevo',
    email:'email@web',
    telefono:'+541234567890',
    comentario:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }

    return(
        <div><Box width={'full'}>
            <Typography variant="h5"
            sx={{
                textAlign:'center',
                justifyContent:'center',
                color:"#F84646"
                }}
                >Resumen de tu reserva</Typography></Box>
            <Grid container gridTemplateColumns={2} columnGap={12} justifyContent={'center'} 
            sx={{
                width:'100',
                height:400
            }}
            >
                <Box sx={{
                    xs:3,
                    gridColumn:1,
                    display:'flex',
                    flexDirection: 'row',
                    columnGap: 4,
                    rowGap: 2,
                    mb: 4,
                    p:2,
                    mb:1,
                    maxWidth:'500px',
                    minHeight:"135px"
                    }}
                    >
                    <div>
                        <Box>
                    <Typography variant='body1' textAlign={'justify'} p={2} lineHeight={1.5}>
                        <ul id='resumen-usuario'>
                        <li>Nombre y Apellido:</li> 
                        <li id='input-usuario'>{datosUsuarioMock.nombre} {datosUsuarioMock.apellido}</li>
                        <li>email: </li>
                        <li id='input-usuario'>{datosUsuarioMock.email}</li>
                        <li>Teléfono: </li>
                        <li id='input-usuario'>{datosUsuarioMock.telefono}</li>
                        <li>Observaciones: </li>
                        <li id='input-usuario'>{datosUsuarioMock.comentario} </li>
                        </ul></Typography>
                    </Box>
                    </div>
                </Box>
                <Box  sx={{
                    pt:6,
                    xs:3,
                    gridColumn:2,
                    display:'flex',
                    flexDirection: 'row-reverse',
                    columnGap: 4,
                    rowGap: 2,
                    margin: 2,
                    }}
                    >
                    <div>
                        {tarjetaResumenReserva}
                    </div>
                </Box>
            </Grid>
        </div>
        );
}

export default ResumenServicio;