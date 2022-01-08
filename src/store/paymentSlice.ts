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

export const fetchAllPayments = createAsyncThunk('payments/fetchPayments', async () => {
  const response = await API.GET('payments')
  console.log(response);
  return response.data
})

export const fetchPaymentById = createAsyncThunk('payments/fetchPaymentById', async (id: number) => {
  const response = await API.GET('payments/'+id)
  console.log(response);
  return response.data
})

export const addNewPayment = createAsyncThunk(
  'payments/addNewPayment',
  async (initialPayment) => {
    const response = await API.POST('payments', initialPayment)
    return response.data
  }
)

const PaymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllPayments.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(fetchAllPayments.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.dataSet = action.payload;
      })
      .addCase(fetchAllPayments.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(fetchPaymentById.pending, (state: stateType, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPaymentById.fulfilled, (state: stateType, action) => {
        state.status = 'succeeded'
        state.dataSet = action.payload;
      })
      .addCase(fetchPaymentById.rejected, (state: stateType, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })
      .addCase(addNewPayment.fulfilled, (state: stateType, action) => {
        state.dataSet.push(action.payload)
      })
  },
})

export default PaymentsSlice.reducer
export const selectAllPayments = (state: any) => state.payments.dataSet;
