import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';


const initialState = { value: 'light' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
