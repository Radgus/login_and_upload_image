import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 5%;
  background-color: beige;
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  )
  
}

export default Layout;
