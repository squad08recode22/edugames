import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './cardjogo.module.css';
import artvisu from '../components/imagens/artvisu.svg';
import artescenicas from '../components/imagens/artescenicas.svg';
import dança from '../components/imagens/dança.svg';
import music from '../components/imagens/music.svg';
import arq from '../components/imagens/arq.svg';
import design from '../components/imagens/design.svg';
import cinem from '../components/imagens/cinem.svg';
import retv from '../components/imagens/retv.svg';
import relpub from '../components/imagens/relpub.svg';
import jornal from '../components/imagens/jornal.svg';
import publi from '../components/imagens/publi.svg';
import marketing from '../components/imagens/marketing.svg';
import direito from '../components/imagens/direito.svg';
import filo from '../components/imagens/filo.svg';
import geo from '../components/imagens/geo.svg';
import hist from '../components/imagens/hist.svg';
import sersocial from '../components/imagens/sersocial.svg';
import socio from '../components/imagens/socio.svg';
import bio from '../components/imagens/bio.svg';
import bioq from '../components/imagens/bioq.svg';
import eco from '../components/imagens/eco.svg';
import geofis from '../components/imagens/geofis.svg';
import medv from '../components/imagens/medv.svg';
import quimica from '../components/imagens/quimica.svg';
import admin from '../components/imagens/admin.svg';
import econ from '../components/imagens/econ.svg';
import gestcomercial from '../components/imagens/gestcomercial.svg';
import gestpub from '../components/imagens/gestpub.svg';
import turismo from '../components/imagens/turismo.svg';
import rh from '../components/imagens/rh.svg';
import engagric from '../components/imagens/engagric.svg';
import engcivil from '../components/imagens/engcivil.svg';
import engcomput from '../components/imagens/engcomput.svg';
import engprod from '../components/imagens/engprod.svg';
import engseg from '../components/imagens/engseg.svg';
import engsist from '../components/imagens/engsist.svg';
import astronomia from '../components/imagens/astronomia.svg';
import estistica from '../components/imagens/estistica.svg';
import mat from '../components/imagens/mat.svg';
import nanotec from '../components/imagens/nanotec.svg';
import fis from '../components/imagens/fis.svg';
import seginfo from '../components/imagens/seginfo.svg';
import med from '../components/imagens/med.svg';
import nutri from '../components/imagens/nutri.svg';
import fisio from '../components/imagens/fisio.svg';
import farm from '../components/imagens/farm.svg';
import psic from '../components/imagens/psic.svg';
import edfis from '../components/imagens/edfis.svg';
import { Link } from "react-router-dom";




    

function Profissao(){
        return(
    <div>
    <h2 className={styles.h2}>Artes & Design</h2>
    <div className={styles.container_flex_j}>
        <div>
       <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={artvisu} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Artes</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
       <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={artescenicas} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Artes Cênicas</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
       <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={dança} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Dança</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
       <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={music} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Música</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
       <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={arq} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Arquitetura</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
       <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={design} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Design</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>
    </div>
    <h2 className={styles.h2}>Comunicação & Informação</h2>
    <div className={styles.container_flex_j}>
    <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={cinem} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Cinema</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={retv} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Rádio & TV</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={jornal} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Jonalismo</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={relpub} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Relações Publicas</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={publi} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Publicidade e Propaganda</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={marketing} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Marketing</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>
    </div>
    <h2 className={styles.h2}>Ciências Humanas & Sociais</h2>
    <div className={styles.container_flex_j}>

    <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={filo} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>Filosofia</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={geo} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>Geografia</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={hist} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>História</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={sersocial} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>Serviço Social</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={socio} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>Sociologia</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={direito} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>Direito</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>
    </div>

    <h2 className={styles.h2}>Ciências Biológicas e da Terra</h2>
    <div className= {styles.container_flex_j}>
    <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={bio} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>Biologia</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={bioq} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>Bioquímica</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={eco} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>Ecologia</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={medv} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>Medicina Veterinária</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={quimica} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>Química</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={geofis} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>GeoFísica</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

    </div>

    <h2 className={styles.h2}>Administração, Negócios e Serviços</h2>
    <div className={styles.container_flex_j}>
        <div>
       <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={admin} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Administração</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
       <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={econ} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Economia</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
       <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={gestcomercial} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Gestão Comercial</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
       <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={gestpub} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Gestão Pública</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
       <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={rh} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Recursos Humanos</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
       <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={turismo} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Turismo</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>
    </div>

    <h2 className={styles.h2}>Engenharia & Produção</h2>
    <div className={styles.container_flex_j}>
    <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={engagric} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Engenharia Agrícola</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={engcivil} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Engenharia Cívil</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={engprod} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Engenharia de Produção</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={engcomput} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Engenharia da Computação</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

      <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={engseg} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Engenharia de Segurança do Trabalho</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={engsist} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Engenharia de Sistemas da Informação</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>
    </div> 

    <h2 className={styles.h2}>Ciências Exatas & Informática</h2>
    <div className={styles.container_flex_j}>

    <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={astronomia} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>Astronomia</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={estistica} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>Estatística</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={fis} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>Física</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={mat} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>Matemática</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={nanotec} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>Nanotecnologia</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={seginfo} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>Segurança da Informação</Card.Title>
        <Button variant="outline-light">Acessar</Button>
      </Card.Body>
    </Card>
        </div>
    </div>  
    
    <h2 className={styles.h2}>Saúde & Bem Estar</h2>
    <div className= {styles.container_flex_j}>
    <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={edfis} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>Educação Física</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={farm} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>Farmácia</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={fisio} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>Fisioterapia</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={med} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>Medicina</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={nutri} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>Nutrição</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={psic} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>Pisicologia</Card.Title>
        <Button variant="outline-dark">Acessar</Button>
      </Card.Body>
    </Card>
        </div>

    </div>

    </div>

       
    
    
    


    
            
        )
    }

    export default Profissao