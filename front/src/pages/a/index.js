import React from 'react'
import NavBarCitas from '@/components/sitemaCitas/NavBarCitas'
function reservarCita_1() {
    return (
    <div class="w-full">
        <div id="separador-nav"></div> {/* genera el espacio de la navbar (no responsive por ahoora) */}

        <NavBarCitas numPaso={1}/>

        <div>
            hola
        </div>
    </div>
    )
}

export default reservarCita_1

