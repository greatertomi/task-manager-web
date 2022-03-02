import { useFormikContext } from 'formik';
import React from 'react';
import { BaseUser } from '../../../types/User';
import { TextInput } from '../../inputs';

const SignupForm = () => {
  const { values, handleChange, errors } = useFormikContext<BaseUser>();

  return (
    <TextInput
      label="Email"
      name="email"
      value={values.email}
      onChange={handleChange}
      formError={errors.email}
    />
  );
};

export default SignupForm;
