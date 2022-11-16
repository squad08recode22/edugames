import React from 'react';
import styles from './Btn.module.css';
import {Link} from 'react-router-dom';

function Btn({to,text}){
    return (
        <Link className={styles.button} to={to}>
        {text}
        </Link>

    )
}

export default Btn