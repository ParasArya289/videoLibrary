import { categories, videos } from "../Data/DataBase";

export const initDataState = {
  categories: [...categories],
  videos: [...videos],
  playlists: [],
  watchlater: [],
};
export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INIT_DATA":
      return {
        ...state,
        ...action.payload,
      };
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
      const existingNames = new Set(
        state.playlists.map((playlist) => playlist.title)
      );
      let newTitle = action.payload.title;
      let counter = 1;

      while (existingNames.has(newTitle)) {
        newTitle = `${action.payload.title} (${counter})`;
        counter++;
      }

      const newPlaylist = { ...action.payload, title: newTitle };
      return {
        ...state,
        playlists: [...state.playlists, newPlaylist],
      };
    case "REMOVE_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.filter(({ _id }) => _id !== action.payload),
      };

    case "ADD_TO_PLAYLIST":
      const findAndAddToPlaylist = state.playlists?.map((playlist) =>
        playlist._id === action.payload.id
          ? {
              ...playlist,
              thumbnail: action.payload.data.thumbnail,
              content: [action.payload.data, ...playlist.content],
            }
          : playlist
      );
      return {
        ...state,
        playlists: findAndAddToPlaylist,
      };
    case "REMOVE_FROM_PAYLIST":
      const findAndAddRemoveFromPlaylist = state.playlists?.filter((playlist) =>
        playlist._id === action.payload.id
          ? { ...action.payload.data }
          : playlist
      );
      return {
        ...state,
        playlists: findAndAddRemoveFromPlaylist,
      };
  }
};
