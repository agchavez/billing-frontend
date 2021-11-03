import React from 'react'
import {
    Switch,
    Route,
    Redirect } from 'react-router-dom';
import { NavBar } from '../components/navBar';
import { HomePage } from '../Pages/homePage';
import { ClientPage } from '../Pages/clientPage';
import { ProductPage } from '../Pages/productPage';
import { BillingPage } from '../Pages/billingPage';

export const billingRoute = () => {
    return (
        <>
            <NavBar/>
            <div className = "container">
               
                   <Switch>
                       <Route component ={HomePage} path="/billing/home"/>
                       <Route component ={ClientPage} path="/billing/client"/>
                       <Route component ={ProductPage} path="/billing/product"/>
                       <Route component ={BillingPage} path="/billing/billing"/>

                       <Redirect to ="/billing/home"></Redirect>
                   </Switch>

            </div>
        </>
        
    )
}
