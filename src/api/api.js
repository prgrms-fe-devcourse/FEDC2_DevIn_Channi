import axios from 'axios';

const api = {
  get: async ({ path }) => {
    try {
      const response = await axios.get(path);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },

  post: async (path, payload) => {
    try {
      const response = await axios.post(path, payload);

      return response.data;
    } catch (e) {
      console.error(e);
    }
  },

  put: async (path, payload) => {
    try {
      const response = await axios.put(path, payload);

      return response.data;
    } catch (e) {
      console.error(e);
    }
  },

  delete: async ({ path, payload }) => {
    try {
      const response = await axios.delete(path, payload);

      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};

export default api;
