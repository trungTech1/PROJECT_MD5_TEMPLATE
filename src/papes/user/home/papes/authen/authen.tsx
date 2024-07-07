import React, { createContext, useState, useContext, ReactNode } from 'react';

const AuthContext = createContext<{ login: boolean; setLogin: React.Dispatch<React.SetStateAction<boolean>> } | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode; // This specifies that children can be any valid React node
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [login, setLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};