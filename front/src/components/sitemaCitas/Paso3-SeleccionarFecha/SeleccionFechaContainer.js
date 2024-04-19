import React from "react";
import { Grid } from "@mui/material";
import SeleccionarHorario from "@/components/sitemaCitas/Paso3-SeleccionarFecha/SeleccionarHorario";
import SeleccionarDia from "@/components/sitemaCitas/Paso3-SeleccionarFecha/SeleccionarDia";
import ServiciosReservados from "@/components/sitemaCitas/Paso3-SeleccionarFecha/resumenServicios";

export default function SeleccionFechaContainer({cargar}) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={12}
      sx={{
        padding: "1rem"
      }}
    >
      <Grid item xs="auto">
        <SeleccionarDia cargar={cargar}></SeleccionarDia>
      </Grid>
      <Grid item xs="auto">
        <SeleccionarHorario cargar={cargar}></SeleccionarHorario>
      </Grid>
      <Grid item xs="auto">
        <ServiciosReservados cargar={cargar}></ServiciosReservados>
      </Grid>
    </Grid>
  );
}
