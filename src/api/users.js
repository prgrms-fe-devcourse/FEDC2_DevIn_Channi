import axios from 'axios';

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export const users = {
  getUsers: async ({ offset, limit }) => {
    try {
      const response = await axios.get('/users/get-users', {
        params: { offset, limit },
      });
      await wait(1000);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
