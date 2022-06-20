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
  create: async ({ token, type, typeId, userId, postId }) => {
    // type: "COMMENT" | "FOLLOW" | "LIKE"
    // typeId: commentId | followId | likeId
    // userId: 알림 받는 사용자
    // postId: if type === "FOLLOW" -> null

    try {
      const response = await axios.post(
        `${API}/notifications/create`,
        {
          notificationType: type,
          notificationTypeId: typeId,
          userId,
          postId: postId || null,
        },
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
};
