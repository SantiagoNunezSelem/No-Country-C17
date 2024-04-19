
import axios from "axios";
const apiKey = "http://localhost:48925/"

export const GetSucursal = async() => {
    const  sucursalist = await axios.get(`${apiKey}sucursales`)
    return sucursalist;
}

export const GetBarbers = async() => {
    const  barberLista = await axios.get(`${apiKey}employed`)
    return barberLista
}
