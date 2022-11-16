import React from "react";
import Profissao from "../components/Profissao";
import styles from './Guiapro.module.css';


function GuiaPro(){
    return(
        <div>
        <h1 className={styles.textwhite}><strong>Guia de Profissões</strong></h1>
        <Profissao/>
        </div>

        

    )
}

export default GuiaPro