import Gohome from "../components/Gohome";
import styles from "../../styles/challengerfive.module.css"

import { useState } from "react";
import Link from "next/link"
import link from "next/link";

export default function ChallengerFive(){

    const [name,setName] = useState("Desconhecido")
    const [search,setSearch] = useState("");

    function handleChangeName(str:string){
        if(str != "")
            setName(str)
        if(str === "")
            setName("Desconhecido")
    }

    const url = () => {
        return `/search/${name}?pesquisa=${search}`
    }

    return(
        <div className={styles.container}>
            <div className={styles.inputsContainer}>
                <h1>Digite seu nome</h1>
                <input type="text" onChange={e=>handleChangeName(e.target.value)}/>
                <br/>
                <h1>O que deseja pesquisar ? </h1>
                <input type="text" onChange={e=>setSearch(e.target.value)}/>
            </div>
            <Link href={url()}><button>Pesquisar</button></Link>
            <Gohome/>
        </div>
    )
}