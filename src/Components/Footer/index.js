import react from 'react'

import { Container, Logo, ContainerLinks,ContainerLogos,ContainerLogosFooter} from './style'
import Logo1 from '../../assets/logo_poppy_original1.png'
import Logo2 from '../../assets/logo-poppy-sites.png'

import { NavLink, useLocation , useNavigate} from 'react-router-dom';
const Footer = ()=>{
    const navigate = useNavigate()
    return(
        <>
        <Container>
            <Logo alt="Logo Poppy Midia" aria-label="logo da poppy" src={Logo1}></Logo>
            <ContainerLinks>
                <div style={{cursor:'pointer'}} onClick={()=> navigate('/')} >
                    Home
                </div>
                <div style={{cursor:'pointer'}} onClick={()=> navigate('/Poppy')} >Poppy</div>
                <div style={{cursor:'pointer'}} onClick={()=> navigate('contato')} >Contatos</div>
            </ContainerLinks>
            <ContainerLogos>
                    <ContainerLogosFooter>
                    <Logo alt="Logo Poppy Midia" aria-label="logo da poppy" src={Logo1}></Logo>
                    <div>Maquetes</div>
                    </ContainerLogosFooter>
                    <ContainerLogosFooter>

                    <a href='http://www.poppymidia.com' aria-label="logo da poppy midia que leva ao site do desenvolvimento" target='_blank'><Logo alt="Logo Poppy Midia Sites" src={Logo2}></Logo></a>
                        <div>Web | Sites</div>
                    </ContainerLogosFooter>
               
            </ContainerLogos>
        </Container>
        </>
    )
}

export default Footer;