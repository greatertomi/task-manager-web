import { TextField, TextFieldProps, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  helperText: {
    marginLeft: 0,
  },
}));

type TextInputProps = {
  label: string;
  value: string;
  onChange: (values: any) => void;
  formError?: string;
} & TextFieldProps;

const TextInput: FC<TextInputProps> = ({
  label,
  value,
  onChange,
  name,
  formError,
  ...props
}) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="subtitle1">{label}</Typography>
      <TextField
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        variant="outlined"
        size="small"
        fullWidth
        error={!!formError}
        helperText={formError || null}
        FormHelperTextProps={{
          className: classes.helperText,
        }}
        {...props}
      />
    </>
  );
};

export default TextInput;
