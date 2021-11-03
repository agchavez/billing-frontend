import React from 'react'
import {AppRouter } from '../Router/appRouter';

export const loginPage = () => {
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
                                type="text" />
                        </div>
                        <div className="auth__btn-container">
                            <button className="btn auth__btn">
                                Ingresar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
}
