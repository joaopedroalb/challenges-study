import styles from './index.module.css'
import Link from 'next/link'

export default function Card(props:{title:string, description:string, urlImg:string, urlPath:string}){
    return (
        <Link href={props.urlPath}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={props.urlImg} alt=""/>
                </div>
                <div className={styles.infoContainer}>
                    <h1>{props.title}</h1>
                    <span>{props.description}</span>
                </div>
            </div>
        </Link>
    )
}