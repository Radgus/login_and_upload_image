import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  margin-bottom: 1rem;
`;

const LabelArea = styled.label`
  padding-left: 0.5rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Label = ({children, ...props}) => {

  return (
    <Container>
      <LabelArea for={props.name}>
        {children}
      </LabelArea>
    </Container>
  );
};

export default Label;