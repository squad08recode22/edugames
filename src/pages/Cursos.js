import React from "react";
import Curso from "../components/Curso";
import styles from './Cursos.module.css';


function Cursos(){
    return(
        <div>
        <h1 className={styles.textwhite}><strong>Cursos</strong></h1>
        <Curso/>
        
</div>
    )
}

export default Cursos