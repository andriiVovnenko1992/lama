import React from 'react';
import { InputGroup, FormControl } from "react-bootstrap";

const Input = ({ size = "lg", value, onChange }) => {
  return (
    <InputGroup size={size}>
      <FormControl
        value={value}
        onChange={onChange}
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
      />
    </InputGroup>
  );
};

export default Input;
