import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, getAllUsers } from "../api";

const USER_SLICE_NAME = "users";
export const getUsers = createAsyncThunk(
  `${USER_SLICE_NAME}/getUsers`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await getAllUsers(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  `${USER_SLICE_NAME}/addUser`,
  async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await createUser(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState: {
    users: [],
    error: null,
    isFetching: false,
    userAuth: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
    builder.addCase(createUser.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.userAuth = action.payload;
      state.error = null;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
  },
});
export default usersSlice.reducer;
