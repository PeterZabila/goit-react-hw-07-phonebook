import { createSlice } from '@reduxjs/toolkit';
// import { store } from 'redux/store';
import {
  fetchContacts,
  addContact,
  removeContact,
} from './contacts-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

/** using createSlice */

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [addContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [removeContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [removeContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [removeContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
 
});

// export const { addContact, removeContact } = contactsSlice.actions;
// console.log(contactsSlice.reducer);
export default contactsSlice.reducer;