
import React from 'react';
import Layout from '@theme/Layout';
import Chatbot from '../components/Chatbot'; // Import the Chatbot component

function ChatbotPage() {
  return (
    <Layout
      title="Chatbot"
      description="An AI chatbot to help you with our documentation."
    >
      <main>
        {/* Render the Chatbot component */}
        <Chatbot />
      </main>
    </Layout>
  );
}

export default ChatbotPage;
