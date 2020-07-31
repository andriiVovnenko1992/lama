import React from 'react';
import styled from 'styled-components';

const Label = styled.p`
 margin: 0;
 color: grey;
`;

const InputContainer = (props) => {
  const { label } = props;
  return (
    <div className="mt-2">
      <Label>{label}</Label>
      {props.children}
    </div>
  )
}

export default InputContainer;
