import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchName } from "../../api";

const initialState: { value: Array<string> } = {
  value: [],
};

export const fetchAddExample = createAsyncThunk("fetchAddExample", async () => {
  return await fetchName();
});

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    manualAddExample: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAddExample.fulfilled, (state, action) => {
      console.log("hello", action);
      state.value.push(action.payload[0]);
    });
  },
});

export const { manualAddExample } = exampleSlice.actions;

export default exampleSlice.reducer;
