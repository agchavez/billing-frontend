 import React from 'react'
 import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

 export const PrivateRoute = ({
     isAuthenticaded,
     component:Component,
     ...rest
 }:any) => {
     return (
         <Route {...rest}
            component={
                (props:any)=>(
                    (isAuthenticaded)
                    ?<Component {...props} />
                    :(<Redirect to="/auth"/>)
                )
            }
         />
     )
 }

 PrivateRoute.protoType= {
     isAuthenticaded:PropTypes.bool.isRequired,
     component: PropTypes.func.isRequired
 }
 

 