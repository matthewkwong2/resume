import { combineReducers } from 'redux';
import swRegistration from './swRegistration';
import swStatus from './swStatus';

export default combineReducers({
  swStatus,
  swRegistration
});
