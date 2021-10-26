import styles from "../../styles/challengerseven.module.css";

import { useState } from "react";
import Gohome from "../components/Gohome";

interface IUser {
  name: string;
  age: number;
  maritalStatus:string;
  city:string
}


export default function ChallengerSeven() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState<IUser[]>([]);
  const [maritalStatus, setMaritalStatus] = useState("Solteiro(a)")
  const [city, setCity] = useState("");

  const statusArr = ["Solteiro(a)","Casado(a)","União estável", "Viúvo(a)"]

  async function saveData() {
    if(age>12 && name.length>2){
        await fetch("/api/forms", {
            method: "POST",
            body: JSON.stringify({ name, age,maritalStatus,city }),
          });
      
          const resp = await fetch("/api/forms");
          const usersJson = await resp.json();
          setUsers(usersJson);
          console.log(users);
    }
  }

  return (
    <div className={styles.container}>

      <h1>FORMS</h1>

      <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.inputContent}>
                <h5 className={styles.inputContentTitle}>Digite o nome do usuario</h5>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className={styles.inputContent}>
                <h5 className={styles.inputContentTitle}>
                    Digite a idade do usuario
                </h5>
                <input
                    min={17}
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.valueAsNumber)}
                />
            </div>

            <div className={styles.inputContent}>
                <h5 className={styles.inputContentTitle}>Digite a cidade do usuario</h5>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>

            <div className={styles.inputContent}>
                <h5 className={styles.inputContentTitle}>
                    Digite o estado civil do usuario
                </h5>
                <select onChange={e=>setMaritalStatus(e.target.value)}>
                    {
                    statusArr.map((e:any,i:number)=>{
                        return(
                            <option key={i} value={e}>{e}</option>
                        )
                    }) 
                    }
                </select>
            </div>

          </div>

        <button onClick={saveData} className={styles.btnSave}>Send</button>

      </div>


      <ul>
        <li><h4>NOME {'\u00A0'}{'\u00A0'} IDADE {'\u00A0'} CIDADE {'\u00A0'} Estado Civil</h4></li>
        {users.map((e: IUser, i: number) => {
                return (
                <li key={i}>
                   <p>{e.name} {'\u00A0'} {e.age} {'\u00A0'} {e.city} {'\u00A0'} {e.maritalStatus}</p>
                </li>
                );
            })}
      </ul>

      <Gohome/>
    </div>
  );
}
