import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { AddNewClient } from '../components/newClient';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingClients } from '../state/action-creators/clientActionCreators';
import { RootState } from '../state/reducers';
import { ClientComponent } from '../components/clientComponent';

export const ClientPage = () => {
    
    const [ModalShow, setModalShow] = useState(false);
    const handleAddClient = ()=>{
            setModalShow(true);
    }
    const dispatch = useDispatch()
    dispatch(startLoadingClients())

   
    
    
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

                        
                            <ClientComponent />)
                        
                        
                        
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
