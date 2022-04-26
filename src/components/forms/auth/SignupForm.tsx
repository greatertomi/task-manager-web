import { useFormikContext } from 'formik';
import React from 'react';
import { User } from '../../../types/User';
import { PasswordInput, TextInput } from '../../inputs';

const SignupForm = () => {
  const { values, handleChange, errors } = useFormikContext<User>();

  return (
    <>
      <TextInput
        label="First Name"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        formError={errors.firstName}
      />
      <TextInput
        label="Last Name"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        formError={errors.lastName}
      />
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

export default SignupForm;
