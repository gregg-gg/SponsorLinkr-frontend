import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken:
      JSON.parse(localStorage.getItem("token"))?.accessToken || "",
  },
  reducers: {
    setToken(state, action) {
      // console.log("setting token");
      const newState = {
        accessToken: action.payload.accessToken,
      };
      localStorage.setItem("userAccess", JSON.stringify(newState));
      // console.log(newState);
      return newState;
    },
    // logout(state, action) {
    //   const initialState = {
    //     code: "",
    //     accessToken: "",
    //     refreshToken: "",
    //     expiresIn: 3600,
    //   };
    //   return initialState;
    // },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
