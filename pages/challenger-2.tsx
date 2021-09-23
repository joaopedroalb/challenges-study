import { CSSProperties, useState } from "react"

export default function ChallengerTwo(){
    const myStyle:CSSProperties = {
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#222",
        color: "#fff",
        height: "100vh",
        cursor: "pointer"
    }

    function OnMoveMouse(ev:any){
        if(!boolChange)
            setBoolChange(true);

        setEixoX(ev.clientX);
        setEixoY(ev.clientY);
    }

    const [boolChange,setBoolChange] = useState(false);
    const [eixoX, setEixoX] = useState(0);
    const [eixoY,setEixoY] = useState(0);

    return (
        <div style={myStyle} onMouseMove={OnMoveMouse}>
            <span>Eixo X: {boolChange?eixoX:"?"}</span>
            <span>Eixo Y: {boolChange?eixoY:"?"}</span>
        </div>
    )
}