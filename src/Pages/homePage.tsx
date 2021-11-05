import React, { useState } from 'react'
import { 
    InputGroup, FormControl, Button,Table
 } from 'react-bootstrap';
import { PayInvoice } from '../components/payInvoice';
import { useForm } from '../hooks/useForm';
import { getClientById } from '../state/action-creators/clientActionCreators';
import { ClientInterface, ProductInterface, InvoiceDetail, InvoiceDetailBilling } from '../interfaces/response';
import { ClientBillingComponent, ProductBillingComponent, AdtionalInformationBilling } from '../components/billingComponets';

export const HomePage = () => {
    

    

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

    const handleRemoveItem = (id:any)=>{
        listProduct.splice(id,1)
        setlistProduct([...listProduct])
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

            

            <div className="home__contain mt-3 col-12">
                    <div className="home__title">
                        <p>Descuento</p>
                    </div>
                <div className="d-flex">
                    <div className="home__suptitle">
                        <p>Codigo</p> 
                    </div>
                    <div className="home__input-discount home__input-group">
                    <InputGroup className="mb-3 home__form-group">
                        <FormControl
                            placeholder="Codigo de descuento"
                            type= "number"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    </div>
                    <div className="home__btn-discount">
                        <Button variant="primary home__btn">Agregar</Button>
                    </div>
                </div>
                <div className="home__information">
                        
                        {
                            // clientError.error
                            //     ?<p className="text-muted">{clientError.msg} {!clientError.errorCamp?<a href="#"> Precione aqui para ingresar nuevo cliente</a> :""}</p>
                            //     :<>
                            //         <p><b>Nombre: </b></p>
                            //         <p className="ms-2">  {dataClient.name}</p>
                            //     </>
                        }
                </div>
            </div>

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
                        
                        {listProduct.map((elemnt, i)=>(<tr key={i}>
                        <td>{i + 1}</td>
                        <td>{elemnt.code}</td>
                        <td>{elemnt.name}</td>
                        <td>L. {elemnt.price}.00</td>
                        <td>{elemnt.amount}</td>
                        <td>L. {elemnt.total_line}.00</td>
                        <td className="billin__container-btn"><Button onClick={()=> handleRemoveItem(i)} className="base_btn-table" variant="secondary" size="sm">
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
