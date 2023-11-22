import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const USER_SLICE_NAME = "users";
export const getUsers = createAsyncThunk(
  `${USER_SLICE_NAME}/getUsers`,
  async (params = { res: 5 }, thunkAPI) => {
    try {
      const data = await fetch("https://randomuser.me/api/?results=5000").then(
        (res) => res.json()
      );
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
    isFetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
  },
});
export default usersSlice.reducer;
