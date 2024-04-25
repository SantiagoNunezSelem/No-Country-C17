import React from "react";
import { Box, IconButton, Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function ServiciosReservados(infoReserva) {
  const serviciosReservados = [];

  const eliminarServicio = (infoReserva) => {
    // console.log(serviciosReservados[index]);
  };

  return (
    <div>
      {infoReserva &&
        infoReserva.infoReserva.servicio.map((servicio, index) => (
          <Box
            key={index}
            border={1}
            borderRadius={2}
            p={2}
            mb={1}
            minWidth={"250px"}
            maxWidth={"400px"}
            minHeight={"135px"}
          >
            <Grid container justifyContent="center" alignItems="center"  sx={{ minWidth:"250px", maxWidth:"300px" }}>
              <Grid item xs={6}>
                <Typography variant="subtitle1" sx={{ color: "#F84646" }}>
                  SERVICIO:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{servicio.nombre}</Typography>
              </Grid>

              <Grid item xs={6}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={require("../../../img/servicios-icons/Timer.png")}
                    alt="Timer"
                  />
                  <Typography variant="body2" sx={{ ml: "0.5rem" }}>
                    30 min.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src={require("../../../img/servicios-icons/Money.png")}
                    alt="Money"
                  />
                  <Typography sx={{ ml: "0.5rem" }}>
                    {servicio.costo}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={4} container justifyContent="flex-end">
                <IconButton
                  sx={{ color: "white" }}
                  onClick={() => eliminarServicio(index)}
                >
                  <Image
                    src={require("../../../img/servicios-icons/Trash.png")}
                    alt="Eliminar"
                  />
                </IconButton>
              </Grid>

              <Grid item xs={6}>
                <Image
                  src={require("../../../img/servicios-icons/Profesional.png")}
                  alt="Profesional"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  {infoReserva.infoReserva.profesional.nombre}{" "}
                  {infoReserva.infoReserva.profesional.apellido}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
    </div>
  );
}

// import HourPicker from "@/components/HourPicker";
// import DatePicker from "@/components/DatePicker";
// import ServiciosReservados from "@/components/ServicePickerInfo";
// <div style={{ display: "flex", alignItems: "center" }}>
//   <DatePicker></DatePicker>
//   <HourPicker></HourPicker>
//   <ServiciosReservados></ServiciosReservados>
// </div>;
