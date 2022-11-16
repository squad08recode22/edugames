import React from "react";
import Btn from "../components/Btn";
import game from '../components/imagens/game.png';
import styles from './home.module.css'
function Home(){
    return(
        <div className={styles.center}>
            <div>
        <h1 className={styles.textwhite}><strong>EDUGAMES+</strong></h1>
        <h5 className={styles.text}>Aprender pode ser divertido!</h5>
           </div>
        <br/>
        <Btn to="/jogos" text="Começar agora"/>
        
        <div>
        <img src={game} width="60%"/>
        </div>
        
        
        </div>

    )
}

export default Home