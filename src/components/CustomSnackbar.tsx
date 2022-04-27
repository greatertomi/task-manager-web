import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { useSnackbarContext } from '../contexts/SnackbarContext';

const CustomSnackbar = () => {
  const { snackbar, updateSnackbar } = useSnackbarContext();
  const falseSnackbarValue = { ...snackbar, show: false };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={snackbar.show}
      autoHideDuration={6000}
      onClose={() => updateSnackbar(falseSnackbarValue)}
    >
      <Alert
        onClose={() => updateSnackbar(falseSnackbarValue)}
        severity={snackbar.severity}
        sx={{ width: '100%' }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
