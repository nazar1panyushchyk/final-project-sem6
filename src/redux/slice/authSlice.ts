import { createSlice } from "@reduxjs/toolkit";
import type { AuthState, User } from "../../components/AuthState/authState";
import {
  loginUserThunk,
  registerUserThunk,
} from "../operations/authOperations";

const getUsersFromLocalStorage = (): User[] => {
  try {
    const data = localStorage.getItem("users");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const getCurrentUserFromLocalStorage = (): User | null => {
  try {
    const data = localStorage.getItem("currentUser");
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

const initialState: AuthState = {
  users: getUsersFromLocalStorage(),
  currentUser: getCurrentUserFromLocalStorage(),
  error: null,
  status: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.currentUser = null;
      state.error = null;
      state.status = "idle";
      localStorage.removeItem("currentUser");
    },
    clearAuthState: (state) => {
      state.error = null;
      state.status = "idle";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
        state.error = null;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Сталася помилка під час реєстрації!";
      })

      .addCase(loginUserThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
        state.error = null;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Сталася помилка під час входу!";
      });
  },
});

export const { logoutUser, clearAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
