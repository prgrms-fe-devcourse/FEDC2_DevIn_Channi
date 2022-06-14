import axios from 'axios';

export const search = {
  search: async text => {
    try {
      const response = await axios.get(`/search/all/${text}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
