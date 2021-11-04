import React from 'react'
import { Form } from 'react-bootstrap';
export interface inputProps{
    name:string,
    title:string,
    placeholder?:string,
    msgError?:string,
    value:string,
    onChange:any,
    type:string
}


export const BasicInput: React.FC<inputProps> = ({name, placeholder, msgError, value, onChange, title, type}) => {
    return (
        <>
            <Form.Group className="mb-3 px-5" controlId="formBasicEmail">
                <Form.Label>{title}</Form.Label>
                <Form.Control name={name} value={value} type={type} placeholder={placeholder} onChange={onChange} />
                {msgError ? 
                <Form.Text className="text-muted">
                    {msgError}
                </Form.Text>:
                ''}
            </Form.Group>
        </>
    )
}
