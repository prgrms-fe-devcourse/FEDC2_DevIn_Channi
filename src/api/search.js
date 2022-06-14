import axios from 'axios';

export const users = {
  getUsers: async () => {
    try {
      const response = await axios.get('/search/all', {});
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};