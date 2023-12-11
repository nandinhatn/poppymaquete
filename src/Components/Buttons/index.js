import react from 'react'
import {Btn,Container} from './style'

const Buttons = (props)=>{
    return(
        <>
        <Container>
        <Btn>{props.title}</Btn>

        </Container>
        </>
    )

}
export default Buttons