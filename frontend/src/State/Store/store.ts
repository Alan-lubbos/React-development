import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/themeSlice';
import statusReducer from '../reducers/status';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    status:statusReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
