import { CSSProperties } from "react"

export default function Gohome(){

    const styles:CSSProperties={
        position:"absolute", 
        bottom:".5rem", 
        left:".5rem"
        }

    return(
        <div style={styles}>Go home</div>
    )
}