import { categories, videos } from "../Data/DataBase";

export const initDataState = {
  categories: [...categories],
  videos: [...videos],
  playlists: [],
  watchlater: [],
};
export const dataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLATER":
      return {
        ...state,
        watchlater: [...state.watchlater, action.payload],
      };
    case "REMOVE_FROM_WATCHLATER":
      return {
        ...state,
        watchlater: state.watchlater.filter(
          ({ _id }) => _id !== action.payload
        ),
      };

    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlists: [...state.playlists, action.payload],
      };
    case "REMOVE_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.filter(({ _id }) => _id !== action.payload),
      };

    // case "ADD_TO_PAYLIST":
    //   const findAndAddToPlaylist = state.playlists?.map((playlist) =>
    //     playlist._id === action.payload.id
    //       ? { ...action.payload.data }
    //       : playlist
    //   );
    //   return {
    //     ...state,
    //     playlists: findAndAddToPlaylist,
    //   };
    // case "REMOVE_FROM_PAYLIST":
    //   const findAndAddRemoveFromPlaylist = state.playlists?.filter((playlist) =>
    //     playlist._id === action.payload.id
    //       ? { ...action.payload.data }
    //       : playlist
    //   );
    //   return {
    //     ...state,
    //     playlists: findAndAddRemoveFromPlaylist,
    //   };
  }
};
