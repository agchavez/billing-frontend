import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { clientReducer } from './clientReducer';
import { productReducer } from './productReducer';
import { invoiceReducer } from './invoiceReducer';


const reducers = combineReducers({
    auth: authReducer,
    client: clientReducer,
    product: productReducer,
    invoice:invoiceReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>