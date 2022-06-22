import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import LoginArea from './components/LoginArea';
import InputText from './components/InputText';
import Label from './components/Label';
import { TitleH1 } from '../styles/Titles';
import { Space } from '../styles/mix';


const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  background-color: ghostwhite;
  justify-content: center;
  align-items: center;
`;



LoginArea.Label = Label;
LoginArea.InputText = InputText;

const Login = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log('form errors', errors);

  return(
    <Container>
      <LoginArea>
        <TitleH1>Login</TitleH1>
        <form id='myform' onSubmit={handleSubmit(onSubmit)}>
          <LoginArea.Label name='user'>User</LoginArea.Label>
          <LoginArea.InputText 
            type='text'
            name='user'
            placeholder='user name ...'
          />
          <Space />
          <LoginArea.Label name='user'>Password</LoginArea.Label>
          <LoginArea.InputText 
            type='password'
            name='passeord'
            placeholder='password ...'
          />
        </form>
      </LoginArea>
    </Container>
  )
}

export default Login;