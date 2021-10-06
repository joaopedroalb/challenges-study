import { useEffect, useState } from 'react';
import styles from '../../styles/challengersix.module.css'

import Gohome from "../components/Gohome";

export default function ChallengerSix(){
    const [colors,setColors] = useState<any>(null);
    const[colorBg,setColorBg] = useState("");

    useEffect(()=>{
        fetch("http://localhost:3000/api/123")
            .then(resp => resp.json())
            .then(setColors)
    },[])

    function renderColors(){
        if(colors){
            return colors?.colors.map((resp:any,i:any)=>{
                return <div key={i} 
                            style={{backgroundColor:`${resp}`,flex:'1',cursor:'pointer'}}
                            onClick={()=>setColorBg(resp)}>
                        </div>
            })
        }
    }
    return(
        <div className={styles.container} style={{backgroundColor:`${colorBg}`}}>
            <h1>{colors?.title}</h1>
            <div className={styles.colorsContainer}>
                {renderColors()}
            </div>
            <Gohome/>
        </div>
    )
}