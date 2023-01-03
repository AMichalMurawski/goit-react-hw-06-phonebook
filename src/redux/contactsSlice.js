import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(text) {
                return {
                    payload: {
                        id: nanoid(),
                        name: text.name,
                        number: text.number,
                    }
                }
            }
        }
    }
})

export const { addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;