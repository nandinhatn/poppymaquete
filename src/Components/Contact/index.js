import react, {useState} from 'react'

import {Button,
    Container,
    ContainerSucess,
    ContainerButton,
    ContainerForm,ContainerInner,H1,H2,Input,TextArea,Icone,ContainerIcones} from './style'

import {FaPhone, FaEnvelope} from 'react-icons/fa'
import axios from 'axios';

const Contact = ()=>{
    const [name, setName]= useState();
    const [email,setEmail] = useState();
    const [assunto, setAssunto] = useState();
    const [message, setMessage] = useState();
    const [phone, setPhone] = useState();
    const [sucessSend, setSucessSend] = useState(false);


    function sendEmail(){
        console.log('cliquei')
        axios.post('https://www.poppytecnologias.com.br:8083/send-email/',{
            name: name,
            email: email,
            interesse: assunto,
            phone: phone,
            message: 'mensagem'
        }).then((response)=> setSucessSend(true))
    }
    return(
        <>

<Container>

      
<ContainerInner>
<div>
<H2> Nossos contatos</H2> 
<ContainerIcones>
<Icone>    <FaPhone color='white'></FaPhone>
</Icone>
55119969748216
</ContainerIcones>

<ContainerIcones>
<Icone><FaEnvelope color='white'></FaEnvelope></Icone>
contato@poppymidia.com.br

</ContainerIcones>

</div> 

<div>

</div>
<ContainerForm>

{!sucessSend? <>
    <Input value={name} onChange={(e)=> setName(e.target.value)} placeholder='Informe seu nome'></Input>
<Input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email'></Input>
<Input value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder='Telefone'></Input>
<Input value={assunto} onChange={(e)=> setAssunto(e.target.value) } placeholder='Assunto'></Input>
<TextArea value ={message} onChange={(e) => setMessage(e.target.value) }
    placeholder='Deixe sua mensagem'
>

</TextArea>
<ContainerButton>

<Button onClick={()=> sendEmail()}>Enviar</Button>


</ContainerButton>
</> : <ContainerSucess>
    <div><b>Mensagem Enviada</b></div>
'Sua mensagem foi enviada com sucesso, em breve responderemos'
</ContainerSucess>}

</ContainerForm>
</ContainerInner>

</Container>
        </>
    )
}

export default Contact