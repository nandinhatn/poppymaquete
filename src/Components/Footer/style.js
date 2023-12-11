import styled from "styled-components";




export const Container = styled.div`
background-color: rgba(30, 51, 121, 1) ;
padding: 20px; 
color: white;
font-family: 'Saira', sans-serif;
display: flex;
justify-content: space-between;

@media (max-width:700px){
   
    justify-content: center;
    gap: 50px;
   

}
    
align-items: center;
margin-top: 100px;
flex-wrap: wrap;
`;

export const Logo = styled.img`
width: 70px;
`;

export const ContainerLogosFooter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
`;
export const ContainerLinks = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
gap: 20x;
width: 400px;

`;

export const ContainerLogos = styled.div`
display:flex;
gap: 20px;


`;