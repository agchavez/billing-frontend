import React from 'react'
import { loginPage } from '../Pages/loginPage';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
 } from "react-router-dom";
import { billingRoute } from './billingRoute';

export const AppRouter = ():JSX.Element => {
    return (
        <>
            <Router>
                <Switch>
                    <Route 
                        exact path ="/auth" 
                        component = {loginPage} 
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
