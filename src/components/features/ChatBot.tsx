import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

// Add this API configuration at the top of your component
const API_CONFIG = {
  // For local development
  LOCAL: {
    nodeServer: 'http://44.204.191.29:5001'
  },
  // For production
  PRODUCTION: {
    nodeServer: 'http://44.204.191.29:5001'  // Your EC2 instance IP
  }
};

// Use production config
const API = API_CONFIG.PRODUCTION;

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTimestamp = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Then update the sendMessage function to use this configuration
  const sendMessage = async (message: string): Promise<string> => {
    try {
      console.log(`Sending to Node.js server: ${API.nodeServer}/api/chat`);
      
      const response = await fetch(`${API.nodeServer}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error calling chat API:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input.trim(),
      timestamp: formatTimestamp(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await sendMessage(input.trim());
      
      const assistantMessage: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: response,
        timestamp: formatTimestamp(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again.',
        timestamp: formatTimestamp(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = async (suggestion: string) => {
    if (isLoading) return;
    
    setInput(suggestion);
    const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
    await handleSubmit(fakeEvent);
  };

  const suggestions = [
    "What are the safest places in the United States?",
    "What are the safety considerations for traveling to Tokyo?",
    "Is it safe to visit Barcelona right now?",
    "What precautions should I take when traveling to Mexico City?",
    "Are there any current travel advisories for Thailand?"
  ];

  return (
    <div className="chatbot-container">
      <div className="feature-content-wrapper">
        <h1 className="feature-title">Travel Safety Assistant</h1>
        
        <div className="chat-interface">
          <div className="messages-container">
            {messages.length === 0 && (
              <div className="welcome-message">
                <h3>Welcome to the Travel Safety Assistant!</h3>
                <p>I can help you with travel safety information and recommendations. Here are some example questions you can ask:</p>
                <ul>
                  {suggestions.map((suggestion, index) => (
                    <li 
                      key={index} 
                      onClick={() => handleSuggestionClick(suggestion)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleSuggestionClick(suggestion);
                        }
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.type === 'user' ? 'user-message' : 'assistant-message'}`}
              >
                <div className="message-content">
                  <p>{message.content}</p>
                </div>
                <span className="timestamp">{message.timestamp}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about travel safety..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              {isLoading ? 'Thinking...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBot; 