import axios from 'axios';

// const API = process.env.REACT_APP_API_ENDPOINT;

export const auth = {
  signin: async ({ email, password }) => {
    try {
      const response = await axios.post(`/login`, { email, password });
      console.log('res', response);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },

  signup: async ({ email, fullName, password }) => {
    try {
      const response = await axios.post('/signup', {
        email,
        fullName,
        password,
      });
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },

  signout: async () => {
    try {
      const response = await axios.post('/logout');
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },

  isUserSignin: async () => {
    try {
      const response = await axios.get(`/auth-user`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
