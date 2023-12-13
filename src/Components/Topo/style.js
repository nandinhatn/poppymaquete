import styled from "styled-components";

export  const Container = styled.div`
background-color: rgba(7,12, 41, 80%)  ;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
height: 100px;
z-index: 9;
position: absolute;

width: 100%;
@media (max-width:860px){
    justify-content: space-between;
    height: 190px;
    flex-direction: column;
    padding-bottom: 20px;
    
   
    
    
    
}
`;

export const Img = styled.img`
width: 200px;
padding: 20px;
cursor: pointer;
`;

export const Menu = styled.ul`
   list-style: none;
    color: white;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center; 
    font-family: 'Saira', sans-serif;
    cursor: pointer;
   

`
export const Li = styled.li`
cursor: pointer;
`; 