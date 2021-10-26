import styles from "../../styles/challengerseven.module.css"

import { useState } from "react"

interface IUser{
    name:string,
    age:number
}

export default function ChallengerSeven(){
    const [name,setName] = useState("s");
    const [age,setAge]= useState(0);
    const [users,setUsers] = useState<IUser[]>([])

    async function saveData(){
        await fetch('/api/forms',{
            method:'POST',
            body:JSON.stringify({name,age})
        })

        const resp = await fetch('/api/forms') 
        const usersJson = await resp.json()
        setUsers(usersJson)
        console.log(users)
    }

    return(
        <div className={styles.container}>
            <h1>FORMS</h1>
            <div>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                <input type="number" value={age} onChange={e=>setAge(e.target.valueAsNumber)}/>
                <button onClick={saveData}>Send</button>
            </div>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {
                    users.map((e:IUser,i:number)=>{
                        return(
                            <tr key={i}>
                                <th>{e.name}</th>
                                <th>{e.age}</th>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}