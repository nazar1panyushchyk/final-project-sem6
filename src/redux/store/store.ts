import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { financeReducer } from "../slice/financeSlice";
import { authReducer } from "../slice/authSlice";
import storage from "redux-persist/lib/storage";

const financePersistConfig = {
  key: "finance",
  storage,
  whitelist: ["balance", "transactions", "isInitialModalClosed"],
};

const rootReducer = combineReducers({
  finance: persistReducer(financePersistConfig, financeReducer),
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
