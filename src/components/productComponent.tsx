import React from 'react'
import { ClientInterface } from '../interfaces/response';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers/index';

export const ProductComponent:React.FC = () => {
    const handleDeletePoduct = (id:number)=>{

    }
    const handleEditPoduct = (id:number)=>{

    }
    const products = useSelector((state:RootState) => state.product.products)
    
    return (
        <> { products.map((product,i)=>(<tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{product.code}</td>
                                    <td>{product.name}</td>
                                    <td>L. {product.price}.00</td>
                                    <td>{product.amount}</td>
                                    <td className="client__container-btn" onClick={()=> handleEditPoduct(product.id)}><Button className="base_btn-table" variant="secondary" size="sm"  >
                                        Editar
                                        </Button><Button onClick={()=> handleDeletePoduct(product.id)} className="base_btn-table" variant="outline-danger mt-1" size="sm">Eliminar</Button></td>
                                    </tr>))
                               } </>
    )
}
