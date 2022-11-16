import React from "react";
import Cardjogo from "../components/Cardjogo";
import styles from './Jogos.module.css';

function Jogos(){
    return(
        <div>
        <h1 className={styles.textwhite}><strong>Jogos</strong></h1>
        <Cardjogo/>
      </div>
    )
}

export default Jogos