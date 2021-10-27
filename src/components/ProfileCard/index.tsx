import styles from "./index.module.css"

interface ITask {
    name: string;
    remainTime: number;
    status:string;
    userStory:string
    color:string
  }

export default function ProfileCard(props:{task:ITask}){
    return(
        <article style={{backgroundColor:`${props.task.color!=""?props.task.color:"rgb(204 76 245)"}`}} className={styles.container}>
            <header>
                <h2 className={styles.headerTitle}>{props.task.name}</h2>
            </header>
            <div className={styles.infoText}>
                <p><strong>User Story :</strong> {props.task.userStory}</p>
                <p><strong>Remain Time:</strong> {props.task.remainTime}</p>
                <p style={{alignSelf:"center"}}><strong>{props.task.status}</strong></p>
            </div>
        </article>
    )
}