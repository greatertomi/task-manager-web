import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import {
  Box,
  IconButton,
  InputAdornment,
  InputProps,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { FC, useState } from 'react';

const HelperTextMessage = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  color: theme.palette.error.main,
}));

type PasswordInputProps = {
  label: string;
  value: string;
  onChange: (values: any) => void;
  helperText?: string;
} & InputProps;

const PasswordInput: FC<PasswordInputProps> = ({
  label,
  name,
  value,
  onChange,
  helperText,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box mt={2}>
      <Typography variant="subtitle1">Password</Typography>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={() => onChange('password')}
        fullWidth
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <VisibilityOffOutlined />
              ) : (
                <VisibilityOutlined />
              )}
            </IconButton>
          </InputAdornment>
        }
        {...props}
      />
      {helperText && <HelperTextMessage>{helperText}</HelperTextMessage>}
    </Box>
  );
};

export default PasswordInput;
