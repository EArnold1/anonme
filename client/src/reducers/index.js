import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import message from './message';

export default combineReducers({
  alert,
  auth,
  message,
});
