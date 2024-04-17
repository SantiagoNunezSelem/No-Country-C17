import { Container } from 'postcss';
import React from 'react';

function ResumenServicio(){
    let serviceCard=(label)=>{
        <Container flex id='tarjeta-reserva'>
            <div>
                <h1>Servicio</h1>
                <h2>{label}</h2>
                <ul>
                    <li><img src='front\src\img\Calendar.png'/></li>
                    <li><img src='front\src\img\time.png'/></li>
                    <li><img src='front\src\img\money.png'/></li>
                </ul>

            </div> 
        </Container>       
    }
}

export default ResumenServicio;