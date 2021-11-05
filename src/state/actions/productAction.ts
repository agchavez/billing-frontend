



import { ActionTypes } from '../types/types';
import { ListClientResponse, ProductInterface } from '../../interfaces/response';



interface DeleteProductAction{
    type:ActionTypes
    payload: any
}
interface ListProductAction{
    type:ActionTypes
    payload: ListClientResponse
}
interface AddProductAction{
    type:ActionTypes,
    payload:ProductInterface
}

export type ProductAction = DeleteProductAction | ListProductAction | AddProductAction;