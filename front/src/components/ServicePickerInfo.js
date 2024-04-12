import React from "react";
import { Box, IconButton, Typography, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const ServiciosReservados = () => {
  const serviciosReservadosMock = [
    { nombre: "CORTE", duracion: 30, precio: "$20" },
    { nombre: "AFEITAR", duracion: 20, precio: "$15" },
    { nombre: "BARBA Y BIGOTE", duracion: 45, precio: "$30" },
    { nombre: "PERSONALIZADO", duracion: 45, precio: "$30" },
  ];

  const eliminarServicio = (index) => {
    console.log(serviciosReservadosMock[index]);
  };

  return (
    <div>
      {serviciosReservadosMock.map((servicio, index) => (
        <Box
          key={index}
          border={1}
          borderRadius={2}
          p={2}
          mb={1}
          mr={2}
          display="flex"
          flexDirection="column"
          alignItems="stretch"
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="subtitle1" sx={{ color: "#F84646" }}>
              SERVICIO:
            </Typography>
            {servicio.nombre}
            <IconButton
              sx={{ color: "white" }}
              onClick={() => eliminarServicio(index)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Grid container justifyContent="space-between">
            <Typography variant="body2">
              <AccessTimeIcon fontSize="small" />
              {servicio.duracion} min.
              <MonetizationOnIcon
                fontSize="small"
                sx={{ color: "#F84646", ml: "0.5rem" }}
              />
              {servicio.precio}
            </Typography>
          </Grid>
        </Box>
      ))}
    </div>
  );
};

export default ServiciosReservados;


// import HourPicker from "@/components/HourPicker";
// import DatePicker from "@/components/DatePicker";
// import ServiciosReservados from "@/components/ServicePickerInfo";
// <div style={{ display: "flex", alignItems: "center" }}>
//   <DatePicker></DatePicker>
//   <HourPicker></HourPicker>
//   <ServiciosReservados></ServiciosReservados>
// </div>;
