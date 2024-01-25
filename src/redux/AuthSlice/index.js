import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name: "auth",
  initialState: { userData: {} },
  reducers: {
    loginAction: (state, action) => {
      return (
        state = {
          ...state,
          userData: { ...action.payload }
        }
      )
    },
    removeDataFromRedux: (state, action) => {
      return (
        state = {
          ...state,
          userData: {}
        }
      )
    }
  }
})

export const {
  loginAction,
  removeDataFromRedux,
} = authSlice.actions;

export const login = (data) => async dispatch => {
  try {
    dispatch(loginAction(data));
  } catch (err) {
    return err;
  }
}

export const selectUser = (state) => state.auth.userData;
export default authSlice.reducer;