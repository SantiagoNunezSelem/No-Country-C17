
import axios from "axios";
const apiKey = "http://localhost:48925/"

export const GetSucursal = async() => {
    try{
        const  sucursalist = await axios.get(`${apiKey}sucursales`)
        return sucursalist;
    }catch(e){
        return e.name;
    }
    
}

export const GetBarbers = async() => {
    try{
        const  barberLista = await axios.get(`${apiKey}employed`)
        return barberLista
    }catch(e){
        return e.name;
    }
   
}

export const GetServicios = async () => {
    try {
        const  barberLista = await axios.get(`${apiKey}services`)
        if (!barberLista) return hardCodeService; 
        return barberLista
    }catch(e){
        return e.name;
    }
}