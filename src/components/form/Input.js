import React from 'react';
import styles from './Input.module.css';

function Input ({type, text, name, placeholder, password, handleOnChange, value}){
    return(
        <div className={styles.formcontrol}>
            <label htmlForm={name}></label>
            <input 
            type={type}
            name={name}
            password={password}
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value}
        />    
            
        </div>
    )

}

export default Input