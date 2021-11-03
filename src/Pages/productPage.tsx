import React from 'react'
import { Table, Button } from 'react-bootstrap';

export const ProductPage = () => {
    return (
        <div className="row mt-5">
            <div className="col-9 base__title">

                <p>Lista de productos</p>
            </div>
            <div className="mt-3 col-3">
                <Button className="w-100" variant="outline-primary">Agregar producto</Button>
            </div>
            <div className="billing__container-table mt-3">
            <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>12345</td>
                        <td>Gabriel</td>
                        <td>L. 123.00 </td>
                        <td>456</td>
                        <td className="client__container-btn"><Button className="base_btn-table" variant="secondary" size="sm">
                            Editar
                            </Button><Button className="base_btn-table" variant="outline-danger mt-1" size="sm">Eliminar</Button></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>12345</td>
                        <td>Gabriel</td>
                        <td>L. 123.00 </td>
                        <td>456</td>
                        <td className="client__container-btn"><Button className="base_btn-table" variant="secondary" size="sm">Editar</Button><Button className="base_btn-table" variant="outline-danger mt-1" size="sm">Eliminar</Button></td>
                        </tr>
                        
                    </tbody>
                    </Table>
            </div>
            

        </div>
    )
}
