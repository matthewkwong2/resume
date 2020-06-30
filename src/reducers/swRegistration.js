import { SW_CONTENT_CACHED, SW_NEW_CONTENT_AVAIL } from 'actions/actionTypes';

const swStatus = (state = null, action) => {
  switch (action.type) {
    case SW_CONTENT_CACHED:
    case SW_NEW_CONTENT_AVAIL: {
      return action.payload.registration;
    }
    default: {
      return state;
    }
  }
};

export default swStatus;