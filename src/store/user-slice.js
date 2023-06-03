import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    setUser(state, action) {
      // console.log("setting user data from navbar component...");
      const newState = {
        user: action.payload.user,
      };
      // console.log(newState);
      return newState;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
