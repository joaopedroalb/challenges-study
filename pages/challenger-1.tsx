import { useState } from 'react'
import Row from '../components/challenge-1/row';
import Square from '../components/challenge-1/square'

import styles from '../styles/challengeone.module.css'


export default function challengerOne(){
    let isWhite = false;
    function populateTable(){
        
    }
    function getIsWhite(){
        isWhite = !isWhite;
        return isWhite;
    }
    return (
        <div className={styles.container}>
            <div className={styles.board}>
                <Row value={getIsWhite()} />
            
            </div>
        </div>
    )
}