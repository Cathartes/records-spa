import { callV1Api } from '../../helpers/api';
import { recordBooksGet } from '../recordBooks';

export const LOGIN_POST_ERROR = 'LOGIN_POST_ERROR';
export const LOGIN_POST_REQUESTING = 'LOGIN_POST_REQUESTING';
export const LOGIN_POST_SUCCESS = 'LOGIN_POST_SUCCESS';
export const LOGIN_VALIDATE = 'LOGIN_VALIDATE';
export const LOGOUT_DELETE_SUCCESS = 'LOGOUT_DELETE_SUCCESS';

export const loginPostError = isError => {
  return {
    type: LOGIN_POST_ERROR,
    isError
  };
};

export const loginPostRequesting = isRequesting => {
  return {
    type: LOGIN_POST_REQUESTING,
    isRequesting
  };
};

export const loginPostSuccess = user => {
  return {
    type: LOGIN_POST_SUCCESS,
    user
  };
};

export const loginPost = (email, password) => {
  return dispatch => {
    dispatch(loginPostRequesting(true));

    const body = {
      data: {
        attributes: {
          email: email,
          password: password
        }
      }
    };

    callV1Api('sessions', 'POST', body)
      .then(response => {
        dispatch(loginPostRequesting(false));

        if (!response.ok) {
          throw response;
        }

        const uid = response.headers.get('X-USER-UID');
        const token = response.headers.get('X-USER-TOKEN');
        localStorage.setItem('X-USER-UID', uid);
        localStorage.setItem('X-USER-TOKEN', token);

        return response.json();
      })
      .then(user => {
        dispatch(loginPostSuccess(user.data));
        dispatch(recordBooksGet());
      })
      .catch(() => dispatch(loginPostError(true)));
  };
};

export const loginValidate = () => {
  return dispatch => {
    callV1Api('sessions', 'GET')
      .then(response => {
        if (!response.ok) {
          throw response;
        }

        return response.json();
      })
      .then(user => dispatch(loginPostSuccess(user.data)))
      .catch(response => {
        if (response.status === 401) {
          dispatch(logoutDelete());
        }
      });
  };
};

export const logoutDelete = () => {
  localStorage.removeItem('X-USER-UID');
  localStorage.removeItem('X-USER-TOKEN');

  return dispatch => {
    dispatch(logoutDeleteSuccess());
    dispatch(recordBooksGet());
  };
};

export const logoutDeleteSuccess = () => {
  return {
    type: LOGOUT_DELETE_SUCCESS
  };
};
