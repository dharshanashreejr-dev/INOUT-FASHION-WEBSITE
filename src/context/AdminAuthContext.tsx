import { createContext, useContext, useState, ReactNode } from 'react';

// Demo-only credentials. In production this must be replaced with a real
// backend-authenticated login (JWT/session) — never ship hardcoded creds.
const DEMO_USERNAME = 'admin';
const DEMO_PASSWORD = 'inout2026';

type AdminAuthContextType = {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem('inout_admin_auth') === 'true'
  );

  function login(username: string, password: string) {
    if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('inout_admin_auth', 'true');
      return true;
    }
    return false;
  }

  function logout() {
    setIsAuthenticated(false);
    sessionStorage.removeItem('inout_admin_auth');
  }

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
}
