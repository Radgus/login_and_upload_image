import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 5%;
  background-color: beige;
  display: flex;
  justify-content: center;
`

const Login = () => {
  return (
    <Container>
      <h2>Login page</h2>
    </Container>
  )
  
}

export default Login;