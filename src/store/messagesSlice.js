import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from './api/REST_API'

const initialState = {
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
  async (initialMessage) => {
    const response = await API.POST('messages', initialMessage)
    return response.data
  }
)

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { id, reaction } = action.payload
      const existingMessage = state.dataSet.find((recode) => recode._id === id)
      if (existingMessage) {
        existingMessage.reactions[reaction]++
      }
    },
    messageUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingMessage = state.dataSet.find((recode) => recode._id === id)
      if (existingMessage) {
        existingMessage.title = title
        existingMessage.content = content
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMessages.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.dataSet = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewMessage.fulfilled, (state, action) => {
        state.dataSet.push(action.payload)
      })
  },
})

export const { messageAdded, messageUpdated, reactionAdded } = messagesSlice.actions

export default messagesSlice.reducer

export const selectAllMessages = (state) => state.messages.dataSet;

export const selectMessageById = (state, messageId) =>
  state.messages.dataSet.find((message) => message.id === messageId)
