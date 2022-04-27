import { AlertColor } from '@mui/material';
import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

type SnackbarType = {
  show: boolean;
  severity: AlertColor;
  message: string;
};

type ProductContextType = {
  snackbar: SnackbarType;
  updateSnackbar: (data: SnackbarType) => void;
};

const initialSnackbar: SnackbarType = {
  show: false,
  severity: 'success',
  message: '',
};

const SnackbarContext = createContext<ProductContextType>({
  snackbar: initialSnackbar,
  updateSnackbar: () => {},
});

const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbar, setSnackbar] = useState<SnackbarType>(initialSnackbar);

  const updateSnackbar = (data: SnackbarType) => {
    setSnackbar(data);
  };

  const context = useMemo(() => {
    return { snackbar, updateSnackbar };
  }, [snackbar.show]);

  return (
    <SnackbarContext.Provider value={context}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbarContext = () => useContext(SnackbarContext);

export default SnackbarProvider;
