import React from 'react'
import { useState } from 'react'


function Form({onSubmit, titulo}) {

    const[nombre, setNombre] = useState ("");
    const[planta, setPlanta] = useState ("");
    
    const handlerChangeNombre = (e) => {
        setNombre(e.target.value);
    }
    const handlerChangePlanta = (e) => {
        setPlanta(e.target.value);
    }

    
    const handlerSubmit = (e) => {
        e.preventDefault();

        const data = {
            nombre,
            planta
        }
        onSubmit(data)
    }

    return (
        <form onSubmit={handlerSubmit}>{}
            <h1>{titulo}</h1> {}
            <input 
                id="name"
                type="text" 
                name="nombre"
                value={nombre}
                placeholder="Nombre (mayor a 3 caracteres)"
                onChange={handlerChangeNombre}
            />
            <br />

            <input
                id="planta"
                type="text" 
                name="planta" 
                value={planta}
                placeholder="planta favorita (mayor a 6 caracteres)"
                onChange={handlerChangePlanta}
            />
            <br />
            <input id="btn-enviar" type="submit" />

            
        </form>
    )
}

export default Form