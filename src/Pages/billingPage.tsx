import React from 'react'
import { Table, Button } from 'react-bootstrap';
export const BillingPage = () => {
    
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
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>12456</td>
                        <td className="billin__container-btn"><Button className="base_btn-table" variant="secondary" size="sm">
                            Ver mas
                            </Button></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>12456</td>
                        <td className="billin__container-btn"><Button className="base_btn-table" variant="secondary" size="sm">
                            Ver mas
                            </Button></td>
                        </tr>
                        
                    </tbody>
                    </Table>
            </div>
            

        </div>
    )
}
