import style from './index.module.css'
import Ball from "../Ball";
import {useState} from 'react'

export default function RowBalls(props:{listInputs:Array<any>}){

    const [preLoad, setPreLoad] = useState(false);

    const [listAllNumbers,setListAllNumbers] = useState(Array.from({length:60},(_,i)=>i+1));
    const [listBalls] = useState(Array.from({length:6}))
    const [correctBalls,setCorrectBalls] = useState(0);

    function roll(){
        for(let i = 0; i<6 ; i++){
            const index = Math.floor(Math.random()*listAllNumbers.length);
            listBalls[i] = listAllNumbers[index]
            setListAllNumbers(listAllNumbers.splice(index,1))
        }
        setCorrectBalls(listBalls.filter(value=>props.listInputs.indexOf(value)!==-1).length)
        setListAllNumbers(Array.from({length:60},(_,i)=>i+1))
        setPreLoad(true);
    }

    function acertou(value:any){
        if(preLoad)
            return props.listInputs.indexOf(value) !== -1
        return false
    }

    const textRes = (correct:number) =>{
        if(correct == 0)
            return `Você errou tudo ... que azar ...`
        
        if(correct == 1)
            return `Você acertou apenas 1 que triste ...`

        if(correct < 6 )
            return `Você acertou ${correct} números tente mais uma vez`
        
        if(correct >= 6)
            return `Você ganhou PARABENS`
    }

    return(
        <div className={style.containerBg}>
            <div className={style.container}>
            {listBalls.sort((a:any,b:any)=>a-b).map((_,i)=>{
                return(
                    <Ball key={i} value={preLoad?listBalls[i]:"?"} acertouBool={acertou(listBalls[i])}/>
                )
            })}

            </div>
            
            <button className={style.btnRoll} onClick={roll}>Roll</button>
            {preLoad?
            (<span>{textRes(correctBalls)}</span>):(<></>)}
        </div>
    )
}