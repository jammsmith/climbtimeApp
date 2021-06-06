import React, { useState } from 'react';
import axios from 'axios';

import useForm from '../customHooks/useForm';
import { LoginForm, RegisterForm } from '../components/LoginForm/LoginForm';

const LoginOrRegister = () => {
  const [values, handleChange] = useForm({
    fName: '',
    lName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const { fName, lName, email, password, passwordConfirm } = values;
  //
  // Declare and handle 'Remember Me' checkbox state -->
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked((prevValue) => !prevValue);
  };

  //
  // New user regististration, post data to API -->

  const handleRegister = (event) => {
    console.log('------------->>>> event');
    event.preventDefault();
    console.log('badger');
    axios
      .post('/api/register', {
        firstName: fName,
        lastName: lName,
        email: email,
        password: password
      })
      .then((response) => console.log(response))
      .catch((error) => console.log('AXIOS CATCH ERROR ----------->>', error));
  };

  return (
    <>
      <LoginForm
        email={email}
        password={password}
        rememberMe={isChecked}
        handleChange={handleChange}
        handleCheckboxClick={handleCheckboxClick}
      />
      <RegisterForm
        fname={fName}
        lName={lName}
        email={email}
        password={password}
        passwordConfirm={passwordConfirm}
        handleChange={handleChange}
        onRegister={handleRegister}
      />
    </>
  );
};

export default LoginOrRegister;
