import React from 'react'
import moment from 'moment';
import { ClientInterface, ProductInterface } from '../interfaces/response';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/reducers/index';
import { startActiveProduct } from '../state/action-creators/productActionCreators';
import { productsInterface } from '../state/reducers/productReducer';

export const InvoiceComponent:React.FC = () => {
    const dispatch = useDispatch()
    const handleDeleteInvoice = ()=>{

    }
    const handleEditInvoice = ()=>{

    }
    const {invoices, loading} = useSelector((state:RootState) => state.invoice)
    moment.locale('es');
    
    return (
        <> { loading? "" : invoices.map((invoice,i)=>(<tr key={i}>
                                    <td>{i}</td>
                                    <td>{moment(invoice.created).lang("es").format( 'ddd DD-MMM-YYYY, hh:mm A')}</td>
                                    <td>{invoice.id}</td>
                                    <td>L. {invoice.total}.00</td>
                                    <td>{invoice.id}</td>
                                    <td className="client__container-btn" onClick={()=> handleEditInvoice()}><Button className="base_btn-table" variant="secondary" size="sm"  >
                                        Ver mas
                                        </Button></td>
                                    </tr>))
                               } </>
    )
}
