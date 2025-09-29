import axios from 'axios';
import { apiUrl } from './api';

export const checkHealth = async () => {
  try {
    const response = await axios.get(`${apiUrl}/health`);
    return response.data;
  } catch (error) {
    console.error('Error checking health:', error);
    throw error;
  }
};
