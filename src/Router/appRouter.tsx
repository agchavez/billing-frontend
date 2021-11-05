import React ,{ useEffect, useState }from 'react'
import { LoginPage } from '../Pages/loginPage';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
 } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { billingRoute } from './billingRoute';
import {  RootState } from '../state/reducers';
import { startLoadingInvoice } from '../state/action-creators/invoiceActionCreators';
import { startLoadingClients } from '../state/action-creators/clientActionCreators';
import { startLoadingProducts } from '../state/action-creators/productActionCreators';

export const AppRouter = ():JSX.Element => {
    
    //TODO: Validar rutas tanto privadas como publicas
    //Caragr el usuario al inicar la app en el caso que este registrado 
    const dispatch = useDispatch();
    

        //Para cargar 
        const [check, setcheck] = useState(true);
        const idUser = useSelector((state: RootState) => state.auth.id)
        //Para proteccion de rutas
        const [isAuth, setisAuth] = useState(false);
    useEffect(()=>{
        const user = localStorage.getItem('token')
            if (user) {
                dispatch(startLoadingInvoice())
                dispatch(startLoadingClients())
                dispatch(startLoadingProducts())
                setisAuth(true)
            }else{
                setisAuth(false)
            }
            setcheck(false)
    }, [dispatch, setcheck, setisAuth, idUser])
    if (check) {
    return(<>
            <div className="base__img">
                <div className="base__img-gif">

                    <img src='https://www.emape.gob.pe/assets/image/loading.gif' width="150"/>
                </div>
            </div>
            </>)
        
    }
    console.log(isAuth);
    
    return (
        <>
            <Router>
                <Switch>
                   
                    {isAuth?<Route 
                        path ="/billing" 
                        component = {billingRoute} 
                    />: <Route 
                    exact path ="/auth" 
                    component = {LoginPage} 
                    />}
                    <Redirect to={isAuth?"/billing":"/auth"}/>
                     

                </Switch>
                
            </Router>
            
        </>
    )
}
