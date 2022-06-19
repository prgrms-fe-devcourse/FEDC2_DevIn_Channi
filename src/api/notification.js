import axios from 'axios';

const API = process.env.REACT_APP_API_BASEURL;

export const notification = {
  getAllNotifications: async ({ token }) => {
    try {
      const response = await axios.get(`${API}/notifications`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
  setNotificationAsRead: async id => {
    try {
      const response = await axios.put(`${API}/notifications/${id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
  createNotification: async ({ token, type }) => {
    try {
      const response = await axios.post(`${API}/notifications`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
        type,
      });
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
