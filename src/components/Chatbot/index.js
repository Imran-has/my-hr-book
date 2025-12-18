
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

// Helper component for rendering message bubbles
const Message = ({ message, isBot }) => {
  return (
    <div className={`${styles.message} ${isBot ? styles.botMessage : styles.userMessage}`}>
      <div className={styles.bubble}>{message}</div>
    </div>
  );
};

// The main Chatbot component
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add initial bot message
  useEffect(() => {
    setMessages([{ text: 'Hello! How can I help you with the documentation today?', isBot: true }]);
  }, []);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // API Call to FastAPI backend
      const response = await fetch('https://imranhas-rag-chatbot-api.hf.space/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            query: input,
            chat_history: messages.map(msg => ({
                role: msg.isBot ? 'assistant' : 'user',
                content: msg.text
            }))
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      
      const botMessage = { text: data.response || "Sorry, I couldn't get a response.", isBot: true };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Failed to fetch from chatbot API:', error);
      const errorMessage = { text: 'Sorry, something went wrong. Please try again.', isBot: true };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.chatHistory}>
        {messages.map((msg, index) => (
          <Message key={index} message={msg.text} isBot={msg.isBot} />
        ))}
        {isLoading && <Message message="..." isBot={true} />}
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
        <button onClick={handleSend} disabled={isLoading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
