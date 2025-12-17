/**
 * Login Page
 *
 * Provides login and registration forms.
 * Redirects to /chatbot after successful authentication.
 */

import React, { useState, useEffect, useContext } from 'react';
import Layout from '@theme/Layout';
import AuthContext from '@site/src/contexts/AuthContext';
import { useHistory } from '@docusaurus/router';

// --- Inline Styles (for simplicity in hackathon) ---
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    padding: '2rem',
  } as React.CSSProperties,
  card: {
    background: 'var(--ifm-card-background-color, #fff)',
    borderRadius: '8px',
    padding: '2rem',
    maxWidth: '400px',
    width: '100%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  } as React.CSSProperties,
  title: {
    textAlign: 'center' as const,
    marginBottom: '1.5rem',
    color: 'var(--ifm-heading-color)',
  } as React.CSSProperties,
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  } as React.CSSProperties,
  inputGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.25rem',
  } as React.CSSProperties,
  label: {
    fontWeight: 500,
    color: 'var(--ifm-font-color-base)',
  } as React.CSSProperties,
  input: {
    padding: '0.75rem',
    border: '1px solid var(--ifm-color-emphasis-300)',
    borderRadius: '4px',
    fontSize: '1rem',
    background: 'var(--ifm-background-color)',
    color: 'var(--ifm-font-color-base)',
  } as React.CSSProperties,
  button: {
    padding: '0.75rem 1.5rem',
    background: 'var(--ifm-color-primary)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '0.5rem',
  } as React.CSSProperties,
  buttonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  } as React.CSSProperties,
  error: {
    background: '#fee2e2',
    color: '#dc2626',
    padding: '0.75rem',
    borderRadius: '4px',
    marginBottom: '1rem',
  } as React.CSSProperties,
  toggle: {
    textAlign: 'center' as const,
    marginTop: '1rem',
  } as React.CSSProperties,
  toggleLink: {
    color: 'var(--ifm-color-primary)',
    cursor: 'pointer',
    textDecoration: 'underline',
    background: 'none',
    border: 'none',
    fontSize: '1rem',
  } as React.CSSProperties,
};

export default function LoginPage(): JSX.Element {
  // Use context directly (safe - won't throw if outside provider)
  const auth = useContext(AuthContext);
  const login = auth?.login ?? (async () => ({ success: false, error: 'Auth not ready' }));
  const register = auth?.register ?? (async () => ({ success: false, error: 'Auth not ready' }));
  const isAuthenticated = auth?.isAuthenticated ?? false;
  const authLoading = auth?.isLoading ?? true;
  const history = useHistory();

  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && !authLoading) {
      history.push('/chatbot');
    }
  }, [isAuthenticated, authLoading, history]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      let result;
      if (isRegister) {
        result = await register(email, password, name || undefined);
      } else {
        result = await login(email, password);
      }

      if (result.success) {
        // Small delay to let state update, then redirect
        setTimeout(() => {
          window.location.href = '/chatbot';
        }, 100);
      } else {
        setError(result.error || 'Authentication failed');
        setIsSubmitting(false);
      }
    } catch (err) {
      setError('An unexpected error occurred');
      setIsSubmitting(false);
    }
  };

  // Show loading while checking auth state
  if (authLoading) {
    return (
      <Layout title="Login">
        <div style={styles.container}>
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={isRegister ? 'Register' : 'Login'}>
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>
            {isRegister ? 'Create Account' : 'Welcome Back'}
          </h2>

          {error && <div style={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Name field - only shown for registration */}
            {isRegister && (
              <div style={styles.inputGroup}>
                <label style={styles.label} htmlFor="name">
                  Name (optional)
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={styles.input}
                  placeholder="Your name"
                />
              </div>
            )}

            {/* Email field */}
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password field */}
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                placeholder="Your password"
                required
                minLength={6}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              style={{
                ...styles.button,
                ...(isSubmitting ? styles.buttonDisabled : {}),
              }}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? 'Please wait...'
                : isRegister
                ? 'Create Account'
                : 'Sign In'}
            </button>
          </form>

          {/* Toggle between login and register */}
          <div style={styles.toggle}>
            <span>
              {isRegister ? 'Already have an account? ' : "Don't have an account? "}
            </span>
            <button
              type="button"
              style={styles.toggleLink}
              onClick={() => {
                setIsRegister(!isRegister);
                setError('');
              }}
            >
              {isRegister ? 'Sign In' : 'Register'}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
