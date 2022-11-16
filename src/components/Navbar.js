import React from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';
import { BsJoystick,BsFillGearFill} from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import joy3 from '../components/imagens/joy3.png';
import Container from 'react-bootstrap/Container';


function Navbar() {
  return (
    
    <nav className={styles.navbar}>
        
        <div>
          <ul className={styles.list}>
          <li  className= {styles.item}><Link to = "/"><img src={joy3}/></Link></li>
           <li className= {styles.item}><Link to = "/">Home</Link></li>
           <li className= {styles.item}><Link to = "/jogos"><BsJoystick/> Jogos</Link></li>
           <li className= {styles.item}><Link to = "/cursos"><IoMdSchool/> Cursos</Link></li>
           <li className= {styles.item}><Link to = "/guia-de-profissoes"><BsFillGearFill/> Guia de Profissões</Link></li>
           <li className= {styles.item}><Link to = "/login"><FaUserCircle/> Login</Link></li>
          </ul>
        </div>
        
      </nav>
      
  );
}

export default Navbar;