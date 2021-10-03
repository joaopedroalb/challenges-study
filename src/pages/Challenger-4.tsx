import RowBalls from '../../components/challenge-4/RowBalls'
import RowQuina from '../../components/challenge-4/RowQuina'
import styles from '../../styles/challengefour.module.css'

import {useState} from 'react'
import Gohome from '../../components/Gohome'

export default function ChallengerFour(){
    const [listInputsValues] = useState(Array.from({length:8},(_,i)=>i+1))

    function onChangeInputeValue(value:number,index:number){
        listInputsValues[index] = value;
    }

    return(
        <div className={styles.container}>
            <div className={styles.textHeader}>
                <h1 className={styles.title}>LOTERIA DO AZAR</h1>
                <span><q>Tente a sorte, mas provavelmente fique só na tentativa</q></span>
            </div>
            <RowQuina list={listInputsValues} eventOnChange={onChangeInputeValue}/>
            <RowBalls listInputs={listInputsValues}/>
            <Gohome/>
        </div>
    )
}