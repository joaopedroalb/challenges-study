import styles from "../../styles/challengerseven.module.css";

import { useEffect, useState } from "react";
import Gohome from "../components/Gohome";
import PickColor from "../components/PickColor";
import ProfileCard from "../components/ProfileCard";

interface ITask {
  name: string;
  remainTime: number;
  status:string;
  userStory:string
  color:string
}


export default function ChallengerSeven() {
  const [name, setName] = useState("");
  const [remainTime, setRemainTime] = useState(0);
  const [users, setUsers] = useState<ITask[]>([]);
  const [status, setStatus] = useState("New")
  const [userStory, setUserStory] = useState("");
  const [color,setColor] = useState("");
  
  const statusArr = ["New","Active","Closed", "Removed","Blocked"]

  async function saveData() {
    if(remainTime>=0 && name.length>2){
        await fetch("/api/forms", {
            method: "POST",
            body: JSON.stringify({ name, remainTime,status,userStory,color}),
          });
      
          const resp = await fetch("/api/forms");
          const usersJson = await resp.json();
          setUsers(usersJson);
          console.log(users);
    }
  }

  useEffect(()=>{
    fetchMyApi();
  },[])

  async function fetchMyApi(){
    const resp = await fetch("/api/forms");
    const usersJson = await resp.json();
    setUsers(usersJson);
  }

  return (
    <div className={styles.container}>

      <h1>Task Generate Forms</h1>

      <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <div className={styles.inputContent}>
                <h5 className={styles.inputContentTitle}>Task Name</h5>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className={styles.inputContent}>
                <h5 className={styles.inputContentTitle}>User Story Name</h5>
                <input
                    type="text"
                    value={userStory}
                    onChange={(e) => setUserStory(e.target.value)}
                />
            </div>

            <div className={styles.inputContent}>
                <h5 className={styles.inputContentTitle}>
                  Remaining Time
                </h5>
                <input
                    min={0}
                    type="number"
                    value={remainTime}
                    onChange={(e) => setRemainTime(e.target.valueAsNumber)}
                />
            </div>

            <div className={styles.inputContent}>
                <h5 className={styles.inputContentTitle}>
                    STATUS
                </h5>
                <select onChange={e=>setStatus(e.target.value)}>
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
      {users.map((e: ITask, i: number) => {
          return (
            <ProfileCard task={e} key={i}/>
          );
      })}
      </div>

      <Gohome/>
    </div>
  );
}
