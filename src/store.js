import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/UserSlice'
import {classReducer } from './slices/ClassSlice'

const store = configureStore({
      reducer: {
            user: userReducer,
            boolean: classReducer,
      }
})

export default store
