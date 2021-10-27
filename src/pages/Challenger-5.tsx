import Gohome from "../components/Gohome";
import styles from "../../styles/challengerfive.module.css"

import { useState } from "react";
import Link from "next/link"
import Image from "next/image"

import routerImage from "../../public/router-search.svg"

export default function ChallengerFive(){

    const [name,setName] = useState("Desconhecido")
    const [search,setSearch] = useState("");

    function handleChangeName(str:string){
        console.log(str.split(" ").join(""))

        if(str.split(" ").join("") !== "")
            setName(str)
        if(str.split(" ").join("") === "")
            setName("Desconhecido")
    }

    const url = () => {
        return `/search/${name}?pesquisa=${search}`
    }

    return(
        <div className={styles.container}>
            <div className={styles.inputsContainer}>
                <Image src={routerImage} width={200} height={200}/>
                <h2>Digite seu nome</h2>
                <input type="text" onChange={e=>handleChangeName(e.target.value)}/>
                <br/>
                <h2>O que deseja pesquisar ? </h2>
                <input type="text" onChange={e=>setSearch(e.target.value)}/>
            </div>
            <Link href={url()}><button>Pesquisar</button></Link>
            <Gohome/>
        </div>
    )
}