import react from 'react';
import {FaCheck} from 'react-icons/fa'

import {BackColor,
    ContainerBacks,
    ContainerFull,
    ContainerImage,
    Image, 
    H2,
    H3,
    ContainerLeftInner,
    ContainerIcone,
    ContainerLeft,
    Icone} from './style'

import Foto from '../../assets/UOL-gamearea0030000.webp';
import Buttons from '../Buttons';
const Vantagens = ()=>{
    return (
        <>
       <ContainerFull>
        <ContainerLeft>
            <H2>

        Apresente seus eventos e seus projetos de forma real com detalhes com a ajuda da modelagem 3d
            </H2>
            <H3>Conheça as vantagens</H3>
            <ContainerLeftInner>
                <Icone><FaCheck/></Icone>
                <div>Visualização realista do projeto</div>
            </ContainerLeftInner>
            <ContainerLeftInner>
                <Icone><FaCheck/></Icone>
                <div>Identificação antecipada de problemas</div>
            </ContainerLeftInner>
            <ContainerLeftInner>
                <Icone><FaCheck/></Icone>
                <div>Comunicação eficaz com clientes</div>
            </ContainerLeftInner>
            <ContainerLeftInner>
                <Icone><FaCheck/></Icone>
                <div>Apoio ao marketing e vendas</div>
            </ContainerLeftInner>
            <ContainerLeftInner>
                <Icone><FaCheck/></Icone>
                <div>Uso em treinamento e educação</div>
            </ContainerLeftInner>
            <ContainerLeftInner>
                <Icone><FaCheck/></Icone>
                <div>Redução de desperdício de materiais</div>
            </ContainerLeftInner>
            <ContainerLeftInner>
                <Icone><FaCheck/></Icone>
                <div>Controle de custos</div>
            </ContainerLeftInner>
            <ContainerLeftInner>
                <Icone><FaCheck/></Icone>
                <div>Testes de design sustentável</div>
            </ContainerLeftInner>
            <ContainerLeftInner>
                <Icone><FaCheck/></Icone>
                <div>Documentação detalhada do projeto</div>
            </ContainerLeftInner>
                <Buttons title="Faça um orçamento"/>
        </ContainerLeft>
        <ContainerImage>
            <ContainerBacks>
                <Image alt="Imagem 3d do Uol" src={Foto}></Image>
                <BackColor></BackColor>
            </ContainerBacks>
        </ContainerImage>
       </ContainerFull>
        </>
    )
}
export default Vantagens;