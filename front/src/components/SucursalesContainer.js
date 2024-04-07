import React from 'react'
import Sucursal from "@/components/Sucursal"

import sucursal1 from "@/img/sucursal1.png"
import sucursal2 from "@/img/sucursal2.png"
import sucursal3 from "@/img/sucursal3.png"

function SucursalesContainer() {
    return (
    <div className="flex justify-center align-center flex-wrap mb-2">

        <Sucursal
            titulo="FLORES"
            img={sucursal1}
            texto="Avenida Rivadavia 456, Buenos Aires, Argentina"
        />

        <Sucursal
            titulo="PALERMO"
            img={sucursal2}
            texto="Godoy Cruz 2606, Buenos Aires, Argentina"
        />

        <Sucursal
            titulo="CABALLITO"
            img={sucursal3}
            texto="Bacacay 901, Buenos Aires, Argentina"
        />

    </div>
    )
}

export default SucursalesContainer
