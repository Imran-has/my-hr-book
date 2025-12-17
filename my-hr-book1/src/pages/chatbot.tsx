/**
 * Chatbot Page (Protected)
 *
 * This page requires authentication.
 * Users who are not logged in will be redirected to /login.
 */

import React, { useContext } from 'react';
import Layout from '@theme/Layout';
import Chatbot from '@site/src/components/Chatbot';
import AuthGuard from '@site/src/components/AuthGuard';
import AuthContext from '@site/src/contexts/AuthContext';

// Header component showing user info and logout button
function ChatbotHeader() {
  const auth = useContext(AuthContext);
  const user = auth?.user ?? null;
  const logout = auth?.logout ?? (() => {});

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      borderBottom: '1px solid var(--ifm-color-emphasis-200)',
      background: 'var(--ifm-background-surface-color)',
    }}>
      <div>
        <span style={{ color: 'var(--ifm-font-color-secondary)' }}>
          Welcome, <strong>{user?.name || user?.email || 'User'}</strong>
        </span>
      </div>
      <button
        onClick={logout}
        style={{
          padding: '0.5rem 1rem',
          background: 'transparent',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: '4px',
          cursor: 'pointer',
          color: 'var(--ifm-font-color-base)',
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default function ChatbotPage(): JSX.Element {
  return (
    <Layout
      title="Chatbot"
      description="An AI chatbot to help you with our documentation."
    >
      {/* AuthGuard protects this entire section */}
      <AuthGuard>
        <ChatbotHeader />
        <main>
          {/* Existing Chatbot component - unchanged */}
          <Chatbot />
        </main>
      </AuthGuard>
    </Layout>
  );
}
