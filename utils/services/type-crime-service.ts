import axios from 'axios';

export const ListTypesCrime = async () => {
  const response = await axios.get('https://ronderos.onrender.com/api/type-crime');
  return response.data;
};