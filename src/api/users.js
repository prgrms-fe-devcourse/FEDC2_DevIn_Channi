import axios from 'axios';

export const users = {
  getUsers: async ({offset, limit}) => {
    try {
      const response = await axios.get('/users/get-users', {params: {offset, limit}});
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
