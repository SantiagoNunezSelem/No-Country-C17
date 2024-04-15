import React from "react";
import { Grid } from "@mui/material";
import HourPicker from "@/components/HourPicker";
import DatePicker from "@/components/DatePicker";
import ServiciosReservados from "@/components/ServicePickerInfo";

export default function SeleccionFecha() {
  return (
    <Grid container>
      <Grid item xs={4}>
        <DatePicker></DatePicker>
      </Grid>
      <Grid item xs={4}>
        <HourPicker></HourPicker>
      </Grid>
      <Grid item xs={4}>
        <ServiciosReservados></ServiciosReservados>
      </Grid>
    </Grid>
  );
}
