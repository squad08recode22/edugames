import React from 'react';
import styles from './Loginboot.module.css';
import Btn from './Btn';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form className={styles.loginform}>
      <h3>Faça seu login:</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" />
        <Form.Text className="text-muted">
          Nunca compartilhamos seu email.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Mantenha-me conectado" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Entrar
      </Button>
      <br/><br/>
      <Btn to="/cadastro" text="Cadastre-se"/>
    </Form>
  );
}

export default BasicExample;
