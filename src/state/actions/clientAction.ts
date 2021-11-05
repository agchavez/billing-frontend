
import { ActionTypes } from '../types/types';
import { clientsInterface } from '../reducers/clientReducer';
import { ClientInterface } from '../../interfaces/response';

interface ListClientAction{
    type:ActionTypes
    payload: clientsInterface[]
}
interface AddClientAction{
    type:ActionTypes
    payload: ClientInterface
}

interface DeleteClientAction{
    type:ActionTypes
    payload: any
}



export type ClientAction = ListClientAction | AddClientAction | DeleteClientAction;