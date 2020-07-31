import React from 'react';
import { Form } from 'react-bootstrap';

const Select = ({ title, options, size = 'lg' }) => {
  return (
    <Form.Group>
      <Form.Control as="select" size={size}>
        <option>{title}</option>
        <option>variable 2</option>
        <option>variable 3</option>
        <option>variable 4</option>
        <option>variable 5</option>
      </Form.Control>
    </Form.Group>
  );
};

export default Select;
