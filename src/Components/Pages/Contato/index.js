import react from 'react';


import {H1,Container,ContainerForm,Input,TextArea,ContainerInner,Button,ContainerButton,H2} from './style'
import Contact from '../../Contact';
import Vantagens from '../../Vantagens';
import { Helmet } from 'react-helmet';

const Contato = ()=>{
    return(
        <>
        <Helmet>
            <title>Maquetes e Imagens 3d para Cenografia Eventos </title>
            <meta name="description" content="App Description" />
            <meta name="keywords" content="react, meta tags, seo" />
        </Helmet>
            <H1>Fique a Vontade para entrar em contato para mais informações</H1>
       {/*  <Container>

      
            <ContainerInner>
            <div>
         <H2> Nossos contatos</H2> 

55119969748216
contato@poppymidia.com.br
            </div> 
            <ContainerForm>
            <Input placeholder='Informe seu nome'></Input>
            <Input placeholder='Email'></Input>
            <Input placeholder='Assunto'></Input>
            <TextArea
                placeholder='Deixe sua mensagem'
            >

            </TextArea>
            <ContainerButton>

            <Button>Enviar</Button>
            </ContainerButton>
            </ContainerForm>
            </ContainerInner>
           
        </Container> */}
        <Contact/>
        <Vantagens/>
        
        </>
    )
}

export default Contato;