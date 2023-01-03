import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = "";

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        filterContacts: {
            // do zrobienia
        }
    }
})

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;