import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Box, Grid } from "@mui/material";
import NavBarCitas from "@/components/sitemaCitas/NavBarCitas";
import ErrorSistemaCitas from "@/components/sitemaCitas/ErrorSistemaCitas";
import BotonSiguiente from "@/components/sitemaCitas/BotonSiguiente";
import CitaServicios from "@/components/sitemaCitas/Paso1-SeleccionarServicios/Servicios";
import DatosConfirmar from "@/components/sitemaCitas/Paso4-DatosContacto/index";
import SeleccionarProfesional from "@/components/sitemaCitas/Paso2-SeleccionarProfesional/SeleccionarProfesional";
import SeleccionFechaContainer from "@/components/sitemaCitas/Paso3-SeleccionarFecha/SeleccionFechaContainer";
import ResumenReserva from "@/components/sitemaCitas/ResumenReserva";
import BotonRegresar from "@/components/sitemaCitas/BotonRegresar";
import { BotonHome } from "@/components/sitemaCitas/BotonRegresar";
import { addTurno } from "@/actions/Querys";
import toast, { Toaster } from "react-hot-toast";

const Reservar = ({ paramas }) => {
  const [reserva, setReserva] = useState({});
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [errorSeccion, setErrorSeccion] = useState({
    error: false,
    mensaje: "",
  }); //error=true, no puede pasar a la siguiente seccion

  useEffect(() => {
    console.log(reserva);
  }, []);

  const siguienteStep = () => {
    step < 5 && setStep(step + 1);
  };

  const verSiHayError = () => {
    if (step === 1 && reserva.servicio.length === 0) {
      setErrorSeccion({
        error: true,
        mensaje: "Debe seleccionar al menos un servicio",
      });
      return true;
    }
  };

  const handleNextButton = async () => {
    const stateError = verSiHayError();

    if (step === 5) {
      try {
        const usuarioIdUsuario = "18ad5810-01d5-11ef-8767-65090dec1f9b";
        const { profesional, servicio, hora, dia } = reserva;
        const empleadoIdEmpleado = profesional.idEmpleado;
        const idServicio = servicio.map((serv) => serv.idServicio);
        const fecha = new Date(dia);
        const turno = "Turno de prueba Front con cambios";

        const requestData = {
          usuarioIdUsuario,
          empleadoIdEmpleado,
          idServicio,
          fecha,
          hora,
          turno,
        };
        addTurno(requestData)
          .then((response) => {
            if (response.data.sucess === true) {
              toast.success("Turno creado!");
              setTimeout(() => {
                router.push('/'); 
              }, 3000); 
            } else {
              toast.error("Creación de turno no exitosa");
              setTimeout(() => {
                router.push('/'); 
              }, 3000); 
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (error) {
        console.error("Error al crear la reserva:", error.message);
      }
    }

    if (!stateError) {
      siguienteStep();
    }
  };

  const handlePrevButton = () => {
    step > 1 && setStep(step - 1); // Implemento la lógica para retroceder al paso anterior
  };

  const setNumPaso = (num) => {
    console.log(num);
    setStep(num);
  };

  const handleInputChange = (e) => {
    const { name, value } = e;
    setReserva({ ...reserva, [name]: value });
  };

  return (
    <div className="w-full">
      <div id="separador-nav"></div>

      <NavBarCitas numPaso={step} setNumPaso={setNumPaso} />

      {errorSeccion.error == true && (
        <ErrorSistemaCitas
          mensaje={errorSeccion.mensaje}
          handleStateError={setErrorSeccion}
        />
      )}

      {/* Render different components based on the current step */}
      {step === 1 && <CitaServicios cargar={handleInputChange} />}
      {step === 2 && (
        <SeleccionarProfesional
          cargar={handleInputChange}
          infoReserva={reserva}
        />
      )}
      {step === 3 && (
        <SeleccionFechaContainer
          cargar={handleInputChange}
          infoReserva={reserva}
        />
      )}
      {step === 4 && (
        <DatosConfirmar cargar={handleInputChange} infoReserva={reserva} />
      )}
      {step === 5 && <ResumenReserva infoReserva={reserva} />}
      <Box
        id="global-citas-style"
        sx={{
          width: "full",
          marginX: { xs: 4, md: 24 },
          justifyItems: "center",
          justifyContent: "space-between",
          display: "flex",
          position: "bottom absolute",
        }}
      >
        {step === 1 && (
          <a href="/">
            <BotonHome className="object-position: left bottom position: absolute" />
          </a>
        )}

        {step > 1 && (
          <BotonRegresar
            onClick={handlePrevButton}
            className="object-position: left bottom position: absolute"
          />
        )}

        <BotonSiguiente
          next={handleNextButton}
          texto={step === 5 ? "Finalizar" : "Siguiente"}
          className="flex justify-end w-11/12 object-position: right bottom position: absolute"
        />
      </Box>
      <div>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              width:"275px",
              height:"100px",
              fontSize:"large"
            },
          }}
        />
      </div>
    </div>
  );
};
export default Reservar;
