import React, { useEffect, useState } from "react";
import { ContentElement } from "./ContentElement";
//import { productos } from "./productos";

export const ContentContent = ()=>{

    const [datos, setDatos] = useState([]);

    useEffect(()=>{

        fetch('./api').then(response =>{
            if(response.ok){
                return response.json()
            }
        }).then(data => setDatos(data))
    });

    return(
        <div className="ContentContent">
            {datos.map(({id, nombre, precio, ingredientes})=>
                <ContentElement key={id} nombre={nombre} precio={precio} ingredientes={ingredientes}/>
                )}
        </div>
    )}

