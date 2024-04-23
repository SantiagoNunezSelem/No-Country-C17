import  React, { useEffect, useState } from  "react";
import { Button, Typography, Grid, Box } from "@mui/material";
import { horasManana, horasTarde } from "@/lib/data";

export default function SeleccionarHorario({cargar}) {
  const [selectedHour, setSelectedHour] = useState('8:00');

  const handleClick = (hora) => {
    setSelectedHour(hora);
  };

  useEffect(() => {
    cargar({ name: "hora", value: selectedHour });
  }, [selectedHour]);

  return (
    <Box sx={{ width: "300px" }}>
      <Typography sx={{ mb: "0.5rem" }}>TURNO MAÑANA</Typography>
      <Grid container spacing={1}>
        {horasManana.map((hora, index) => (
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
        ))}
      </Grid>
      <Typography sx={{ mt: "0.5rem", mb: "0.5rem" }}>TURNO TARDE</Typography>
      <Grid container spacing={1}>
        {horasTarde.map((hora, index) => (
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
        ))}
      </Grid>
    </Box>
  );
}
