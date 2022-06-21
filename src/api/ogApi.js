import axios from 'axios';

const BASEURL = process.env.REACT_APP_OG_API_BASEURL;

export const ogApi = {
  post: async ({ url }) => {
    const response = await axios.post(`${BASEURL}`, { url });
    return response.data;
  },
};
