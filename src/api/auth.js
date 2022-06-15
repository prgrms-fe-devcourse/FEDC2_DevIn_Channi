import axios from 'axios';

const API = process.env.REACT_APP_API_BASEURL;

export const auth = {
  signin: async ({ email, password }) => {
    try {
      const response = await axios.post(`${API}/login`, { email, password });
      return { ...response.data, status: 200 };
    } catch (e) {
      console.error(e.response.data);
      return {
        status: e.response.status,
        message: e.response.data,
      };
    }
  },

  signup: async ({ email, fullName, password }) => {
    try {
      const response = await axios.post(`${API}/signup`, {
        email,
        fullName,
        password,
      });
      return { ...response.data, status: 200 };
    } catch (e) {
      console.error(e.response.data);
      return {
        status: e.response.status,
        message: e.response.data,
      };
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
