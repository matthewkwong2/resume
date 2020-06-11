import { UPDATE_CURRENT_SECTION } from './actionTypes';

export const updateCurrentSection = sectionId => ({
  type: UPDATE_CURRENT_SECTION,
  payload: { currentSection: sectionId }
});