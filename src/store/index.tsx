import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { candidates } from '@api/candidates'

const store = configureStore({
  reducer: {
   [candidates.reducerPath]: candidates.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({}),
    candidates.middleware,
    logger,
  ],
})

export default store;