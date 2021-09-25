import style from './index.module.css'

export default function Quina(props:{value:number}){
    const listNumbers:Array<number> = [50];

    const inputsContainer = () =>{
        return(
            <div>
                
            </div>
        )
    }

    return (
        <div className={style.container}>
            <span>Digite o numero {props.value}</span>
            <input className={style.inputQuina} type="number" min={1} max={80}/>
        </div>
    )
}