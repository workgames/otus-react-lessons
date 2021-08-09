import axios from 'axios';

export const fetchUserList = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response?.data;
};

export const fetchUserInfo = async (userId: number) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response?.data;
};
