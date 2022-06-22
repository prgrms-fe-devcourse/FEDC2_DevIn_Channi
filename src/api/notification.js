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
  setNotificationAsRead: async ({ token }) => {
    try {
      await axios.put(
        `${API}/notifications/seen`,
        {},
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );
    } catch (e) {
      console.error(e);
    }
  },
  createNotification: async ({ token, data }) => {
    try {
      const response = await axios.post(`${API}/notifications/create`, data, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
