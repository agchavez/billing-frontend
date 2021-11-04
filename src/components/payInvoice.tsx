import React from 'react'
import { Modal, Button, Form,Table } from 'react-bootstrap';

export const PayInvoice = (props:any) => {
    return (
        
            <Modal
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title"
                >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                    Factura 
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
                        <p>Angel Chavez</p>
                    </div>
                    <div className="d-flex">
                        <p>Fecha: </p>
                        <p>12/11/2021</p>
                    </div>
                    <div className="d-flex">
                        <p>Hora: </p>
                        <p>15:00:00</p>
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
                        <p>Angel Chavez</p>
                    </div>
                    <div className="d-flex">
                        <p>RTN Cliente: </p>
                        <p>21454658459565</p>
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
                        <tr>
                        <td>Manzana Verde</td>
                        <td>10</td>
                        <td>L.</td>
                        <td>50.00</td>
                        </tr>
                        
                    </tbody>
                    </Table>
                    <Table responsive="sm">
                    
                    <tbody>
                        <tr>
                        <td><b>Sub total</b></td>
                        <td></td>
                        <td>L.</td>
                        <td>50.00</td>
                        </tr>
                        <tr>
                        <td><b>ISV 15%</b></td>
                        <td></td>
                        <td>L.</td>
                        <td>7.5</td>
                        </tr>
                        <tr>
                        <td><b>TOTAL FINAL</b></td>
                        <td></td>
                        <td>L.</td>
                        <td>50.00</td>
                        </tr>
                        
                    </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="outline-dark" onClick={props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal> 
    )
}
