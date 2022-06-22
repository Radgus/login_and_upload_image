import React from "react";
import styled from "styled-components";
import Header from '../Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Header/>
      { children }
    </Container>
  )
  
}

export default Layout;
