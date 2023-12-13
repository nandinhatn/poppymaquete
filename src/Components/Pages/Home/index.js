import react from 'react';
import Body from '../../Body';
import Vantagens from '../../Vantagens';
import Areas from '../../Areas';
import Galeria from '../../Galeria';
import BannerLogos from '../../BannerLogos';
import Contact from '../../Contact';

import {H2} from './style'

const Home = ()=>{

    return(
        <>
        <Body/>
<Vantagens/>
<Areas/>
 <Galeria/> 
<BannerLogos/>
<H2>Fique a vontade para entrar em contato</H2>
<Contact/>
        </>
    )

}

export default Home;