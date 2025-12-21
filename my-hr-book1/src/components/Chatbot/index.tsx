/**
 * Chatbot Component (with Auth Token Support)
 *
 * Sends the auth token with every request to the backend.
 * The token is retrieved from AuthContext.
 */

import React, { useState, useEffect, useRef, useContext } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import AuthContext from '@site/src/contexts/AuthContext';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// --- Type Definitions for TypeScript ---
interface Message {
  text: string;
  isBot: boolean;
}

interface ChatHistoryItem {
  role: 'user' | 'assistant';
  content: string;
}

// --- Helper Components ---
const ChatMessage = ({ message, isBot }: { message: string, isBot: boolean }) => (
  <div className={clsx(styles.message, isBot ? styles.botMessage : styles.userMessage)}>
    <div className={styles.bubble}>{message}</div>
  </div>
);

// --- Main Floating Chatbot Component ---
const Chatbot = () => {
  // Get API URL from Docusaurus config (supports environment variables)
  const { siteConfig } = useDocusaurusContext();
  const apiUrl = (siteConfig.customFields?.apiUrl as string) || 'https://imranhas-rag-chatbot-api.hf.space';

  // Get auth token from context (safe - won't throw if outside provider)
  const auth = useContext(AuthContext);
  const token = auth?.token ?? null;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: 'Hello! How can I help you with the documentation today?', isBot: true }]);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const chatHistory: ChatHistoryItem[] = messages.map(msg => ({
      role: msg.isBot ? 'assistant' : 'user',
      content: msg.text,
    }));

    try {
      // Include auth token in request headers
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Send auth token to backend for verification
          ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ query: input, chat_history: chatHistory }),
      });

      if (!response.ok) {
        let errorMessageText = 'Sorry, something went wrong. Please try again.';
        if (response.status === 401) {
          // Handle unauthorized - token might be expired
          errorMessageText = 'Session expired. Please log in again.';
        } else if (response.status === 429) {
          const errorData = await response.json();
          errorMessageText = errorData.detail || 'API quota exceeded. Please check your plan and usage.';
        } else {
          errorMessageText = `HTTP error! Status: ${response.status}.`;
        }
        throw new Error(errorMessageText);
      }

      const data = await response.json();
      const botMessage: Message = { text: data.response || "Sorry, I couldn't get a response.", isBot: true };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Failed to fetch from chatbot API:', error);
      const errorMessage: Message = { text: error.message || 'Sorry, an error occurred.', isBot: true };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* --- Floating Action Button --- */}
      <button className={styles.floatingButton} onClick={() => setIsOpen(true)} aria-label="Open Chat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="white"/></svg>
      </button>

      {/* --- Chat Popup Window --- */}
      <div className={clsx(styles.chatbotContainer, { [styles.hidden]: !isOpen })}>
        <div className={styles.chatbotHeader}>
          <h4>AI Assistant</h4>
          <button onClick={() => setIsOpen(false)} className={styles.closeButton} aria-label="Close Chat">
            &times;
          </button>
        </div>
        <div className={styles.chatHistory}>
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.text} isBot={msg.isBot} />
          ))}
          {isLoading && <ChatMessage message="..." isBot={true} />}
          <div ref={messagesEndRef} />
        </div>
        <div className={styles.chatInput}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask a question..."
            disabled={isLoading}
          />
          <button onClick={handleSend} disabled={isLoading}>Send</button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
