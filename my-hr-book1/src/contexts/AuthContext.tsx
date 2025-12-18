/**
 * AuthContext.tsx
 *
 * Provides authentication state and methods throughout the Docusaurus app.
 * This is a simplified auth implementation suitable for hackathon demos.
 *
 * For production, consider using BetterAuth's full client SDK.
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// --- Type Definitions ---
interface User {
  id: string;
  email: string;
  name?: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string, name?: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

// --- Configuration ---
// Change this to your FastAPI backend URL
const API_BASE_URL = 'https://imranhas-rag-chatbot-api.hf.space';

// Set to true for demo mode (no backend needed)
// Set to false when your FastAPI backend has /auth/login and /auth/register endpoints
const DEMO_MODE = true;

// --- Helper to check if we're in browser ---
const isBrowser = typeof window !== 'undefined';

// --- Create Context ---
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// --- Auth Provider Component ---
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount (only in browser)
  useEffect(() => {
    // Always set loading to false after a short delay to handle SSR
    const timer = setTimeout(() => {
      if (!isBrowser) {
        setIsLoading(false);
        return;
      }

      try {
        // Retrieve stored auth data from localStorage
        const storedToken = localStorage.getItem('auth_token');
        const storedUser = localStorage.getItem('auth_user');

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        // Clear invalid data
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
      } finally {
        setIsLoading(false);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Login function - calls FastAPI /auth/login endpoint
  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    console.log('Login called with:', email);
    console.log('DEMO_MODE:', DEMO_MODE);

    // DEMO MODE: Skip backend call, create fake user
    if (DEMO_MODE) {
      console.log('Using DEMO MODE');
      const demoUser = {
        id: 'demo-user-123',
        email: email,
        name: email.split('@')[0],
      };
      const demoToken = 'demo-token-' + Date.now();

      setToken(demoToken);
      setUser(demoUser);
      if (isBrowser) {
        localStorage.setItem('auth_token', demoToken);
        localStorage.setItem('auth_user', JSON.stringify(demoUser));
      }
      console.log('Login success, returning');
      return { success: true };
    }

    // REAL MODE: Call FastAPI backend
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        return { success: false, error: errorData.detail || 'Login failed' };
      }

      const data = await response.json();

      // Store auth data
      setToken(data.access_token);
      setUser(data.user);
      if (isBrowser) {
        localStorage.setItem('auth_token', data.access_token);
        localStorage.setItem('auth_user', JSON.stringify(data.user));
      }

      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  // Register function - calls FastAPI /auth/register endpoint
  const register = async (
    email: string,
    password: string,
    name?: string
  ): Promise<{ success: boolean; error?: string }> => {
    // DEMO MODE: Skip backend call, create fake user
    if (DEMO_MODE) {
      const demoUser = {
        id: 'demo-user-' + Date.now(),
        email: email,
        name: name || email.split('@')[0],
      };
      const demoToken = 'demo-token-' + Date.now();

      setToken(demoToken);
      setUser(demoUser);
      if (isBrowser) {
        localStorage.setItem('auth_token', demoToken);
        localStorage.setItem('auth_user', JSON.stringify(demoUser));
      }
      return { success: true };
    }

    // REAL MODE: Call FastAPI backend
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        return { success: false, error: errorData.detail || 'Registration failed' };
      }

      const data = await response.json();

      // Auto-login after registration
      setToken(data.access_token);
      setUser(data.user);
      if (isBrowser) {
        localStorage.setItem('auth_token', data.access_token);
        localStorage.setItem('auth_user', JSON.stringify(data.user));
      }

      return { success: true };
    } catch (error) {
      console.error('Register error:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  // Logout function - clears auth state
  const logout = () => {
    setToken(null);
    setUser(null);
    if (isBrowser) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
    }
  };

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    isAuthenticated: !!token && !!user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// --- Custom Hook for using Auth ---
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// --- Safe Hook that returns null if outside provider (for navbar) ---
export function useAuthSafe(): AuthContextType | null {
  return useContext(AuthContext) ?? null;
}

export default AuthContext;
