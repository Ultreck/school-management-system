import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/UserSlice'
// import {classReducer } from './slices/ClassSlice'
import { allDataReducer } from './slices/AllDataSlice'
import { registerReducer } from './slices/RegisterSlice'

const store = configureStore({
      reducer: {
            users: userReducer,
            datas: allDataReducer,
            register: registerReducer
      }
})

export default store
