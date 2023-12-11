import react, {useEffect, useState} from 'react';
import './module.css';

import {Container,H2,H3,ContainerButtons,BtnArea, ContainerText,ContainerText1} from './style'
const Areas =()=>{
        

     
   
  
        const [text, setText] = useState('evento');
        const [animation, setAnimation ] = useState(0)
        const [classe, setClasse] = useState('')
        const [exib, setExib] = useState(false)

   
        function animations (name){
            console.log('cliquei')
          
      
            setExib(false)
                setText('vazio')
              
                setTimeout((function(){
                  
                  
                    setExib(true)
                }),500)
                console.log(name, text, animation)
                setClasse('image2')
               setClasse('image')
           
                setAnimation(0);
                setAnimation('1');
                setText(name)

              
        }
      
       
    return(
        <>
        <Container>
            <H2>NOSSAS ÁREAS DE ATUAÇÃO </H2>
            <H3>Saiba mais sobre nossa atuação em Imagens 3d</H3>

            <ContainerButtons>

                <BtnArea onClick={()=> animations('evento')}>Eventos</BtnArea>
                <BtnArea onClick={()=> animations('arquitetura')}>Arquitetura</BtnArea>
                <BtnArea onClick={()=> animations('estandes')}>Estandes</BtnArea>
                <BtnArea onClick={()=> animations('animacoes')}>Animações</BtnArea>
                <BtnArea onClick={()=> animations('imagens360')}>Imagens 360</BtnArea>

            </ContainerButtons>

          
            {text==='evento' && exib? 
            <>
              <ContainerText className='image' animation={animation} >
              <div    >
              <h2>Vantagens da Criação de Images 3D para eventos</h2>
            <div>
                <div>Imagine poder apresentar um evento de forma tão vívida e envolvente que sua audiência se sinta imersa nele. A apresentação em 3D torna isso possível, proporcionando uma experiência única que transcende os limites das apresentações convencionais de eventos. Veja como essa tecnologia transforma a maneira como apresentamos conceitos e criações em eventos:</div>
            </div>
            <ol>
                <li>
                    Visualização Realista 
                    <div>
                    Com a apresentação de imagens em 3d, seus clientes podem ver o que está sendo proposto ou criado de maneira extremamente realista.
                    Isso cria uma compreensão mais profunda e emocionante!
                        </div>
                </li>
                <li>
                    Exploração Detalhada
                    <div>
                    Seus clientes podem examinar todos os ângulos e detalhes do projeto ou conceito apresentado. Isso permite uma compreensão completa e uma apreciação mais profunda de cada aspecto do evento.
                    </div>
                </li>
                <li>Antecipação e Empolgação
                    <div>
                    A apresentação de imagens em 3D gera antecipação e entusiasmo entre os stakeholders do evento. Eles podem ver o potencial e a beleza do que está por vir, tornando-os mais receptivos e envolvidos
                    </div>
                </li>
                <li>
                    Detecção de Problemas
                    <div>Qualquer problema de design, logística ou layout pode ser identificado e resolvido antecipadamente, garantindo que o evento ocorra sem contratempos e de forma eficiente.</div>
                </li>
                <li>
                    Personalização e Relevância
                    <div>
                    As apresentações em 3D podem ser personalizadas para atender às necessidades e preferências específicas do público do evento, tornando a mensagem ainda mais relevante e impactante.
                    </div>
                </li>
                <li>
                   Documentação Detalhada
                   <div>
                   As apresentações em 3D do evento podem servir como documentação precisa e detalhada, facilitando futuras referências, revisões e melhorias.
                   </div>
                </li>

            </ol>
            </div>
            </ContainerText>
            </>
            
            
            : text==='arquitetura' && exib?
            
            <>
            <ContainerText className={classe} animation={animation} >
                <div > Arquitetura</div>

                <h2>Vantagens da Criação de Projetos 3D na Arquitetura</h2>

    <p>A adoção da criação de projetos em 3D na arquitetura representa um avanço significativo no processo de design e construção de edifícios e ambientes. Essa abordagem oferece uma série de vantagens que vão além do tradicional desenho em 2D. Aqui estão algumas das principais vantagens:</p>

    <ol>
        <li><strong>Visualização Realista:</strong> A criação de projetos em 3D permite aos arquitetos e clientes visualizar o projeto de forma extremamente realista. Isso ajuda a compreender melhor como o espaço final se parecerá, proporcionando uma sensação tangível do design.</li>

        <li><strong>Identificação Antecipada de Problemas:</strong> Com modelos 3D detalhados, é mais fácil identificar problemas de design, conflitos de espaço ou questões estruturais antes da construção. Isso economiza tempo e recursos, evitando retrabalho durante a fase de construção.</li>

        <li><strong>Comunicação Clara com Clientes:</strong> Os modelos 3D são altamente comunicativos e acessíveis. Os clientes podem entender facilmente as propostas de design, tornando as discussões mais eficazes e reduzindo mal-entendidos.</li>

        <li><strong>Personalização e Customização:</strong> Projetos em 3D permitem uma customização detalhada, atendendo às preferências específicas dos clientes. Elementos de design, materiais e cores podem ser ajustados com precisão.</li>

        <li><strong>Apoio ao Marketing e Vendas:</strong> Modelos 3D impressionantes podem ser usados em material de marketing e vendas. Eles ajudam a atrair investidores e compradores, pois proporcionam uma visão clara e atraente do projeto.</li>
    </ol>

    <p>Essas são apenas algumas das benefícios incríveis que a criação de projetos em 3D traz para a arquitetura. É uma abordagem moderna e eficaz que utiliza a tecnologia 3D para tornar suas ideias mais concretas e acessíveis.</p>

            </ContainerText>
            </>
           : text==='estandes' && exib?  <> 
           <ContainerText className={classe} animation={animation} >
           <div > Estandes</div>

           <h2>Vantagens das Imagens e Projetos 3D para Stands </h2>

<p>A utilização de imagens e projetos em 3D no design de stands oferece uma série de vantagens significativas, transformando a forma como esses espaços são concebidos e apresentados. Aqui estão algumas das principais vantagens:</p>

<ol>
    <li><strong>Visualização Realista:</strong> As imagens e projetos em 3D permitem que os designers e clientes visualizem o stand de forma extremamente realista. Isso cria uma representação quase tangível do espaço, ajudando a entender como ele se parecerá no evento.</li>

    <li><strong>Personalização Detalhada:</strong> Com o uso de tecnologia 3D, é possível personalizar cada detalhe do stand de acordo com as necessidades do cliente. Isso inclui o layout, as cores, os materiais e a disposição de elementos decorativos.</li>

    <li><strong>Economia de Tempo e Recursos:</strong> Ao criar um modelo 3D preciso do stand, é possível identificar e resolver problemas de design antes da construção física. Isso economiza tempo e recursos, evitando retrabalho e ajustes de última hora.</li>

    <li><strong>Apresentação Impactante:</strong> Modelos 3D podem ser usados para criar apresentações e visualizações impressionantes para os clientes. Isso ajuda a vender a ideia do stand de forma mais eficaz e a conquistar investidores e patrocinadores.</li>

    <li><strong>Testes de Fluxo e Interação:</strong> Com modelos 3D, é possível simular o fluxo de tráfego e a interação dos visitantes no stand. Isso permite otimizar o design para melhorar a experiência dos participantes.</li>
</ol>

<p>Essas são apenas algumas das benefícios incríveis que a utilização de imagens e projetos em 3D traz para o design de stands de eventos. É uma abordagem moderna e eficaz que maximiza o impacto de stands de eventos e impulsiona o sucesso das marcas.</p>
       </ContainerText></> : text==="animacoes" && exib ?  
       <ContainerText  className={classe} animation={animation} >
                <div > Animações</div>
                <h2>Vantagens de Animações em 3D para Arquitetura e Eventos</h2>

<h2>Para Arquitetura:</h2>
<ul>
    <li><strong>Visualização Imersiva:</strong> As animações em 3D permitem aos arquitetos e clientes explorar espaços de maneira imersiva.</li>
    <li><strong>Apresentação Dinâmica:</strong> Apresentações dinâmicas envolvem clientes e partes interessadas.</li>
    <li><strong>Antecipação de Impacto Visual:</strong> A visualização de efeitos visuais ajuda na tomada de decisões.</li>
    <li><strong>Identificação de Problemas de Design:</strong> Problemas são identificados mais facilmente.</li>
</ul>

<h2>Para Eventos:</h2>
<ul>
    <li><strong>Pré-Visualização de Espaços:</strong> Espaços de eventos podem ser pré-visualizados para seleção e configuração.</li>
    <li><strong>Apresentação de Conceitos e Temas:</strong> Narrativas visuais introduzem conceitos e temas de eventos.</li>
    <li><strong>Marketing Impactante:</strong> Animações em 3D são usadas para criar vídeos de marketing atraentes.</li>
    <li><strong>Segurança e Planejamento:</strong> Logística e segurança podem ser planejadas com precisão.</li>
</ul>

<h2>Benefícios Comuns:</h2>
<ul>
    <li><strong>Economia de Tempo e Recursos:</strong> Economiza tempo e recursos, evitando retrabalho.</li>
    <li><strong>Comunicação Clara:</strong> Torna a comunicação mais clara e acessível a todos.</li>
    <li><strong>Impressões Duradouras:</strong> Deixa impressões duradouras e memoráveis.</li>
    <li><strong>Tomada de Decisão Informada:</strong> Ajuda na tomada de decisões mais informadas.</li>
</ul>

            </ContainerText> :  text==='imagens360' && exib ?  
            <ContainerText  className={classe} animation={animation} >
                <div> Imagem 360</div>
                <h2>Vantagens de Imagens 3D em 360 Graus</h2>

    <p>A utilização de imagens 3D em 360 graus oferece uma série de vantagens significativas em diversos contextos, desde marketing e design de produtos até turismo e treinamento. Aqui estão algumas das principais vantagens:</p>

    <ol>
        <li><strong>Experiência Imersiva:</strong> As imagens 3D em 360 graus proporcionam uma experiência imersiva que coloca o espectador no centro da ação. Isso cria uma conexão emocional mais forte e envolvente com o conteúdo.</li>
        <li><strong>Exploração Total:</strong> Os espectadores têm a liberdade de explorar o ambiente em todas as direções, dando-lhes controle sobre o que desejam ver. Isso é especialmente útil para turismo virtual e visualização de produtos.</li>
        <li><strong>Marketing Mais Eficaz:</strong> As imagens 3D em 360 graus são altamente envolventes e atraentes, tornando-as ideais para campanhas de marketing interativo. Os espectadores são mais propensos a se envolver e compartilhar esse tipo de conteúdo.</li>
        <li><strong>Visualização de Produtos:</strong> Para produtos, as imagens 3D em 360 graus permitem que os clientes visualizem o item de todos os ângulos, simulando a experiência de ver e tocar o produto em uma loja física.</li>
        <li><strong>Treinamento e Simulação:</strong> Em treinamentos e simulações, as imagens 3D em 360 graus proporcionam um ambiente de aprendizado mais realista e interativo. Isso é particularmente útil em treinamento médico, segurança e educação.</li>
    </ol>

    <p>Essas são apenas algumas das benefícios incríveis que a utilização de imagens 3D em 360 graus traz para diversos campos. Elas melhoram a experiência visual, a comunicação e a tomada de decisões, tornando-se uma ferramenta valiosa para contar histórias e interagir com o público.</p>
            </ContainerText>:''}

        </Container>

        </>
    )
}

export default Areas;