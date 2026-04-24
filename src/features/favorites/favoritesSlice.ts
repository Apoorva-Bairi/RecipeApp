import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: getInitialState(),
  },
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.items.find(
        (item: any) => item.idMeal === action.payload.idMeal
      );

      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },

    removeFavorite: (state, action) => {
      state.items = state.items.filter(
        (item: any) => item.idMeal !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;