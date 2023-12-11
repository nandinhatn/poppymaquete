import React, { useEffect } from "react";

import AwesomeSlider from 'react-awesome-slider';

import Foto1 from '../../assets/imagem3dPostIt.jpg';
import Foto2 from '../../assets/Becksaerea0000.jpg';
import Foto3 from '../../assets/standYpe.jpg';
import Foto4 from '../../assets/loreal.jpg';
import Video from '../../assets/ValePoppyMidia- MaqueteEletronica 3d.mp4'
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
        <Img  src={Foto1}/>
      </SwiperSlide>
     

      <SwiperSlide> <Img  src={Foto3}/></SwiperSlide>
      <SwiperSlide><Img  src={Foto4}/></SwiperSlide>
      
     
      
    </Swiper> 

     </Container>
    </>)
}
export default Banner;