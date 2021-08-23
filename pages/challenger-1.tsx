import { useState } from 'react'
import Square from '../components/challenge-1/square'
import styles from '../styles/challengeone.module.css'


export default function challengerOne(){
    let isWhite = false;

    function getIsWhite(){
        isWhite = !isWhite;
        return isWhite;
    }
    return (
        <div className={styles.container}>
            <div className={styles.board}>
                <div className={styles.row}>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                </div>
                <div className={styles.row}>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                </div>
                <div className={styles.row}>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                </div>
                <div className={styles.row}>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                </div>
                <div className={styles.row}>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                </div>
                <div className={styles.row}>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                </div>
                <div className={styles.row}>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                <Square isWhite={getIsWhite()}/>
                </div>
                <div className={styles.row}>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                <Square isWhite={!getIsWhite()}/>
                </div>
                
            </div>
        </div>
    )
}