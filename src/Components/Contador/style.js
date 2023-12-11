import styled from "styled-components";


export const Container = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: #1E3379;
display: flex;
align-items: center;

justify-content: center;
color: white;


`;
export const ContainerFull = styled.div`
display: flex;


@media (max-width:835px){
    padding-bottom: 10px;
border-bottom: 3px solid #22367B;

}

gap: 40px;
flex-wrap: wrap;
justify-content: center;
align-items: center;

font-size: 20px;
font-family: 'Saira', sans-serif;
margin-right: 60px;
`;

export const Image = styled.img`
width: 60px;

`;

export const TextCont = styled.div`
font-size: 30px;
display:flex;
justify-content: center;
`;

export const ContainerTexts = styled.div`
display:flex;
justify-content: center;
align-items: center;
text-align: center;

`;

export const ContainerIcone = styled.div`
width: 150px;

`;

