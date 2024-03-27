import axios from 'axios';

export const ListObjects = async () => {
  const response = await axios.get('https://ronderos.onrender.com/api/object');
  return response.data;
};