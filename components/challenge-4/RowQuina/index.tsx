import Quina from "../Quina";
import style from "./index.module.css"

export default function RowQuina(props:{list:Array<number>, eventOnChange:any}){
    return(
        <div className={style.container}>
            {props.list.map((e,i)=>{
                return(
                    <Quina index={i} key={i} eventOnChange={props.eventOnChange} value={e}/>
                )
            })}
        </div>
    )
}