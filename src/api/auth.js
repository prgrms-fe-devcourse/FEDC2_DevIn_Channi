import axios from 'axios';

const API = process.env.REACT_APP_API_BASEURL;

export const auth = {
  signin: async ({ email, password }) => {
    try {
      const response = await axios.post(`${API}/login`, { email, password });
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },

  signup: async ({ email, fullName, password }) => {
    try {
      const response = await axios.post(`${API}/signup`, {
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
      const response = await axios.post(`${API}/logout`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },

  isUserSignin: async () => {
    try {
      const response = await axios.get(`${API}/auth-user`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
