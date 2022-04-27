import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginSuccess, User } from '../types/User';

type AuthContextType = {
  profile: User | null;
  completeLogin: (userData: LoginSuccess) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
};

const AuthContext = createContext<AuthContextType>({
  profile: null,
  completeLogin: () => {},
  logout: () => {},
  isAuthenticated: () => false,
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<User | null>(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!profile) {
      const authUser = localStorage.getItem('authuser') || '{}';
      setProfile(JSON.parse(authUser));
    }
  }, []);

  const completeLogin = (userData: LoginSuccess) => {
    setProfile(userData.user);
    localStorage.setItem('authtoken', userData.token);
    localStorage.setItem('authuser', JSON.stringify(userData.user));
    // @ts-ignore
    navigate(state?.path || '/dashboard');
  };

  const logout = () => {
    localStorage.removeItem('authtoken');
    localStorage.removeItem('authuser');
    setProfile(null);
    navigate('/login');
  };

  const isAuthenticated = (): boolean => {
    return !!localStorage.getItem('authtoken');
  };

  const context = useMemo(
    () => ({
      profile,
      completeLogin,
      logout,
      isAuthenticated,
    }),
    [profile]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
