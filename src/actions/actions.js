import { SW_CONTENT_CACHED, SW_NEW_CONTENT_AVAIL } from './actionTypes';

export const swContentCached = () => ({
  type: SW_CONTENT_CACHED,
  payload: {}
});

export const swNewContentAvail = () => ({
  type: SW_NEW_CONTENT_AVAIL,
  payload: {}
});