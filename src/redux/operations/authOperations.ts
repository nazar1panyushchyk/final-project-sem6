import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import type { LoginPayload, User } from "../../components/AuthState/authState";

export const registerUserThunk = createAsyncThunk(
    "auth/registerUser",
    async (userData: User, thunkAPI) => {
        try {
            const state = thunkAPI.getState() as RootState;
            const users = state.auth.users;

            const normalizedEmail = userData.email.trim().toLowerCase();

            const existingUser = users.find((user) => user.email.trim().toLowerCase() === normalizedEmail);

            if (existingUser) {
                return thunkAPI.rejectWithValue("Користувач з такою поштою вже існує!");
            }

            const newUser: User = {
                name: userData.name.trim(),
                email: normalizedEmail,
                password: userData.password,
            };

            const updatedUsers = [...users, newUser];

            localStorage.setItem("users", JSON.stringify(updatedUsers));

            return updatedUsers;
            
        } catch {
            return thunkAPI.rejectWithValue(
                "Не вдалося отримати користувача!"
            );
        }
    }
); 

export const loginUserThunk = createAsyncThunk(
  "auth/loginUser",
  async (userData: LoginPayload, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const users = state.auth.users;
      const normalizedEmail = userData.email.trim().toLowerCase();
      const foundUser = users.find(
        (user) =>
          user.email.trim().toLowerCase() === normalizedEmail &&
          user.password === userData.password,
      );

      if (!foundUser) {
        return thunkAPI.rejectWithValue("Невірна пошта або пароль!");
      }

      localStorage.setItem("currentUser", JSON.stringify(foundUser));

      return foundUser;
    } catch {
      return thunkAPI.rejectWithValue("Не вдалося виконати вхід");
    }
  },
);