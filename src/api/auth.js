import axios from 'axios';
import { Buffer } from 'buffer';

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

  getUser: async ({ token }) => {
    try {
      const response = await axios.get(`${API}/auth-user`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
  changePassword: async ({ token, newPassword }) => {
    try {
      const response = await axios.put(
        `${API}/settings/update-password`,
        { password: newPassword },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
  changeName: async ({ token, newName }) => {
    try {
      const response = await axios.put(
        `${API}/settings/update-user`,
        {
          fullName: newName,
          username: newName,
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
            ContentType: 'application/json',
          },
        },
      );

      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
  uploadAvatar: async ({ token, avatar }) => {
    const formData = new FormData();
    const blobData = new Blob([avatar], { type: 'image/*' });

    formData.append('isCover', false);
    formData.append('image', blobData);

    try {
      const response = await axios.post(`${API}/users/upload-photo`, formData, {
        headers: {
          Authorization: `bearer ${token}`,
          ContentType: 'multipart/form-data',
        },
      });

      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
