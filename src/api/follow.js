import axios from 'axios';

const API = process.env.REACT_APP_API_BASEURL;

export const follow = {
  follow: async ({ token, userId }) => {
    console.log(token, userId);
    try {
      const response = await axios.post(
        `${API}/follow/create`,
        { userId },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
  unfollow: async ({ token, id }) => {
    console.log('Usertoken=', token, typeof token, '\n', '삭제할팔로잉Id=', id);
    if (token && id) {
      try {
        const response = await axios.delete(`${API}/follow/delete`, {
          headers: { Authorization: `Bearer ${token}` },
          data: {
            id,
          },
        });
        console.log(response.data);
        return response.data;
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error("token = ", token, "id = ", id, 'Error!');
    }
  },
};
