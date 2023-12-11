import React from "react";
import Areas from "../../Areas";
import Contact from "../../Contact";
import {H2} from './style'
import Galeria from "../../Galeria";


const Servicos = ()=>{
    return(
        <>
          <Areas/>  
          <Galeria/>
          <H2>Fique a vontade para entrar em contato</H2>
<Contact/>
        </>
    )
}
export default Servicos;