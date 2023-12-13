import React, { useEffect, useState } from "react";
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import {Container, Image,H2} from './style'
import Foto1 from '../../assets/Becksaerea0000.jpg'
import Foto2 from '../../assets/Becks URBECK_S .jpg'
/* import data from '../../assets/Data/datafake' */
import axios from 'axios'

const Galeria = ()=>{

   const [portTotal, setPortTotal] = useState();
   const [portReduz, setPortReduz] = useState();
   const [dataImage, setDataImage] = useState();


   const saveData= ()=>{

   axios('https:///www.poppymidia.com.br',{ method:'GET', mode:'no-cors'}).then((res)=>{ console.log(res)})
    
   }



   function sortPort(){
    let array =[]
    for(let i=0; i<25; i++){
   
      let number = parseInt(Math.random(data.length)*100);
     
      array.push(number)
    }
    let arrayFilter =[]
    array.forEach((element) => {
          let filter = data.filter((el, i)=> i==element )
          console.log(filter)
          arrayFilter.push(filter[0])
    });
    setPortReduz(arrayFilter)
    console.log(arrayFilter)
   }

useEffect(()=> {
/*   console.log(data)
  setPortTotal(data);
  sortPort() */
},[])

useEffect(()=>{
  saveData()
},[])


     

    return (
        <>
          <H2>Veja alguns dos nossos trabalhos</H2>
        <Container>
 <Gallery withCaption>
  {portReduz ?  portReduz.map((el,i)=>{
    return(
      <>
      {i<=185?   <Item
      original={el.image}
      thumbnail={el.image}
      width={el.width}
      height={el.height}
      caption={el.caption}
    >
      {({ ref, open }) => (
        <Image ref={ref} alt={el.alt} onClick={open} src={el.image} />
      )}
    </Item> : ''}
      

      </>
    )
  }) : ''}

      
  </Gallery>
        </Container>
       
        </>
    )
}

export default Galeria