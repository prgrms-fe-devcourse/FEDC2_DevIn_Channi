import api from 'api/api';

export const auth = {
  signin: async ({ email, password }) => {
    return await api.post({ path: '/login', payload: { email, password } });
  },
  signup: async ({ email, fullName, password }) => {
    return await api.post({
      path: '/signup',
      payload: { email, fullName, password },
    });
  },
  signout: async () => {
    return await api.post({ path: '/logout' });
  },
  isUserSignin: async () => {
    return await api.get({ path: '/auth-user' });
  },
};
