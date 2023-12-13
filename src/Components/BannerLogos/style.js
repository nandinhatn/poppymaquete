import styled from "styled-components";

import Foto from '../../assets/background-logos.webp';

export const Container = styled.div`


background: url(${Foto}); 
background-size: cover;
background-position: center;



margin-top: 80px;
height: 200px;

display: flex;
align-items: center;
justify-content: center;

`;

export const ContainerInner = styled.div`
display:flex;
align-items: center;
justify-content: center;

height: 200px;

`;
export const Img = styled.img`
display: flex;
justify-content: center;
align-items: center;


`;