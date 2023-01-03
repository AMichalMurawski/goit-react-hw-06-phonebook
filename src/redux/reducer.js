import { addContact, deleteContact, filterContacts } from "./actions";

const contactsInitialState = [];

export const contactsReducer = (state = contactsInitialState, action => {
    switch (action.type) {
        case addContact.type:
            return [...state, action.payload];
        
        case deleteContact.type:
            return state.filter(contact => contact.id !== action.payload);
    }
})

const filterInitialState = "";

export const filterReducer = (state = filterInitialState, action => {
    // ??????????????????????????????????????????????
})