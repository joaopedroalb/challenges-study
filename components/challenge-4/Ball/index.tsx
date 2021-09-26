
import style from './index.module.css'

export default function Ball(props:{value:any}){
    return (
        <div className={style.container}>
            <h1>{props.value}</h1>
        </div>
    )
}