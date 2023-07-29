export const addToWatchLaterHandler = (e, dispatch) => {
  e.stopPropagation();
  dispatch({
    type: "ADD_TO_WATCHLATER",
    payload: {
      _id,
      title,
      views,
      thumbnail,
      src,
      category,
      creator,
    },
  });
};
export const removeFromoWatchLaterHandler = (e, dispatch) => {
  e.stopPropagation();
  dispatch({
    type: "REMOVE_FROM_WATCHLATER",
    payload: _id,
  });
};
