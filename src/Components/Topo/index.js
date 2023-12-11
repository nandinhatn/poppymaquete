import react from 'react';
import {Container, Img, Menu, Li} from './style'
import Logo from '../../assets/logo-poppy3d.png'
import { NavLink, useLocation , useNavigate} from 'react-router-dom';
import ButtonOrc from '../ButtonOrc';
const Topo = ()=>{
    const navigate = useNavigate()
    return(
        <>
        <Container>
            <Img onClick={()=> navigate('/')} src={Logo} />
            <Menu>
            
    <li onClick={()=> navigate('/')}>Home</li>
    <li>|</li>
    <li onClick={()=> navigate('/Poppy')}>A Poppy</li>
    <li >|</li>
    <li onClick={()=> navigate('/servicos3d')}>Serviços</li>
    <li>|</li>
    <li onClick={()=> navigate('/contato')}>Contato</li>
</Menu>
<ButtonOrc action={()=>navigate('/contato')} title={"Orçamento"}/>
            
        </Container>
        </>
    )
}
export default Topo;