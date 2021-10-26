import { NextApiRequest, NextApiResponse } from "next";

const users:any = []

export default function form(req:NextApiRequest,res:NextApiResponse){
    if(req.method==="POST"){
        post(req,res)
    }else if(req.method==="GET"){
        res.status(200).json(users)
    }else{
        res.status(405).send("error")
    }
}

function post(req:NextApiRequest,res:NextApiResponse){
    const data = JSON.parse(req.body)
    users.push(data);

    res.status(200).send("")
}