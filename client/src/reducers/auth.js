import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

const initialState = {
  token: localStorage.getItem('anonme'),
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('anonme', payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        ...payload,
      };
    case REGISTER_FAIL:
      localStorage.removeItem('anonme');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: true,
      };

    default:
      return state;
  }
}
