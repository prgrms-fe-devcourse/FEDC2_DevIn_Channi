const ROOT_API = process.env.REACT_APP_API_ROOT;

const getFullUrl = ({ path }) => `${ROOT_API}${path}`;

export const api = {
  get: async ({ path }) => {
    try {
      const response = fetch(getFullUrl({ path }), {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response || !response.ok) {
        throw Error(response.status);
      }

      return await response.json();
    } catch (e) {
      console.error(e);
    }
  },

  post: (path, payload) => {
    try {
      const response = fetch(getFullUrl({ path }), {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response || !response.ok) {
        throw Error(response.status);
      }

      return response.json();
    } catch (e) {
      console.error(e);
    }
  },

  put: (path, payload) => {
    try {
      const response = fetch(
        getFullUrl(
          { path },
          {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          },
        ),
      );

      if (!response || !response.ok) {
        throw Error(response.status);
      }

      return response.json();
    } catch (e) {
      console.error(e);
    }
  },

  delete: ({ path, payload }) => {
    try {
      const response = fetch(getFullUrl({ path }), {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response || !response.ok) {
        throw Error(response.status);
      }

      return response.json();
    } catch (e) {
      console.error(e);
    }
  },
};
