import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {ILinkForm} from '../types';

export const makeFromOriginalToShort = createAsyncThunk(
  'links/post',
  async (data: ILinkForm) => {
    const response = await axiosApi.post(`links`, data);
    return response.data ?? null;
  });