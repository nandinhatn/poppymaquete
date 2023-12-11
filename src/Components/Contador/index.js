import react, {useEffect, useState} from 'react'
import {Container,ContainerFull,Image, TextCont,ContainerTexts,ContainerIcone} from './style';

const Contador = (props)=>{
      const [cont, setCont] = useState(0);

      
      let interval ;
      
      useEffect(()=>{
        let conta = 0;
        let intervalo = props.conta<100 ? 1000 : 30 
       interval = setInterval(() => {
          if(conta<props.conta/2){
            conta = conta +1;

            setCont(cont => cont + 1);
          }
          else{
            clearInterval(interval)
          }
        }, intervalo);
        
      },[])
     
    return(
        <>
        <ContainerFull>
        <ContainerIcone>
        <Container><Image src={props.image} />
        
        </Container>

        </ContainerIcone>
      
   
        <div> <TextCont>{cont} +</TextCont>
        <ContainerTexts>
        {props.texto}
        </ContainerTexts>
       </div>
        </ContainerFull>
        </>
    )
}
export default Contador