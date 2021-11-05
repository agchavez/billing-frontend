import { ActionTypes } from '../types/types';
import { ProductAction } from '../actions/productAction';
import { ProductInterface } from '../../interfaces/response';
export interface productsInterface {
    active?: ProductInterface,
    products: ProductInterface[],
    loading?:boolean,
    nextPage?:string | null,
    previusPage?:string | null

}

const initialState:productsInterface = {
    loading: true,
    products:[]
}
export const productReducer = (state:productsInterface = initialState, action:ProductAction):productsInterface=>{
    switch (action.type) {
        
        case ActionTypes.PRODUCTLIST:
            return {
                ...state,
                nextPage: action.payload.nextPage,
                previusPage: action.payload.nextPage,
                products:[
                    ...action.payload.results
                ],
                loading:false

            }
        default:
            return state;
    }
}