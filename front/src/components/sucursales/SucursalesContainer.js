import React, { useEffect, useState } from 'react'
import Sucursal from "@/components/sucursales/Sucursal"
// import {GetSucursal} from "@/actions/Querys"
import Loading from '@/loading.png';
import Image from 'next/image'
import {sucursales as a} from "@/lib/data.js"

function SucursalesContainer() {

    const [sucursal, setSucursal] = useState(a)
    const [loading, setLoading] = useState(true)

    // let getSuc = async () => {
    //     let list = await GetSucursal()
    //     setLoading(false)
    //     setSucursal(list.data.rows)
    // }

    useEffect(() => {
        // getSuc()
    },[])


    return (
    <div className="flex justify-center align-center flex-wrap">
    
        {sucursal && sucursal.map(sucursal => {
            return  <Sucursal
            key={sucursal.idSucursal}
            titulo={sucursal.nombre}
            img={sucursal.imagen}
            texto={sucursal.ubicacion}
            id={sucursal.idSucursal}
        />
        })
        }
        {/* {loading &&  <div>
                <Image src={Loading} alt="loading..."  className="w-24 h-full animate-spin"/>
                <p className='text-white'>cargando...</p>
        </div>} */}
    </div>
    )
}

export default SucursalesContainer
