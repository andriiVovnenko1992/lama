import React from 'react';
import Input from '../../components/Input';
import Select from '../../components/Select';
import InputContainer from './common/InputContainer';
import Button from './common/ConfirmButton';
import FormWrap from './common/FormWrap';

const RegistrationPage = () => {
  return (
    <FormWrap title="Account Information">
      <InputContainer label="First Name">
        <Input />
      </InputContainer>
      <InputContainer label="Last Name">
        <Input />
      </InputContainer>
      <InputContainer label="Country">
        <Select/>
      </InputContainer>
      <InputContainer label="Province">
        <Select/>
      </InputContainer>
      <InputContainer label="City">
        <Select/>
      </InputContainer>
      <InputContainer label="Education level">
        <Select/>
      </InputContainer>
      <InputContainer label="Top 5 skills">
        <Input />
      </InputContainer>
      <Button>Register</Button>
    </FormWrap>
  )
};

export default RegistrationPage;
