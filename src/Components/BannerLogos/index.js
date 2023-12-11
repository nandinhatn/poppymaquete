import React, {useState, useEffect,useLayoutEffect} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination , Autoplay} from "swiper/modules";
import {Container, Img,ContainerInner} from './style'
import 'swiper/css';

import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Logo1 from '../../assets/logos/americanas.png'
import Logo2 from '../../assets/logos/bmw.png';
import Logo3 from '../../assets/logos/fisklogo.png';
import Logo4 from '../../assets/logos/leroymerlin.png';
import Logo5 from '../../assets/logos/logoFox.png';
import Logo6 from '../../assets/logos/logo3m.png';
import Logo7 from '../../assets/logos/logoSadia.png';
import Logo8 from '../../assets/logos/logoYpe.png';
import Logo9 from '../../assets/logos/logoabsolute.png';
import Logo10 from '../../assets/logos/logoazimute.png';
import Logo11 from '../../assets/logos/logoazul.png';
import Logo12 from '../../assets/logos/logocorona.png';
import Logo13 from '../../assets/logos/logoloreal.png';
import Logo14 from '../../assets/logos/logomichelin.png';
import Logo15 from '../../assets/logos/logonike.png';
import Logo16 from '../../assets/logos/logopagseguro.png';
import Logo17 from '../../assets/logos/logopharmaestetics.png';
import Logo18 from '../../assets/logos/logopostit.png';
import Logo19 from '../../assets/logos/logorenner.png';
import Logo20 from '../../assets/logos/logosantander.png';
import Logo21 from '../../assets/logos/logosherings.png';
import Logo22 from '../../assets/logos/logoteva.png';
import Logo23 from '../../assets/logos/logouol.png';
import Logo24 from '../../assets/logos/porshelogo.png';
import Logo25 from '../../assets/logos/redbull.png';
import Logo26 from '../../assets/logos/samsung.png';
import Logo27 from '../../assets/logos/zara.png';

   

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

        <Img width={200}  src={Logo1}/>
        </ContainerInner>
      </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>

          <Img width={100}  src={Logo2}/>
        </ContainerInner>
         </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>

        <Img  width={150} src={Logo3}/>
        </ContainerInner>
        </SwiperSlide>
      
      <SwiperSlide>
        <ContainerInner>

         <Img  width={150} src={Logo4}/>
        </ContainerInner>
      </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>

         <Img width={150}  src={Logo5}/>
        </ContainerInner>
         </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>

        <Img width={150} src={Logo6}/>
        </ContainerInner>
        </SwiperSlide>
      
      <SwiperSlide>
        <ContainerInner>

        <Img  width={200} src={Logo7}/>
        </ContainerInner>
      </SwiperSlide>
      <SwiperSlide> 
        <ContainerInner>

        <Img  width={150} src={Logo8}/>
        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  src={Logo9}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  src={Logo10}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  src={Logo11}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  src={Logo12}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  src={Logo13}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  src={Logo14}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  src={Logo15}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  src={Logo16}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img width={200} src={Logo17}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img width={150} src={Logo18}/>

        </ContainerInner>
        </SwiperSlide>
      
      <SwiperSlide>
        <ContainerInner>
        <Img  src={Logo19}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  src={Logo20}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img width={200} src={Logo21}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img width={150} src={Logo22}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img  src={Logo23}/>

        </ContainerInner>
        </SwiperSlide>
      
      <SwiperSlide>
        <ContainerInner>
        <Img  width={230} src={Logo24}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img width={150} src={Logo25}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img width={200} src={Logo26}/>

        </ContainerInner>
        </SwiperSlide>
      <SwiperSlide>
        <ContainerInner>
        <Img width={150} src={Logo27}/>

        </ContainerInner>
        </SwiperSlide>
      
     
      
    </Swiper> 
    </Container>
        </>
    )
}
export default BannerLogos