export const LOGIN_POST_ERROR = 'LOGIN_POST_ERROR';
export const LOGIN_POST_SUCCESS = 'LOGIN_POST_SUCCESS';
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const SET_AUTH_HEADERS = 'SET_AUTH_HEADERS';

export const loginPostError = isError => {
  return {
    type: LOGIN_POST_ERROR,
    isError
  };
};

export const loginPostSuccess = user => {
  console.log(user);
  return {
    type: LOGIN_POST_SUCCESS,
    user
  };
};

export const loginLoading = isLoading => {
  return {
    type: LOGIN_LOADING,
    isLoading
  };
};

export const loginPost = (email, password) => {
  return dispatch => {
    dispatch(loginLoading(true));

    fetch(`${process.env.REACT_APP_API_URL}/v1/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          attributes: {
            email: email,
            password: password
          }
        }
      })
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loginLoading(false));

        const uid = response.headers.get('X-USER-UID');
        const token = response.headers.get('X-USER-TOKEN');
        dispatch(setAuthHeaders(uid, token));

        return response.json();
      })
      .then(user => dispatch(loginPostSuccess(user.data)))
      .catch(() => dispatch(loginPostError(true)));
  };
};

export const setAuthHeaders = (uid, token) => {
  return {
    type: SET_AUTH_HEADERS,
    uid,
    token
  };
};
