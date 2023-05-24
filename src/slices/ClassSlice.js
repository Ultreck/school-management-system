import { createSlice } from "@reduxjs/toolkit";


const ClassSlice = createSlice({
      initialState:{},
      name:'boolean',
      reducers:{
            setClass: (state, {payload}) =>{
                  state = payload;
                  return state;
            }
      }
})
export const classReducer = ClassSlice.reduce;
export const {setClass} = ClassSlice.actions;
