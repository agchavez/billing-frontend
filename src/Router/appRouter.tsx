import React from 'react'
import { LoginPage } from '../Pages/loginPage';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
 } from "react-router-dom";
import { billingRoute } from './billingRoute';

export const AppRouter = ():JSX.Element => {
    //TODO: Validar rutas tanto privadas como publicas
     
    // return(<>
    //         <div className="base__img">
    //             <div className="base__img-gif">

    //                 <img src='https://lh3.googleusercontent.com/proxy/F8U6FqIHTLbm2b2sF9k7Vay_ZWJf_fC4oY7PnNYJWrUmgPdX9mQPZ8vkyq8N-bIvUBfgXhNR9i7-_5ZqaQsjnJ8CMw-Mv1_78OA' width="150"/>
    //             </div>
    //         </div>
    //         </>)
    return (
        <>
            <Router>
                <Switch>
                    <Route 
                        exact path ="/auth" 
                        component = {LoginPage} 
                    />
                    <Route 
                        path ="/billing" 
                        component = {billingRoute} 
                    />
                     

                </Switch>
                
            </Router>
            
        </>
    )
}
