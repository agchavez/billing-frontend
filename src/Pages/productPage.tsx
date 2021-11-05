import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { AddNewProduct } from '../components/newProduct';
import { ProductComponent } from '../components/productComponent';
import { startLoadingProducts } from '../state/action-creators/productActionCreators';
import { useDispatch } from 'react-redux';

export const ProductPage = () => {
    const [ModalShow, setModalShow] = useState(false);
    const handleAddClient = ()=>{
            setModalShow(true);
    }

    const dispatch = useDispatch()
    dispatch(startLoadingProducts())
    return (
        <div className="row mt-5">
            <div className="col-9 base__title">

                <p>Lista de productos</p>
            </div>
            <div className="mt-3 col-3">
                <Button className="w-100" variant="outline-primary" onClick={handleAddClient}>Agregar producto</Button>
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
                       <ProductComponent/>
                    </tbody>
                    </Table>
            </div>
            <AddNewProduct 
                    show={ModalShow}
                    onHide={() => setModalShow(false)}
                    />
            

        </div>
    )
}
