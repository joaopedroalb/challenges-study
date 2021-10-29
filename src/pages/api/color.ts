import { NextApiRequest, NextApiResponse } from "next";

const colorObj = {
    title:'Escolha uma cor',
    colors:[
        '#EF476F','#FFD166','#06D6A0','#118AB2',"#073B4C"
    ]
}

export default function Questao(req:NextApiRequest,res:NextApiResponse){
    if(req.method=="GET"){
        res.status(200).json(colorObj)
    }else{
        res.status(405).send('Error')
    }
     
}