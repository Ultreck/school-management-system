import { createSlice } from '@reduxjs/toolkit';

const AllDataSlice = createSlice({
initialState:[],
name: "datas",
reducers: {
      getDatas : (state, {payload}) => {
            state = payload;
            return state;
      }
}
})
export const allDataReducer = AllDataSlice.reducer;
export const {getDatas} = AllDataSlice.actions;
