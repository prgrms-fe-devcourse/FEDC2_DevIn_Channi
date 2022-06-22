import axios from 'axios';

const API = process.env.REACT_APP_API_BASEURL;

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export const users = {
  getUser: async ({ userId }) => {
      try {
        const response = await axios.get(`${API}/users/${userId}`);
        return response.data;
      } catch (e) {
        console.error(e);
      }
  },
  getUsers: async ({ offset, limit }) => {
    try {
      const response = await axios.get(`${API}/users/get-users`, {
        params: { offset, limit },
      });
      await wait(1000);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
  getUser: async id => {
    try {
      const response = await axios.get(`${API}/users/${id}`);

      return response.data;
    } catch (e) {
      console.error(e.message);
    }
  },
};
