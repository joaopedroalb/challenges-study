import { CSSProperties, useState, useRef } from "react"

export default function ChallengerThree(){
    const style1:CSSProperties = {width:"100%"
                                ,height:"100vh",
                                display:"flex",
                                flexDirection:"column",
                                alignItems:"center",
                                justifyContent:"flex-start",
                                backgroundColor:"#8b1da1",
                                color: "#fff"
                                }
    const styleInputAux:CSSProperties = {
        width: "70px"
    }
    const [number,setNumber] = useState<number>(0);
    const [numberAux,setNumberAux] = useState<number>(1);
    

    function increase(){
        setNumber(number+numberAux);
    }
    function decrease(){
        setNumber(number-numberAux);
    }

    function onChangeAuxValue(changeArgs:number){
        setNumberAux(changeArgs)
    }
    return(
        <div style={style1}>
            <h1>Counter</h1>
            <div>Value: {number}</div>
            <div style={{display:"flex"}}>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
            <br/>
            <div style={{display:"flex",gap:"10px"}}>
                <span>Change the value in increate/decrease</span>
                <input type="number" onChange={e=>onChangeAuxValue(e.target.valueAsNumber)} value={numberAux} style={styleInputAux}/>
            </div>
        </div>
    )
}