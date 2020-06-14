import { DUMMY_ACTION } from 'actions/actionTypes';

const dummyState = (state = null, action) => {
  switch (action.type) {
    case DUMMY_ACTION: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default dummyState;