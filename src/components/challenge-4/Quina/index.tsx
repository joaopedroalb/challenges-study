import style from './index.module.css'
import {useState} from 'react'

export default function Quina(props:{index:number,eventOnChange:any,value:number}){
    const [inputValue, setInputValue] = useState(props.value);

    function onChangeInputValue(value:number){
        if(value>0 && value<61){
            props.eventOnChange(value,props.index);
            setInputValue(value);
        }
    }
    return (
        <div className={style.container}>
            <span>Digite o numero {props.index + 1}</span>
            <input className={style.inputQuina} value={inputValue} type="number" min={1} max={60} 
                    onChange={e=>onChangeInputValue(e.target.valueAsNumber)}/>
        </div>
    )
}