import { React } from "react";
import { MenuHead } from "./MenuHead";
import { MenuBody } from "./MenuBody";
import { MenuFooter } from "./MenuFooter";


export const Menu = ()=>(
    <div className="Menu col-sm-1 col-md-3">
        <MenuHead />
        <MenuBody />
        <MenuFooter />
        <div className="MenuLogin"></div>
    </div>
    )