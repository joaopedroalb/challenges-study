import Row from '../../components/challenge-1/row';
import Gohome from '../../components/Gohome';

import styles from '../../styles/challengeone.module.css'

export default function ChallengerOne(){
    let isWhite = true;

    function getIsWhite(){
        isWhite = !isWhite;
        return isWhite;
    }

    function populateTable(){
        const listRow = []
        for(let i = 0; i<=7; i++){
            listRow.push(<Row value={getIsWhite()} />)
        }
        return listRow;
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.board}>
                {populateTable()}
            </div>
            <Gohome/>
        </div>
    )
}