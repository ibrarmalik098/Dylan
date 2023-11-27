import { createSlice } from "@reduxjs/toolkit";
import { webTheme } from "../../hooks/styles";

const constants = {
  light_theme: "light",
  dark_theme: "dark",
};

const initialState = {
  dark: {
    ...webTheme.dark,
    mode: constants.dark_theme,
  },
  light: {
    ...webTheme.light,
    mode: constants.light_theme,
  },
  theme: "light",
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeTheme: (state, action) => {
      if (state.theme === constants.light_theme) {
        state.theme = constants.dark_theme;
      } else {
        state.theme = constants.light_theme;
      }
    },
  },
});

export const { changeTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
