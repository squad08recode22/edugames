import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import art from '../components/imagens/art.svg';
import styles from './cardjogo.module.css';
import ingles2 from '../components/imagens/ingles2.svg';
import port from '../components/imagens/port.svg';
import history from '../components/imagens/history.svg';
import geograf from '../components/imagens/geograf.svg';
import filos from '../components/imagens/filos.svg';
import sociologia from '../components/imagens/sociologia.svg';
import fisica from '../components/imagens/fisica.svg';
import math from '../components/imagens/math.svg';
import biologia from '../components/imagens/biologia.svg';
import quim from '../components/imagens/quim.svg';




function Cardjogo (){
    return(
       <div className={styles.container_flex_j}>
        <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={art} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Artes</Card.Title>
        <Button variant="outline-light">Começar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={ingles2} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Inglês</Card.Title>
        <Button variant="outline-light">Começar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardred}>
      <Card.Img variant="top" src={port} />
      <Card.Body className={styles.cardbodyred}>
        <Card.Title className={styles.whitetext}>Português</Card.Title>
        <Button variant="outline-light">Começar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={history} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>História</Card.Title>
        <Button variant="outline-dark">Começar</Button>
      </Card.Body>
    </Card>
        </div>
        
        <div>
        <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={geograf} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Geografia</Card.Title>
        <Button variant="outline-dark">Começar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={filos} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Filosofia</Card.Title>
        <Button variant="outline-dark">Começar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.card}>
      <Card.Img variant="top" src={sociologia} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>Sociologia</Card.Title>
        <Button variant="outline-dark">Começar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={fisica} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>Física</Card.Title>
        <Button variant="outline-light">Começar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardblue}>
      <Card.Img variant="top" src={math} />
      <Card.Body className={styles.bluebody}>
        <Card.Title className={styles.whitetext}>Matemática</Card.Title>
        <Button variant="outline-light">Começar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={biologia} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>Biologia</Card.Title>
        <Button variant="outline-dark">Começar</Button>
      </Card.Body>
    </Card>
        </div>

        <div>
        <Card style={{ width: '17rem' }} className={styles.cardgreen}>
      <Card.Img variant="top" src={quim} />
      <Card.Body className={styles.greenbody}>
        <Card.Title>Química</Card.Title>
        <Button variant="outline-dark">Começar</Button>
      </Card.Body>
    </Card>
        </div>

       </div>
    )
}

export default Cardjogo