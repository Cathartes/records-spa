export const LOGIN_POST_ERROR = 'LOGIN_POST_ERROR';
export const LOGIN_POST_SUCCESS = 'LOGIN_POST_SUCCESS';
export const LOGIN_POST_REQUESTING = 'LOGIN_POST_REQUESTING';
export const LOGOUT_DELETE = 'LOGOUT_DELETE';

export const loginPostError = isError => {
  return {
    type: LOGIN_POST_ERROR,
    isError
  };
};

export const loginPostSuccess = user => {
  return {
    type: LOGIN_POST_SUCCESS,
    user
  };
};

export const loginPostRequesting = isRequesting => {
  return {
    type: LOGIN_POST_REQUESTING,
    isRequesting
  };
};

export const loginPost = (email, password) => {
  return dispatch => {
    dispatch(loginPostRequesting(true));

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
        dispatch(loginPostRequesting(false));

        if (!response.ok) {
          throw Error(response.statusText);
        }

        const uid = response.headers.get('X-USER-UID');
        const token = response.headers.get('X-USER-TOKEN');
        localStorage.setItem('X-USER-UID', uid);
        localStorage.setItem('X-USER-TOKEN', token);

        return response.json();
      })
      .then(user => dispatch(loginPostSuccess(user.data)))
      .catch(() => dispatch(loginPostError(true)));
  };
};

export const logoutDelete = () => {
  localStorage.setItem('X-USER-UID', null);
  localStorage.setItem('X-USER-TOKEN', null);

  return {
    type: LOGOUT_DELETE
  };
};
