import { UPDATE_CURRENT_SECTION } from 'actions/actionTypes';
import nav from 'constants/nav';

const currentSection = (state = nav.home.id, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_SECTION: {
      return action.payload.currentSection;
    }
    default: {
      return state;
    }
  }
};

export default currentSection;