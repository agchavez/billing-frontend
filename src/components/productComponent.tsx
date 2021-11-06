import React from 'react'
import { ClientInterface, ProductInterface } from '../interfaces/response';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/reducers/index';
import { startActiveProduct } from '../state/action-creators/productActionCreators';

export const ProductComponent = (props:any) => {
    const dispatch = useDispatch()
    const handleDeletePoduct = (product: ProductInterface)=>{
            dispatch(startActiveProduct(product))
            
    }
    const handleEditPoduct = (product: ProductInterface)=>{
            dispatch(startActiveProduct(product))
            props.setModal(true)
    }
    const products = useSelector((state:RootState) => state.product.products)
    
    return (
        <> { products.map((product,i)=>(<tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{product.code}</td>
                                    <td>{product.name}</td>
                                    <td>L. {product.price}.00</td>
                                    <td>{product.amount}</td>
                                    <td className="client__container-btn" onClick={()=> handleEditPoduct(product)}><Button className="base_btn-table" variant="secondary" size="sm"  >
                                        Editar
                                        </Button></td>
                                    </tr>))
                               } </>
    )
}
