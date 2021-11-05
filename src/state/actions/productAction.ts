



import { ActionTypes } from '../types/types';
import { ListClientResponse } from '../../interfaces/response';



interface DeleteProductAction{
    type:ActionTypes
    payload: any
}
interface ListProductAction{
    type:ActionTypes
    payload: ListClientResponse
}



export type ProductAction = DeleteProductAction | ListProductAction;