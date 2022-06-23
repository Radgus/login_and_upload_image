import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { nameError, apellidoError, calendarioError } from './errorConfig';
import Form from './components/Form';
import Label from './components/Label';
import ValidateAlert from './components/ValidateAlert';
import Setter from '../../../utils/setter';


const Input = styled.input`
  outline: none;
  border: none;
  height: 2.5rem;
  border-radius: 0.5rem;
  padding: 0 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem 1rem;
`;

Form.Input = Input;
Form.TextArea = TextArea;
Form.Label = Label;
Form.ValidateAlert = ValidateAlert;

const FormSection = () => {
  const [newEmployee, setNewEmployee] = useState({success: true, data: 'Saved employee'});
  const { register, handleSubmit,  formState: { errors } } = useForm();
  // console.log('form errors', errors);
  const alertTextName = nameError(errors.nombres?.type);
  const alertTextApellido = apellidoError(errors.apellidos?.type);
  const alertTextCalendario = calendarioError(errors.fecha?.type);

  const onSubmit = data => {
    const obj = {
      "birthday": new Date(data.fecha).toLocaleDateString('en-ZA'),
      "last_name": data.apellidos,
      "name": data.nombres,
    };
    console.log(obj);
    const url = `https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/luis_dominguez`
    try {
      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(obj),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(async response => {
        const result = await response.json(response);
        setNewEmployee({...result});
        console.log('result: ',result);
      })
    } catch (error) {
      console.log('error: ',error);
      return error;
    }
  }

  
  return(
    <Form id='myform' onSubmit={handleSubmit(onSubmit)}>
      <Form.Label >Nombres</Form.Label>
      <Form.Input 
        type="text" 
        placeholder="Nombres . . ."
        {...register("nombres", {required: true, maxLength: 30, minLength: 1})} 
      />
      {errors && <Form.ValidateAlert>{alertTextName}</Form.ValidateAlert>}
      <Form.Label >Apellidos</Form.Label>
      <Form.Input 
        type="text" 
        placeholder="Apellidos ..."
        {...register("apellidos", {required: true, maxLength: 50, minLength: 1})} 
      />
      {errors && <Form.ValidateAlert>{alertTextApellido}</Form.ValidateAlert>}
      <Form.Label >Fecha de nacimiento</Form.Label>
      <Form.Input 
        type="date" 
        placeholder="fecha ..."
        {...register("fecha", {required: true})} 
      />
      {errors && <Form.ValidateAlert>{alertTextCalendario}</Form.ValidateAlert>}
      <button className='btn btn-primary' type='onSubmit'>Enviar</button>
    </Form>
  )
}

export default FormSection;
