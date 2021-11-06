import moment from 'moment';

import React from 'react'
import { Modal, Button, Form,Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/reducers';
import { saveNewInvoice, saveNewInvoiceDetail } from '../state/action-creators/invoiceActionCreators';

export const PayInvoice = (props:any) => {
    const dispatch = useDispatch()
    const state = useSelector((state:RootState) => state.invoice.active);
    const amount = useSelector((state:RootState) => state.discount);
    const seller = useSelector((state:RootState) => state.auth);
    const client = useSelector((state:RootState) => state.client.active);
    moment().format();
    
    const handlePay = async()=> {
        
        const discountValue = amount.amount?amount.amount:0 * (state.total?state.total:0);
        const total = (state.total?state.total:0) - discountValue;
        const dataInvoice:any = {
                "total": total,
                "client": client?.id,
                "seller": seller.id,
                "isv": state.isv,
                "discount":amount.id == 0? null:amount.id,
        }
        console.log(dataInvoice);
        
        const newInvoice = await saveNewInvoice(dataInvoice);
        
        if(newInvoice !== null){
            dispatch(saveNewInvoiceDetail(state.listInvoiceDetail, newInvoice))
        }
        props.onHide()

    }
    return (
        
            <Modal
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title"
                >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                    Resumen de factura 
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex">
                        <p><b>FARINTER</b></p>
                    </div>
                    <div className="d-flex">
                        <p><b>Tel.</b> </p>
                        <p>(504) 2244-8866</p>
                    </div>
                    <div className="d-flex mt-1">
                        <p><b>Direccion. </b> </p>
                        <p>...</p>
                    </div>
                    
                    <div className="d-flex">
                        <p>Vendedor: </p>
                        <p>{seller?.name}</p>
                    </div>
                    <div className="d-flex">
                        <p>Fecha: </p>
                        <p>{moment().format('MM-DD-YYYY')}</p>
                    </div>
                    <div className="d-flex">
                        <p>Hora: </p>
                        <p>{moment().format('HH:mm')}</p>
                    </div>
                    <div className="d-flex">
                        <p>Codigo: </p>
                        <p>00000000000001</p>
                    </div>
                    <div className="d-flex mt-5">
                        <p>CAI: </p>
                        <p>3E4F5G-E44R6R-F5R6GR62R</p>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <p>Suscriptior: </p>
                        <p>{client?.name}</p>
                    </div>
                    <div className="d-flex">
                        <p>RTN Cliente: </p>
                        <p>{client?.rtn}</p>
                    </div>

                    <Table responsive="sm">
                    <thead>
                        <tr>
                        <th>Producto</th>
                        <th>ctn</th>
                        <th>Mda</th>
                        <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.listInvoiceDetail.map((invoice, i) => (
                                <>
                                <tr key= {i}>
                                    <td>{invoice.name}</td>
                                    <td>{invoice.amount}</td>
                                    <td>L.</td>
                                    <td>{invoice.total_line}</td>
                                </tr>
                                </>
                            ))
                        }
                        
                    </tbody>
                    </Table>
                    <Table responsive="sm">
                    
                    <tbody>
                        <tr>
                        <td><b>Sub total</b></td>
                        <td></td>
                        <td>L.</td>
                        <td>{state.subTotal}</td>
                        </tr>
                        <tr>
                        <td><b>ISV 15%</b></td>
                        <td></td>
                        <td>L.</td>
                        <td>{state.isv}</td>
                        </tr>
                        <tr>
                        <td><b>Descurnto {amount.amount}%</b></td>
                        <td></td>
                        <td>L.</td>
                        <td>{(state.total?state.total:0) * (amount.amount?amount.amount/100:0)}</td>
                        </tr>
                        <tr>
                        <td><b>TOTAL FINAL</b></td>
                        <td></td>
                        <td>L.</td>
                        <td>{(state.total?state.total:0) - (state.total?state.total:0) * (amount.amount?amount.amount/100:0)}</td>
                        </tr>
                        
                    </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="outline-primary"  onClick={handlePay}>Pagar</Button>
                <Button variant="outline-dark" onClick={props.onHide}>Cancelar</Button>
                </Modal.Footer>
            </Modal> 
    )
}
