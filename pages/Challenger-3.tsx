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
        console.log(isNaN(numberAux))
        isNaN(numberAux)? setNumber(number):setNumber(number+numberAux);
    }
    function decrease(){
        isNaN(numberAux)? setNumber(number):setNumber(number-numberAux);
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
                <span>Change counter value</span>
                <input type="number" onChange={e=>setNumberAux(e.target.valueAsNumber)} value={numberAux} style={styleInputAux}/>
            </div>
        </div>
    )
}