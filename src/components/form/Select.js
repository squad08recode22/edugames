import React from 'react';
import styles from './Select.module.css';

function Select ({ text, name, placeholder, options, handleOnChange, value}){
    return(
        <div className={styles.formcontrol}>
            <label htmlForm={name}></label>
            <select name={name}>
            <option>Série</option>
            </select>
        </div>
    )

}

export default Select