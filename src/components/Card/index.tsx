import styles from './index.module.css'
import Link from 'next/link'

import Image from "next/image"

export default function Card(props:{title:string, description:string, urlImg:string, urlPath:string}){

    const myUrl = props.urlImg!=undefined ? props.urlImg:"";

    return (
            <article className={styles.container}>
                <Image src={myUrl} alt="" objectFit="cover" height={115} width={190}/>
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