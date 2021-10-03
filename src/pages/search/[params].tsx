import Gohome from "../../components/Gohome";
import styles from "./params.module.css";

import {useRouter} from 'next/router'
import Link from 'next/link'

export default function Params(){

    const router = useRouter();
    const namePerson = router.query.params;
    const searchItem = router.query.pesquisa;

    const searchTxt = () =>{
        return(
            searchItem ? 
            (<h1>Olá <strong>{namePerson}</strong> você pesquisou por <strong>{searchItem}</strong></h1>)
            :
            <h1>Olá <strong>{namePerson}</strong> você <strong>não</strong> pesquisou por nada</h1>
        )
    }

    return(
        <div className={styles.container}>
            {searchTxt()}
            <Link href={"/Challenger-5"}>
                <button><strong>Voltar</strong></button>
            </Link>
            <Gohome/>
        </div>
    )
}