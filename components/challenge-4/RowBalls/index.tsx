import style from './index.module.css'
import Ball from "../Ball";
import {useState} from 'react'

export default function RowBalls(){

    const [preLoad, setPreLoad] = useState(false);

    const [listAllNumbers,setListAllNumbers] = useState(Array.from({length:80},(_,i)=>i+1));
    const [listBalls] = useState(Array.from({length:6}))

    function roll(){
        for(let i = 0; i<6 ; i++){
            const index = Math.floor(Math.random()*listAllNumbers.length);
            listBalls[i] = listAllNumbers[index]
            setListAllNumbers(listAllNumbers.splice(index,1))
            //allNumbersAux = allNumbersAux.splice(index,1);
        }
        setListAllNumbers(Array.from({length:80},(_,i)=>i+1))
        setPreLoad(true);
    }

    return(
        <div className={style.containerBg}>
            <div className={style.container}>
            {listBalls.map((_,i)=>{
                return(
                    <Ball key={i} value={preLoad?listBalls[i]:"?"}/>
                )
            })}

            </div>
            
            <button className={style.btnRoll} onClick={roll}>Roll</button>
        </div>
    )
}