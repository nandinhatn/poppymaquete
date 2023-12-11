import react from 'react';

import {Button} from './style'
const ButtonOrc  = (props)=>{
    return(<>
    <Button onClick={()=> props.action()}>{props.title}</Button>
    </>)
}
export default ButtonOrc