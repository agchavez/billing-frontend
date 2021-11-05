import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';
import { getClientById } from '../state/action-creators/clientActionCreators';
import { getProductByCode } from '../state/action-creators/productActionCreators';
import { InvoiceDetailBilling } from '../interfaces/response';
import { stratAddNewInvoiceDetail } from '../state/action-creators/invoiceActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/reducers/index';
import { PayInvoice } from './payInvoice';


export const ClientBillingComponent = ({dataClient,setClientData, formValues, handleInputChange }:any) => {
    const [loadCliet, setloadCliet] = useState(false)
    const [clientError, setclientError] = useState({
        error:false,
        errorCamp:false,
        client:false,
        msg:""
    })

    const { rtn} = formValues;
    const SearchClient = async()=>{
        
        if(`${rtn}`.length < 11){
            setclientError({
                ...clientError,
                error:true,
                errorCamp:true,
                msg:"Campo requerido"
            });
            return
        }else{
            setclientError({
                ...clientError,
                error:false,
            });
        }
        setloadCliet(true);
        const client = await getClientById(rtn );
        if(client !== null){
            setClientData(client);
            
            setclientError({
                ...clientError,
                client:true,
                error:false,
            });
            
        }else{
            setclientError({
                ...clientError,
                error:true,
                errorCamp:false,
                msg:"Cliente no encontrado"
            });
        }
        setloadCliet(false);

    }
    return (
        <>
                <div className="home__contain mt-3 col-12">
                <div className="home__title">
                    <p>Datos del cliente</p>
                </div>
            <div className="d-flex">
                <div className="home__suptitle">
                    <p># rtn</p> 
                </div>
                <div className="home__input-rtn home__input-group">
                <InputGroup className="mb-3 home__form-group">
                    <FormControl
                        placeholder="123456789"
                        type= "number"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        name = "rtn"
                        value = {rtn}
                        onChange = {handleInputChange}
                    />
                    <Button variant="outline-secondary" onClick={SearchClient} disabled = {loadCliet}>
                        Buscar
                    </Button>
                </InputGroup>
                </div>
                
            </div>
            <div className="home__information">
                    
                    {
                        clientError.error
                            ?<p className="text-muted">{clientError.msg} {!clientError.errorCamp?<a href="#"> Precione aqui para ingresar nuevo cliente</a> :""}</p>
                            :clientError.client?<>
                                <p><b>Nombre: </b></p>
                                <p className="ms-2">  {dataClient.name}</p>
                            </>:""
                    }
            </div>
        </div>
        </>
    )
}


export const ProductBillingComponent = ({ formValues, handleInputChange, dataProduc, setProduct, setlistProduct, stateListProduct}:any)=>{
    const dispatch = useDispatch()
    const {code, amount} = formValues;
    const [loadProduct, setloadProduct] = useState(false)
    const [productError, setproductError] = useState({
        error:false,
        errorCamp:false,
        product:false,
        msg:""
    })

   
        
    const searchProduct = async()=>{
        if(`${code}`.length < 6 ){
            setproductError({
                ...productError,
                error:true,
                errorCamp:true,
                msg:"Campos requerido"
            });
            return
        }else{
            setproductError({
                ...productError,
                error:false,
            });
        }
        setloadProduct(true)
        const product = await getProductByCode(code);
        if (product !== null) {
            setProduct(product);
            
            setproductError({
                ...productError,
                product:true,
                error:false,
            });
            
        }else{
            setproductError({
                ...productError,
                error:true,
                errorCamp:false,
                msg:"Producto no encontrado"
            });
        }
        setloadProduct(false);
       
    }
    const addProduct = ()=>{
        if(amount <= 0 ){
            setproductError({
                ...productError,
                error:true,
                errorCamp:true,
                msg:"Campos requerido"
            });
            return
        }else if (dataProduc.id === 0) {
            setproductError({
                ...productError,
                error:true,
                errorCamp:true,
                msg:"Campos requerido"
            });
            return
        }else{
            setproductError({
                ...productError,
                error:false,
            });
        }
        const product:InvoiceDetailBilling = {
            total_line: (Number(dataProduc.price) * Number(amount)),
            product:   dataProduc.id,
            amount: Number(amount),
            price:  Number(dataProduc.price),
            name: dataProduc.name,
            code: dataProduc.code
        }
        dispatch(stratAddNewInvoiceDetail(product))
        setlistProduct([...stateListProduct, product])

    }
    return(
        <>
            <div className="home__contain mt-3 col-12">
                    <div className="home__title">
                        <p>Agregar Producto</p>
                    </div>
                <div className="d-flex">
                    <div className="home__suptitle">
                        <p>Codigo</p> 
                    </div>
                    <div className="home__input-group ms-3">
                        <InputGroup className="mb-3 home__form-group">
                            <FormControl
                                placeholder="123456789"
                                type= "number"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                name = "code"
                                value = {code}
                                onChange = {handleInputChange}
                            />
                            <Button variant="outline-secondary" onClick={searchProduct}>
                                Buscar
                            </Button>
                        </InputGroup>
                    </div>
                    <div className="home__suptitle ms-3 ">
                        <p>Cantidad</p> 
                    </div>
                    <div className="ms-3">
                        <InputGroup className="mb-3  home__input-group-count">
                            <FormControl
                                placeholder="10"
                                type= "number"
                                name ="amount"
                                value= {amount}
                                onChange = {handleInputChange}
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </div>
                    <div className="home__btn-count ms-5">
                        <Button variant="primary home__btn" onClick={addProduct} disabled={loadProduct}>Agregar</Button>
                    </div>
                    
                </div>
                <div className="home__information">
                        
                        {
                            productError.error
                                ?<p className="text-muted">{productError.msg} {!productError.errorCamp?<a href="#"> Precione aqui para ingresar nuevo producto</a> :""}</p>
                                :""
                        }
                </div>
                <div className="home__information">
                {
                            productError.product?<>
                                <div></div>
                                <p><b>Nombre: </b></p>
                                <p className="ms-2">  {dataProduc.name}</p>
                                
                                <p className="ms-4"><b>Precio: </b></p>
                                <p className="ms-2"> L. {dataProduc.price}.00</p>
                            </>:""
                            
                        }
                        </div>
            </div>
        </>
    )
}


export const AdtionalInformationBilling = ()=>{
    const [ModalShow, setModalShow] = useState(false);
    const handlePay= ()=>{
        setModalShow(true);
}
    const state = useSelector((state:RootState) => state.invoice.active)
    return(
        <>
         <div className="home__data-container shadow-sm">
                    <div className="home_data-info mt-1">
                        <p className="home__data-title">Sub Total</p>
                        <p className="home__data-value">L. {state.subTotal}.00</p>
                    </div>
                    <div className="home_data-info">
                        <p className="home__data-title">Descuento</p>
                        <p className="home__data-value">L. 0.00</p>
                    </div>
                    <div className="home_data-info">
                        <p className="home__data-title">ISV 15%</p>
                        <p className="home__data-value">L. {state.isv}.00</p>
                    </div>
                    <hr />
                    <div className="home_data-info">
                        <p className="home__data-title">Total a pagar</p>
                        <p className="home__data-value">L. {state.total}.00</p>
                    </div>
                    <div className="home__data-btn">
                    <Button variant="primary w-100" onClick={handlePay}>Pagar</Button>
                    </div>
                </div>

                <PayInvoice
                    show={ModalShow}
                    onHide={() => setModalShow(false)}
                    />
        </>
    )
}