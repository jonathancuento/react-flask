import { React } from "react";
import hamburguesa from './images/content_image.png'
export const ContentElement = ({nombre="Pasta",precio="12.25",ingredientes="Tomate, peperoni, piña"})=>{

    return(
        <div className="ContentElement">
            <img className="ElementImage" src={hamburguesa} alt="hamburguesa"></img>
            <div className="ElementDescription">
                <span className="ElementText"><b>{nombre}</b></span>
                <span className="ElementText"><b>$ {precio}</b></span>
            </div>
            <div className="ElementText ElementIngredients">{ingredientes}</div>
        </div>
    )}