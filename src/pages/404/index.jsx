import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 5%;
  background-color: beige;
  display: flex;
  justify-content: center;
`

const Error404 = () => {
  return (
    <Container>
      <h2>NoPage</h2>
    </Container>
  )
  
}

export default Error404;