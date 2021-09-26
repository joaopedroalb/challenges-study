
import style from './index.module.css'

export default function Ball(props:{value:any, acertouBool:boolean}){
    return (
        <div className={props.acertouBool?style.containerRight:style.container}>
            <h1>{props.value}</h1>
        </div>
    )
}