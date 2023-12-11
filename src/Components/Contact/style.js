import styled from "styled-components";



export const Container = styled.div`

display: flex;
justify-content: center;
font-family: 'Saira', sans-serif;
gap:30px;
text-align: center;
flex-wrap: wrap;



`;


export const H1 = styled.h1`
color: #1E3379;
display: flex;
margin-top: 20px;
align-items: center;
font-family: 'Saira', sans-serif;
justify-content: center;
text-align: center;
width: 80%;
`;


export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
width: 50%;
gap: 20px;
align-items: center;

`;

export const Input = styled.input`
border: 1px solid #1E3379;
width: 100%;
border: none;
border-bottom: 2px solid #1E3379;
border-radius: 0 0 16px 16px;
color: #1E3379;
background-color: #B4BBD2 ;
border-radius: 0 0 8px 8px;

outline: none;
padding: 10px;
&::placeholder{
    color: #1E3379;
  
    font-family: 'Saira', sans-serif;
    font-weight: bold;
    
}
`;

export const TextArea = styled.textarea`
  color: #1E3379;
  width: 100%;
  padding: 10px;
border: none;
border-bottom: 2px solid #1E3379;
font-family: 'Saira', sans-serif;
background-color: #B4BBD2 ;
border-radius: 0 0 16px 16px;
outline: #1E3379;
    font-weight: bold;
    &::placeholder{
        color: #1E3379;
    }
`;

export const ContainerInner = styled.div`

display: flex;


width: 100%;
flex-wrap: wrap-reverse;
justify-content: space-around;

`;

export const ContainerButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const Button = styled.button`
background-color: #1E3379;
color: white;
border-radius: 16px;
border: 1px solid #1E3379;
width: 100px;
height: 40px;
font-size: 16px;
font-family: 'Saira', sans-serif;
cursor: pointer;
`;
export const H2 = styled.h2`
color: #2D41F9;
margin-bottom: 40px;
font-family: 'Saira', sans-serif;

`;

export const Icone = styled.div`
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 6px;
background-color: #1E3379;
color: white;
`;

export const ContainerIcones = styled.div`
display:flex;
gap: 20px;
margin-top: 10px;
`


export const ContainerSucess = styled.div`
background-color: #B4BBD2;
`