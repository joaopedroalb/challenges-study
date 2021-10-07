import styles from './index.module.css'
import Link from 'next/link'

export default function Card(props:{title:string, description:string, urlImg:string, urlPath:string}){
    return (
            <article className={styles.container}>
                <img src={props.urlImg} alt=""/>
                <header className={styles.infoContainer}>
                    <h2>{props.title}</h2>
                    <h3>{props.description}</h3>
                </header>
                <Link href={props.urlPath}>
                <button>See Challenge</button>
                </Link>
            </article>
    )
}