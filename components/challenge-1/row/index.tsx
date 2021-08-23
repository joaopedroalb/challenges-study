import Square from '../square'
import styles from './index.module.css'

export default function Row(props:{value:boolean}){
    let isWhite = props.value

    function getIsWhite(){
        isWhite = !isWhite;
        return isWhite;
    }

    const loopSquare = () => {
        const listSquare = [];
        for(let i = 0 ; i<=7 ; i++){
            listSquare.push(<Square isWhite={getIsWhite()}/>)
        }
        return listSquare;
    }

    return (
        <div className={styles.container}>
            {loopSquare()}
        </div>
    )
}