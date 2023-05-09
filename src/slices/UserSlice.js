import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const UserSlice = createSlice({
      initialState:{},
      name: 'users',
      reducers:{
            users: (state, {payload}) =>{
                  state = {...state, ...payload};
                  return state;
            }
      }
})
export const userReducer = UserSlice.reducer
export const {users} = UserSlice.actions