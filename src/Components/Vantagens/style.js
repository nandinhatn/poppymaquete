import styled from "styled-components";


export const ContainerFull = styled.div`
display: flex;
margin-top: 80px;
justify-content: center;
padding: 5%;
flex-wrap: wrap;
gap: 20px;

`

export const ContainerImage = styled.div`
display: flex;
align-items: center;
justify-content: center;

`;

export const ContainerBacks = styled.div`


`;

export const Image = styled.img`
border-radius: 150px 100px 150px 0;
width: 400px;
height: 900px;
object-fit: cover;
position: absolute;

@media (max-width: 500px){
    width: 300px;
   

}



`;
export const BackColor = styled.div`
background-color: #1E3379 ;
border-radius: 150px 100px 150px 0;
width: 400px;
height: 900px;
margin-top: 10px;
margin-left: 15px;

top: 0;
@media (max-width: 500px){
    width: 300px;
   

}


`;

export const ContainerLeft = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
width: 50%;
`;

export const H2 = styled.h2`
font-family: 'Saira', sans-serif;
color: #1E3379;
`;
export const Icone = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
color: white;
display: flex;
justify-content: center;
align-items: center;
background-color: #1E3379 ;
`;
export const H3 = styled.h3`
font-family: 'Saira', sans-serif;
display: flex;
justify-content: center;

`;


export const ContainerLeftInner = styled.div`
display: flex;

margin-top: 20px;
margin-bottom: 20px;

gap: 20px;
font-family: 'Saira', sans-serif;
`;
