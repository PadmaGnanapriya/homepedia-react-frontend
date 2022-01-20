import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API} from './api/REST_API'

type stateType = {
  dataSet: any[],
  status: string,
  error: string | null
}
const initialState: stateType = {
  dataSet: [],
  status: 'idle',
  error: null,
}

export const fetchFAQs = createAsyncThunk('FAQs/fetchFAQs', async () => {
  const response = await API.GET('faqs')
  console.log(response);
  return response.data
})

export const addNewFAQ = createAsyncThunk(
  'FAQs/addNewFAQ',
  async (initialFAQ:any) => {
    const response = await API.POST('faqs', initialFAQ)
    return response.data
  }
)

export const updateFAQ = createAsyncThunk(
  'FAQs/updateFAQ',
  async (initialFAQ:any) => {
    const response = await API.POST('faqs', initialFAQ)
    return response.data
  }
)

export const deleteFAQ = createAsyncThunk(
  'FAQs/deleteFAQ',
  async (id: number) => {
    const response = await API.DELETE('faqs/' + id)
    return response.data
  }
)

const FAQsSlice = createSlice({
  name: 'FAQs',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFAQs.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(fetchFAQs.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded';
        state.dataSet = action.payload;
      })
      .addCase(fetchFAQs.rejected, (state: stateType, action) => {
        state.status = 'failed';
        state.error = action.error.message || '';
      })
      .addCase(addNewFAQ.pending, (state: stateType, action) => {
        state.status = 'sending';
      })
      .addCase(addNewFAQ.rejected, (state: stateType, action) => {
        state.status = 'failed';
        state.error = action.error.message || '';
      })
      .addCase(addNewFAQ.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded';
        state.dataSet.push(action.payload);
      })
      .addCase(updateFAQ.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded';
        state.dataSet = action.payload;
      })
      .addCase(updateFAQ.rejected, (state: stateType, action) => {
        state.status = 'failed';
        state.error = action.error.message || '';
      })
      .addCase(deleteFAQ.fulfilled, (state: stateType, action) => {
        state.dataSet = state.dataSet.filter((recode)=> recode._id !== action.payload._id);
      })
  },
})

export default FAQsSlice.reducer
export const selectAllFAQs = (state: any) => state.faqs.dataSet;

