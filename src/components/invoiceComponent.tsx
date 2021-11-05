import React from 'react'
import { ClientInterface } from '../interfaces/response';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers/index';

export const InvoiceComponent:React.FC = () => {
    const handleDeleteInvoice = (id:number)=>{

    }
    const handleEditInvoice = (id:number)=>{

    }
    const {invoices, loading} = useSelector((state:RootState) => state.invoice)
    
    
    
    return (
        <> { loading? "" : invoices.map((invoice,i)=>(<tr key={i}>
                                    <td>{i}</td>
                                    <td>{invoice.created}</td>
                                    <td>{invoice.client_name?.name ===""? "--":invoice.client_name?.name}</td>
                                    <td>L. {invoice.total}.00</td>
                                    <td>{invoice.id}</td>
                                    <td className="client__container-btn" onClick={()=> handleEditInvoice(invoice.id)}><Button className="base_btn-table" variant="secondary" size="sm"  >
                                        Editar
                                        </Button><Button onClick={()=> handleDeleteInvoice(invoice.id)} className="base_btn-table" variant="outline-danger mt-1" size="sm">Eliminar</Button></td>
                                    </tr>))
                               } </>
    )
}
