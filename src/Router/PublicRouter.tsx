import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'

export const PublicRoute = ({
    isAuthenticaded,
    component:Component,
    ...rest
}:any) => {
    return (
        <Route {...rest}
           component={
               (props:any)=>(
                   (!isAuthenticaded)
                   ?<Component {...props} />
                   :(<Redirect to="/billing"/>)
               )
           }
        />
    )
}

PublicRoute.protoType= {
    component: PropTypes.func.isRequired
}


