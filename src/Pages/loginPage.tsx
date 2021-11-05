import { useDispatch } from 'react-redux'
import {AppRouter } from '../Router/appRouter';
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state';
import { useForm } from '../hooks/useForm';
import { useState } from 'react';

import { useHistory } from "react-router-dom";

export const LoginPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [error, seterror] = useState(false)
    const [formValues, handleInputChange, reset ] = useForm({code:""})
    const { startLogin } = bindActionCreators(actionCreators, dispatch)

    const {code} = formValues; 
    const handleLogin = async()=>{
        console.log(`${code}`.length);
        if (`${code}`.length !== 8) {
            seterror(true)
            return
        }
        seterror(false)
        
        if (await startLogin(code)) {
            history.push("/home");
        }
    }
    return (
        
      <>
            <div className="container">
                <div className="row auth__row">
                    <div className="col-12 auth__container shadow  bg-white rounded">
                        <div className="auth__title-container">
                            <p>Ingrese codigo de acceso</p>
                        </div> 
                        <div className="auth__form-conatiner">
                            <input 
                                className="form-control" 
                                placeholder="Codigo"
                                name = "code"
                                value = {code}
                                onChange={handleInputChange}
                                type="text" />
                                {error?<p className="text-muted">Campo requerido</p>:''}
                        </div>
                        <div className="auth__btn-container">
                            <button className="btn auth__btn" onClick={handleLogin}>
                                Ingresar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
}