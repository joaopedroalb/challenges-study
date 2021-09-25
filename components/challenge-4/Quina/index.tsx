import style from './index.module.css'
import {ChangeEvent, useState} from 'react'

export default function Quina(props:{value:number}){
    
    const [inputValue, setInputValue] = useState(1);

    function onChangeValue(n:number){
        if(n>0 && n<81)
            setInputValue(n)
    }

    return (
        <div className={style.container}>
            <span>Digite o numero {props.value}</span>
            <input className={style.inputQuina} value={inputValue} type="number" min={1} max={80} 
                    onChange={e=>onChangeValue(e.target.valueAsNumber)}/>
        </div>
    )
}