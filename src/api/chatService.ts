import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const sendMessage = async (message: string) => {
  try {
    const response = await axios.post(`${API_URL}/api/chat`, { message });
    return response.data.response;
  } catch (error) {
    console.error('Error calling chat API:', error);
    throw new Error('Failed to get response from the chatbot');
  }
}; 