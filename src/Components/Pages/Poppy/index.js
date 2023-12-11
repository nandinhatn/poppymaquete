import react from 'react';

import {H1,Container,ContainerPoppy} from './style'
import Sobre from '../../Sobre';
import Vantagens from '../../Vantagens';
import Galeria from '../../Galeria';

const Poppy = ()=>{

    return(
        <>
        <Container>
      <H1>Poppy Midia Maquete Eletrônica 3d</H1>
        <ContainerPoppy>
       Há 20 anos trabalhamos no desenvolvimento de maquete eletrônica 3d.
       <br></br>
      
        
        Nessa nossa história são mais de 2000 projetos desenvolvidos desde pequenos stands a grandes museus como o primeiro Museu das Letras, Museu Pelé na Alemanhã entre outros.
        <br></br>
        
         Atuamos também com imagens 3D na arquitetura com mais de centenas de projetos em arquitetura de Projetos residenciais por todo o país.
      
        </ContainerPoppy>
 

        <Vantagens/>
      <Sobre/>
        <Galeria/>
        </Container>
        </>
    )
}

export default Poppy