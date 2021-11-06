import React from 'react'
import { Table, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { startLoadingInvoice } from '../state/action-creators/invoiceActionCreators';
import { InvoiceComponent } from '../components/invoiceComponent';
export const BillingPage = () => {
    
    const dispatch = useDispatch()
    dispatch(startLoadingInvoice())
    return (
        <div className="row mt-5">
            <div className="base__title">

                <p>Lista de facturas</p>
            </div>
            <div className="billing__container-table mt-3">
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Fecha y hora</th>
                        <th>Cliente</th>
                        <th>Total</th>
                        <th>id</th>
                        </tr>
                    </thead>
                    <tbody>
                        <InvoiceComponent/>
                        
                    </tbody>
                    </Table>
            </div>
            

        </div>
    )
}
