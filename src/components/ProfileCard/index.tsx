import styles from "./index.module.css"

interface IUser {
    name: string;
    age: number;
    maritalStatus:string;
    city:string
    color:string
  }

export default function ProfileCard(props:{user:IUser}){
    return(
        <article style={{backgroundColor:`${props.user.color!=""?props.user.color:"#fff"}`}} className={styles.container}>
            <header>
                <h2>{props.user.name}</h2>
            </header>
            <div>
                <p>Age: {props.user.age}</p>
                <p>City: {props.user.city}</p>
                <p>Estado Civil: {props.user.maritalStatus}</p>
            </div>
        </article>
    )
}