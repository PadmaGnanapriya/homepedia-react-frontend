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

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const response = await API.GET('messages')
  console.log(response);
  return response.data
})

export const addNewMessage = createAsyncThunk(
  'messages/addNewMessage',
  async (initialMessage:any) => {
    const response = await API.POST('messages', initialMessage)
    return response.data
  }
)

export const deleteMessage = createAsyncThunk(
  'messages/deleteMessage',
  async (id: number) => {
    const response = await API.DELETE('messages/' + id)
    return response.data
  }
)

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMessages.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(fetchMessages.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.dataSet = action.payload;
      })
      .addCase(fetchMessages.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(addNewMessage.pending, (state: stateType, action) => {
        state.status = 'sending'
      })
      .addCase(addNewMessage.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(addNewMessage.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.dataSet.push(action.payload)
      })
      .addCase(deleteMessage.fulfilled, (state: stateType, action) => {
        state.dataSet = state.dataSet.filter((recode)=> recode._id !== action.payload._id)
      })
  },
})

export default messagesSlice.reducer
export const selectAllMessages = (state: any) => state.messages.dataSet;

