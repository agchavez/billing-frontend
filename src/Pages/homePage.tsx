import React, { useState } from 'react'
import { 
    InputGroup, FormControl, Button,Table
 } from 'react-bootstrap';
import { PayInvoice } from '../components/payInvoice';
import { useForm } from '../hooks/useForm';
import { getClientById } from '../state/action-creators/clientActionCreators';
import { ClientInterface, ProductInterface, InvoiceDetail, InvoiceDetailBilling } from '../interfaces/response';
import { ClientBillingComponent, ProductBillingComponent, AdtionalInformationBilling, DiscountComponent } from '../components/billingComponets';
import { RootState } from '../state/reducers/index';
import { useSelector, useDispatch } from 'react-redux';
import { startRemoveInvoiceDetail } from '../state/action-creators/invoiceActionCreators';

export const HomePage = () => {

    const state = useSelector((state:RootState) => state.invoice.active.listInvoiceDetail);
    const dispatch = useDispatch()
    const [formValues, handleInputChange, reset ] = useForm({
        rtn:0,
        price:null,
        amount:0,
        code:0,
        discount:0            
    })
    const [listProduct, setlistProduct] = useState<InvoiceDetailBilling[]>([])
    const { rtn, price, amount, code, discount} = formValues;
    
    let[ dataClient, setClientData] = useState<ClientInterface>({name:"", id:0, rtn:"",created:null})
    let[ dataProduc, setProduct] = useState<ProductInterface>({name:"", id:0,price:0,amount:0,code:'',status:false,created:null})

    const handleRemoveItem = (elemnt:any)=>{
        
        dispatch(startRemoveInvoiceDetail(elemnt))
    }


    return (
        <>
           <div className="row mt-5">
            <div className="base__title">

                <p>Ingresar nueva factura</p>
            </div>
            
            <ClientBillingComponent  
                        dataClient= {dataClient} 
                        setClientData ={setClientData} 
                        formValues= {formValues} 
                        handleInputChange={handleInputChange} />

            <ProductBillingComponent
                        formValues= {formValues} 
                        handleInputChange={handleInputChange}
                        dataProduc={dataProduc}
                        setProduct = {setProduct}
                        setlistProduct ={setlistProduct}
                        stateListProduct  = {listProduct}
                            />

            <DiscountComponent
                    formValues= {formValues} 
                    handleInputChange={handleInputChange}
                    />

            

            <div className="home__contain mt-3 col-12">
                <div className="home__title">
                    <p>Lista de productos</p>
                </div>
                <div className="home__table-container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total linea</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {state.map((elemnt, i)=>(<tr key={i}>
                        <td>{i + 1}</td>
                        <td>{elemnt.code}</td>
                        <td>{elemnt.name}</td>
                        <td>L. {elemnt.price}.00</td>
                        <td>{elemnt.amount}</td>
                        <td>L. {elemnt.total_line}.00</td>
                        <td className="billin__container-btn"><Button onClick={()=> handleRemoveItem(elemnt)} className="base_btn-table" variant="secondary" size="sm">
                            Eliminar
                            </Button></td>
                        </tr>))}
                    </tbody>
                    </Table>
                    
                </div>
            </div>

              <AdtionalInformationBilling/>  
            
        </div>
        </>
    )
}
