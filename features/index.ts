import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: { isLoaded: false },
  reducers: {
    load(state, action) {
      state.isLoaded = action.payload;
    },
  },
});

export const { load } = loadingSlice.actions;
export default loadingSlice.reducer;
