import axios from 'axios';

export const search = {
  searchUser: async text => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/search/users/${text}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
  searchAll: async text => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/search/all/${text}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
