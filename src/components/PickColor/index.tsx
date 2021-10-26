import styles from "./index.module.css"

import { useEffect, useState } from "react"

export default function PickColor(props:{setColorExtenal:any}){
    const [colors, setColors] = useState<any>(null)
    const [colorSelected,setColorSelected] = useState("");

    useEffect(()=>{
        fetch("http://localhost:3000/api/123")
            .then(resp => resp.json())
            .then(setColors)
    },[])

    function handleChangeColor(colorName:string){
        setColorSelected(colorName);
        props.setColorExtenal(colorName);
    }

    return(
        <div className={styles.container}>
            <h4 className={styles.titleQuestion}>Escolha uma cor</h4>
            <div className={styles.colorSelection}>
            {
                colors?.colors.map((e:any,i:number)=>{
                    return(
                        <div key={i} 
                            style={{backgroundColor:`${e}`}}
                            className={colorSelected==e?styles.colorBlockSelected:styles.colorBlock}
                            onClick={()=>handleChangeColor(e)}>
                        </div>
                    )

                })
            }
            </div>
        </div>
    )
}