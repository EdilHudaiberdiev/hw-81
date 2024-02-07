import {configureStore} from '@reduxjs/toolkit';
import {LinksReducer} from '../Containers/LinksSlice';

export const store = configureStore({
  reducer: {
    links: LinksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;