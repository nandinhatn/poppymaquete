import react from 'react';
import Contador from '../Contador';
import {Container,ContainerFull,H1, H2,ContainerText} from './style'
import Image1 from '../../assets/ampulheta.png';
import Image2 from '../../assets/certification.png';
import Image3 from '../../assets/people.png';
import Sobre from '../Sobre';


const Body = ()=>{

    return(
        <>
        <ContainerFull>

       
        <H1>Excelência em Imagens 3d reais</H1>
        
          <Sobre/>
         
            
        <H2>Veja nossos números</H2>
        <Container>
            <Contador image={Image2} conta={1250} texto = {'Projetos de Sucesso'}/> 
            <Contador image ={Image1} conta={20} texto={'Anos de Experiência'}/> 
            <Contador image={Image3} conta={50} texto={'Clientes Globais'}/> 
        </Container>
        </ContainerFull>
        
        </>
    )
}

export default Body