import React, { useEffect } from "react";

import AwesomeSlider from 'react-awesome-slider';

import Foto1 from '../../assets/imagem3dPostIt.webp';

import Foto3 from '../../assets/standYpe.webp';
import Foto4 from '../../assets/loreal.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination , Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

import { EffectFade, EffectCube} from 'swiper/modules';
import {Container, Img} from './style'
const Banner = ()=>{


    return(<>
     <Container>
     <Swiper
     modules={[Navigation, Pagination, EffectCube, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation={true}
      autoplay={{delay:2000}}
      pagination={{clickable:true}}
      onSlideChange={() => console.log('slide change')}
      effect="cube"
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Img alt="Imagem 3d Post It"  src={Foto1}/>
      </SwiperSlide>
     

      <SwiperSlide> <Img  alt="Imagem 3d do Stand Ype" src={Foto3}/></SwiperSlide>
      <SwiperSlide><Img  alt="Imagem 3d do Evento da Loreal" src={Foto4}/></SwiperSlide>
      
     
      
    </Swiper> 

     </Container>
    </>)
}
export default Banner;