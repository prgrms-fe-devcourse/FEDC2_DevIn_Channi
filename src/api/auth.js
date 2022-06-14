import axios from 'axios';

export const auth = {
  signin: async ({ email, password }) => {
    try {
      const response = await axios.post('/login', { email, password });
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
      const response = await axios.get('/auth-user');
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },

  getUsers: async () => {
    try {
      const users = await axios.get('/users/get-users');
      console.log(users);
    } catch (e) {
      console.error(e);
    }
  },
};
