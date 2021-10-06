import { NextApiRequest, NextApiResponse } from "next";

export default function Questao(req:NextApiRequest,res:NextApiResponse){
    if(req.method=="GET"){
        const id = req.query.id
        res.status(200).json({
            title:'Qual é a sua cor preferida',
            colors:[
                '#EF476F','#FFD166','#06D6A0','#118AB2',"#073B4C"
            ]
        })
    }else{
        res.status(405).send('Error')
    }
     
}