import { SW_CONTENT_CACHED, SW_NEW_CONTENT_AVAIL } from './actionTypes';

export const swContentCached = registration => ({
  type: SW_CONTENT_CACHED,
  payload: { registration }
});

export const swNewContentAvail = registration => ({
  type: SW_NEW_CONTENT_AVAIL,
  payload: { registration }
});