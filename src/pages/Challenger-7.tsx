import styles from "../../styles/challengerseven.module.css";

import { useState } from "react";
import Gohome from "../components/Gohome";
import PickColor from "../components/PickColor";
import ProfileCard from "../components/ProfileCard";

interface IUser {
  name: string;
  age: number;
  maritalStatus:string;
  city:string
  color:string
}


export default function ChallengerSeven() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [users, setUsers] = useState<IUser[]>([]);
  const [maritalStatus, setMaritalStatus] = useState("Solteiro(a)")
  const [city, setCity] = useState("");
  const [color,setColor] = useState("");

  const statusArr = ["Solteiro(a)","Casado(a)","União estável", "Viúvo(a)"]

  async function saveData() {
    if(age>12 && name.length>2){
        await fetch("/api/forms", {
            method: "POST",
            body: JSON.stringify({ name, age,maritalStatus,city,color}),
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
                    min={18}
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

            <PickColor setColorExtenal={setColor}/>

          </div>

        <button onClick={saveData} className={styles.btnSave}>Send</button>

      </div>
      
      <br/><br/>

      <div className={styles.cardContainer}>
      {users.map((e: IUser, i: number) => {
          return (
            <ProfileCard user={e} key={i}/>
          );
      })}
      </div>

      <Gohome/>
    </div>
  );
}
