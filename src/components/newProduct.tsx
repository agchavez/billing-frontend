import React, { useState } from 'react'

import { Modal, Button, Form } from 'react-bootstrap';
import { BasicInput } from './basicInput';
import { useForm } from '../hooks/useForm';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { startNewProduct } from '../state/action-creators/productActionCreators';

export const AddNewProduct = (props:any) => {
    const [nameError, setnameError] = useState(false);
    const [errorPrice, setErrorPrice] = useState(false);
    const [errorAmount, setErrorAmount] = useState(false);
    const [errorcode, setErrorcode] = useState(false);
    const [formValues, handleInputChange, reset ] = useForm({
        name:"",
        price:0,
        amount:0,
        code:0            
    })

    const {name, price, amount, code} = formValues;
    const dispatch = useDispatch()
    const handleAddProduct = ()=> {
        // reset()
        
        
        if (!validateCamp()) {
            return
        }
        dispatch(startNewProduct(name, price, amount, code))
        reset()
    }

    const validateCamp = ():Boolean=>{
        if(name.length < 5){
            setnameError(true);
        }else{
            setnameError(false);
        }
        if(price === 0){
            setErrorPrice(true);
        }else{
            setErrorPrice(false);
        }
        if(amount === 0){
            setErrorAmount(true);
        }else{
            setErrorAmount(false);
        }
        if(code.toString().length < 6){
            setErrorcode(true);
        }else{
            setErrorcode(false);
        }
        if (
            nameError || errorPrice || errorAmount || errorcode
        ) {
            return false
            
        }else{

          return true
        }
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            Agregar nuevo producto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <BasicInput 
                    title = "Nombre" 
                    name="name" 
                    type = "text"
                    placeholder="Manzana Roja" 
                    msgError= {nameError? "Campo requerido":""} 
                    value = {name} 
                    onChange={handleInputChange} />
             <BasicInput 
                    title = "Precio" 
                    name="price" 
                    type = "number"
                    placeholder="50.00" 
                    msgError= {errorPrice? "Campo requerido":""} 
                    value = {price} 
                    onChange={handleInputChange} />
             <BasicInput 
                    title = "Cantidad" 
                    name="amount" 
                    type = "number"
                    placeholder="20" 
                    msgError= {errorAmount? "Campo requerido":""} 
                    value = {amount} 
                    onChange={handleInputChange} />
             <BasicInput 
                    title = "Codigo" 
                    name="code" 
                    type = "text"
                    placeholder="123456" 
                    msgError= {errorcode? "Campo requerido":""} 
                    value = {code} 
                    onChange={handleInputChange} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
          <Button variant="outline-primary" onClick={handleAddProduct}>Agregar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
