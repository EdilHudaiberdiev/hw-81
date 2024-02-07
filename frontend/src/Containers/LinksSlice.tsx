import {createSlice} from '@reduxjs/toolkit';
import {ILink} from '../types';
import {makeFromOriginalToShort} from './LinksThunk';


interface commentsState {
  link: ILink | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: commentsState = {
  link: null,
  isLoading: false,
  isError: false,
};

const LinksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(makeFromOriginalToShort.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(makeFromOriginalToShort.fulfilled, (state, action) => {
      state.isLoading = false;
      state.link = action.payload;
    });
    builder.addCase(makeFromOriginalToShort.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});


export const LinksReducer = LinksSlice.reducer;