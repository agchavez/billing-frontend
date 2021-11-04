import React, { useState } from 'react'
import { 
    InputGroup, FormControl, Button,Table
 } from 'react-bootstrap';
import { PayInvoice } from '../components/payInvoice';

 interface clientData {
     name:string,
     rtn:number
 }

export const HomePage = () => {
    
    const [clientError, setclientError] = useState({
        error:false,
        errorCamp:false,
        msg:""
    })
    const [ModalShow, setModalShow] = useState(false);
    const handlePay= ()=>{
            setModalShow(true);
    }
    const dataClient:clientData = {name:"Gabriel", rtn:12456389}

    const SearchClient =()=>{
        setclientError({
            error:true,
            errorCamp:true,
            msg:"Campo requerido"
        })
        console.log(clientError);
        

    }
    return (
        <>
           <div className="row mt-5">
            <div className="base__title">

                <p>Ingresar nueva factura</p>
            </div>
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
                        />
                        <Button variant="outline-secondary" onClick={SearchClient}>
                            Buscar
                        </Button>
                    </InputGroup>
                    </div>
                    
                </div>
                <div className="home__information">
                        
                        {
                            clientError.error
                                ?<p className="text-muted">{clientError.msg} {!clientError.errorCamp?<a href="#"> Precione aqui para ingresar nuevo cliente</a> :""}</p>
                                :<>
                                    <p><b>Nombre: </b></p>
                                    <p className="ms-2">  {dataClient.name}</p>
                                </>
                        }
                </div>
            </div>

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
                            />
                            <Button variant="outline-secondary" onClick={SearchClient}>
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
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                    </div>
                    <div className="home__btn-count ms-5">
                        <Button variant="primary home__btn">Agregar</Button>
                    </div>
                    
                </div>
                <div className="home__information">
                        
                        {
                            clientError.error
                                ?<p className="text-muted">{clientError.msg} {!clientError.errorCamp?<a href="#"> Precione aqui para ingresar nuevo cliente</a> :""}</p>
                                :<>
                                    <p><b>Nombre: </b></p>
                                    <p className="ms-2">  {dataClient.name}</p>
                                </>
                        }
                </div>
            </div>

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
                            clientError.error
                                ?<p className="text-muted">{clientError.msg} {!clientError.errorCamp?<a href="#"> Precione aqui para ingresar nuevo cliente</a> :""}</p>
                                :<>
                                    <p><b>Nombre: </b></p>
                                    <p className="ms-2">  {dataClient.name}</p>
                                </>
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
                        <tr>
                        <td>1</td>
                        <td>123456</td>
                        <td>Manzana verde</td>
                        <td>L. 150.00</td>
                        <td>5</td>
                        <td>L. 750.00</td>
                        <td className="billin__container-btn"><Button className="base_btn-table" variant="secondary" size="sm">
                            Eliminar
                            </Button></td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>123456</td>
                        <td>Manzana verde</td>
                        <td>L. 150.00</td>
                        <td>5</td>
                        <td>L. 750.00</td>
                        <td className="billin__container-btn"><Button className="base_btn-table" variant="secondary" size="sm">
                            Eliminar
                            </Button></td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>123456</td>
                        <td>Manzana verde</td>
                        <td>L. 150.00</td>
                        <td>5</td>
                        <td>L. 750.00</td>
                        <td className="billin__container-btn"><Button className="base_btn-table" variant="secondary" size="sm">
                            Eliminar
                            </Button></td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>123456</td>
                        <td>Manzana verde</td>
                        <td>L. 150.00</td>
                        <td>5</td>
                        <td>L. 750.00</td>
                        <td className="billin__container-btn"><Button className="base_btn-table" variant="secondary" size="sm">
                            Eliminar
                            </Button></td>
                        </tr>
                    </tbody>
                    </Table>
                    
                </div>
            </div>

                <div className="home__data-container shadow-sm">
                    <div className="home_data-info mt-1">
                        <p className="home__data-title">Sub Total</p>
                        <p className="home__data-value">L. 100.00</p>
                    </div>
                    <div className="home_data-info">
                        <p className="home__data-title">Descuento</p>
                        <p className="home__data-value">L. 10.00</p>
                    </div>
                    <div className="home_data-info">
                        <p className="home__data-title">ISV 15%</p>
                        <p className="home__data-value">L. 10.00</p>
                    </div>
                    <hr />
                    <div className="home_data-info">
                        <p className="home__data-title">Total a pagar</p>
                        <p className="home__data-value">L. 105.00</p>
                    </div>
                    <div className="home__data-btn">
                    <Button variant="primary w-100" onClick={handlePay}>Pagar</Button>
                    </div>
                </div>
            
        </div>
        {/* handlePay */}
        <PayInvoice 
                    show={ModalShow}
                    onHide={() => setModalShow(false)}
                    />
        </>
    )
}
