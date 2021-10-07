import styles from './index.module.css'
import Link from 'next/link'

export default function Card(props:{title:string, description:string, urlImg:string, urlPath:string}){
    return (
        <Link href={props.urlPath}>
            <article className={styles.container}>
                <header className={styles.imageContainer}>
                    <img src={props.urlImg} alt=""/>
                </header>
                <div className={styles.infoContainer}>
                    <h1>{props.title}</h1>
                    <span>{props.description}</span>
                </div>
            </article>
        </Link>
    )
}