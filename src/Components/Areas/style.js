import styled, {keyframes} from "styled-components";

import Foto from '../../assets/backareas.webp';



export const Container = styled.div`
background-image: url(${Foto});
object-fit: cover;
padding: 20px;
margin-top: 80px;
font-family: 'Saira', sans-serif;
display: flex;
justify-content: center;
flex-direction: column;
transition: all 0.3s ease-in-out;




`;

export const H2 = styled.h2`
color: white;
display: flex;
justify-content: center;
align-items: center;
`
export const H3 = styled.h3`
color: white;
display: flex;
justify-content: center;
align-items: center;
`;


export const BtnArea = styled.div`
background-color: #142B7A; 
padding: 5px  15px;
`;

export const ContainerButtons = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap : 20px;
color : white;
margin-bottom: 20px;
margin-top: 20px;
cursor: pointer;
flex-wrap: wrap;

;

`;
export const breatheAnimation = keyframes`
 0% { height: 0; margin-left: -50px }
 30% { height: 10% ;  opacity: 0 }
 40% { height: 50%;  opacity: 0.3; }
 100% { height: 100%;  opacity:1; }
`


export const ContainerText = styled.div`
background: rgba(65, 62, 62, 0.50);
padding: 30px;
color: white;

/* animation : ${breatheAnimation} 1s ease-in-out;

animation-name : ${(props)=> props.animation===1?  breatheAnimation :''};
animation-duration: 2s; */



 






`;
export const ContainerText1 = styled.div`
background: rgba(65, 62, 62, 0.50);
padding: 30px;
color: white;

/* animation : ${breatheAnimation} 1s ease-in-out;

animation-name : ${(props)=> props.animation===1?  breatheAnimation :''};
animation-duration: 2s; */



 






`;


