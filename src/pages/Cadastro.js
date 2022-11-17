import React from 'react';
import Cadastroform from '../components/Cadastroform';
import styles from './Cadastro.module.css';
function Cadastro(){
    return(
        <div className={styles.cad_container}>
        <h1>Cadastre-se</h1>
        <Cadastroform btnText="Cadastrar"/>
        </div>
    )
}

export default Cadastro