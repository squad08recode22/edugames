import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './curso.module.css';
import ctur from '../components/imagens/ctur2.svg';
import etecbra from '../components/imagens/etecbra.svg';
import faetec from '../components/imagens/faetec.svg';
import sistfiep from '../components/imagens/sistfiep.svg';
import senac2 from '../components/imagens/senac2.svg';
import liceu from '../components/imagens/liceu.svg';
import recode2 from '../components/imagens/recode2.svg';
import kultive from '../components/imagens/kultive.svg';
import novotec2 from '../components/imagens/novotec2.svg';
import proz2 from '../components/imagens/proz2.svg';
import pronatec from '../components/imagens/pronatec.svg';
import ceapsp2 from '../components/imagens/ceapsp2.svg'

function Curso (){
    return (
        <div className={styles.containerflex}>
        <div>
        <Card style={{ width: '16rem' }} className={styles.card}>
      <Card.Img variant="top" src={ceapsp2} />
      <Card.Body className={styles.cardbody}>
        <Card.Title>CEAP - SP</Card.Title>
        <Card.Text>
        Cursos técnicos e profissionalizantes gratuitos.
        </Card.Text>
        <a href="https://ceappedreira.org.br/" target="_blank" class="btn btn-primary">Saiba mais</a>
      </Card.Body>
    </Card>
    </div>
    
    <div>
    <Card style={{ width: '16rem' }} className={styles.card}>
  <Card.Img variant="top" src={ctur} />
  <Card.Body className={styles.cardbody}>
    <Card.Title>Colégio Técnico - RJ</Card.Title>
    <Card.Text>
    Cursos técnicos e profissionalizantes.
    </Card.Text>
    <a href="http://ctur.ufrrj.br/" target="_blank" class="btn btn-primary">Saiba Mais</a>
  </Card.Body>
</Card>
</div>
<div>
    <Card style={{ width: '16rem' }} className={styles.card}>
  <Card.Img variant="top" src={sistfiep} />
  <Card.Body className={styles.cardbody}>
    <Card.Title>Sistema Fiep - Brasil</Card.Title>
    <Card.Text>
    Bolsas para cursos técnicos e profissionalizantes.
    </Card.Text>
    <a href="https://www.sistemafiep.org.br/gratuidade/" target="_blank" class="btn btn-primary">Saiba mais</a>
  </Card.Body>
</Card>
</div>

<div>
    <Card style={{ width: '16rem' }} className={styles.card}>
  <Card.Img variant="top" src={senac2} />
  <Card.Body className={styles.cardbody}>
    <Card.Title>Senac EAD - Brasil</Card.Title>
    <Card.Text>
    Bolsas para cursos técnicos a distância.
    </Card.Text>
    <a href="https://www.ead.senac.br/" target="_blank" class="btn btn-primary">Saiba mais</a>
  </Card.Body>
</Card>
</div>

<div>
    <Card style={{ width: '16rem' }} className={styles.card}>
  <Card.Img variant="top" src={etecbra} />
  <Card.Body className={styles.cardbody}>
    <Card.Title>E-Tec Brasil</Card.Title>
    <Card.Text>
    Cursos a distância oferecidos pelo o Governo Federal.
    </Card.Text>
    <a href="http://portal.mec.gov.br/rede-e-tec-brasil/rede-e-tec-brasil-apresentacao" target="_blank"class="btn btn-primary">Saiba mais</a>
  </Card.Body>
</Card>
</div>

<div>
    <Card style={{ width: '16rem' }} className={styles.card}>
  <Card.Img variant="top" src={faetec} />
  <Card.Body className={styles.cardbody}>
    <Card.Title>Faetec - RJ</Card.Title>
    <Card.Text>
    Cursos técnicos e profissionalizantes gratuitos.
    </Card.Text>
    <a href="https://faetecrj.org/" target="_blank" class="btn btn-primary">Saiba mais</a>
  </Card.Body>
</Card>
</div>

<div>
    <Card style={{ width: '16rem' }} className={styles.card}>
  <Card.Img variant="top" src={liceu} />
  <Card.Body className={styles.cardbody}>
    <Card.Title>Liceu Tec - SP</Card.Title>
    <Card.Text>
    Bolsas para cursos técnicos e profissionalizantes.
    </Card.Text>
    <a href="https://www.liceutec.com.br/inscricoes-concurso-de-bolsas/" target="_blank" class="btn btn-primary">Saiba mais</a>
  </Card.Body>
</Card>
</div>

<div>
    <Card style={{ width: '16rem' }} className={styles.card}>
  <Card.Img variant="top" src={recode2} />
  <Card.Body className={styles.cardbody}>
    <Card.Title>Recode EAD - Brasil</Card.Title>
    <Card.Text>
    Cursos gratuitos a distância na área de tecnologia.
    </Card.Text>
    <a href="http://ctur.ufrrj.br/" target="_blank" class="btn btn-primary">Saiba mais</a>
  </Card.Body>
</Card>
</div>

<div>
    <Card style={{ width: '16rem' }} className={styles.card}>
  <Card.Img variant="top" src={kultive} />
  <Card.Body className={styles.cardbody}>
    <Card.Title>Kultivi EAD</Card.Title>
    <Card.Text>
    Cursos de idiomas e preparatório para o ENEM.
    </Card.Text>
    <a href="https://kultivi.com/" target="_blank" class="btn btn-primary">Saiba mais</a>
  </Card.Body>
</Card>
</div>

<div>
    <Card style={{ width: '16rem' }} className={styles.card}>
  <Card.Img variant="top" src={novotec2} />
  <Card.Body className={styles.cardbody}>
    <Card.Title>Novotec - SP</Card.Title>
    <Card.Text>
    Cursos técnicos a distância e presencial.
    </Card.Text>
    <a href="https://www.novotec.sp.gov.br/" target="_blank" class="btn btn-primary">Saiba mais</a>
  </Card.Body>
</Card>
</div>

<div>
    <Card style={{ width: '16rem' }} className={styles.card}>
  <Card.Img variant="top" src={proz2} />
  <Card.Body className={styles.cardbody}>
    <Card.Title>Proz - MG</Card.Title>
    <Card.Text>
    Cursos técnicos e profissionalizantes gratuitos.
    </Card.Text>
    <a href="https://prozeducacao.com.br/blog/cursos/cursos-tecnicos-gratuitos-trilhas-de-futuro/" target="_blank" class="btn btn-primary">Saiba mais</a>
  </Card.Body>
</Card>
</div>

<div>
    <Card style={{ width: '16rem' }} className={styles.card}>
  <Card.Img variant="top" src={pronatec} />
  <Card.Body className={styles.cardbody}>
    <Card.Title>Pronatec - Brasil</Card.Title>
    <Card.Text>
    Cursos técnicos e Programa Jovem Apendiz.
    </Card.Text>
    <a href="https://pronatecsisutec.com.br/" target="_blank" class="btn btn-primary">Saiba mais</a>
  </Card.Body>
</Card>
</div>

</div>
    )
}

export default Curso