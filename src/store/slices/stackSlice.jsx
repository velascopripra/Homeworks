import { createSlice } from "@reduxjs/toolkit";

const stackSlice = createSlice({
    name: "stack",
    initialState: {
        numbers: []
    },
    reducers: {
        push: (state, action) =>{
            state.numbers.push(action.payload)
        },
        pop: (state) =>{
            state.numbers.pop()
        }
    }
})

export const { push, pop } = stackSlice.actions

export default stackSlice.reducer