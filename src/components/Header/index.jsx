import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../utils/colors';


const Container = styled.div`
  min-height: 5rem;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.Primary_Background};
  .container__lateral {
    width: 20%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: black;
  }

`;


const Header = () => {

  return(
    <Container>
      <Link to = '/'  className='container__lateral'>
        <h2>Logo</h2>
      </Link>
      <Link to = '/login' className='container__lateral'>
        <h2>Login</h2> 🌙 
      </Link>
    </Container>
  )
}

export default Header;
