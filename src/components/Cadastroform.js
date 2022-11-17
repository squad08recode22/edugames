import React from "react";
import styles from './Cadastroform.module.css';
import Input from "./form/Input";
import Select from "./form/Select";
import SubmitButton from "./form/SubmitButton";
function Cadastroform({btnText}){
    return(
        <form className={styles.form}>
            <Input 
                type="text"
                name="name"
                placeholder="Nome"
                    
            />
            <Input
            type="text"
            name="name"
            placeholder="CPF"
            />
            <Input 
            type="text"
            name="name"
            placeholder="Escola"
            />
            <Select name="serie"/>
             
            <Input
            type="text"
            name="name"
            placeholder="UF"
            />
            <Input
            type="text"
            placeholder="Email"
            />
            <Input
            type="password"
            placeholder="Senha"
            />
            <SubmitButton  text={btnText}/>

        </form>
    )
}

export default Cadastroform