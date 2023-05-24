import { createSlice } from '@reduxjs/toolkit';

const RegisterSlice = createSlice({
      initialState: {
            firstname:"", 
            lastname:"", 
            email:"", 
            gender:"", 
            password:"",
            country:"", 
            region:"", 
            city:"", 
            contact:"", 
            matric:"", 
            address:"",
            program:"", 
            faculty:"", 
            level:"", 
            courses:"", 
      },
      name: 'register',
      reducers: {
            registerFunct: (state, {payload}) => {
                  state = {...state, ...payload};
                  return state;
            }
      }
})

export const registerReducer = RegisterSlice.reducer
export const {registerFunct} = RegisterSlice.actions
