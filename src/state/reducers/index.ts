import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { clientReducer } from './clientReducer';
import { productReducer } from './productReducer';


const reducers = combineReducers({
    auth: authReducer,
    client: clientReducer,
    product: productReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>