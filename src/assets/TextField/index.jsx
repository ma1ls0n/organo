import { useState } from 'react';
import './TextField.css';

const TextField = (props) => {

    const onTyping = (textEvent) => {
        props.onChanged(textEvent.target.value)
    }

    return(
        <div className='text-field'>
            <label > {props.label} </label>
            <input 
                value={props.textValue} 
                onChange={onTyping} 
                required={props.mandatory} 
                type="text" 
                placeholder= {props.placeholder} 
            />
        </div>
    )
}

export default TextField