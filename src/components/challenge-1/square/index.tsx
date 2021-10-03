import styles from './index.module.css'

export default function Square(props:{isWhite:boolean}){
    return(
        <div className={styles.container} style={props.isWhite? {backgroundColor:"#fff"}:{backgroundColor:"#000"}}>
            <div></div>
        </div>
    )
}