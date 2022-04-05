import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { candidatesApi } from '@api/candidates'

const store = configureStore({
  reducer: {
   [candidatesApi.reducerPath]: candidatesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({}),
    candidatesApi.middleware,
    logger,
  ],
});

export type RootState = ReturnType<typeof store.getState>

export default store;