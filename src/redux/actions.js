import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact", text => {
    
})
export const deleteContact = createAction("contacts/deleteContact")
export const filterContacts = createAction("filter/filterContacts")