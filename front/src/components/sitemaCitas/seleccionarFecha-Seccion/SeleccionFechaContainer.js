import React from "react";
import { Grid } from "@mui/material";
import SeleccionarHorario from "@/components/sitemaCitas/seleccionarFecha-Seccion/SeleccionarHorario";
import SeleccionarDia from "@/components/sitemaCitas/seleccionarFecha-Seccion/SeleccionarDia";
import ServiciosReservados from "@/components/sitemaCitas/seleccionarFecha-Seccion/resumenServicios";

export default function SeleccionFechaContainer() {
  return (
    <Grid container>
      <Grid item xs={4}>
        <SeleccionarDia></SeleccionarDia>
      </Grid>
      <Grid item xs={4}>
        <SeleccionarHorario></SeleccionarHorario>
      </Grid>
      <Grid item xs={4}>
        <ServiciosReservados></ServiciosReservados>
      </Grid>
    </Grid>
  );
}
