import  React, { useEffect, useState } from  "react";
import { Button, Typography, Grid, Box } from "@mui/material";
import { horasManana, horasTarde } from "@/lib/data";

export default function SeleccionarHorario({cargar, infoReserva}) {
  const [selectedHour, setSelectedHour] = useState('8:00'); //no siempre va a estar disponible las 8:00

  const [turnosNoDisponibles,setTurnosNoDisponibles] = useState(["8:30","12:00","12:30","17:00","18:30"])

  const handleClick = (hora) => {
    setSelectedHour(hora);
  };

  useEffect(() => {
    cargar({ name: "hora", value: selectedHour });
  }, [selectedHour]);

  const horaDisponible = (hora, index) => {
    return(
        <Grid item key={index}>
            <Button
              key={index}
              size="small"
              onClick={() => handleClick(hora)}
              style={{
                backgroundColor: selectedHour === hora ? "#F84646" : "transparent",
                color: "white",
                border: selectedHour === hora ? "none" : "1px solid white",
                borderRadius: "8px",
              }}
            >
              {hora}
            </Button>
        </Grid>
    )
  }

  const horaNoDisponible = (hora, index) => {
      return(
          <Grid item key={index}>
              <Button
                key={index}
                size="small"
                style={{
                  color: "#5853536b",
                  border:"1px solid #5853536b",
                  borderRadius: "8px",
                }}
              >
                {hora}
              </Button>
          </Grid>
      ) 
  }

  return (
    <Box sx={{ width: "300px" }}>
      <Typography sx={{ mb: "0.5rem" }}>TURNO MAÑANA</Typography>
      <Grid container spacing={1}>
        {horasManana.map((hora, index) => {
          if(turnosNoDisponibles.includes(hora)){
            return(horaNoDisponible(hora,index))
            
          }
          else{
            return(horaDisponible(hora, index))
          }
        })}
      </Grid>
      <Typography sx={{ mt: "0.5rem", mb: "0.5rem" }}>TURNO TARDE</Typography>
      <Grid container spacing={1}>
        {horasTarde.map((hora, index) => {
          if(turnosNoDisponibles.includes(hora)){
            return(horaNoDisponible(hora,index))
            
          }
          else{
            return(horaDisponible(hora, index))
          }
        })}
      </Grid>
    </Box>
  );
}
