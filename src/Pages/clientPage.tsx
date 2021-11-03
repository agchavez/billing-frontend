import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { AddNewClient } from '../components/newClient';

export const ClientPage = () => {
    const [ModalShow, setModalShow] = useState(false);
    const handleAddClient = ()=>{
            setModalShow(true);
    }
    return (
        <div className="row mt-5">
            <div className="col-9 base__title">

                <p>Lista de clientes</p>
            </div>
            <div className="mt-3 col-3">
                <Button className="w-100" variant="outline-primary" onClick={handleAddClient}>Agregar cliente</Button>
            </div>
            <div className="billing__container-table mt-3">
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>RTN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>12345</td>
                        <td>Gabriel</td>
                        <td>1234568</td>
                        <td className="client__container-btn"><Button className="base_btn-table" variant="secondary" size="sm">
                            Editar
                            </Button><Button className="base_btn-table" variant="outline-danger mt-1" size="sm">Eliminar</Button></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>12345</td>
                        <td>Gabriel</td>
                        <td>1234568</td>
                        <td className="client__container-btn"><Button className="base_btn-table" variant="secondary" size="sm">Editar</Button><Button className="base_btn-table" variant="outline-danger mt-1" size="sm">Eliminar</Button></td>
                        </tr>
                        
                    </tbody>
                    </Table>
            </div>
            <AddNewClient 
                    show={ModalShow}
                    onHide={() => setModalShow(false)}
                    />
                
            

        </div>
    )
}
