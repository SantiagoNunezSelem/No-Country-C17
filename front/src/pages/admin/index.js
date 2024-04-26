import React,{useState,useEffect} from 'react'
import Reserva from '@/components/sitemaCitas/Paso4-DatosContacto/resumen-servicios'
import SeleccionarDia from '@/components/sitemaCitas/Paso3-SeleccionarFecha/SeleccionarDia'

function MenuAdmin() {
    const [diaSelec,setDiaSelec] = useState("")
    const [turnos,setTurnos] = useState("")

    useEffect(() => {
        //Defino data porque no tenemos la consulta a la db (filtrar unicamente por día)
        setTurnos(
            //Acá hay que hacer una consulta a la db sobre los turnos
            [{
                servicio:[{nombre:"Simular Info",precio:"$30,00"}],
                profesional:{nombre:"pedro",apellido:"gomez"},
                dia:"dia",
                hora:"hora"
            },
            {
                servicio:[{nombre:"Simular Info",precio:"$30,00"}],
                profesional:{nombre:"pedro",apellido:"gomez"},
                dia:"dia",
                hora:"hora"
            },
            {
                servicio:[{nombre:"Simular Info",precio:"$30,00"}],
                profesional:{nombre:"pedro",apellido:"gomez"},
                dia:"dia",
                hora:"hora"
            },
            {
                servicio:[{nombre:"Simular Info",precio:"$30,00"}],
                profesional:{nombre:"pedro",apellido:"gomez"},
                dia:"dia",
                hora:"hora"
            },
            {
                servicio:[{nombre:"Simular Info",precio:"$30,00"}],
                profesional:{nombre:"pedro",apellido:"gomez"},
                dia:"dia",
                hora:"hora"
            },
            {
                servicio:[{nombre:"corte",precio:"$30,00"}],
                profesional:{nombre:"pedro",apellido:"gomez"},
                dia:"dia",
                hora:"hora"
            }]
        )
    })



    return (
    <div>
        <div id="separador-nav"></div>
        
        <h3 className='text-center text-white text-2xl font-semibold p-4 my-5'>INFO TURNOS</h3>

        <SeleccionarDia cargar={setDiaSelec}/>
        <div className="flex flex-row justify-center w-full m-auto mt-10">
            
            <div className="w-2/5 min-w-80">
            {turnos !== "" &&
                turnos.map((turno, index) => (
                    <div key={index} className="mb-5">
                        <Reserva data={turno}/>
                    </div> 
                ))
            }
            </div>
        </div>
        
    </div>
    )
}

export default MenuAdmin
