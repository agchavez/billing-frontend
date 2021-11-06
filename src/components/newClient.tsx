import React from 'react'

import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { startNewClient } from '../state/action-creators/clientActionCreators';

export const AddNewClient = (props:any) => {
  const [nameError, setnameError] = useState(false);
  const [rtnError, setrtnError] = useState(false);
    const [fromValue, handleInputChange, reset] = useForm({
      name:"",
      RTN:""
    })
    const dispatch = useDispatch()
    const {name, RTN} = fromValue;

    const handleSave =()=>{
      
      if(name.length < 5 ){
        setnameError(true)
      }else{
        setnameError(false)
      }
      if(`${RTN}`.length !== 15){
        setrtnError(true)
      }else{
        setrtnError(false)
      }
      if(nameError || rtnError){
        return
      }
      dispatch(startNewClient(name, RTN))
      reset()
      
    }
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
            <Form.Control type="text" placeholder="nombre" name="name" value={name} onChange={handleInputChange} />
            {nameError?<Form.Text className="text-muted">
             Este campo es requerido.
            </Form.Text>:""}
          </Form.Group>
          <Form.Group className="mb-3 px-5 mt-3" controlId="formBasicEmail">
            <Form.Label>RTN</Form.Label>
            <Form.Control type="number" placeholder="nombre" name="RTN" value={RTN}  onChange={handleInputChange}/>
            {rtnError?<Form.Text className="text-muted">
             Este campo es requerido.
            </Form.Text>:""}
          </Form.Group>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
          <Button variant="outline-primary" onClick={handleSave}>Agregar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
