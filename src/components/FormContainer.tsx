import { LoadingButton } from '@mui/lab';
import { Form, Formik } from 'formik';
import React, { ReactNode } from 'react';
import { BaseUser } from '../types/User';

interface FormContainerProps<T> {
  validationSchema: any;
  onSubmit: (values: T) => void;
  initialValues: T;
  children: ReactNode[];
  buttonLabel?: string;
  working?: boolean;
}

const FormContainer = <T extends BaseUser>({
  validationSchema,
  onSubmit,
  initialValues,
  children,
  buttonLabel = 'Save',
  working,
}: FormContainerProps<T>) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        {children}
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          loading={working}
        >
          {buttonLabel}
        </LoadingButton>
      </Form>
    </Formik>
  );
};

export default FormContainer;
