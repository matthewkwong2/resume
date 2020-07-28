export const isSwNewContentAvail = store =>
  store.swStatus === 'SW_NEW_CONTENT_AVAIL';

export const isSwContentCached = store =>
  store.swStatus === 'SW_CONTENT_CACHED';