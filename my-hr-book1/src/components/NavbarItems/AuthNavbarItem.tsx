/**
 * AuthNavbarItem
 *
 * Shows Login button when logged out, or user info + Logout when logged in.
 * Use this in a custom navbar component or swizzle the navbar.
 *
 * NOTE: Uses a safe hook that handles being outside AuthProvider.
 */

import React, { useContext } from 'react';
import Link from '@docusaurus/Link';
import AuthContext from '@site/src/contexts/AuthContext';

export default function AuthNavbarItem(): JSX.Element {
  // Use useContext directly to avoid throwing when outside provider
  const auth = useContext(AuthContext);

  // If AuthProvider hasn't mounted yet, show login link as fallback
  if (!auth) {
    return (
      <Link to="/login" className="navbar__item navbar__link">
        Login
      </Link>
    );
  }

  const { isAuthenticated, user, logout, isLoading } = auth;

  if (isLoading) {
    return <span className="navbar__item">...</span>;
  }

  if (isAuthenticated) {
    return (
      <div className="navbar__item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '0.875rem', color: 'var(--ifm-navbar-link-color)' }}>
          {user?.name || user?.email}
        </span>
        <button
          onClick={logout}
          className="navbar__link"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem 0.5rem',
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <Link to="/login" className="navbar__item navbar__link">
      Login
    </Link>
  );
}
