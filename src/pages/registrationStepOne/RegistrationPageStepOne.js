import React, { useState } from 'react';
import FormWrap from '../registration/common/FormWrap';
import GoogleButton from '../registration/common/GoogleButton';
import styled from 'styled-components';
import InputContainer from '../registration/common/InputContainer';
import Input from '../../components/Input';
import Button from '../registration/common/ConfirmButton';
import { withRouter } from "react-router-dom";

const Mt50 = styled.div`
  margin-top: 50px;
`;

const Checkbox = ({ text }) => {
  return (
    <div className="mt-4 text-muted">
      <input className="mr-2" type="checkbox" />
      <span>{text}</span>
    </div>
  )
};

const RegistrationPageStepOne = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const checkboxText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate doloremque eum natus! Animi cum expedita impedit iste officiis porro!'

  const onSubmit = () => {
    if (!email || !password) {
      setError('fields is required!');
    } else {
      setError('');
      setPassword('');
      setEmail('');
      history.push('/registration-step-2');
    }
  };

  return (
    <FormWrap title="Create Your EMPLOYEE Account">
      <GoogleButton />
      <Mt50>
        {error ? <p style={{ color: 'red', fontSize: '18px' }}>{error}</p> : null}
        <InputContainer label="Email">
          <Input value={email} onChange={e => setEmail(e.target.value)}/>
        </InputContainer>
        <InputContainer label="Password">
          <Input value={password} onChange={e => setPassword(e.target.value)}/>
        </InputContainer>
        <Checkbox text={checkboxText} />
        <Button onClick={onSubmit}>Register</Button>
      </Mt50>
    </FormWrap>
  )
};

export default withRouter(RegistrationPageStepOne);
