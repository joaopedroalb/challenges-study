import Quina from "../Quina";
import style from "./index.module.css"

export default function RowQuina(){
    const list = [1,2,3,4,5,6,7,8]
    return(
        <div className={style.container}>
            {list.map(e=>{
                return(
                    <Quina value={e} key={e}/>
                )
            })}
        </div>
    )
}