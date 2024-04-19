import React, { useEffect, useState } from 'react'
import Sucursal from "@/components/sucursales/Sucursal"

// import sucursal1 from "@/img/sucursal1.png"
// import sucursal2 from "@/img/sucursal2.png"
// import sucursal3 from "@/img/sucursal3.png"
import {GetSucursal} from "@/actions/Querys"
import  {Loading} from '@/components/sucursales/loading.gif'



function SucursalesContainer() {

    
    const [sucursal, setSucursal] = useState([])

    let getSuc = async () => {
        let list = await GetSucursal()
        setSucursal(list.data.rows)
    }

    useEffect(() => {
        getSuc()
    },[])

    return (
    <div className="flex justify-center align-center flex-wrap">

        {sucursal ? sucursal.map(sucursal => {
            return  <Sucursal
            titulo={sucursal.nombre}
            img={sucursal.imagen}
            texto={sucursal.ubicacion}
            id={sucursal.idSucursal}
        />
        }):
        <img src={Loading}/>
        }

    </div>
    )
}

export default SucursalesContainer
