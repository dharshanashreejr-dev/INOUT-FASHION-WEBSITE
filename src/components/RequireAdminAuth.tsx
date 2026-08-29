import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAdminAuth } from '../context/AdminAuthContext';

export default function RequireAdminAuth({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAdminAuth();
  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
}
