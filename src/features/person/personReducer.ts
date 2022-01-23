import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const url = "https://randomuser.me/api/";

export interface PayloadState {
  person : any;
}

export interface PersonState {
  data: any[];
  status: string;
  error: string;
}

const initialState: PersonState = {
  data: [],
  status: "idle",
  error: ""
};

 export const fetchPerson = createAsyncThunk(
  'person/fetchPerson',
  async () => {
    const response = await fetch(url);
    // The value we return becomes the `fulfilled` action payload
    const person = response.json();
    return person;
  }
);

const personSlice = createSlice({
    name : "person",
    initialState,
    reducers:{

    },
     extraReducers: (builder) => {
    builder
      .addCase(fetchPerson.pending, (state) => {
        state.status = 'loading';
      })
       .addCase(fetchPerson.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(fetchPerson.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data.push(action.payload);
      })
  },
});

export default personSlice.reducer

export const getPersons = (state: RootState) => state.person.data;
export const getStatus = (state: RootState) => state.person.status;

  