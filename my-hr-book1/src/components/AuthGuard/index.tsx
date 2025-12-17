/**
 * AuthGuard Component
 *
 * Protects routes/pages that require authentication.
 * Redirects to /login if user is not authenticated.
 *
 * Usage:
 *   <AuthGuard>
 *     <ProtectedContent />
 *   </AuthGuard>
 */

import React, { useEffect, useContext, ReactNode } from 'react';
import AuthContext from '@site/src/contexts/AuthContext';
import { useHistory } from '@docusaurus/router';

interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode; // Optional loading component
}

export default function AuthGuard({ children, fallback }: AuthGuardProps): JSX.Element {
  // Use context directly for safety
  const auth = useContext(AuthContext);
  const isAuthenticated = auth?.isAuthenticated ?? false;
  const isLoading = auth?.isLoading ?? true;
  const history = useHistory();

  useEffect(() => {
    // Only redirect after loading is complete
    if (!isLoading && !isAuthenticated) {
      // Redirect to login page
      history.push('/login');
    }
  }, [isAuthenticated, isLoading, history]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px'
      }}>
        {fallback || <p>Loading...</p>}
      </div>
    );
  }

  // Don't render children if not authenticated
  if (!isAuthenticated) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px'
      }}>
        <p>Redirecting to login...</p>
      </div>
    );
  }

  // User is authenticated - render protected content
  return <>{children}</>;
}
