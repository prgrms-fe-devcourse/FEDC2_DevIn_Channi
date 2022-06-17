import axios from 'axios';

const API = process.env.REACT_APP_API_BASEURL;

export const search = {
  searchUser: async text => {
    try {
      const response = await axios.get(`${API}/search/users/${text}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
  searchAll: async text => {
    try {
      const response = await axios.get(`${API}/search/all/${text}`);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
