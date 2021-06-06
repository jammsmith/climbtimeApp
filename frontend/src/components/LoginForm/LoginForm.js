import React from 'react';

import { Checkbox, Form, TextInput, Button } from './LoginFormElements';

const LoginForm = props => {
  return (
    <Form>
      <TextInput
        name='email'
        placeholder='Email'
        autoComplete='off'
        onChange={props.handleChange}
        value={props.email}
      />
      <TextInput
        name='password'
        type='password'
        placeholder='Password'
        autoComplete='off'
        onChange={props.handleChange}
        value={props.password}
      />
      <Button type='submit' onClick={props.onLogin}>
        Sign In!
      </Button>
      <label>
        Remember me!
        <Checkbox
          name='checkbox'
          type='checkbox'
          onClick={props.handleCheckboxClick}
          value={props.rememberMe}
        />
      </label>
    </Form>
  );
};

const RegisterForm = props => {
  return (
    <Form>
      <TextInput
        name='fName'
        placeholder='First Name'
        autoComplete='off'
        onChange={props.handleChange}
        value={props.fName}
      />
      <TextInput
        name='lName'
        placeholder='Last Name'
        autoComplete='off'
        onChange={props.handleChange}
        value={props.lName}
      />
      <TextInput
        name='email'
        placeholder='Email'
        autoComplete='off'
        onChange={props.handleChange}
        value={props.email}
      />
      <TextInput
        name='password'
        type='password'
        placeholder='Password'
        onChange={props.handleChange}
        value={props.password}
      />
      <TextInput
        name='passwordConfirm'
        type='password'
        placeholder='Confirm Password'
        onChange={props.handleChange}
        value={props.passwordConfirm}
      />
      <Button type='submit' onClick={props.onRegister}>
        Sign Up!
      </Button>
    </Form>
  );
};

export { LoginForm, RegisterForm };
