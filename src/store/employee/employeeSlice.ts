/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import DATA from '../../employees.json'
export interface EmployeeState {
  data: Array<any>;
  loading: boolean;
}

export interface UpdateRequest {
  payload: {
    id: string,
    email: string,
    name: string,
    isActive: boolean
  },
  onSuccess: () => void
}

const initialState: EmployeeState = {
  data: [],
  loading: false,
};

export const fetchList = createAsyncThunk(
  'employee/fetchList', 
  async (_, {rejectWithValue}) => {
    try {
      const response = await DATA
      return response
    } catch (e) {
      return rejectWithValue('err')
    }
  });

export const update = createAsyncThunk(
  'employee/update', 
  async ({ payload, onSuccess }: UpdateRequest) => {
    onSuccess()
    return payload
  });

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchList.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(update.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.data = state.data.map((item, index) => item.id === action.payload.id ? action.payload : item)
        state.loading = false;
      })
      .addCase(update.rejected, (state, action) => {
        state.loading = false;
      })
  }
});


export default employeeSlice.reducer;
