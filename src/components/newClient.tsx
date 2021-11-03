import React from 'react'

import { Modal, Button, Form } from 'react-bootstrap';

export const AddNewClient = (props:any) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            Agregar cliente
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
          <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="email" placeholder="nombre" />
            <Form.Text className="text-muted">
             Este campo es requerido.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 px-5 mt-3" controlId="formBasicEmail">
            <Form.Label>RTN</Form.Label>
            <Form.Control type="email" placeholder="nombre" />
            <Form.Text className="text-muted">
             Este campo es requerido.
            </Form.Text>
          </Form.Group>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
          <Button variant="outline-primary">Agregar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
