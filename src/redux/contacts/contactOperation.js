import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get(
      'https://connections-api.herokuapp.com/contacts'
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        newContact
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${id}`
      );
      return id;
    } catch (error) {
      throw error;
    }
  }
);
