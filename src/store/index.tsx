import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import testReducer from './slices/test'

const store = configureStore({
  reducer: {
   test: testReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;
