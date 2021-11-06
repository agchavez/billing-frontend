import React from 'react'
import { ClientInterface } from '../interfaces/response';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers/index';

export const ClientComponent:React.FC = () => {
    
    const handleDeleteClient = (id:number)=>{

    }
    const handleEditClient = (id:number)=>{

    }
    const clients = useSelector((state:RootState) => state.client.clients)
    
    return (
        <> { clients.map((client,i)=>(<tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{client.id}</td>
                                    <td>{client.name}</td>
                                    <td>{client.rtn}</td>
                                    <td className="client__container-btn" onClick={()=> handleDeleteClient(client.id)}><Button className="base_btn-table" variant="secondary" size="sm"  >
                                        Editar
                                        </Button></td>
                                    </tr>))
                               } </>
    )
}
