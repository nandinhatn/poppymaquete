import React, {useState, useEffect,useLayoutEffect} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination , Autoplay} from "swiper/modules";
import {Container, Img,ContainerInner} from './style'
import 'swiper/css';

import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Logo1 from '../../assets/logos/americanas.webp'
import Logo2 from '../../assets/logos/bmw.webp';
import Logo3 from '../../assets/logos/fisklogo.webp';
import Logo4 from '../../assets/logos/leroymerlin.webp';
import Logo5 from '../../assets/logos/logoFox.webp';
import Logo6 from '../../assets/logos/logo3m.webp';
import Logo7 from '../../assets/logos/logoSadia.webp';
import Logo8 from '../../assets/logos/logoYpe.webp';
import Logo9 from '../../assets/logos/logoabsolute.webp';
import Logo10 from '../../assets/logos/logoazimute.webp';
import Logo11 from '../../assets/logos/logoazul.webp';
import Logo12 from '../../assets/logos/logocorona.webp';
import Logo13 from '../../assets/logos/logoloreal.webp';
import Logo14 from '../../assets/logos/logomichelin.webp';
import Logo15 from '../../assets/logos/logonike.webp';
import Logo16 from '../../assets/logos/logopagseguro.webp';
import Logo17 from '../../assets/logos/logopharmaestetics.webp';
import Logo18 from '../../assets/logos/logopostit.webp';
import Logo19 from '../../assets/logos/logorenner.webp';
import Logo20 from '../../assets/logos/logosantander.webp';
import Logo21 from '../../assets/logos/logosherings.webp';
import Logo22 from '../../assets/logos/logoteva.webp';
import Logo23 from '../../assets/logos/logouol.webp';
import Logo24 from '../../assets/logos/porshelogo.webp';
import Logo25 from '../../assets/logos/redbull.webp';
import Logo26 from '../../assets/logos/samsung.webp';
import Logo27 from '../../assets/logos/zara.webp';

   

import { EffectFade, EffectCube,} from 'swiper/modules';
const BannerLogos = ()=>{


  const [size,setSize]= useState();

  function updateSize(){
    setSize(window.innerWidth)
    console.log('mudou o tamanho')
  }

  useEffect(()=>{
    console.log(window.innerWidth)
    window.addEventListener('resize', updateSize);
    updateSize();
    setSize(window.innerWidth)
  },[])
   
    return(
        <>
        <Container>

       
           <Swiper
     modules={[Navigation, Pagination,  Autoplay]}
      spaceBetween={50}
      slidesPerView={size <=450? 1: size<=750?  2 : 3}
      loop={true}
    
      autoplay={{delay:2000}}
      
      onSlideChange={() => console.log('slide change')}
      effect="cube"
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <ContainerInner>

        <Img width={150} heigth={100} hei alt="Logo das Americanas" src={Logo1}/>
        </ContainerInner>
      </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>

          <Img width={100} heigth={100}  alt="Logo da BMW" src={Logo2}/>
        </ContainerInner>
         </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>

        <Img  width={150} heigth={100} alt="Logo da Fisk" src={Logo3}/>
        </ContainerInner>
        </SwiperSlide>
      
      <SwiperSlide>
        <ContainerInner>

         <Img width={150} heigth={100} alt="Logo da Leroy Merlin" src={Logo4}/>
        </ContainerInner>
      </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>

         <Img width={150} heigth={100}  alt="Logo da Fox" src={Logo5}/>
        </ContainerInner>
         </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>

        <Img width={100} heigth={100} alt="Logo da 3M" src={Logo6}/>
        </ContainerInner>
        </SwiperSlide>
      
      <SwiperSlide>
        <ContainerInner>

        <Img  width={150} heigth={100} alt="Logo da Sadia" src={Logo7}/>
        </ContainerInner>
      </SwiperSlide>
      <SwiperSlide> 
        <ContainerInner>

        <Img  width={150} heigth={100} alt="Logo Ypê" src={Logo8}/>
        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  width={150} heigth={100} alt="Logo Absolute" src={Logo9}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  width={150} heigth={100} alt= "Logo Azimute" src={Logo10}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  width={150} heigth={100} alt="Logo Azul" src={Logo11}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img width={150} heigth={100}  alt="Logo Corona" src={Logo12}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  alt="Logo Loreal" src={Logo13}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  alt="Logo Michelin" src={Logo14}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img alt="Logo Nike" src={Logo15}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  alt="Logo Pagseguro" src={Logo16}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  alt="Logo pharmaestetic" width={200} src={Logo17}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img alt="Logo Postit" width={150} src={Logo18}/>

        </ContainerInner>
        </SwiperSlide>
      
      <SwiperSlide>
        <ContainerInner>
        <Img  alt="Logo Renner" src={Logo19}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  alt="logo santander" src={Logo20}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img alt="Logo sherings" width={200} src={Logo21}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img alt="logo teva" width={150} src={Logo22}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  alt="Logo Uol" src={Logo23}/>

        </ContainerInner>
        </SwiperSlide>
      
      <SwiperSlide>
        <ContainerInner>
        <Img alt="Logo Porshe"  width={230} src={Logo24}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img alt="Logo Redbull" width={150} src={Logo25}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img alt="Logo samsung" width={200} src={Logo26}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img alt="Logo Zara" width={150} src={Logo27}/>

        </ContainerInner>
        </SwiperSlide>
      
     
      
    </Swiper> 
    </Container>
        </>
    )
}
export default BannerLogos