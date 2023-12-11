import logo from './logo.svg';
import './App.css';
import Topo from './Components/Topo';
import Banner from './Components/Banner';
import Contador from './Components/Contador';
import { Container } from './style';
import Body from './Components/Body';
import BannerLogos from './Components/BannerLogos';
import Vantagens from './Components/Vantagens';
import Areas from './Components/Areas';
import Footer from './Components/Footer';
import Galeria from './Components/Galeria';

import Home from './Components/Pages/Home';

import {
  createBrowserRouter, RouterProvider, Routes, BrowserRouter, Router, Route
} from 'react-router-dom';
import Poppy from './Components/Pages/Poppy';
import Servicos from './Components/Pages/Servicos';
import Contato from './Components/Pages/Contato';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Logo from './assets/logo_poppy_solo.png'
function App() {
  return (
    <>
    <BrowserRouter>
    <Container>

<Topo/>
  <Banner/>
    </Container>
<Routes>

<Route index path='/' element={<Home/>}></Route>
<Route  path='/poppy' element={<Poppy/>}></Route>
<Route  path='/servicos3d' element={<Servicos/>}></Route>
<Route  path='/contato' element={<Contato/>}></Route>

{/* <Body/>
<Vantagens/>
<Areas/>
<Galeria/>
<BannerLogos/> */}
</Routes>
<Footer/>
<FloatingWhatsApp
 phoneNumber='5511969748216'
 accountName='Poppy Midia'
 statusMessage='Normalmente responde em 1 hora'
 chatMessage='Olá como posso te ajudar'
 avatar={Logo}
 placeholder='Escreva sua mensagem'
/>
    </BrowserRouter>
 

    </>
  );
}

export default App;
