import RowBalls from '../components/challenge-4/RowBalls'
import RowQuina from '../components/challenge-4/RowQuina'
import styles from '../styles/challengefour.module.css'

export default function ChallengerFour(){

    return(
        <div className={styles.container}>
            <div className={styles.textHeader}>
                <h1 className={styles.title}>LOTERIA DO AZAR</h1>
                <span><q>Tente a sorte, mas provavelmente fique só na tentativa</q></span>
            </div>
            <RowQuina/>
            <RowBalls/>
        </div>
    )
}