import { CSSProperties } from "react"
import {AiOutlineHome} from 'react-icons/ai'
import Link from 'next/link'

export default function Gohome(){

    const styles:CSSProperties={
        position:"absolute", 
        bottom:"1.5rem", 
        right:"1.5rem",
        cursor: "pointer"
        }

    return(
        <Link href={"/"}>
            <div style={styles}><AiOutlineHome size={35}/></div>
        </Link>
    )
}