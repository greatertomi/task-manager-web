import { useFormikContext } from 'formik';
import React from 'react';
import { UserAuth } from '../../../types/User';
import { PasswordInput, TextInput } from '../../inputs';

const LoginForm = () => {
  const { values, handleChange, errors } = useFormikContext<UserAuth>();
  return (
    <>
      <TextInput
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        formError={errors.email}
      />
      <PasswordInput
        label="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
        formError={errors.password}
      />
    </>
  );
};

export default LoginForm;
