import axios from 'axios';
import { GETMSG_FAIL, GET_MSG, MSG_CLEAR, MSG_SUCCESS } from './types';
import { setAlert } from './alert';

export const msgWrite =
  ({ message, username }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const msgBody = JSON.stringify({ message });

    try {
      const res = await axios.post(
        `http://localhost:5000/api/messages/${username}`,
        msgBody,
        config
      );
      dispatch({
        type: MSG_SUCCESS,
        payload: res.data,
      });

      setTimeout(() => {
        dispatch({
          type: MSG_CLEAR,
        });
      }, 5000);
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: MSG_CLEAR,
      });
    }
  };

export const getMsg = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/messages');

    dispatch({
      type: GET_MSG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GETMSG_FAIL,
    });
  }
};