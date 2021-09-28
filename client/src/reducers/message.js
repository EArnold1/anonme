import {
  CLEAR_MSG,
  GETMSG_FAIL,
  GET_MSG,
  MSG_CLEAR,
  MSG_SUCCESS,
} from '../actions/types';

const initialState = {
  msg: null,
  messages: [],
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_MSG:
      return {
        ...state,
        messages: payload,
      };
    case MSG_SUCCESS:
      return {
        ...state,
        msg: payload,
      };
    case MSG_CLEAR:
    case GETMSG_FAIL:
      return {
        ...state,
        msg: null,
      };
    case CLEAR_MSG:
      return {
        ...state,
        msg: null,
        messages: [],
      };
    default:
      return state;
  }
}
