import Gohome from "../../components/Gohome";
import styles from "./params.module.css";

import {useRouter} from 'next/router'

export default function Params(){

    const router = useRouter();

    return(
        <div className={styles.container}>
            <h1>Parabens você pesquisou por  <strong>{router.query.params}</strong></h1>
            <button><strong>Voltar</strong></button>
            <Gohome/>
        </div>
    )
}